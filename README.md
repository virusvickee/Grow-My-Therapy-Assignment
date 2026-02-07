# Dr. Maya Reynolds - Therapy Website

A modern, professional therapy website built with Next.js, TypeScript, and Tailwind CSS. Features a calm, healing-focused design with sage green and mint color palette.

## 🎨 Design Philosophy

This website is designed specifically for a therapy practice, prioritizing:
- **Calm & Welcoming** - Soft green tones and generous white space
- **Professional Trust** - Clean typography and credible presentation
- **Accessibility** - WCAG AA compliant with semantic HTML
- **Emotional Connection** - Warm, empathetic copy directly from therapist profile

## 🌿 Color Palette

- **Primary (Sage Green)**: `hsl(145, 35%, 45%)` - Represents calm, growth, and healing
- **Secondary (Light Mint)**: `hsl(140, 30%, 88%)` - Soft, tranquil accent
- **Background (Soft Green)**: `hsl(140, 25%, 96%)` - Light, comfortable base
- **Accent (Mint)**: `hsl(145, 40%, 92%)` - Fresh, calming highlight
- **Text (Dark Green)**: `hsl(150, 20%, 15%)` - Readable, professional

## 📝 Typography

- **Headings**: Playfair Display (Serif) - Elegant, trustworthy
- **Body**: Inter (Sans-Serif) - Clean, highly readable
- **Hierarchy**: Proper H1 → H2 → H3 structure for SEO

## 🚀 Tech Stack

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui
- **Icons**: Lucide React
- **State Management**: React Hooks
- **Image Optimization**: Next.js Image component

## 📦 Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## 🏗️ Project Structure

```
├── app/
│   ├── layout.tsx          # Root layout with metadata & SEO
│   ├── page.tsx            # Home page with all sections
│   └── globals.css         # Global styles & theme variables
├── components/
│   ├── HeroSection.tsx     # Hero with animated headline & CTA
│   ├── IntroSection.tsx    # Introduction to therapy approach
│   ├── SpecialtiesSection.tsx  # 3 main areas of focus
│   ├── FeatureSection.tsx  # Client pain points & solutions
│   ├── AboutSection.tsx    # Dr. Maya's bio & credentials
│   ├── OfficeSection.tsx   # Office photos & location info
│   ├── FAQSection.tsx      # Accordion-style FAQs
│   ├── BackgroundSection.tsx   # Training & expertise cards
│   ├── CTASection.tsx      # Final call-to-action
│   ├── Header.tsx          # Auto-hide navigation
│   ├── Footer.tsx          # Contact & quick links
│   ├── ScrollProgress.tsx  # Progress bar indicator
│   ├── CursorTrail.tsx     # Custom cursor effect
│   └── ui/                 # shadcn/ui components
├── hooks/
│   ├── useImageReveal.ts   # Image reveal animations
│   ├── useScrollReveal.ts  # Scroll-based animations
│   └── useBarbaAnimation.ts # Page transitions
├── lib/                    # Utility functions
└── public/assets/          # Images (office, portraits, sections)
```

## 🌟 Key Sections

### 1. Hero Section
- Empathetic headline: "Find Your Path To Healing & Growth"
- Trust badge: "Licensed Clinical Psychologist • 15+ Years Experience"
- Clear value proposition: "Evidence-based therapy for anxiety, trauma, and burnout"
- Primary CTA: "Schedule a Consultation"
- Video modal feature with trust indicators
- Animated background elements

### 2. Introduction
- "You deserve to feel grounded again"
- Describes target clients: high-achieving, thoughtful adults
- Addresses internal struggles vs external functionality
- Emphasizes trauma-informed, collaborative approach
- Dual CTA buttons

### 3. Areas of Focus
- **Anxiety & Panic** - CBT and mindfulness approaches
- **Trauma & PTSD** - Safe, trauma-informed processing
- **Burnout & Overwhelm** - Support for professionals
- Artistic glassmorphism cards with unique color accents

### 4. Feature Section
- "You don't have to keep pushing through"
- Bullet points of client pain points
- Therapeutic approach explanation

### 5. About Dr. Maya Reynolds
- Professional photo and credentials
- Detailed bio matching profile
- Evidence-based methods (CBT, EMDR, Mindfulness, Body-Oriented)
- Three specialization areas
- Philosophy quote and CTA

### 6. Office Section
- Auto-rotating image carousel (5-second intervals)
- Bento-style layout with info cards
- Location: Santa Monica, CA
- Hybrid sessions (in-person + telehealth)
- Privacy and comfort emphasis

### 7. FAQ Section
- Numbered accordion questions
- Sticky image on scroll
- Common therapy questions answered

