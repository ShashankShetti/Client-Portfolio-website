import React, { useState, useEffect, useMemo } from 'react';
import {
  Film,
  Clapperboard,
  Award,
  Compass,
  Sparkles,
  Camera,
  Music,
  Users,
  MapPin,
  Calendar,
  BookOpen,
  Play,
  Eye,
  X,
  ChevronLeft,
  ChevronRight,
  Check,
  Copy,
  Layers,
  Sliders,
  Feather,
  Star,
  ShieldCheck,
  Briefcase,
  Send,
  Maximize2,
  Info,
  Volume2,
  FileText,
  ArrowUpRight
} from 'lucide-react';

import {
  DIRECTOR_PROFILE,
  JOURNEY_TIMELINE,
  DIRECTION_PILLARS,
  GALLERY_ITEMS,
  UPCOMING_SLATE,
  BHEEMANAGUDDA_CREDITS
} from './data';

export default function App() {
  const [activeNav, setActiveNav] = useState('seq-bio');
  const [galleryFilter, setGalleryFilter] = useState('all');
  const [widescreenCrop, setWidescreenCrop] = useState(true);
  const [showDirectorNotes, setShowDirectorNotes] = useState(true);
  const [lightboxIndex, setLightboxIndex] = useState(null);
  const [copiedPitch, setCopiedPitch] = useState(false);
  const [pitchModalOpen, setPitchModalOpen] = useState(false);
  const [selectedSlateIndex, setSelectedSlateIndex] = useState(0);
  const [inquiryForm, setInquiryForm] = useState({
    producerName: '',
    bannerName: '',
    interestType: 'Private Preview Screening of Bheemanagudda',
    preferredLocation: 'Deepanjali Nagar / Bengaluru Office',
    notes: ''
  });
  const [inquirySubmitted, setInquirySubmitted] = useState(false);

  // Filtered gallery frames
  const filteredGallery = useMemo(() => {
    if (galleryFilter === 'all') return GALLERY_ITEMS;
    return GALLERY_ITEMS.filter((item) => item.category === galleryFilter);
  }, [galleryFilter]);

  // Smooth scroll helper
  const scrollToSection = (sectionId) => {
    setActiveNav(sectionId);
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  // Keyboard navigation for lightbox
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (lightboxIndex === null) return;
      if (e.key === 'Escape') setLightboxIndex(null);
      if (e.key === 'ArrowRight') {
        setLightboxIndex((prev) => (prev + 1) % filteredGallery.length);
      }
      if (e.key === 'ArrowLeft') {
        setLightboxIndex((prev) => (prev - 1 + filteredGallery.length) % filteredGallery.length);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxIndex, filteredGallery.length]);

  // Copy Producer Pitch Summary
  const handleCopyPitchDossier = () => {
    const summaryText = `PRODUCER PITCH DOSSIER — JAGADISH M. BENAKA
Role: Kannada Film Director | Writer | Screenplay & Dialogue Writer
DOB: 21-09-1992 | Native: Mutthige, Chamarajanagar | Base: Deepanjali Nagar, Bengaluru - 26
Education: B.A., Vijayanagara First Grade College (Bangalore University)
Theatre Lineage: Benaka Theatre (Joined 2019) | Film Industry Entry: 2022
Artistic Lineage: Inspired by Puttanna Kanagal & Dorai-Bhagavan

LATEST FEATURE FILM (READY TO RELEASE):
Title: Bheemanagudda (Ondu Swargada Kathe) — "A Haven Tale of 90's"
Banner: Kamadhenu Story Creations | Censorship: Censored U/A
Credits: Story, Screenplay, Dialogue & Direction by Jagadish M. Benaka
Producers: Madhusudhan Reddy | C. Satish Kumar Reddy
Production Budget: ₹50 Lakhs
Music Partner: Lahari Music (Processing)
Distributor: Jayanna Combines (Processing)
Target Release Window: December / January`;

    try {
      const textarea = document.createElement('textarea');
      textarea.value = summaryText;
      textarea.style.position = 'fixed';
      textarea.style.opacity = '0';
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand('copy');
      document.body.removeChild(textarea);
      setCopiedPitch(true);
      setTimeout(() => setCopiedPitch(false), 3000);
    } catch (err) {
      setCopiedPitch(true);
      setTimeout(() => setCopiedPitch(false), 3000);
    }
  };

  const handleInquirySubmit = (e) => {
    e.preventDefault();
    setInquirySubmitted(true);
  };

  return (
    <div className="min-h-screen bg-[#0A0908] text-[#F5F0E6] selection:bg-[#D4AF37] selection:text-[#0A0908] font-sans antialiased overflow-x-hidden">
      {/* =====================================================================
          TOP WIDESCREEN CINEMA LETTERBOX & NAVIGATION BAR
         ===================================================================== */}
      <header className="sticky top-0 z-40 bg-[#0A0908]/95 backdrop-blur-md border-b border-[#D4AF37]/20">
        {/* Top 35mm Film Strip Metadata Bar */}
        <div className="bg-[#12100E] border-b border-white/5 px-4 py-1.5 text-[11px] font-timecode text-[#D4AF37]/80 flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-3">
            <span className="inline-flex items-center gap-1.5 text-[#E5C158] font-medium">
              <span className="w-2 h-2 rounded-full bg-[#C84B31] animate-pulse" />
              DIRECTOR PITCH DOSSIER
            </span>
            <span className="hidden sm:inline text-white/30">|</span>
            <span className="hidden sm:inline text-[#F5F0E6]/70">
              2.39:1 ANAMORPHIC SCOPE • KANNADA FEATURE CINEMA
            </span>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-[#F5F0E6]/70 hidden md:inline">
              BASE: DEEPANJALI NAGAR, BENGALURU – 26
            </span>
            <span className="px-2 py-0.5 rounded bg-[#D4AF37]/15 text-[#E5C158] border border-[#D4AF37]/30">
              BHEEMANAGUDDA: READY TO RELEASE (U/A)
            </span>
          </div>
        </div>

        {/* Main Navigation */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-4">
          <button
            onClick={() => scrollToSection('seq-bio')}
            className="text-left group flex items-center gap-3 focus:outline-none"
          >
            <div className="w-10 h-10 rounded-full border border-[#D4AF37]/50 bg-[#171411] flex items-center justify-center text-[#D4AF37] group-hover:bg-[#D4AF37] group-hover:text-[#0A0908] transition-colors">
              <Clapperboard className="w-5 h-5" />
            </div>
            <div>
              <div className="font-cinema-title text-base sm:text-lg font-bold tracking-wider text-[#F5F0E6] group-hover:text-[#D4AF37] transition-colors">
                JAGADISH M. BENAKA
              </div>
              <div className="text-[10px] font-timecode uppercase tracking-widest text-[#D4AF37]/80">
                Director • Writer • Screenplay
              </div>
            </div>
          </button>

          {/* 3-Sequence Pacing Navigation */}
          <nav className="hidden lg:flex items-center gap-1 bg-[#141210] p-1 rounded-full border border-white/10">
            {[
              { id: 'seq-bio', num: 'I', label: 'The Auteur & Direction Method' },
              { id: 'seq-bts', num: 'II', label: 'Upcoming Slate & Shooting BTS' },
              { id: 'seq-titlecard', num: 'III', label: 'Bheemanagudda Title Card & Dossier' }
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`px-4 py-1.5 rounded-full text-xs font-medium transition-all flex items-center gap-2 ${
                  activeNav === item.id
                    ? 'bg-[#D4AF37] text-[#0A0908] font-semibold shadow-lg shadow-[#D4AF37]/20'
                    : 'text-[#F5F0E6]/75 hover:text-[#F5F0E6] hover:bg-white/5'
                }`}
              >
                <span className="font-cinema-title font-bold">{item.num}.</span>
                <span>{item.label}</span>
              </button>
            ))}
          </nav>

          {/* Action Buttons for Producer */}
          <div className="flex items-center gap-2">
            <button
              onClick={handleCopyPitchDossier}
              className="px-3 py-2 rounded-lg border border-[#D4AF37]/30 bg-[#161310] hover:bg-[#D4AF37]/10 text-xs font-medium text-[#E5C158] flex items-center gap-1.5 transition-all"
              title="Copy One-Page Executive Pitch Summary"
            >
              {copiedPitch ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-400" />
                  <span className="hidden sm:inline text-emerald-300">Dossier Copied</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5" />
                  <span className="hidden sm:inline">Copy Pitch Summary</span>
                </>
              )}
            </button>
            <button
              onClick={() => setPitchModalOpen(true)}
              className="px-3.5 py-2 rounded-lg bg-gradient-to-r from-[#D4AF37] to-[#B68D24] hover:from-[#E5C158] hover:to-[#D4AF37] text-[#0A0908] font-semibold text-xs flex items-center gap-1.5 shadow-md shadow-[#D4AF37]/20 transition-all"
            >
              <Briefcase className="w-3.5 h-3.5" />
              <span>Producer Narration</span>
            </button>
          </div>
        </div>

        {/* Mobile Sequence Bar */}
        <div className="flex lg:hidden border-t border-white/10 bg-[#12100E] px-2 py-1.5 justify-around">
          {[
            { id: 'seq-bio', label: 'I. Bio & Vision' },
            { id: 'seq-bts', label: 'II. Slate & BTS' },
            { id: 'seq-titlecard', label: 'III. Title Card' }
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`px-3 py-1 rounded text-xs font-medium ${
                activeNav === item.id
                  ? 'bg-[#D4AF37] text-[#0A0908] font-semibold'
                  : 'text-[#F5F0E6]/70'
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>
      </header>

      {/* =====================================================================
          SEQUENCE I: DIRECTOR BIO, ARTISTIC PHILOSOPHY & UNIQUE DIRECTION METHOD
         ===================================================================== */}
      <section id="seq-bio" className="relative film-grain pb-24">
        {/* Widescreen Anamorphic Hero Banner */}
        <div className="relative overflow-hidden border-b border-[#D4AF37]/25 bg-[#070605]">
          {/* Background Widescreen Still with Cinematic Vignette */}
          <div className="relative max-w-7xl mx-auto pt-8 pb-16 px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              {/* Left Column: Editorial Widescreen Typography */}
              <div className="lg:col-span-7 space-y-6 z-10">
                <div className="inline-flex flex-wrap items-center gap-2 px-3 py-1 rounded-full bg-[#D4AF37]/10 border border-[#D4AF37]/30 text-[#E5C158] text-xs font-timecode">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>SEQUENCE I • THE AUTEUR, LINEAGE & DIRECTION CRAFT</span>
                </div>

                <div className="space-y-2">
                  <p className="font-kannada text-lg sm:text-xl text-[#D4AF37]/90 tracking-wide">
                    {DIRECTOR_PROFILE.kannadaName} — ಕನ್ನಡ ಚಲನಚಿತ್ರ ನಿರ್ದೇಶಕರು ಮತ್ತು ಸಾಹಿತಿ
                  </p>
                  <h1 className="font-cinema-title text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.05] text-[#F5F0E6]">
                    JAGADISH M.{' '}
                    <span className="gold-shimmer block sm:inline">BENAKA</span>
                  </h1>
                </div>

                <div className="flex flex-wrap items-center gap-2 text-xs sm:text-sm font-timecode uppercase tracking-wider text-[#D4AF37]">
                  <span>Kannada Film Director</span>
                  <span className="text-white/30">•</span>
                  <span>Story Writer</span>
                  <span className="text-white/30">•</span>
                  <span>Screenplay & Dialogue Writer</span>
                </div>

                <blockquote className="border-l-2 border-[#D4AF37] pl-5 py-1 my-4">
                  <p className="font-cinema-serif italic text-xl sm:text-2xl text-[#F5F0E6]/95 leading-relaxed">
                    “Cinema is far more than fleeting entertainment—it is a living vessel of human emotion, a mirror held up to society, and a craft meant to leave an indelible memory in the heart of every viewer.”
                  </p>
                </blockquote>

                <p className="text-sm sm:text-base text-[#F5F0E6]/80 leading-relaxed max-w-2xl">
                  Hailing from <strong className="text-[#F5F0E6]">Mutthige, Chamarajanagar district</strong> and forged in the crucible of <strong className="text-[#F5F0E6]">Benaka Theatre</strong>, Jagadish M. Benaka brings stage-disciplined rehearsal craft and the timeless emotional grammar of <strong className="text-[#E5C158]">Puttanna Kanagal</strong> and <strong className="text-[#E5C158]">Dorai–Bhagavan</strong> to modern Kannada feature filmmaking.
                </p>

                {/* Quick Metric Strip for Producers */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
                  <div className="bg-[#141210]/90 border border-[#D4AF37]/25 rounded-xl p-3.5">
                    <div className="text-[11px] font-timecode text-[#D4AF37] uppercase">Stage Roots</div>
                    <div className="font-cinema-title text-lg font-bold text-[#F5F0E6] mt-0.5">Age 11</div>
                    <div className="text-xs text-[#F5F0E6]/60">Benaka Theatre (2019)</div>
                  </div>
                  <div className="bg-[#141210]/90 border border-[#D4AF37]/25 rounded-xl p-3.5">
                    <div className="text-[11px] font-timecode text-[#D4AF37] uppercase">Debut Feature</div>
                    <div className="font-cinema-title text-lg font-bold text-[#F5F0E6] mt-0.5">Bheemanagudda</div>
                    <div className="text-xs text-[#F5F0E6]/60">Story • Screenplay • Dir</div>
                  </div>
                  <div className="bg-[#141210]/90 border border-[#D4AF37]/25 rounded-xl p-3.5">
                    <div className="text-[11px] font-timecode text-[#D4AF37] uppercase">Budget Scale</div>
                    <div className="font-cinema-title text-lg font-bold text-emerald-400 mt-0.5">₹50 Lakhs</div>
                    <div className="text-xs text-[#F5F0E6]/60">High-Value Execution</div>
                  </div>
                  <div className="bg-[#141210]/90 border border-[#D4AF37]/25 rounded-xl p-3.5">
                    <div className="text-[11px] font-timecode text-[#D4AF37] uppercase">Release Status</div>
                    <div className="font-cinema-title text-lg font-bold text-[#E5C158] mt-0.5">Censored U/A</div>
                    <div className="text-xs text-[#F5F0E6]/60">Dec / Jan Window</div>
                  </div>
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-wrap items-center gap-3 pt-2">
                  <button
                    onClick={() => scrollToSection('seq-titlecard')}
                    className="px-6 py-3 rounded-xl bg-[#D4AF37] hover:bg-[#E5C158] text-[#0A0908] font-semibold text-sm flex items-center gap-2 shadow-lg shadow-[#D4AF37]/20 transition-all"
                  >
                    <Film className="w-4 h-4" />
                    <span>Explore Bheemanagudda Title Card</span>
                  </button>
                  <button
                    onClick={() => scrollToSection('seq-bts')}
                    className="px-5 py-3 rounded-xl bg-[#171411] hover:bg-[#221E1A] text-[#F5F0E6] border border-[#D4AF37]/30 text-sm font-medium flex items-center gap-2 transition-all"
                  >
                    <Camera className="w-4 h-4 text-[#D4AF37]" />
                    <span>View On-Set BTS & Widescreen Stills</span>
                  </button>
                </div>
              </div>

              {/* Right Column: Dual Portrait Composition (Waterfall Script & RED Camera) */}
              <div className="lg:col-span-5 relative">
                <div className="relative mx-auto max-w-md lg:max-w-none">
                  {/* Decorative Gold Frame Border */}
                  <div className="absolute -inset-3 border border-[#D4AF37]/30 rounded-2xl pointer-events-none hidden sm:block" />

                  <div className="grid grid-cols-12 gap-3 items-stretch">
                    {/* Primary Portrait: Director with Script at Waterfall */}
                    <div className="col-span-7 relative group overflow-hidden rounded-xl border border-[#D4AF37]/40 bg-[#141210] shadow-2xl">
                      <img
                        src="/images/bts-waterfall-script.jpg"
                        alt="Jagadish M. Benaka holding the handwritten script of Bheemanagudda by the waterfall"
                        className="w-full h-full object-cover object-top max-h-[460px] group-hover:scale-105 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0A0908] via-transparent to-transparent opacity-90" />
                      <div className="absolute bottom-3 left-3 right-3">
                        <span className="px-2 py-0.5 rounded bg-[#0A0908]/80 border border-[#D4AF37]/40 text-[10px] font-timecode text-[#E5C158]">
                          ON LOCATION • SCRIPT IN HAND
                        </span>
                        <p className="font-cinema-serif text-sm text-[#F5F0E6] mt-1 font-medium">
                          With the handwritten Kannada screenplay at the waterfall location
                        </p>
                      </div>
                    </div>

                    {/* Stacked Secondary Frames: Portrait + RED Camera */}
                    <div className="col-span-5 flex flex-col gap-3 justify-between">
                      <div className="relative group overflow-hidden rounded-xl border border-white/15 bg-[#141210] flex-1">
                        <img
                          src="/images/bts-location-recce.jpg"
                          alt="Director Jagadish M. Benaka during outdoor location recce"
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#0A0908]/90 via-transparent to-transparent" />
                        <div className="absolute bottom-2 left-2 right-2">
                          <p className="text-[10px] font-timecode text-[#D4AF37]">DIRECTOR PORTRAIT</p>
                          <p className="text-xs text-[#F5F0E6]/90 font-medium">Western Ghats Recce</p>
                        </div>
                      </div>

                      <div className="relative group overflow-hidden rounded-xl border border-white/15 bg-[#141210] flex-1">
                        <img
                          src="/images/bts-red-camera-1.jpg"
                          alt="Jagadish M. Benaka directing by the RED Pro 5.0 cinema camera"
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#0A0908]/90 via-transparent to-transparent" />
                        <div className="absolute bottom-2 left-2 right-2">
                          <p className="text-[10px] font-timecode text-[#C84B31]">RED PRO 5.0 UNIT</p>
                          <p className="text-xs text-[#F5F0E6]/90 font-medium">Principal Photography</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Biographical Narrative & Artistic Lineage */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Left 7 Cols: Elevated Biography & Journey */}
            <div className="lg:col-span-7 space-y-8">
              <div className="space-y-3">
                <div className="text-xs font-timecode uppercase tracking-widest text-[#D4AF37]">
                  01 / BIOGRAPHY & ARTISTIC EVOLUTION
                </div>
                <h2 className="font-cinema-title text-3xl sm:text-4xl font-bold text-[#F5F0E6] leading-tight">
                  From an 11-Year-Old Village Stage Performer to a Visionary Kannada Auteur
                </h2>
              </div>

              <div className="space-y-5 text-[#F5F0E6]/85 text-base leading-relaxed font-normal">
                <p>
                  <strong className="text-[#F5F0E6] font-semibold">Jagadish M. Benaka</strong> is an emerging Kannada filmmaker from <strong className="text-[#E5C158]">Mutthige, Chamarajanagar district, Karnataka</strong>, driven by a lifelong devotion to meaningful cinema and emotionally honest storytelling. His relationship with the performing arts began at the age of <strong className="text-[#F5F0E6]">11</strong>, when he first stepped onto school stages for solo performances and village dramas. What began as a boy’s instinct to move an audience in a rural courtyard steadily matured into an unwavering ambition to craft enduring stories for the silver screen.
                </p>
                <p>
                  After completing his <strong className="text-[#F5F0E6]">Bachelor of Arts (B.A.)</strong> from <strong className="text-[#F5F0E6]">Vijayanagara First Grade College, Bangalore University</strong>, Jagadish dedicated himself to mastering the architecture of dramatic narrative. In <strong className="text-[#E5C158]">2019</strong>, he joined the renowned <strong className="text-[#E5C158]">Benaka Theatre</strong> ensemble, where rigorous stage discipline sharpened his command over actor blocking, dialogue cadence, and subtext. During these formative years, he began writing original stories for short films and feature screenplays, drawing deep creative inspiration from Kannada cinema’s legendary auteurs <strong className="text-[#D4AF37]">Director Puttanna Kanagal</strong> and the iconic duo <strong className="text-[#D4AF37]">Dorai–Bhagavan</strong>.
                </p>
                <p>
                  In <strong className="text-[#E5C158]">2022</strong>, his perseverance carried him into the Kannada feature film industry. Taking full creative ownership of <strong className="text-[#F5F0E6]">Story, Screenplay, Dialogue, and Direction</strong>, he helmed the period drama <em className="font-cinema-serif text-lg text-[#E5C158]">Bheemanagudda (Ondu Swargada Kathe)</em>—proving his ability to translate a deeply rooted 1990s vision onto the widescreen canvas with both artistic integrity and producer-minded fiscal discipline.
                </p>
              </div>

              {/* Chronological Milestones */}
              <div className="pt-4">
                <h3 className="font-cinema-title text-lg font-bold text-[#D4AF37] uppercase tracking-wider mb-6 flex items-center gap-2">
                  <Compass className="w-5 h-5" />
                  <span>Directorial Lineage & Career Trajectory</span>
                </h3>
                <div className="space-y-4 border-l-2 border-[#D4AF37]/30 ml-2 pl-6">
                  {JOURNEY_TIMELINE.map((step, idx) => (
                    <div
                      key={idx}
                      className="relative bg-[#141210] border border-white/10 hover:border-[#D4AF37]/40 rounded-xl p-5 transition-all"
                    >
                      <span className="absolute -left-[33px] top-6 w-4 h-4 rounded-full bg-[#0A0908] border-2 border-[#D4AF37]" />
                      <div className="flex flex-wrap items-center justify-between gap-2 text-xs font-timecode text-[#D4AF37]">
                        <span>{step.year}</span>
                        <span className="px-2 py-0.5 rounded bg-white/5 text-[#F5F0E6]/70">
                          {step.location}
                        </span>
                      </div>
                      <h4 className="font-cinema-title text-lg font-bold text-[#F5F0E6] mt-1">
                        {step.title}
                      </h4>
                      <p className="text-sm text-[#F5F0E6]/75 mt-1.5 leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right 5 Cols: Official Personal Profile Dossier Card */}
            <div className="lg:col-span-5 space-y-6">
              <div className="bg-gradient-to-b from-[#171411] to-[#110F0D] border border-[#D4AF37]/35 rounded-2xl p-6 sm:p-8 shadow-2xl">
                <div className="flex items-center justify-between border-b border-[#D4AF37]/20 pb-4 mb-6">
                  <div>
                    <span className="text-[11px] font-timecode uppercase tracking-widest text-[#D4AF37]">
                      OFFICIAL DIRECTOR DOSSIER
                    </span>
                    <h3 className="font-cinema-title text-2xl font-bold text-[#F5F0E6] mt-0.5">
                      Personal Profile
                    </h3>
                  </div>
                  <div className="w-11 h-11 rounded-xl bg-[#D4AF37]/15 border border-[#D4AF37]/40 flex items-center justify-center text-[#E5C158]">
                    <Feather className="w-5 h-5" />
                  </div>
                </div>

                <dl className="space-y-3.5 text-sm">
                  {[
                    { label: 'Full Name', value: DIRECTOR_PROFILE.name },
                    { label: 'Date of Birth', value: '21 September 1992 (21-09-1992)' },
                    { label: 'Birthplace', value: DIRECTOR_PROFILE.birthplace },
                    { label: 'Present Address', value: DIRECTOR_PROFILE.presentAddress },
                    { label: 'Education', value: DIRECTOR_PROFILE.education },
                    { label: 'College / University', value: DIRECTOR_PROFILE.college },
                    { label: 'Theatre Lineage', value: DIRECTOR_PROFILE.theatreJoined },
                    { label: 'Film Industry Entry', value: DIRECTOR_PROFILE.industryEntry },
                    { label: 'Feature Film', value: 'Bheemanagudda (Ondu Swargada Kathe)' },
                    { label: 'Key Contributions', value: DIRECTOR_PROFILE.keyContributions }
                  ].map((row, i) => (
                    <div
                      key={i}
                      className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 py-2 border-b border-white/5 last:border-0"
                    >
                      <dt className="text-xs font-timecode uppercase text-[#F5F0E6]/55 shrink-0">
                        {row.label}
                      </dt>
                      <dd className="text-sm font-medium text-[#F5F0E6] sm:text-right">
                        {row.value}
                      </dd>
                    </div>
                  ))}
                </dl>

                {/* Artistic Influences */}
                <div className="mt-6 pt-5 border-t border-[#D4AF37]/20">
                  <div className="text-xs font-timecode uppercase text-[#D4AF37] mb-2.5">
                    Cinematic Inspirations & Mentors in Spirit
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {DIRECTOR_PROFILE.influences.map((inf, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 rounded-full bg-[#D4AF37]/15 border border-[#D4AF37]/35 text-xs font-medium text-[#E5C158]"
                      >
                        ★ {inf}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Fields of Interest */}
                <div className="mt-5 pt-4 border-t border-white/10">
                  <div className="text-xs font-timecode uppercase text-[#F5F0E6]/60 mb-2.5">
                    Core Fields of Interest
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {DIRECTOR_PROFILE.fieldsOfInterest.map((field, idx) => (
                      <span
                        key={idx}
                        className="px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-xs text-[#F5F0E6]/85"
                      >
                        {field}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Highlight Frame: Teacher & Child Still showing Kanagal-style Emotional Framing */}
              <div className="rounded-2xl overflow-hidden border border-[#D4AF37]/30 bg-[#141210]">
                <img
                  src="/images/still-pillar-conversation.jpg"
                  alt="Emotional framing from Bheemanagudda"
                  className="w-full h-56 object-cover"
                />
                <div className="p-4">
                  <div className="text-[11px] font-timecode text-[#D4AF37] uppercase">
                    SIGNATURE VISUAL GRAMMAR • BHEEMANAGUDDA
                  </div>
                  <p className="font-cinema-serif italic text-base text-[#F5F0E6]/90 mt-1">
                    “Every frame is composed to honour human warmth, dignity, and the unspoken poetry of everyday Karnataka life.”
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Unique Direction Methods ("The Benaka Directorial Method") */}
          <div className="mt-20 pt-14 border-t border-[#D4AF37]/20">
            <div className="max-w-3xl mb-10">
              <div className="text-xs font-timecode uppercase tracking-widest text-[#D4AF37]">
                UNIQUE DIRECTION METHODOLOGY • WHY PRODUCERS TRUST JAGADISH M. BENAKA
              </div>
              <h3 className="font-cinema-title text-2xl sm:text-4xl font-bold text-[#F5F0E6] mt-2">
                The Benaka Method: Making Every Film Unforgettable for the Audience
              </h3>
              <p className="text-sm sm:text-base text-[#F5F0E6]/75 mt-2">
                Combining theatre-honed rehearsal precision with classic widescreen emotional storytelling so every rupee of production budget translates directly onto the screen.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {DIRECTION_PILLARS.map((pillar) => (
                <div
                  key={pillar.id}
                  className="group relative bg-[#141210] hover:bg-[#191613] border border-white/10 hover:border-[#D4AF37]/50 rounded-2xl p-6 sm:p-7 transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between gap-4 mb-4">
                      <span className="font-cinema-title text-3xl font-bold text-[#D4AF37]/40 group-hover:text-[#D4AF37] transition-colors">
                        {pillar.number}
                      </span>
                      <span className="px-3 py-1 rounded-full bg-[#D4AF37]/10 border border-[#D4AF37]/25 text-[11px] font-timecode text-[#E5C158]">
                        {pillar.subtitle}
                      </span>
                    </div>
                    <h4 className="font-cinema-title text-xl font-bold text-[#F5F0E6] mb-2.5">
                      {pillar.title}
                    </h4>
                    <p className="text-sm text-[#F5F0E6]/80 leading-relaxed">
                      {pillar.description}
                    </p>
                  </div>
                  <div className="mt-5 pt-4 border-t border-white/10 flex items-center justify-between text-xs font-timecode text-[#D4AF37]">
                    <span>PRODUCER ADVANTAGE</span>
                    <span className="text-[#F5F0E6]/90">{pillar.metrics}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================================
          SEQUENCE II: UPCOMING MOVIES SLATE, WIDESCREEN STILLS & SHOOTING BTS
         ===================================================================== */}
      <section
        id="seq-bts"
        className="py-24 bg-[#0E0C0A] border-t border-b border-[#D4AF37]/25 relative"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Sequence Header */}
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#C84B31]/15 border border-[#C84B31]/40 text-[#F2846B] text-xs font-timecode mb-3">
                <Camera className="w-3.5 h-3.5" />
                <span>SEQUENCE II • UPCOMING SLATE, WIDESCREEN FRAMES & SHOOTING BTS</span>
              </div>
              <h2 className="font-cinema-title text-3xl sm:text-5xl font-bold text-[#F5F0E6]">
                Director’s Slate & Behind-The-Scenes Archive
              </h2>
              <p className="text-sm sm:text-base text-[#F5F0E6]/75 mt-2 max-w-2xl">
                Explore Jagadish M. Benaka’s current release and upcoming story pipeline for producers, followed by 20 high-resolution widescreen stills, on-set RED camera blocking, folk akhada shoots, and post-production sessions from <em className="text-[#E5C158]">Bheemanagudda</em>.
              </p>
            </div>

            {/* Interactive View Controls */}
            <div className="flex flex-wrap items-center gap-2.5">
              <button
                onClick={() => setWidescreenCrop(!widescreenCrop)}
                className={`px-3.5 py-2 rounded-xl text-xs font-timecode border transition-all flex items-center gap-2 ${
                  widescreenCrop
                    ? 'bg-[#D4AF37]/15 border-[#D4AF37] text-[#E5C158]'
                    : 'bg-[#161310] border-white/15 text-[#F5F0E6]/70'
                }`}
              >
                <Sliders className="w-3.5 h-3.5" />
                <span>2.39:1 Letterbox Bars: {widescreenCrop ? 'ON' : 'OFF'}</span>
              </button>
              <button
                onClick={() => setShowDirectorNotes(!showDirectorNotes)}
                className={`px-3.5 py-2 rounded-xl text-xs font-timecode border transition-all flex items-center gap-2 ${
                  showDirectorNotes
                    ? 'bg-[#D4AF37]/15 border-[#D4AF37] text-[#E5C158]'
                    : 'bg-[#161310] border-white/15 text-[#F5F0E6]/70'
                }`}
              >
                <Info className="w-3.5 h-3.5" />
                <span>Director’s Shot Notes: {showDirectorNotes ? 'VISIBLE' : 'HIDDEN'}</span>
              </button>
            </div>
          </div>

          {/* Part A: Upcoming Movies & Feature Slate for Producers */}
          <div className="mb-16">
            <div className="flex items-center justify-between mb-6">
              <h3 className="font-cinema-title text-xl sm:text-2xl font-bold text-[#E5C158] flex items-center gap-2.5">
                <Layers className="w-5 h-5" />
                <span>Current Release & Upcoming Feature Script Slate</span>
              </h3>
              <span className="text-xs font-timecode text-[#F5F0E6]/60 hidden sm:inline">
                CLICK ANY SLATE CARD TO INSPECT PITCH DETAILS
              </span>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {UPCOMING_SLATE.map((project, idx) => {
                const isSelected = selectedSlateIndex === idx;
                return (
                  <div
                    key={idx}
                    onClick={() => setSelectedSlateIndex(idx)}
                    className={`cursor-pointer rounded-2xl p-6 transition-all border flex flex-col justify-between ${
                      isSelected
                        ? 'bg-gradient-to-b from-[#1C1814] to-[#12100D] border-[#D4AF37] shadow-xl shadow-[#D4AF37]/10'
                        : 'bg-[#141210] border-white/10 hover:border-[#D4AF37]/40'
                    }`}
                  >
                    <div>
                      <div className="flex items-center justify-between gap-2 mb-3">
                        <span className="px-2.5 py-0.5 rounded bg-[#D4AF37]/15 text-[#E5C158] font-timecode text-[10px]">
                          {project.code}
                        </span>
                        {idx === 0 && (
                          <span className="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 font-timecode text-[10px]">
                            U/A CERTIFIED
                          </span>
                        )}
                      </div>

                      <p className="font-kannada text-sm text-[#D4AF37]/90">{project.kannadaTitle}</p>
                      <h4 className="font-cinema-title text-xl font-bold text-[#F5F0E6] mt-0.5">
                        {project.title}
                      </h4>
                      <p className="text-xs font-cinema-serif italic text-[#E5C158] mt-0.5">
                        “{project.tagline}”
                      </p>

                      <p className="text-sm text-[#F5F0E6]/80 mt-3 leading-relaxed">
                        {project.logline}
                      </p>

                      <ul className="mt-4 space-y-1.5 border-t border-white/10 pt-3">
                        {project.highlights.map((h, i) => (
                          <li key={i} className="text-xs text-[#F5F0E6]/75 flex items-start gap-2">
                            <span className="text-[#D4AF37] mt-0.5">•</span>
                            <span>{h}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="mt-5 pt-3 border-t border-white/10 flex items-center justify-between text-xs">
                      <span className="font-timecode text-[#D4AF37]">{project.budget}</span>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          setInquiryForm((prev) => ({
                            ...prev,
                            interestType: `Script Narration / Screening: ${project.title}`
                          }));
                          setPitchModalOpen(true);
                        }}
                        className="text-[#E5C158] hover:underline font-medium flex items-center gap-1"
                      >
                        <span>Request Narration</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Part B: Filterable Widescreen Stills & Shooting BTS Gallery */}
          <div className="space-y-8">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/10 pb-4">
              <div className="flex flex-wrap items-center gap-2">
                {[
                  { id: 'all', label: 'All Production Frames', count: GALLERY_ITEMS.length },
                  {
                    id: 'stills',
                    label: 'Widescreen Film Stills (90s Look)',
                    count: GALLERY_ITEMS.filter((i) => i.category === 'stills').length
                  },
                  {
                    id: 'onset',
                    label: 'On-Set Direction & RED Camera',
                    count: GALLERY_ITEMS.filter((i) => i.category === 'onset').length
                  },
                  {
                    id: 'folk',
                    label: 'Folk Akhada & Temple Shoot',
                    count: GALLERY_ITEMS.filter((i) => i.category === 'folk').length
                  },
                  {
                    id: 'post',
                    label: 'Dubbing, Music & Studio BTS',
                    count: GALLERY_ITEMS.filter((i) => i.category === 'post').length
                  }
                ].map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => {
                      setGalleryFilter(tab.id);
                      setLightboxIndex(null);
                    }}
                    className={`px-3.5 py-2 rounded-xl text-xs font-medium transition-all flex items-center gap-2 ${
                      galleryFilter === tab.id
                        ? 'bg-[#D4AF37] text-[#0A0908] font-semibold shadow-md'
                        : 'bg-[#161310] text-[#F5F0E6]/75 hover:bg-white/10 border border-white/10'
                    }`}
                  >
                    <span>{tab.label}</span>
                    <span
                      className={`px-1.5 py-0.2 rounded text-[10px] font-timecode ${
                        galleryFilter === tab.id
                          ? 'bg-[#0A0908]/20 text-[#0A0908]'
                          : 'bg-white/10 text-[#D4AF37]'
                      }`}
                    >
                      {tab.count}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* Gallery Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredGallery.map((item, idx) => (
                <div
                  key={item.id}
                  onClick={() => setLightboxIndex(idx)}
                  className={`group cursor-pointer rounded-2xl overflow-hidden bg-[#141210] border border-white/10 hover:border-[#D4AF37]/60 transition-all flex flex-col justify-between shadow-lg ${
                    item.aspect === 'wide' && galleryFilter === 'stills' ? 'md:col-span-2 lg:col-span-1' : ''
                  }`}
                >
                  <div>
                    {/* Image Frame with Optional Letterbox Bars */}
                    <div className="relative overflow-hidden bg-[#070605]">
                      {widescreenCrop && item.category === 'stills' && (
                        <div className="h-2.5 bg-[#050404] w-full border-b border-white/5" />
                      )}
                      <div className="relative h-60 sm:h-64 overflow-hidden">
                        <img
                          src={item.src}
                          alt={item.title}
                          className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#0A0908] via-transparent to-black/30 opacity-80 group-hover:opacity-60 transition-opacity" />

                        {/* Top Timecode Badge */}
                        <div className="absolute top-3 left-3 right-3 flex items-center justify-between gap-2">
                          <span className="px-2.5 py-1 rounded bg-[#0A0908]/85 border border-[#D4AF37]/35 text-[10px] font-timecode text-[#E5C158]">
                            {item.categoryLabel}
                          </span>
                          <span className="p-1.5 rounded-full bg-[#0A0908]/80 text-[#F5F0E6]/80 group-hover:bg-[#D4AF37] group-hover:text-[#0A0908] transition-colors">
                            <Maximize2 className="w-3.5 h-3.5" />
                          </span>
                        </div>

                        {/* Bottom Camera Metadata */}
                        <div className="absolute bottom-2.5 left-3 right-3">
                          <div className="text-[10px] font-timecode text-[#D4AF37]/90 truncate">
                            {item.cameraMeta}
                          </div>
                        </div>
                      </div>
                      {widescreenCrop && item.category === 'stills' && (
                        <div className="h-2.5 bg-[#050404] w-full border-t border-white/5" />
                      )}
                    </div>

                    {/* Card Caption & Director's Note */}
                    <div className="p-5">
                      <div className="text-xs font-cinema-serif italic text-[#D4AF37]">
                        {item.subtitle}
                      </div>
                      <h4 className="font-cinema-title text-lg font-bold text-[#F5F0E6] mt-0.5 group-hover:text-[#E5C158] transition-colors">
                        {item.title}
                      </h4>
                      {showDirectorNotes && (
                        <p className="text-xs text-[#F5F0E6]/75 mt-2.5 leading-relaxed border-l-2 border-[#D4AF37]/40 pl-3">
                          {item.directorNote}
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="px-5 py-3 bg-[#100E0C] border-t border-white/5 flex items-center justify-between text-[11px] font-timecode text-[#F5F0E6]/60">
                    <span>FRAME #{String(idx + 1).padStart(2, '0')} • BHEEMANAGUDDA</span>
                    <span className="text-[#D4AF37] group-hover:translate-x-0.5 transition-transform">
                      INSPECT 2K STILL →
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================================
          SEQUENCE III: OFFICIAL TITLE CARD & PRODUCER DOSSIER — BHEEMANAGUDDA
         ===================================================================== */}
      <section id="seq-titlecard" className="py-24 film-grain relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Sequence Header */}
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#D4AF37]/15 border border-[#D4AF37]/40 text-[#E5C158] text-xs font-timecode">
              <Award className="w-3.5 h-3.5" />
              <span>SEQUENCE III • LATEST FEATURE FILM TITLE CARD & RELEASE DOSSIER</span>
            </div>
            <p className="font-kannada text-2xl sm:text-3xl text-[#D4AF37] font-bold">
              {BHEEMANAGUDDA_CREDITS.kannadaTitle} — ಒಂದು ಸ್ವರ್ಗದ ಕಥೆ
            </p>
            <h2 className="font-cinema-title text-4xl sm:text-6xl font-bold text-[#F5F0E6] tracking-wide">
              BHEEMANAGUDDA
            </h2>
            <p className="font-cinema-serif italic text-xl sm:text-2xl text-[#E5C158]">
              “Ondu Swargada Kathe — A Haven Tale of 90’s”
            </p>
            <p className="text-sm text-[#F5F0E6]/75 pt-1">
              Presented by <strong className="text-[#F5F0E6]">Kamadhenu Story Creations</strong> • Story, Screenplay, Dialogue & Direction by <strong className="text-[#E5C158]">Jagadish M. Benaka</strong>
            </p>
          </div>

          {/* Main Title Card Showcase Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            {/* Left 5 Cols: Official Theatrical Poster Title Card */}
            <div className="lg:col-span-5">
              <div className="relative rounded-2xl p-3 bg-gradient-to-b from-[#D4AF37]/40 via-[#D4AF37]/15 to-[#D4AF37]/40 shadow-2xl">
                <div className="rounded-xl overflow-hidden bg-[#0A0908] relative group">
                  <img
                    src="/images/bheemanagudda-poster.jpg"
                    alt="Bheemanagudda Official Theatrical Title Card Poster — Censored U/A"
                    className="w-full h-auto object-contain"
                  />
                  <div className="p-4 bg-[#12100E] border-t border-[#D4AF37]/30 flex items-center justify-between">
                    <div>
                      <div className="text-[10px] font-timecode text-[#D4AF37] uppercase">
                        OFFICIAL THEATRICAL TITLE CARD
                      </div>
                      <div className="text-sm font-cinema-title font-bold text-[#F5F0E6]">
                        Censored U/A • Ready for Theatrical Release
                      </div>
                    </div>
                    <span className="px-3 py-1 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-300 font-timecode text-xs font-bold">
                      U/A
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right 7 Cols: Trade & Distribution Status + Full Credits Roll-Call */}
            <div className="lg:col-span-7 space-y-8">
              {/* Executive Release & Trade Status Matrix */}
              <div className="bg-[#141210] border border-[#D4AF37]/40 rounded-2xl p-6 sm:p-8 shadow-xl">
                <div className="flex flex-wrap items-center justify-between gap-2 border-b border-white/10 pb-4 mb-6">
                  <div>
                    <span className="text-xs font-timecode uppercase text-[#D4AF37]">
                      PRODUCER & TRADE MEMORANDUM
                    </span>
                    <h3 className="font-cinema-title text-2xl font-bold text-[#F5F0E6]">
                      Production, Audio & Distribution Status
                    </h3>
                  </div>
                  <span className="px-3 py-1 rounded-full bg-[#D4AF37]/20 border border-[#D4AF37]/50 text-[#E5C158] text-xs font-timecode font-semibold">
                    READY TO RELEASE
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="bg-[#0E0C0A] border border-white/10 rounded-xl p-4">
                    <div className="text-xs font-timecode text-[#F5F0E6]/60 uppercase">
                      Production Budget
                    </div>
                    <div className="font-cinema-title text-2xl font-bold text-emerald-400 mt-1">
                      ₹50 Lakhs (50 Lack)
                    </div>
                    <div className="text-xs text-[#F5F0E6]/70 mt-1">
                      Complete production through DI, Dubbing & U/A Censor certification
                    </div>
                  </div>

                  <div className="bg-[#0E0C0A] border border-white/10 rounded-xl p-4">
                    <div className="text-xs font-timecode text-[#F5F0E6]/60 uppercase">
                      Target Release Window
                    </div>
                    <div className="font-cinema-title text-2xl font-bold text-[#E5C158] mt-1">
                      December / January
                    </div>
                    <div className="text-xs text-[#F5F0E6]/70 mt-1">
                      Censored U/A • Family & Youth Theatrical Window
                    </div>
                  </div>

                  <div className="bg-[#0E0C0A] border border-[#D4AF37]/30 rounded-xl p-4">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-timecode text-[#D4AF37] uppercase">
                        Music Partner
                      </span>
                      <Volume2 className="w-4 h-4 text-[#D4AF37]" />
                    </div>
                    <div className="font-cinema-title text-xl font-bold text-[#F5F0E6] mt-1">
                      Lahari Music
                    </div>
                    <div className="inline-flex items-center gap-1.5 mt-1.5 px-2 py-0.5 rounded bg-amber-500/15 text-amber-300 text-[11px] font-timecode">
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-ping" />
                      Status: Processing
                    </div>
                  </div>

                  <div className="bg-[#0E0C0A] border border-[#D4AF37]/30 rounded-xl p-4">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-timecode text-[#D4AF37] uppercase">
                        Theatrical Distributor
                      </span>
                      <Film className="w-4 h-4 text-[#D4AF37]" />
                    </div>
                    <div className="font-cinema-title text-xl font-bold text-[#F5F0E6] mt-1">
                      Jayanna Combines
                    </div>
                    <div className="inline-flex items-center gap-1.5 mt-1.5 px-2 py-0.5 rounded bg-amber-500/15 text-amber-300 text-[11px] font-timecode">
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-ping" />
                      Status: Processing
                    </div>
                  </div>
                </div>
              </div>

              {/* Official Title Card Billing Block (Key Crew) */}
              <div className="bg-[#141210] border border-white/10 rounded-2xl p-6 sm:p-8">
                <h3 className="font-cinema-title text-xl font-bold text-[#E5C158] uppercase tracking-wider mb-5 flex items-center gap-2">
                  <Clapperboard className="w-5 h-5" />
                  <span>Official Title Card — Command & Technical Credits</span>
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  {BHEEMANAGUDDA_CREDITS.departmentHeads.map((item, idx) => (
                    <div
                      key={idx}
                      className={`p-3.5 rounded-xl border ${
                        item.highlight
                          ? 'sm:col-span-2 bg-[#1C1712] border-[#D4AF37]/50'
                          : 'bg-[#0E0C0A] border-white/10'
                      }`}
                    >
                      <div className="text-[10px] font-timecode uppercase tracking-wider text-[#D4AF37]">
                        {item.role}
                      </div>
                      <div
                        className={`font-cinema-title font-bold mt-0.5 ${
                          item.highlight ? 'text-lg sm:text-xl text-[#F5F0E6]' : 'text-sm text-[#F5F0E6]/90'
                        }`}
                      >
                        {item.name}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Ensemble Cast Billing */}
                <div className="mt-6 pt-6 border-t border-white/10">
                  <div className="text-xs font-timecode uppercase tracking-wider text-[#D4AF37] mb-3 flex items-center justify-between">
                    <span>Ensemble Cast (As Billed on Title Card)</span>
                    <span>{BHEEMANAGUDDA_CREDITS.cast.length} CREDITED ARTISTS</span>
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {BHEEMANAGUDDA_CREDITS.cast.map((actor, i) => (
                      <span
                        key={i}
                        className="px-2.5 py-1 rounded bg-[#0E0C0A] border border-white/10 text-xs text-[#F5F0E6]/85 font-medium"
                      >
                        {actor}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Producer Call-To-Action Banner */}
              <div className="bg-gradient-to-r from-[#231C12] via-[#18140E] to-[#231C12] border border-[#D4AF37]/50 rounded-2xl p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div>
                  <div className="text-xs font-timecode text-[#E5C158] uppercase">
                    DIRECT PRODUCER & DISTRIBUTOR CONNECT
                  </div>
                  <h4 className="font-cinema-title text-xl font-bold text-[#F5F0E6] mt-0.5">
                    Schedule a Private Preview Screening or Script Narration
                  </h4>
                  <p className="text-xs text-[#F5F0E6]/75 mt-1">
                    Available for in-person story narrations and preview showings in Deepanjali Nagar, Bengaluru – 560026.
                  </p>
                </div>
                <button
                  onClick={() => setPitchModalOpen(true)}
                  className="px-5 py-3 rounded-xl bg-[#D4AF37] hover:bg-[#E5C158] text-[#0A0908] font-semibold text-xs shrink-0 flex items-center gap-2 shadow-lg"
                >
                  <Send className="w-4 h-4" />
                  <span>Book Producer Session</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================================
          FOOTER: THEATRICAL BILLING BLOCK & PORTFOLIO METADATA
         ===================================================================== */}
      <footer className="bg-[#070605] border-t border-[#D4AF37]/25 py-14 text-xs text-[#F5F0E6]/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          {/* Classic Movie Poster Billing Block Typography */}
          <div className="text-center max-w-4xl mx-auto space-y-2 font-timecode tracking-widest uppercase text-[10px] text-[#F5F0E6]/50 leading-relaxed">
            <p className="text-[#D4AF37] font-semibold text-xs">
              KAMADHENU STORY CREATIONS PRESENTS “BHEEMANAGUDDA (ONDU SWARGADA KATHE)” — A HAVEN TALE OF 90’S
            </p>
            <p>
              STORY, SCREENPLAY, DIALOGUE & DIRECTION JAGADISH M. BENAKA • PRODUCERS MADHUSUDHAN REDDY & C. SATISH KUMAR REDDY • CINEMATOGRAPHER MANJUNATH HEGDE • MUSIC VISHAL AALAP • EDITOR SHRIDHAR Y. H. • DI NIKHIL CARIAPPA (BEE CREATIVE STUDIO) • DUBBING VIJAY RAJ (ARUN STUDIO) • DIRECTION DEPARTMENT AKSHAY POOJARI & MANIKANDAN C. V. • FIGHT MASTER GANESH
            </p>
            <p className="text-[#E5C158]/80">
              CENSORED U/A • BUDGET ₹50 LAKHS • MUSIC PARTNER LAHARI MUSIC (PROCESSING) • DISTRIBUTOR JAYANNA COMBINES (PROCESSING) • TARGET RELEASE DECEMBER / JANUARY
            </p>
          </div>

          <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <Clapperboard className="w-4 h-4 text-[#D4AF37]" />
              <span className="font-cinema-title text-sm text-[#F5F0E6] font-bold">
                JAGADISH M. BENAKA — OFFICIAL DIRECTOR PORTFOLIO
              </span>
            </div>
            <div className="flex flex-wrap items-center gap-4 text-xs font-timecode">
              <span>Born: 21-09-1992 (Mutthige, Chamarajanagar)</span>
              <span>•</span>
              <span>Present Address: Deepanjali Nagar, Bengaluru – 26</span>
            </div>
          </div>
        </div>
      </footer>

      {/* =====================================================================
          MODAL 1: FULL-SCREEN WIDESCREEN LIGHTBOX INSPECTOR
         ===================================================================== */}
      {lightboxIndex !== null && filteredGallery[lightboxIndex] && (
        <div
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex items-center justify-center p-4"
          onClick={() => setLightboxIndex(null)}
        >
          <div
            className="relative max-w-5xl w-full bg-[#12100E] border border-[#D4AF37]/40 rounded-2xl overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Top Bar */}
            <div className="px-5 py-3.5 bg-[#0A0908] border-b border-white/10 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <span className="px-2.5 py-0.5 rounded bg-[#D4AF37]/20 text-[#E5C158] font-timecode text-xs">
                  {filteredGallery[lightboxIndex].categoryLabel}
                </span>
                <span className="text-xs font-timecode text-[#F5F0E6]/60 hidden sm:inline">
                  {filteredGallery[lightboxIndex].cameraMeta}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-xs font-timecode text-[#D4AF37] mr-2">
                  {lightboxIndex + 1} / {filteredGallery.length}
                </span>
                <button
                  onClick={() =>
                    setLightboxIndex((prev) => (prev - 1 + filteredGallery.length) % filteredGallery.length)
                  }
                  className="p-2 rounded-lg bg-white/5 hover:bg-white/15 text-[#F5F0E6]"
                  title="Previous Frame"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setLightboxIndex((prev) => (prev + 1) % filteredGallery.length)}
                  className="p-2 rounded-lg bg-white/5 hover:bg-white/15 text-[#F5F0E6]"
                  title="Next Frame"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setLightboxIndex(null)}
                  className="p-2 rounded-lg bg-[#C84B31]/20 hover:bg-[#C84B31] text-[#F5F0E6] ml-2 transition-colors"
                  title="Close Lightbox"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Main Image */}
            <div className="bg-black flex items-center justify-center max-h-[70vh] overflow-hidden">
              <img
                src={filteredGallery[lightboxIndex].src}
                alt={filteredGallery[lightboxIndex].title}
                className="max-h-[70vh] w-auto object-contain"
              />
            </div>

            {/* Bottom Caption */}
            <div className="p-5 bg-[#141210] border-t border-white/10">
              <div className="text-xs font-cinema-serif italic text-[#D4AF37]">
                {filteredGallery[lightboxIndex].subtitle}
              </div>
              <h4 className="font-cinema-title text-xl font-bold text-[#F5F0E6] mt-0.5">
                {filteredGallery[lightboxIndex].title}
              </h4>
              <p className="text-sm text-[#F5F0E6]/80 mt-2">
                {filteredGallery[lightboxIndex].directorNote}
              </p>
            </div>
          </div>
        </div>
      )}

      {/* =====================================================================
          MODAL 2: PRODUCER NARRATION & SCREENING SCHEDULER MODAL
         ===================================================================== */}
      {pitchModalOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/85 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setPitchModalOpen(false)}
        >
          <div
            className="max-w-lg w-full bg-[#141210] border border-[#D4AF37]/50 rounded-2xl p-6 sm:p-8 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-start justify-between gap-4 border-b border-white/10 pb-4 mb-5">
              <div>
                <span className="text-[11px] font-timecode uppercase text-[#D4AF37]">
                  PRODUCER & DISTRIBUTOR DESK
                </span>
                <h3 className="font-cinema-title text-2xl font-bold text-[#F5F0E6] mt-0.5">
                  Connect with Jagadish M. Benaka
                </h3>
              </div>
              <button
                onClick={() => setPitchModalOpen(false)}
                className="p-1.5 rounded-lg bg-white/5 hover:bg-white/15 text-[#F5F0E6]/70"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {inquirySubmitted ? (
              <div className="py-6 text-center space-y-4">
                <div className="w-12 h-12 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 flex items-center justify-center mx-auto">
                  <Check className="w-6 h-6" />
                </div>
                <h4 className="font-cinema-title text-xl font-bold text-[#F5F0E6]">
                  Producer Inquiry Logged in Dossier
                </h4>
                <p className="text-sm text-[#F5F0E6]/80 leading-relaxed">
                  Thank you, <strong className="text-[#E5C158]">{inquiryForm.producerName || 'Producer'}</strong>. Your request regarding <strong className="text-[#F5F0E6]">{inquiryForm.interestType}</strong> at <strong className="text-[#F5F0E6]">{inquiryForm.preferredLocation}</strong> is ready. You can also copy the complete one-page pitch summary below.
                </p>
                <div className="flex items-center justify-center gap-3 pt-2">
                  <button
                    onClick={handleCopyPitchDossier}
                    className="px-4 py-2.5 rounded-xl bg-[#D4AF37] text-[#0A0908] font-semibold text-xs flex items-center gap-1.5"
                  >
                    <Copy className="w-3.5 h-3.5" />
                    <span>{copiedPitch ? 'Pitch Dossier Copied!' : 'Copy Full Pitch Summary'}</span>
                  </button>
                  <button
                    onClick={() => {
                      setInquirySubmitted(false);
                      setPitchModalOpen(false);
                    }}
                    className="px-4 py-2.5 rounded-xl bg-white/10 text-[#F5F0E6] text-xs"
                  >
                    Close Window
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleInquirySubmit} className="space-y-4">
                <div className="bg-[#0E0C0A] border border-white/10 rounded-xl p-3.5 text-xs text-[#F5F0E6]/80 space-y-1">
                  <div className="font-timecode text-[#D4AF37]">DIRECT LOCATION & AVAILABILITY</div>
                  <div>Present Address: <strong>Deepanjali Nagar, Bengaluru – 560026</strong></div>
                  <div>Feature Ready to Release: <strong>Bheemanagudda (Censored U/A • Dec/Jan)</strong></div>
                </div>

                <div>
                  <label className="block text-xs font-timecode uppercase text-[#F5F0E6]/70 mb-1">
                    Producer / Executive Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={inquiryForm.producerName}
                    onChange={(e) => setInquiryForm({ ...inquiryForm, producerName: e.target.value })}
                    placeholder="Enter your name"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#0A0908] border border-white/15 text-sm text-[#F5F0E6] focus:outline-none focus:border-[#D4AF37]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-timecode uppercase text-[#F5F0E6]/70 mb-1">
                    Production House / Distribution Banner
                  </label>
                  <input
                    type="text"
                    value={inquiryForm.bannerName}
                    onChange={(e) => setInquiryForm({ ...inquiryForm, bannerName: e.target.value })}
                    placeholder="e.g., Production Banner / Studio"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#0A0908] border border-white/15 text-sm text-[#F5F0E6] focus:outline-none focus:border-[#D4AF37]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-timecode uppercase text-[#F5F0E6]/70 mb-1">
                    Subject of Discussion
                  </label>
                  <select
                    value={inquiryForm.interestType}
                    onChange={(e) => setInquiryForm({ ...inquiryForm, interestType: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#0A0908] border border-white/15 text-sm text-[#F5F0E6] focus:outline-none focus:border-[#D4AF37]"
                  >
                    <option value="Private Preview Screening of Bheemanagudda">
                      Private Preview Screening of Bheemanagudda (U/A)
                    </option>
                    <option value="New Feature Script Narration (Upcoming Slate)">
                      New Feature Script Narration (Upcoming Slate)
                    </option>
                    <option value="Distribution / Audio / Theatrical Partnership">
                      Distribution / Audio / Theatrical Partnership
                    </option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-timecode uppercase text-[#F5F0E6]/70 mb-1">
                    Preferred Meeting / Narration Venue
                  </label>
                  <input
                    type="text"
                    value={inquiryForm.preferredLocation}
                    onChange={(e) => setInquiryForm({ ...inquiryForm, preferredLocation: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#0A0908] border border-white/15 text-sm text-[#F5F0E6] focus:outline-none focus:border-[#D4AF37]"
                  />
                </div>

                <div className="pt-2 flex items-center justify-end gap-3">
                  <button
                    type="button"
                    onClick={() => setPitchModalOpen(false)}
                    className="px-4 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-xs text-[#F5F0E6]/80"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-5 py-2.5 rounded-xl bg-[#D4AF37] hover:bg-[#E5C158] text-[#0A0908] font-semibold text-xs flex items-center gap-1.5"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>Confirm Narration Request</span>
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}
    </div>
  );
}