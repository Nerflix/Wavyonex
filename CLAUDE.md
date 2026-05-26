Build a full multi-page React website for Wavonex Ltd — an HVAC, Refrigeration & Solar engineering company based in Nairobi, Kenya.

## Brand Identity
- Company: Wavonex Ltd
- Tagline: Precision Performance
- Services: Supply · Installation · Maintenance
- Core lines: HVAC Systems | Refrigeration Solutions | Solar Energy
- Phone: 0790 155 393
- WhatsApp: 0790 155 393
- Email: info@wavonex.co.ke
- Website: www.wavonex.co.ke
- Location: Nairobi, Kenya

## Colour Palette (strict)
- Navy Blue: #0D1B3E (primary background, headers)
- Charcoal Grey: #2E2E2E (secondary background, cards)
- Solar Yellow: #F5C518 (accent — CTAs, highlights, borders, icon strokes)
- White: #FFFFFF (body text on dark)
- Light Grey: #F4F4F4 (section backgrounds on light sections)

## Typography
- Display/Headings: 'Barlow Condensed' (Google Fonts) — bold, technical, industrial
- Body: 'DM Sans' (Google Fonts) — clean and readable

## Logo
- File: /public/logo.jpeg
- Use in navbar and footer. On dark backgrounds use the dark-background version; on white use white version (same file, just display it — both variants exist).

## Pages / Sections (single-page with smooth scroll nav OR multi-page router — your choice, go with whatever gives best performance)

### 1. HERO SECTION
- Full-screen dark navy background
- Large headline: "Precision Engineering. Reliable Performance." 
- Sub: "HVAC · Refrigeration · Solar — Supply, Installation & Maintenance across East Africa"
- Two CTAs side by side:
  - "WhatsApp Us" → opens https://wa.me/254790155393 (green WhatsApp button)
  - "Call Now" → tel:0790155393 (yellow outlined button)
- Background: subtle animated grid/blueprint lines pattern in dark navy (CSS only, no images)
- Floating badge: "24/7 Emergency Support"

### 2. SERVICES SECTION — "What We Do"
Three service cards, each card:
- Real stock photo image (use Unsplash URL for each — HVAC/aircon install, cold room/refrigeration, solar panels on roof Kenya)
- Service icon (SVG inline)
- Service name as large text
- Short punchy description (2-3 lines)
- "Learn More" button that expands/reveals full detail inline

Services:
**HVAC Systems**
"From split units to full central plant systems — we design, supply, install, and maintain HVAC infrastructure that delivers consistent climate control. Residential, commercial, and industrial."
Sub-services: Air Conditioning · Ventilation · Ducting · BMS Integration · Energy Audits · PPM Contracts

**Refrigeration Solutions**
"Cold rooms, blast freezers, display refrigeration, and industrial chillers — built to exact temperature specifications. Our cold chain solutions keep your product safe and your business compliant."
Sub-services: Cold Room Construction · Commercial Refrigeration · Industrial Cooling · Temperature Monitoring · System Upgrades

**Solar Energy**
"Kenya's sun is your greatest untapped asset. We design and install grid-tied, off-grid, and hybrid solar PV systems that cut your energy costs and future-proof your operations."
Sub-services: Solar PV Installation · Battery Storage · Solar Water Heating · Commercial Solar · Solar Maintenance

### 3. PRODUCTS SECTION — "Our Products"
Grid of product cards (responsive: 4 cols desktop, 2 tablet, 1 mobile)

Products to include (search Unsplash for images for each):
- Air Conditioning Units (split, cassette, VRF)
- Dehumidifiers
- Refrigeration Gases / Refrigerants
- Air Curtains
- Compressors (scroll, reciprocating)
- Capacitors & AC Spare Parts
- Cold Room Panels & Systems
- Commercial Fridges & Freezers
- Copper Fittings & Pipes
- Armaflex Insulation
- Oil Heaters
- Ventilation Fans
- Solar Panels (mono/poly PV)
- Solar Inverters
- Battery Storage Systems

Each card: image, product name, short one-liner description.

**Brands row** below the grid — logo-style text strip showing:
LG · Midea · Daikin · Carrier · Hisense · Bosch · Haier · Bitzer · Hitachi · Samsung · Copeland · York · Ramptons · Westpoint
(Render as styled text badges in a scrolling/marquee row on mobile, grid on desktop)

### 4. WHY CHOOSE WAVONEX — Stats + Value Props
Dark navy section.
4 stat counters (animated count-up on scroll):
- 100% In-House Technical Team
- 3 Core Service Lines
- 24/7 Emergency Support
- EA Regional Coverage

8 value proposition cards (icon + title + one line):
01 Certified Technical Team · 02 Integrated Service Model · 03 Energy-Efficient Design · 04 On-Time Delivery · 05 Premium Equipment · 06 Responsive Support · 07 Competitive Pricing · 08 Full Documentation

Pull quote in large type (yellow accent):
"When your systems fail, production stops. When your HVAC underperforms, people suffer. Wavonex exists to make sure none of that happens."

### 5. SECTORS WE SERVE
Icon grid (8 sectors):
Residential · Commercial · Industrial · Hospitality · Healthcare · Retail · Institutions · Food & Beverage
Each with a relevant SVG icon and one-line description.

### 6. CONTACT / CTA SECTION — "Ready to Engineer Your Solution?"
Full-width dark section.
Headline: "Ready to Engineer Your Solution?"
Sub: "Get a free assessment and quote. Our team responds within 2 hours."

Three contact action buttons stacked or side by side:
1. WhatsApp button (green, opens wa.me/254790155393) — "Chat on WhatsApp"
2. Call button (yellow) — "Call 0790 155 393" → tel:0790155393
3. Email button (outlined white) — "Email Us" → mailto:info@wavonex.co.ke

Also show contact details:
📞 0790 155 393
✉️ info@wavonex.co.ke
🌐 www.wavonex.co.ke
📍 Nairobi, Kenya

### 7. FOOTER
Dark charcoal. Logo top left. 
Three columns: Quick Links | Services | Contact
Bottom bar: "© 2026 Wavonex Ltd. All rights reserved. | Precision Performance | Nairobi, Kenya"

## Technical Requirements
- React with React Router (if multi-page) OR single-page smooth scroll
- Tailwind CSS OR plain CSS modules — your choice, but use the exact brand colours above
- Google Fonts: Barlow Condensed + DM Sans (import in index.html or CSS)
- Fully responsive: mobile-first
- Smooth scroll behavior
- Scroll-triggered animations (Intersection Observer for count-up, fade-in on scroll)
- WhatsApp floating button (bottom-right corner, always visible) → wa.me/254790155393
- All CTAs must be functional (tel:, mailto:, wa.me: links)
- Unsplash images via URL (https://images.unsplash.com/...) — pick relevant, high-quality photos
- No placeholder text — use real content from this brief throughout
- Meta title: "Wavonex Ltd | HVAC · Refrigeration · Solar | Nairobi, Kenya"
- Favicon: use /public/logo.jpeg

## Conversion Focus
Every section must end with a micro-CTA. The site's #1 goal is to get visitors to either:
- WhatsApp the company
- Call directly

Make these buttons prominent, repeated, and compelling. Use urgency language like "Get a Free Quote Today", "Speak to an Engineer Now", "24-Hour Response Guaranteed".

## File Structure
Standard Vite + React project structure. Main entry: src/main.jsx. Components in src/components/. Pages in src/pages/ if multi-page.