# CYBERCORE // High-Precision Cybernetics & Human Augmentation

A responsive, cinematic landing page showcasing next-generation cybernetic engineering, biomechatronics, and real-time neural telemetry instrumentation. Built with **React 18**, **TypeScript**, **Vite**, **Tailwind CSS**, and **GSAP**.

![CYBERCORE Landing Page](public/assets/hero-portrait-clean.jpg)

---

## ⚡ Highlights

- **Real-Time 3D Cybernetic Canvas**: Interactive cranial & facial wireframe geometry rendered at 60 FPS on HTML5 Canvas with smooth mouse-tracking inertia, glowing ocular sensors, depth sorting, and particle fields.
- **Dual Visual Modes**: Seamless toggle between interactive real-time 3D wireframe telemetry and studio portrait specimen view.
- **Scroll-Driven GSAP Animations**: Silk-smooth reveals powered by GSAP & ScrollTrigger.
- **Interactive Capabilities Matrix**: Explore micro-hydraulic actuation, high-bandwidth neural telemetry, biomimetic tactile skin, and titanium-carbon chassis.
- **Telemetry & Engineering Drawer**: Live engineering specifications compliant with ASTM F136, ISO 10218, and IEC 60601 standards.
- **Research Papers Archive**: Interactive modal drawer displaying peer-reviewed biomechatronic and neural decoding abstracts.
- **Luxury Industrial Cyber Aesthetic**: Deep `#080808` obsidian theme, metallic chrome typography, subtle film noise overlay, and burnt-orange (`#FF4800`) optical accents.

---

## 📂 Included Datasets

The repository includes structured datasets for cybernetic telemetry, research, and technical specifications:

1. **`src/data/cyborgData.ts`**:
   - `CAPABILITIES_DATA`: 4 deep-dive mechanical and neural sub-systems with coordinates, metrics, and figures.
   - `SPECIFICATIONS_DATA`: Metallurgy, kinematic articulation, biosignal, and spatial perception benchmarks.
   - `RESEARCH_PAPERS`: Biomechatronic research papers, institutions, and abstracts.

2. **`public/data/telemetry-feed.json`**:
   - Live simulated joint telemetry (cervical pitch/yaw, scapular elevation, glenohumeral torque, elbow flexion).
   - 64-channel neural bus band power distribution ($\theta, \alpha, \beta, \gamma$).
   - Multi-axis tactile shear vectors and solid-state battery thermal metrics.

---

## 🛠️ Tech Stack

- **Framework**: [React 18](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- **Build Tool**: [Vite 6](https://vitejs.dev/)
- **Styling**: [Tailwind CSS 3](https://tailwindcss.com/)
- **Animation**: [GSAP 3](https://greensock.com/gsap/) + [ScrollTrigger](https://greensock.com/scrolltrigger/)
- **Icons**: [Lucide React](https://lucide.dev/)

---

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18.0 or higher recommended)
- `npm` or `pnpm`

### Installation

```bash
# Clone the repository
git clone https://github.com/Nanichowdary04/cyborg-landing-page.git

# Navigate into project directory
cd cyborg-landing-page

# Install dependencies
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Production Build

```bash
npm run build
npm run preview
```

---

## 📁 Project Structure

```
cyborg-landing-page/
├── index.html                  # HTML entry point with typography preconnects
├── package.json                # Project dependencies and scripts
├── tailwind.config.js          # Custom theme, typography, and color tokens
├── vite.config.ts              # Vite configuration
├── tsconfig.json               # TypeScript compiler settings
├── public/
│   ├── assets/                 # High-resolution cybernetic imagery
│   │   ├── hero-portrait-clean.jpg
│   │   ├── cybernetic-hand.jpg
│   │   ├── engineering-chassis.jpg
│   │   └── technology-core.jpg
│   └── data/
│       └── telemetry-feed.json # Real-time sensor & actuator dataset
└── src/
    ├── main.tsx                # Application mounting
    ├── App.tsx                 # Root layout & modal controllers
    ├── index.css               # Global utilities & chrome text gradients
    ├── types/
    │   └── index.ts            # TypeScript interfaces
    ├── data/
    │   └── cyborgData.ts       # Capabilities, specs, and research papers
    └── components/
        ├── Navbar.tsx          # Navigation bar with responsive drawer
        ├── Hero.tsx            # Main hero with headline & dual visual display
        ├── CyborgCanvas.tsx    # Interactive 3D wireframe canvas
        ├── AboutTechnology.tsx # Substrate architecture breakdown
        ├── CyberneticCapabilities.tsx # Articulation & tactile tabs
        ├── EngineeringResearch.tsx    # Specifications table & papers
        ├── TelemetrySection.tsx       # Live sensor telemetry concept
        ├── TelemetryModal.tsx         # Full specifications drawer
        ├── ContactCTA.tsx      # System commission contact desk
        └── Footer.tsx          # Footer navigation & status
```

---

## 📜 License

MIT License. Free for commercial and non-commercial educational use.
