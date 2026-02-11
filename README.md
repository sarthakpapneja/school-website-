# Athenia High School - Digital Experience

Welcome to the official repository for the Athenia High School digital platform. This project is a high-fidelity, interactive web experience designed to reflect the school's "Midnight & Champagne" luxury branding.

## 🌟 Project Overview

This website serves as the primary digital touchpoint for prospective students, parents, and alumni. It moves beyond a static brochure to offer an immersive narrative journey, featuring cinematic motion, deep content integration, and premium aesthetics.

### Key Features
- **"Midnight & Champagne" Aesthetic**: A bespoke dark-mode theme with gold accents, glassmorphism, and artisanal typography.
- **Cinematic Motion**: Powered by `framer-motion` and `lenis` for buttery smooth scrolling and staggered text reveals.
- **Interactive Sanctuary**:
    - **Hero Section**: Mouse-parallax background with "Campus Glimpse" video integration.
    - **Bento Grid**: Interactive infrastructure showcase with inner-parallax effects.
    - **Legacy Marquees**: "Seek Wisdom" scrolling dividers.
- **Deep Content Modals**:
    - **Principal's Message**: Featuring Dr. Elena Ross, with a dedicated reading modal.
    - **Academic Deep-Dives**: Detailed curriculum breakdowns for STEM, Humanities, and Arts.
    - **Heritage Film**: A cinematic preview of the campus (`aw42egcY7Bk`).
    - **Digital Prospectus**: Auto-generated PDF download with custom styling.

## 🛠️ Tech Stack

- **Framework**: [React](https://react.dev/) + [Vite](https://vitejs.dev/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) (v4)
- **Motion**: [Framer Motion](https://www.framer.com/motion/) + [Lenis](https://github.com/studio-freight/lenis)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Utilities**: `html2canvas` & `jspdf` (for Prospectus generation), `react-hot-toast` (Notifications)

## 🚀 Recent Updates

- **Identity Integration**:
    - Official Logo (`logo.jpeg`) integrated across Navbar, Footer, and Prospectus.
    - Principal's Image (`principal.jpeg`) updated in Leadership sections.
- **Functional Polish**:
    - **PDF Generator Fix**: Resolved Tailwind v4 color parsing errors for pristine prospectus downloads.
    - **Newsletter**: Simulated subscription flow for better UX.
    - **Video**: Updated Heritage Film to the official "Campus Glimpse".

## 📦 Setup & Installation

1.  **Clone the repository**:
    ```bash
    git clone https://github.com/your-username/athenia-high-school.git
    ```
2.  **Install dependencies**:
    ```bash
    npm install
    ```
3.  **Run the development server**:
    ```bash
    npm run dev
    ```
4.  **Build for production**:
    ```bash
    npm run build
    ```

## 📄 License

© 2026 Athenia High School. All rights reserved.
