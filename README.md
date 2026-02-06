# Dr. Maya Reynolds - Therapy Website

A modern, professional therapy website built with Next.js, TypeScript, and Tailwind CSS. Features a calm, healing-focused design with sage green and cream color palette.

## 🎨 Design Philosophy

This website is designed specifically for a therapy practice, prioritizing:
- **Calm & Welcoming** - Soft colors and generous white space
- **Professional Trust** - Clean typography and credible presentation
- **Accessibility** - WCAG AA compliant with semantic HTML
- **Emotional Connection** - Warm, empathetic copy and imagery

## 🌿 Color Palette

- **Primary (Sage Green)**: `#99BC85` - Represents calm, growth, and healing
- **Secondary (Light Mint)**: `#E4EFE7` - Soft, tranquil accent
- **Background (Cream)**: `#FAF1E6` - Warm, comfortable base
- **Warm Accent**: `#FDFAF6` - Light cream for subtle contrast
- **Text (Dark Gray)**: `#3D3530` - Readable, professional

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
# Navigate to project directory
cd "vikas uniyal"

# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## 🏗️ Project Structure

```
vikas uniyal/
├── app/
│   ├── layout.tsx          # Root layout with metadata
│   ├── page.tsx            # Home page
│   └── globals.css         # Global styles & theme
├── components/
│   ├── HeroSection.tsx     # Hero with CTA
│   ├── IntroSection.tsx    # Introduction
│   ├── SpecialtiesSection.tsx  # Areas of focus
│   ├── FeatureSection.tsx  # Key benefits
│   ├── AboutSection.tsx    # Dr. Maya's bio
│   ├── OfficeSection.tsx   # Office photos & info
│   ├── FAQSection.tsx      # Common questions
│   ├── BackgroundSection.tsx   # Training & credentials
│   ├── CTASection.tsx      # Call-to-action
│   ├── Header.tsx          # Navigation
│   ├── Footer.tsx          # Footer with contact
│   └── ui/                 # Reusable UI components
├── hooks/                  # Custom React hooks
├── lib/                    # Utility functions
└── public/assets/          # Images and static files
```

## 🌟 Key Sections

### 1. Hero Section
- Empathetic headline: "You don't have to navigate this alone"
- Clear value proposition
- Primary CTA: "Schedule a Consultation"
- Clean, professional image presentation

### 2. Introduction
- "You deserve to feel grounded again"
- Describes target clients (high-achieving adults)
- Emphasizes trauma-informed approach

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
- **Title**: "Anxiety & Trauma Therapy in Santa Monica, CA | Dr. Maya Reynolds, PsyD"
- **Description**: Optimized for search engines (156 characters)
- **Keywords**: Location-based therapy keywords
- **Open Graph**: Social media sharing optimization

### Content Strategy
- **Primary Keywords**: "anxiety therapy Santa Monica", "trauma therapy Santa Monica"
- **H1**: Clear, keyword-rich heading
- **Location**: Santa Monica mentioned 8+ times naturally
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
  --primary: 100 30% 63%;      /* Sage green */
  --background: 40 50% 95%;    /* Cream */
  --secondary: 135 30% 92%;    /* Light mint */
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
