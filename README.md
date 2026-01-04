# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
# RR Institute Karnal Website Project

This document outlines the blueprint for creating a website for **RR Institute Karnal**, inspired by the [Imigo Immigration & Visa Consulting Theme](https://demo.awaikenthemes.com/imigo/) and branded with the visual identity from the [RR Institute Karnal Instagram](https://www.instagram.com/rrinstitutekarnal/?hl=en).

## 1. Theme Colors & Typography

Since the Instagram profile could not be scraped for exact hex codes, please verify these colors using a color picker tool on the logo/posts.

**Recommended Color Palette (Standard Immigration/Education Style):**

*   **Primary Color:** `Navy Blue` (e.g., `#003366`) - Used for Header, Footer, Headings, Primary Buttons.
*   **Secondary Color:** `Red` (e.g., `#D32F2F`) - Used for Call-to-Action (CTA) buttons, Highlights, Price tags.
*   **Accent Color:** `Gold/Yellow` (e.g., `#FFC107`) or `Sky Blue` (e.g., `#00B0FF`) - Used for icons, decorative elements.
*   **Background Color:** `White` (`#FFFFFF`) and `Light Gray` (`#F4F4F4`) - Used for section backgrounds.
*   **Text Color:** `Dark Gray` (`#333333`) - Used for body text.

**Instructions to Extract Exact Brand Colors:**
1.  Take a screenshot of the RR Institute Karnal logo from Instagram.
2.  Go to an online color picker (e.g., [imagecolorpicker.com](https://imagecolorpicker.com)).
3.  Upload the screenshot and click on the main colors to get the Hex codes (e.g., `#AB1234`).
4.  Update the palette above with the actual values.

## 2. Site Architecture (Pages)

Based on the Imigo theme structure, the website should include the following pages:

*   **Home Page**: The main landing page with hero slider, introduction, services overview, testimonials, and latest news.
*   **About Us**: Company history, mission, vision, and "Why Choose Us" section.
*   **Services**: List of all services provided (e.g., Study Visa, Tourist Visa, Permanent Residency).
    *   **Service Details**: Individual pages for each service with detailed info, eligibility, and process.
*   **Coaching / IELTS**: Information about coaching classes (IELTS, PTE, TOEFL).
    *   **Coaching Details**: Syllabus, batch timings, and fee structure.
*   **Countries**: List of countries served (Canada, USA, UK, Australia, etc.).
    *   **Country Details**: Specific visa rules and opportunities for each country.
*   **Our Team**: Profiles of consultants and language trainers.
*   **Blog / News**: Updates on immigration rules, success stories, and tips.
*   **Contact Us**: Contact form, address, Google Map, and phone numbers.
*   **FAQ**: Frequently Asked Questions regarding visas and coaching.

## 3. Component Library

To build the "Imigo" look and feel, you will need to develop (or use a library for) these components:

### Layout Components
*   **Header / Navbar**: Logo on left, Navigation links in center/right, "Book Consultation" CTA button. Includes a "Top Bar" with phone number and social icons.
*   **Footer**: Quick links, Contact info, Social media links, Newsletter signup.

### Content Components
*   **Hero Slider**: Large full-width banner with overlay text and "Apply Now" buttons.
*   **Section Heading**: Stylized title and subtitle (e.g., "What We Offer" / "Our Services").
*   **Service Card**: Box with icon/image, title, short description, and "Read More" link. Hover effects are crucial for the "Imigo" style.
*   **Country Card**: Image of the country (flag or landmark) with name.
*   **Testimonial Carousel**: Slider showing client reviews, photos, and ratings.
*   **Team Member Card**: Photo, Name, Designation, and social links.
*   **Stats Counter**: Animated numbers showing "Visas Granted", "Happy Clients", "Years Experience".
*   **Accordion**: For FAQs (expand/collapse functionality).
*   **Call to Action (CTA) Banner**: Full-width colored section with text "Ready to fly?" and a button.

### Form Components
*   **Enquiry Form**: Fields for Name, Email, Phone, Visa Type, Message.
*   **Booking Form**: Date/Time picker for appointments.

## 4. Step-by-Step Implementation Guide

Follow these steps to build the website:

### Phase 1: Preparation
1.  **Define Brand Identity**: Finalize the Hex color codes and fonts (Imigo uses Google Fonts like 'Barlow' or 'Roboto').
2.  **Gather Assets**: Collect high-quality images for the hero slider, service icons, country landmarks, and team photos. Get the official logo.
3.  **Choose Tech Stack**:
    *   *Option A (Custom Code)*: Next.js (React) + Tailwind CSS (for rapid styling) + Framer Motion (for animations).
    *   *Option B (CMS)*: WordPress + Elementor (using the Imigo theme or building from scratch).

### Phase 2: Development (Custom Code Approach)
1.  **Setup Project**: Initialize a new Next.js project.
    ```bash
    npx create-next-app@latest rr-institute-website
    ```
2.  **Configure Tailwind**: Add the brand colors to `tailwind.config.js`.
3.  **Build Layout**: Create `Header` and `Footer` components. Ensure they are responsive (hamburger menu for mobile).
4.  **Develop Home Page**:
    *   Build the `Hero` component.
    *   Build the `ServicesGrid` component.
    *   Build the `Testimonials` component.
5.  **Develop Inner Pages**: Create routes for `/about`, `/services`, `/contact`, etc.
6.  **Add Interactivity**: Use animations for hover effects on cards and buttons to match the "Imigo" demo.

### Phase 3: Content Integration
1.  Fill pages with real text about RR Institute's services and history.
2.  Add specific coaching details (IELTS/PTE).
3.  Add the success stories to the testimonial section.

### Phase 4: Launch
1.  **Domain**: Buy a domain (e.g., `rrinstitutekarnal.com` if available).
2.  **Hosting**: Deploy to Vercel/Netlify (for Next.js) or a WP Host (for WordPress).
3.  **SEO**: Add meta titles, descriptions, and verify with Google Search Console.
