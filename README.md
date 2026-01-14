# RR Institute Karnal - Documentation

Professional website for **RR Institute Karnal**, an immigration and visa consulting firm.

**Domain:** [rrinstitute.in](https://rrinstitute.in)

## 🚀 Tech Stack

- **Frontend:** React 19 (Vite)
- **Styling:** Tailwind CSS 3
- **Animations:** Framer Motion 12
- **Icons:** Lucide React
- **SEO:** React Helmet Async
- **Routing:** React Router DOM 7

## 📂 Project Structure

### Root Directory
- `src/`: Main source code directory.
- `public/`: Static assets.
- `index.html`: Main entry point.
- `tailwind.config.js`: Tailwind CSS configuration with custom navy/red/gold palette.
- `vite.config.js`: Vite build configuration.
- `AIinstructions.md`: Project-specific context and goals for AI agents.

### Source Directory (`/src`)
- `main.jsx`: Application entry point with providers.
- `App.jsx`: Core routing and main component structure.
- `index.css`: Global styles and Tailwind imports.
- `App.css`: Component-specific base styles.

#### 🧩 Components (`/src/components`)
- `Navbar.jsx`: Responsive navigation with dropdowns and mobile menu.
- `Footer.jsx`: Multi-column footer with contact info and quick links.

#### 📄 Pages (`/src/pages`)
- `Home.jsx`: Premium landing page with hero animations, stats, services, and consultation form.
- `About.jsx`: Information about RR Institute's mission and history.
- `Services.jsx`: Overview of Study Visa, PR, and Coaching services.
- `Visa.jsx`: Detailed visa information for various countries.
- `Contact.jsx`: Contact page with integrated Google Maps and enquiry form.

#### 🎓 Courses (`/src/pages`)
Dedicated pages for educational programs:
- `ANM.jsx`: Auxiliary Nurse Midwifery course details.
- `GNM.jsx`: General Nursing and Midwifery course details.
- `BSCNursing.jsx`: B.Sc Nursing course details.
- `Paramedical.jsx`: Paramedical program details.

#### 🔐 Admin (`/src/pages/admin`)
- `Login.jsx`: Admin authentication page.

## 🛠️ Getting Started

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Run development server:**
   ```bash
   npm run dev
   ```

3. **Build for production:**
   ```bash
   npm run build
   ```
