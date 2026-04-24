# ⚡ Pushpraj Dubey — The Marauder's Portfolio

> *"I solemnly swear that I am up to no good."*

A Harry Potter–themed developer portfolio built with **Next.js 14**, **Framer Motion**, and **Tailwind CSS**. Every scroll, hover, and click is enchanted — golden particles, parallax castle silhouettes, wax seals, typewriter spells, and a full easter-egg system straight from Hogwarts.

---

## ✨ Features

### Magical Atmosphere
- **Animated starfield** — 220 twinkling parchment-colored stars across the entire viewport
- **Golden magical dust** — 60 diamond-shaped golden particles drift upward continuously
- **Floating candles** — Hogwarts-style candles rise across the screen (desktop only)
- **Deep background gradient** — parchment-to-midnight-blue radial gradient, not flat black

### Hero Section
- **Wax seal stamp** — crimson & gold SVG seal animates in with a spring (scale + rotation)
- **Letter-by-letter name reveal** — each character flips in with spring physics (`rotateX`)
- **Typewriter subtitle** — text types itself character by character with a glowing golden cursor
- **Parallax castle silhouette** — Hogwarts outline at the bottom moves at ½ scroll speed
- **Parallax mist** — SVG fog layer drifts at a different depth
- **Floating wand** — golden wand SVG floats and pulses with a sparkle at the tip

### Animations & Interactions
- **Custom wand cursor** — diagonal wand SVG with sparkle lines at the tip
- **Click spark bursts** — every click emits 12 golden particles that scatter outward
- **Spell ripple on buttons** — a golden ring expands from the exact click point
- **Candle-flicker headings** — section titles pulse with a subtle opacity + text-shadow flicker loop
- **Golden shimmer sweep** — moving gradient mask across section headings
- **Card pulse glow** — project and about cards breathe with a golden box-shadow on hover

### Sections
| Section | Enchantment |
|---|---|
| **About** | Blur + Y entrance, staggered paragraph slides, icon wobble on hover |
| **Spellbook (Skills)** | Spring bounce-in per badge, hover rotate/scale, SVG feTurbulence mist backdrop |
| **Artefacts (Projects)** | scaleY unfurl entrance, wax seal watermark, logo spin on hover, staggered bullet reveals |
| **Quests (Experience)** | Timeline with diamond bullets, alternating card layout |
| **Trophies (Achievements)** | Scale + blur entrance, trophy wobble loop, award icon 360° spin on hover |
| **Owl Post (Contact)** | "Send Owl 🦉" button with AnimatePresence flying owl animation, parchment texture |

### Easter Eggs 🥚
| Trigger | Effect |
|---|---|
| **Konami Code** `↑↑↓↓←→←→BA` | Sorting Hat ceremony — "GRYFFINDOR!" |
| **Type `alohomora`** anywhere | Golden toast notification |
| **Idle for 8 seconds** | Golden Snitch appears — catch it for 150 points to Gryffindor |
| **Click `P.D.` logo** | Marauder's Map overlay with footprints and navigation |
| **Click `Platform 9¾`** sidebar | Hogwarts Express departing animation |

---

## 🛠 Tech Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 14 (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS v3 |
| Animation | Framer Motion v12 |
| Icons | Lucide React, React Icons |
| Fonts | Cinzel Decorative, Cinzel, IM Fell English, JetBrains Mono |
| Canvas | HTML5 Canvas (StarCanvas) |
| Rendering | Static site generation (SSG) |

---

## 🚀 Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 📁 Project Structure

```
├── app/
│   ├── globals.css          # Tailwind base + all keyframe animations
│   ├── layout.tsx           # Root layout — fonts, global components
│   └── page.tsx             # Page composition
├── components/
│   ├── StarCanvas.tsx       # Canvas starfield + golden dust particles
│   ├── FloatingCandles.tsx  # Ascending candle animations
│   ├── MagicCursor.tsx      # Click burst sparks + button ripple waves
│   ├── EasterEggsController.tsx  # Konami, Alohomora, Snitch, Platform 9¾
│   ├── Navbar.tsx           # Fixed nav with mobile overlay
│   ├── Hero.tsx             # Wax seal, typewriter, parallax castle/mist, wand
│   ├── About.tsx            # Animated bio + skill cards
│   ├── Skills.tsx           # Spring-bounce tome cards with mist backdrop
│   ├── Projects.tsx         # Enchanted scroll cards with unfurl animation
│   ├── Experience.tsx       # Timeline layout
│   ├── Achievements.tsx     # Trophy cards with motion
│   └── Contact.tsx          # Owl Post with flying owl send button
├── lib/
│   └── easterEggs.ts        # All easter egg logic
└── public/
    ├── cursor.svg           # Wand cursor SVG
    └── PushprajDubeyResume23145.pdf
```

---

## ♿ Accessibility

All animations respect the `prefers-reduced-motion` media query via Framer Motion's `useReducedMotion()` hook. When reduced motion is preferred:
- All entrance animations are instant (no y/scale/blur transitions)
- Canvas particles still render, but without motion-heavy effects
- Typewriter effect shows text immediately
- Parallax layers are disabled

---

## 🎨 Design Tokens

```css
--gold:           #D4AF37   /* Primary gold */
--gold-light:     #F5D87A   /* Hover gold */
--gold-dark:      #8B7320   /* Muted gold */
--crimson:        #7B0D1E   /* Gryffindor red */
--crimson-light:  #A91D3A   /* Hover crimson */
--parchment:      #F5EDD6   /* Light text / selection */
--smoke:          #C9B99A   /* Body text */
--ink:            #1A0A00   /* Dark ink */
--bg:             #0D0005   /* Base background */
```

---

## 📜 License

MIT — feel free to fork and enchant your own version.

---

*Crafted with 🪄 and a lot of coffee — Pushpraj Dubey, IIIT Una CSE 2027*
