// Gallery frames. Each `src` points to a file in /public/images.
// To swap a photo: replace the file (same name) or change the `src` path.
// `category` drives the gallery filter tabs; `aspect` is "wide" or "portrait".

export const GALLERY_ITEMS = [
  // WIDESCREEN FILM STILLS
  {
    id: 'still-ambassador-school',
    category: 'stills',
    categoryLabel: 'Widescreen Film Still',
    title: 'Arrival at the 1990s Village School',
    subtitle: 'Anamorphic 2.39:1 Framing • Period Production Design',
    src: '/images/still-ambassador-school.jpg',
    aspect: 'wide',
    cameraMeta: 'RED PRO 5.0 • 50mm ANAMORPHIC • 24 FPS • DAY EXTERIOR',
    directorNote:
      'Staged at a real rural government school gate with a vintage white Ambassador car to immediately anchor the audience in 1990s Karnataka nostalgia.'
  },
  {
    id: 'still-pillar-conversation',
    category: 'stills',
    categoryLabel: 'Widescreen Film Still',
    title: 'Across the Veranda Pillar — Teacher & Student',
    subtitle: 'Visual Split-Frame Composition • Emotional Intimacy',
    src: '/images/still-pillar-conversation.jpg',
    aspect: 'wide',
    cameraMeta: 'RED PRO 5.0 • 85mm PRIME • NATURAL BOUNCE LIGHT',
    directorNote:
      'Using the weathered school pillar as a natural frame-within-a-frame softens the hierarchy between teacher and student, evoking warmth and trust.'
  },
  {
    id: 'still-lake-dusk',
    category: 'stills',
    categoryLabel: 'Widescreen Film Still',
    title: 'Solace by the Backwaters at Dusk',
    subtitle: 'Blue-Hour Natural Light • Maternal Grace',
    src: '/images/still-lake-dusk.jpg',
    aspect: 'wide',
    cameraMeta: 'RED PRO 5.0 • GOLDEN/BLUE HOUR • SHALLOW DOF',
    directorNote:
      'Shot during the fleeting 20-minute twilight window by the reservoir; the calm water mirrors the emotional stillness of the scene.'
  },
  {
    id: 'still-silver-oak',
    category: 'stills',
    categoryLabel: 'Widescreen Film Still',
    title: 'Childhood Companions in the Silver-Oak Grove',
    subtitle: 'Depth Staging • Natural Child Performances',
    src: '/images/still-silver-oak.jpg',
    aspect: 'wide',
    cameraMeta: 'RED PRO 5.0 • 85mm • SYMMETRICAL WOODLAND CORRIDOR',
    directorNote:
      'Vertical tree trunks create a natural cathedral around the three schoolboys, turning a simple walk home into a mythic childhood memory.'
  },
  {
    id: 'still-hilltop-dream',
    category: 'stills',
    categoryLabel: 'Widescreen Film Still',
    title: 'Ondu Swargada Kathe — The Hilltop Vision',
    subtitle: 'Poetic Realism • Color Contrast',
    src: '/images/still-hilltop-dream.jpg',
    aspect: 'wide',
    cameraMeta: 'RED PRO 5.0 • WESTERN GHATS RIDGE • OVERCAST DIFFUSION',
    directorNote:
      'A tribute to Puttanna Kanagal’s lyrical colour symbolism—contrasting earthy coral against pure white amidst the misty green hills.'
  },
  {
    id: 'still-tea-stall',
    category: 'stills',
    categoryLabel: 'Widescreen Film Still',
    title: 'Rural Camaraderie at the Village Tea Stall',
    subtitle: 'Authentic Character Texture • 90s Rural Life',
    src: '/images/still-tea-stall.jpg',
    aspect: 'wide',
    cameraMeta: 'RED PRO 5.0 • MEDIUM TWO-SHOT • PRACTICAL LOCATION',
    directorNote:
      'Layered background extras and everyday rural props give the frame lived-in credibility without drawing attention away from the foreground beat.'
  },
  {
    id: 'still-boy-closeup',
    category: 'stills',
    categoryLabel: 'Widescreen Film Still',
    title: 'Innocence in Focus — Shallow Depth Portrait',
    subtitle: 'Point-of-View Storytelling • DI Color Grade',
    src: '/images/still-boy-closeup.jpg',
    aspect: 'wide',
    cameraMeta: 'RED PRO 5.0 • T1.5 WIDE OPEN • BOKEH SEPARATION',
    directorNote:
      'Isolating the young protagonist against a soft-focus maternal figure captures how memory holds onto emotion over sharp detail.'
  },
  {
    id: 'still-school-courtyard',
    category: 'stills',
    categoryLabel: 'Widescreen Film Still',
    title: 'Discipline & Warmth in the Schoolyard',
    subtitle: 'Wide Master Shot • Period Costume Design',
    src: '/images/still-school-courtyard.jpg',
    aspect: 'wide',
    cameraMeta: 'RED PRO 5.0 • 35mm MASTER • AFTERNOON SUN',
    directorNote:
      'Wide master staging lets body language and posture tell the story before a single line of dialogue is spoken.'
  },
  {
    id: 'still-school-ensemble',
    category: 'stills',
    categoryLabel: 'Widescreen Film Still',
    title: 'Passing Generations at the School Gate',
    subtitle: 'Dynamic Blocking • Multi-Plane Movement',
    src: '/images/still-school-ensemble.jpg',
    aspect: 'wide',
    cameraMeta: 'RED PRO 5.0 • 35mm TRACKING MASTER • LOCATION SHOOT',
    directorNote:
      'Choreographing foreground and background movement creates organic rhythm across the widescreen frame.'
  },

  // ON-SET DIRECTION & RED CAMERA BTS
  {
    id: 'bts-red-camera-1',
    category: 'onset',
    categoryLabel: 'On-Set Direction BTS',
    title: 'Directing by the RED Pro 5.0 Cinema Rig',
    subtitle: 'Jagadish M. Benaka with Cinematographer & Unit',
    src: '/images/bts-red-camera-1.jpg',
    aspect: 'standard',
    cameraMeta: 'PRINCIPAL PHOTOGRAPHY • OUTDOOR DAY UNIT • KARNATAKA',
    directorNote:
      'Jagadish M. Benaka (left, at the camera monitor) reviewing lens framing and actor blocking alongside the cinematography team on location.'
  },
  {
    id: 'bts-waterfall-script',
    category: 'onset',
    categoryLabel: 'On-Set Direction BTS',
    title: 'Screenplay Breakdown at the Waterfall Location',
    subtitle: 'Director with Handwritten Kannada Shooting Script',
    src: '/images/bts-waterfall-script.jpg',
    aspect: 'portrait',
    cameraMeta: 'LOCATION SHOOT • WATERFALL SEQUENCE • SCRIPT NOTES',
    directorNote:
      'Holding the handwritten Kannada dialogue and shot-division sheets on the rocks above the waterfall where Bheemanagudda’s signature poster visual was conceived.'
  },
  {
    id: 'bts-red-camera-2',
    category: 'onset',
    categoryLabel: 'On-Set Direction BTS',
    title: 'Calling Action on the Outdoor Field Monitor',
    subtitle: 'Live Take Supervision • Principal Photography',
    src: '/images/bts-red-camera-2.jpg',
    aspect: 'standard',
    cameraMeta: 'RED PRO 5.0 MONITOR • LIVE TAKE EVALUATION',
    directorNote:
      'Observing micro-expressions during a live take on the field monitor to ensure the theatrical timing lands naturally on camera.'
  },
  {
    id: 'bts-location-recce',
    category: 'onset',
    categoryLabel: 'On-Set Direction BTS',
    title: 'Director’s Location Recce in the Ghats',
    subtitle: 'Scouting Authentic 1990s Terrains',
    src: '/images/bts-location-recce.jpg',
    aspect: 'square',
    cameraMeta: 'PRE-PRODUCTION RECCE • CHAMARAJANAGAR & MALNAD BELT',
    directorNote:
      'Scouting untouched rural roads and forest canopies to give Bheemanagudda its distinctive, unhurried 1990s atmosphere.'
  },

  // FOLK AKHADA & LOCATION PRODUCTION
  {
    id: 'bts-akhada-ring',
    category: 'folk',
    categoryLabel: 'Folk Akhada & Action Shoot',
    title: 'The Red-Earth Wrestling Pit (Garadi Mane) Set',
    subtitle: 'Heritage Temple Backdrop • Dolly Track Action Setup',
    src: '/images/bts-akhada-ring.jpg',
    aspect: 'portrait',
    cameraMeta: 'ACTION UNIT • FIGHT MASTER GANESH • DOLLY TRACKS',
    directorNote:
      'Constructed a traditional red-soil wrestling ring beside an ancient stone temple, complete with festival buntings and dolly tracks (visible top-left) for visceral folk action.'
  },
  {
    id: 'bts-wrestlers-trio',
    category: 'folk',
    categoryLabel: 'Folk Akhada & Action Shoot',
    title: 'Traditional Pehelwans Prepared for the Kushti Sequence',
    subtitle: 'Authentic Indigenous Action Choreography',
    src: '/images/bts-wrestlers-trio.jpg',
    aspect: 'standard',
    cameraMeta: 'KUSHTI SEQUENCE • TRADITIONAL COSTUME & MAKEUP',
    directorNote:
      'Rooting action sequences in Karnataka’s indigenous wrestling heritage adds cultural texture and mass appeal to the narrative.'
  },
  {
    id: 'bts-temple-cast',
    category: 'folk',
    categoryLabel: 'Folk Akhada & Action Shoot',
    title: 'Lead Cast in Period Attire at the Heritage Temple',
    subtitle: 'Character Look & Costume Authenticity',
    src: '/images/bts-temple-cast.jpg',
    aspect: 'portrait',
    cameraMeta: 'TEMPLE SCHEDULE • PERIOD COSTUME STYLING',
    directorNote:
      'Every costume weave, sacred vibhuti mark, and rustic prop was curated to reflect rural Karnataka life in the 1990s.'
  },

  // POST-PRODUCTION, DUBBING & INDUSTRY CONNECT
  {
    id: 'bts-dubbing-ensemble',
    category: 'post',
    categoryLabel: 'Post-Production & Studio',
    title: 'Dubbing & Voice Direction with the Young Ensemble',
    subtitle: 'Arun Studio • Directing Child Artists in Post',
    src: '/images/bts-dubbing-ensemble.jpg',
    aspect: 'standard',
    cameraMeta: 'ARUN STUDIO • DUBBING ENGINEER VIJAY RAJ • VOICE DIRECTION',
    directorNote:
      'Jagadish M. Benaka (center) with the child artists and lead performers after completing the dubbing schedule at Arun Studio.'
  },
  {
    id: 'bts-music-sitting-1',
    category: 'post',
    categoryLabel: 'Post-Production & Studio',
    title: 'Background Score & Music Sitting in the Studio',
    subtitle: 'Collaborating with Music Composer Vishal Aalap',
    src: '/images/bts-music-sitting-1.jpg',
    aspect: 'standard',
    cameraMeta: 'AUDIO POST-PRODUCTION • SCORE & SONG MASTERING',
    directorNote:
      'Crafting the melodic 90s soundscape of Bheemanagudda during acoustic studio sessions with the music and sound team.'
  },
  {
    id: 'bts-music-sitting-2',
    category: 'post',
    categoryLabel: 'Post-Production & Studio',
    title: 'Final Mix & Post-Production Milestone',
    subtitle: 'Acoustic Suite Session • Ready for Lahari Release',
    src: '/images/bts-music-sitting-2.jpg',
    aspect: 'portrait',
    cameraMeta: 'STUDIO MASTERING • SOUND DESIGN & MIX',
    directorNote:
      'Locking the final audio reels ahead of censor certification and music partner onboarding with Lahari Music.'
  },
  {
    id: 'bts-industry-connect',
    category: 'post',
    categoryLabel: 'Post-Production & Studio',
    title: 'Camaraderie in the Kannada Film Fraternity',
    subtitle: 'With Pradeep Sir & Industry Colleagues',
    src: '/images/bts-industry-connect.jpg',
    aspect: 'portrait',
    cameraMeta: 'BENGALURU • KANNADA FILM FRATERNITY',
    directorNote:
      'Building strong creative relationships across the Bengaluru theatre and Kannada cinema community.'
  }
];
