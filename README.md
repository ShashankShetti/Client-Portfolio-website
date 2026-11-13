# Jagadish M. Benaka — Director Portfolio

A single-page portfolio for Kannada film director and writer **Jagadish M. Benaka**, built with
**React 18 + TypeScript + Vite + Tailwind CSS 3** and icons from `lucide-react`.

It builds to plain static files, so it can be hosted anywhere: Vercel, Docker (nginx), Netlify, S3, GitHub Pages and so on.

---

## Quick start

Requires **Node.js 20 or newer** (22 recommended, see `.nvmrc`).

```bash
npm install        # install dependencies
npm run dev        # start the dev server at http://localhost:5173 (hot reload)
```

| Command             | What it does                                                  |
| ------------------- | ------------------------------------------------------------- |
| `npm run dev`       | Dev server with hot reload on port 5173                       |
| `npm run build`     | Type-check, then build the production site into `dist/`       |
| `npm run preview`   | Serve the built `dist/` locally on port 4173 to test the build |
| `npm run typecheck` | Run the TypeScript checker only                               |

---

## Project structure

```
.
├── index.html              Page title, SEO tags, Google Fonts links
├── package.json            Scripts and dependencies
├── vite.config.ts          Vite config (dev server, Docker-friendly)
├── tailwind.config.js      Tailwind config (scans index.html and src/)
├── postcss.config.js
├── tsconfig.json
├── vercel.json             Vercel build settings and cache/security headers
├── Dockerfile              Multi-stage build: Node builds the site, nginx serves it
├── nginx.conf              nginx config used inside the container
├── docker-compose.yml      Production container + optional live-edit dev container
├── public/                 Copied as-is to the site root
│   ├── images/             All photos (film stills, behind-the-scenes, poster)
│   ├── favicon.svg
│   └── robots.txt
└── src/
    ├── main.tsx            App entry point
    ├── App.tsx             The page: layout, sections, gallery, lightbox, inquiry form
    ├── index.css           Tailwind directives + custom classes (fonts, gold text, grain)
    └── data/               All the text content, editable without touching layout code
        ├── profile.ts      Director profile, career timeline, directing philosophy
        ├── gallery.ts      Gallery frames: titles, captions, camera notes, image paths
        └── films.ts        Upcoming slate and the full Bheemanagudda credits
```

---

## Editing the site

### Change text and facts
Open the files in `src/data/` and edit the values. The page updates immediately in dev mode.

- **Bio, dates, address, education, timeline** → `src/data/profile.ts`
- **Film credits, cast, crew, release window, budget, upcoming slate** → `src/data/films.ts`
- **Gallery captions and camera notes** → `src/data/gallery.ts`

Some copy is written directly in `src/App.tsx` (for example the top banner, section headings, and the pitch summary that the
"copy" button puts on the clipboard). Search that file for the text you want to change.

### Change or add photos
- **Replace a photo:** drop a new file into `public/images/` with the **same filename**.
- **Add a gallery photo:** put the image in `public/images/`, then copy an existing entry in `src/data/gallery.ts` and update
  `id`, `title`, `src` (for example `'/images/my-photo.jpg'`), `category` and `aspect`.
- `category` controls the filter tabs. Existing values are `stills`, `onset`, `post` and `folk`.
- `aspect` is `'wide'` or `'portrait'`.
- Keep each image under about 300 KB. Resize or compress large photos before adding them, since every visitor downloads them.

Images are cached for 7 days (nginx and Vercel). If you replace a photo and still see the old one after deploying, hard-refresh
or rename the file.

### Change colours and fonts
- The palette is written inline as Tailwind classes in `App.tsx` (gold `#D4AF37`, background `#0A0908`, text `#F5F0E6`).
  Use find-and-replace on the hex values to re-theme.
- Custom font classes (`font-cinema-title`, `font-kannada`, `font-timecode`) and effects (`gold-shimmer`, `film-grain`) are in
  `src/index.css`.
