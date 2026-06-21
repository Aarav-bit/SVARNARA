# 🏛️ SVARNARA Fine Dining
> **Where Every Plate Tells a Story.** A cinematic, luxury web experience designed for the premier Indian fine-dining destination in New Delhi.

SVARNARA is a premium single-page web application showcasing a luxurious Indian culinary journey. The application features a striking dark espresso and aged gold visual identity, a custom filterable menu, a working reservation/contact flow, SEO/AEO metadata, structured data, and micro-animations that reflect the premium dining experience.

---

## 🎨 Design System & Aesthetics

SVARNARA's design system is crafted to evoke luxury, heritage, and sophistication:

*   **Color Palette:**
    *   `Espresso Dark (#0D0A07)`: The primary background color representing warmth, soil, and the mystery of night.
    *   `Aged Gold (#C9A84C)`: The accent color representing royalty, premium spices, and sophistication.
    *   `Saffron Gold (#F4A720)`: The highlight color for interactive actions and statuses.
    *   `Deep Burgundy (#6B1A2A)`: Warm accent blocks for cozy backdrops (e.g., testimonials).
*   **Typography:**
    *   *Display/Headings:* **Cormorant Garamond** (Serif) — for timeless luxury.
    *   *Section Labels:* **Cinzel** (Decorative Serif) — for high-end editorial rhythm.
    *   *Body Copy:* **Jost** (Geometric Sans) — for modern readability.
*   **Aesthetic Features:** Glassmorphic navigation bars, parallax dish backgrounds, hover card lift effects, and custom bottom-border-only input fields.

---

## 🍽️ Key Features

*   **Cinematic Hero Header:** Full-viewport immersive landing with bold calligraphy, dual CTA actions, and smooth page transitions.
*   **Our Story (About):** A split-screen narrative profiling the culinary philosophy of Executive Chef Ranveer Brar.
*   **Interactive Menu Matrix:** Filterable category tabs (Starters, Mains, Desserts, Wine & Spirits) showcasing Indian gourmet dishes (e.g., Awadhi Galouti Kebab, Dum Pukht Biryani, Royal Kesar Phirni) with pricing in INR (₹) and high-definition food visual cards.
*   **Luxury Reservation Desk:** A bespoke centered booking form with bottom-bordered gold inputs and reservation status validations.
*   **Working Lead Capture:** Reservation and contact submissions post to `VITE_FORMS_ENDPOINT` when configured, with local browser storage as a demo fallback.
*   **Aura Gallery:** A responsive 3-column masonry grid displaying high-contrast ambiance and gourmet photography with golden border hover layouts.
*   **Royal Reviews:** A burgundy-themed testimonial marquee highlighting customer reviews.
*   **Interactive Contact Block:** Location mappings, timings, and custom reservation assistance links.
*   **FAQ for AEO:** Direct question-and-answer content for common guest searches and answer engines.
*   **SEO Foundation:** Canonical metadata, Open Graph/Twitter tags, `robots.txt`, `sitemap.xml`, and Restaurant/FAQ JSON-LD.
*   **Security & Accessibility:** Static host headers, iframe restrictions, visible focus states, reduced-motion support, and legal/accessibility pages.

---

## 💻 Tech Stack

*   **Framework:** [React.js](https://react.dev/) + [Vite](https://vite.dev/) (fast HMR build tool)
*   **Styling:** Vanilla CSS (Tailored layout stylesheets under `src/components/` for max performance and custom animations)
*   **Fonts:** Google Fonts Integration (Cormorant Garamond, Cinzel, Jost)
*   **Icons:** Inline SVGs / Custom vectors
*   **Environment:** Node.js (v18+)

---

## 🚀 Quick Start

Ensure you have [Node.js](https://nodejs.org/) installed, then follow these steps:

### 1. Clone & Navigate
```bash
git clone https://github.com/Aarav-bit/Restraunt-web.git
cd Restraunt-web
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Run Development Server
```bash
npm run dev
```
*The dev server will spin up locally, usually at `http://localhost:5173/`.*

### 4. Optional Form Endpoint
Create `.env` from `.env.example` and add a form endpoint if you want submissions sent to a backend or service:
```bash
VITE_FORMS_ENDPOINT=https://your-form-endpoint.example/submit
```
Without this value, submissions are saved in browser localStorage as a working internship demo.

### 5. Quality Checks
```bash
npm run lint
npm run build
```

### 6. Build for Production
To bundle the project into optimized static files for deployment (creates the `dist` folder):
```bash
npm run build
```

## 🔎 SEO, AEO & Security Work

*   **SEO:** Added canonical URL, social sharing metadata, crawl directives, sitemap, robots file, and image preview metadata.
*   **AEO:** Added visible FAQ content and JSON-LD for `Restaurant` and `FAQPage`.
*   **Security:** Added static hosting headers in `public/_headers`, safer iframe attributes, and form submission error handling.
*   **Accessibility:** Added keyboard-friendly gallery controls, focus states, reduced-motion support, and an accessibility statement.

---

## 📁 Repository Structure

```
Restraunt-web/
├── public/                 # Static assets (favicons, images, logos)
│   ├── images/             # Culinary photography and chef portraits
│   └── favicon.svg         # Tab icon
├── src/
│   ├── assets/             # Core local template assets
│   ├── components/         # Modular layout components (JSX + CSS)
│   │   ├── About.jsx       # Chef story & ethos
│   │   ├── Contact.jsx     # Booking hours & address
│   │   ├── Gallery.jsx     # Masonry grid
│   │   ├── Hero.jsx        # Viewport hero + scroll hint
│   │   ├── Menu.jsx        # Filterable food menu
│   │   ├── Navbar.jsx      # Sticky top-bar
│   │   ├── Reservations.jsx# Reservation form
│   │   └── Testimonials.jsx# Guest marquee reviews
│   ├── App.jsx             # Root layout controller
│   ├── App.css             # Page-wide layout & animations
│   ├── index.css           # Global typography & design system tokens
│   └── main.jsx            # Entry mount point
├── index.html              # HTML shell
├── package.json            # Scripts & project dependencies
└── vite.config.js          # Vite configuration
```

---

## 📜 License & Acknowledgments

*   **License:** MIT
*   **Concept & Design:** Built as a bespoke Indian high-luxury dining site concept for *SVARNARA*.