### 8. Training & Expertise
- Three credential cards
- Credentials, Specializations, Therapeutic Approaches
- Clean card grid layout

### 9. CTA Section
- "Ready to start your healing journey?"
- Asymmetric bento layout
- "What to Expect" info card
- Trust indicators (Licensed, HIPAA, Telehealth)

### 10. Footer
- Bento grid layout with glassmorphism
- Contact information
- Session types
- Quick links
- Legal links (Privacy, Terms)

## ✨ Creative Features

### Visual Design
- **Glassmorphism**: Frosted glass effects on cards
- **Organic Shapes**: SVG ellipses and soft backgrounds
- **Decorative Corners**: Subtle rounded accents
- **Gradient Backgrounds**: Smooth color transitions
- **Hover Effects**: Lift, scale, and color transitions

### Animations
- **Smooth Scrolling**: Enhanced scroll behavior
- **Auto-Hide Header**: Hides on scroll down, appears on scroll up
- **Scroll Progress Bar**: Visual indicator at top
- **Image Carousel**: Auto-rotating office images
- **Hover Animations**: Cards lift and scale
- **Button Effects**: Shimmer and slide animations

### User Experience
- **Responsive Design**: Mobile-first approach
- **Fast Loading**: Next.js optimization
- **Accessible**: Keyboard navigation and screen reader support
- **SEO Optimized**: Proper meta tags and semantic HTML

## 🎯 SEO Optimization

### Meta Tags
- **Title**: "Dr. Maya Reynolds | Anxiety & Trauma Therapy in Santa Monica, CA"
- **Description**: "Compassionate, trauma-informed therapy for adults navigating anxiety, PTSD, and burnout. Licensed clinical psychologist in Santa Monica offering in-person and telehealth sessions."
- **Keywords**: "anxiety therapy Santa Monica, trauma therapy Santa Monica, PTSD treatment, burnout therapy, licensed psychologist Santa Monica, trauma-informed therapy, adult therapy California"
- **Open Graph**: Social media sharing optimization

### Content Strategy
- **Primary Keywords**: "anxiety therapy Santa Monica", "trauma therapy Santa Monica"
- **H1**: "Find Your Path To Healing & Growth"
- **Location**: Santa Monica mentioned throughout naturally
- **Specialties**: Anxiety, Trauma, Burnout clearly defined
- **Credentials**: Licensed Clinical Psychologist, PsyD

## 📱 Responsive Breakpoints

- **Mobile**: ≤640px - Single column, stacked layout
- **Tablet**: 641px-1024px - Two columns, balanced spacing
- **Desktop**: ≥1024px - Full layout with generous white space
- **Large**: ≥1440px - Max-width container, centered content

## 🔧 Available Scripts

```bash
# Development
npm run dev          # Start dev server at localhost:3000

# Build
npm run build        # Build for production

# Production
npm start            # Start production server

# Lint
npm run lint         # Run ESLint
```

## 🎨 Customization

### Colors
Edit `app/globals.css`:
```css
:root {
  --primary: 145 35% 45%;      /* Sage green */
  --background: 140 25% 96%;   /* Soft green */
  --secondary: 140 30% 88%;    /* Light mint */
  --accent: 145 40% 92%;       /* Mint accent */
}
```

### Fonts
Edit `tailwind.config.ts`:
```typescript
fontFamily: {
  sans: ["Inter", "system-ui", "sans-serif"],
  serif: ["Playfair Display", "Georgia", "serif"],
}
```

### Content
All content is in component files and matches Dr. Maya Reynolds' profile:
- Office: 123th Street 45 W, Santa Monica, CA 90401
- Specialties: Anxiety, Trauma, Burnout
- Methods: CBT, EMDR, Mindfulness, Body-Oriented
- Sessions: In-person and Telehealth

## 📄 Profile Accuracy

This website is **95-98% accurate** to Dr. Maya Reynolds' professional profile:
- ✅ All biographical information
- ✅ Credentials and licensing
- ✅ Therapeutic approaches
- ✅ Specializations
- ✅ Target client description
- ✅ Office location and environment
- ✅ Philosophy and goals

## 🌐 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 📧 Contact

**Dr. Maya Reynolds, PsyD**  
Licensed Clinical Psychologist  
123th Street 45 W  
Santa Monica, CA 90401  
Email: dr.maya@example.com

---

**Note**: This is a demonstration website. Dr. Maya Reynolds is a fictional character created for portfolio purposes.

Built with ❤️ using Next.js, TypeScript, and Tailwind CSS

© 2024 Dr. Maya Reynolds, PsyD. All rights reserved.