- Fonts load from Google Fonts via the `<link>` tags in `index.html`.

### Page title and link previews
Edit the `<title>` and `<meta>` tags in `index.html`. For a link-preview image, add an `og:image` tag with an **absolute** URL
(for example `https://your-domain.com/images/bheemanagudda-poster.jpg`).

---

## Deploy to Vercel

**Option A: from Git (recommended)**
1. Push this folder to a GitHub, GitLab or Bitbucket repository.
2. Go to <https://vercel.com/new> and import the repository.
3. Vercel detects Vite automatically (settings come from `vercel.json`). No environment variables are needed.
4. Click **Deploy**. Every push to the main branch redeploys the site.

**Option B: from the command line**
```bash
npm install -g vercel
vercel            # first run: links the project and creates a preview deployment
vercel --prod     # deploy to production
```

To use your own domain, open the project on Vercel, then **Settings → Domains**.

---

## Deploy with Docker

The image builds the site with Node 22, then serves the static output with nginx. The final image contains only nginx and the
built files.

**Using Docker Compose**
```bash
docker compose up --build -d     # build and start in the background
# open http://localhost:8080
docker compose down              # stop
```

**Using plain Docker**
```bash
docker build -t benaka-portfolio .
docker run -d --name benaka-portfolio -p 8080:80 --restart unless-stopped benaka-portfolio
# open http://localhost:8080
```

Change the left side of `8080:80` to use another host port (use `80:80` for the standard web port).

**Edit with live reload inside Docker** (no local Node install needed)
```bash
docker compose --profile dev up dev
# open http://localhost:5173 and edit files in src/ or public/
```

**Production notes**
- The container serves plain HTTP on port 80. For HTTPS, put it behind a reverse proxy such as Caddy, Traefik or nginx, or use
  your host's load balancer.
- `nginx.conf` enables gzip, long-term caching for `/assets/`, one-week caching for `/images/`, and basic security headers.
- A health check hits `/` every 30 seconds (`docker ps` shows `healthy` when it passes).
- To push to a registry: `docker tag benaka-portfolio <registry>/<name>:<tag>` then `docker push <registry>/<name>:<tag>`.

## Other static hosts

Any static host works. Use these settings:

- **Build command:** `npm run build`
- **Output / publish directory:** `dist`
- **Node version:** 20 or newer

The site is served from the domain root. If you host it under a sub-path (for example GitHub Pages at `/repo-name/`), set `base`
in `vite.config.ts` **and** change the `/images/...` paths and the favicon link to include that prefix.

---

## The producer inquiry form

The "Connect with Jagadish" form currently runs **entirely in the browser**. When someone submits it, they see a confirmation
and can copy a pitch summary, but **nothing is sent to you**. Before sharing the site with producers, connect it to something
that delivers the message. Common options:

- A form service such as Formspree, Getform or Web3Forms. Send the form values to their endpoint with `fetch` in
  `handleInquirySubmit` (in `src/App.tsx`).
- A Vercel serverless function in `api/inquiry.ts` that emails you through Resend or SendGrid.
- A simple `mailto:` or WhatsApp link, if you only need to receive a message.

---

## Troubleshooting

| Problem | Fix |
| ------- | --- |
| `npm run build` fails with TypeScript errors after you edit | Run `npm run typecheck` to see the exact line. Check for a missing comma or quote in `src/data/*.ts`. |
| A photo shows as a broken image | The `src` path must start with `/images/` and match the filename exactly, including capitalisation (Linux is case-sensitive). |
| Kannada text or headings fall back to a plain font | Fonts come from Google Fonts. Check the network connection, or self-host them with the `@fontsource` packages. |
| Docker dev container does not reload on save | Make sure `CHOKIDAR_USEPOLLING=true` is set (it is in `docker-compose.yml`) and that the project folder is shared with Docker. |
| Port already in use | Change the host port, for example `-p 9090:80`, or `--port` for `npm run dev`. |
