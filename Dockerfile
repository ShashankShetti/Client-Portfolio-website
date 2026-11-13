# syntax=docker/dockerfile:1

# ---------- Stage 1: build the static site ----------
FROM node:22-alpine AS build
WORKDIR /app

# Install dependencies first so this layer is cached until package files change
COPY package.json package-lock.json ./
RUN npm ci

COPY . .
RUN npm run build

# ---------- Stage 2: serve with nginx ----------
FROM nginx:1.27-alpine AS runtime

# Support both standard port 80 (Docker Desktop / Compose) and dynamic $PORT
# injected by cloud container hosts (Render, Railway, Cloud Run, Fly.io, etc.)
ENV PORT=80
ENV NGINX_ENVSUBST_FILTER=^PORT$

COPY nginx.conf /etc/nginx/templates/default.conf.template
COPY --from=build /app/dist /usr/share/nginx/html

EXPOSE 80

HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
  CMD wget -qO /dev/null http://127.0.0.1:${PORT}/ || exit 1

CMD ["nginx", "-g", "daemon off;"]
