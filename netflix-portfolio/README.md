# 🚀 Netflix-Themed Portfolio Website

A fully working, Netflix-inspired personal portfolio where each profile card represents a work experience. Clicking a card opens a cinematic detail page with hero art, "episodes" as projects, skills, awards, and links.

## ✨ Features

- **Netflix-inspired Design**: Dark theme with glassmorphism cards and cinematic layouts
- **Interactive Experience Cards**: Hover effects with Framer Motion animations
- **Cinematic Detail Pages**: Hero sections with backdrop images and episode carousels
- **Responsive Design**: Works perfectly on mobile, tablet, and desktop
- **Keyboard Navigation**: Arrow keys to navigate between cards
- **Filter System**: Filter experiences by category (All, PM, Design, Visualization)
- **Modern Tech Stack**: Next.js 14, TypeScript, Tailwind CSS, shadcn/ui, Framer Motion

## 🛠️ Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS with custom Netflix-inspired design system
- **UI Components**: shadcn/ui (Button, Card, Badge, Dialog, etc.)
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Theme**: next-themes for dark/light mode support
- **Images**: Optimized with next/image

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ 
- npm, yarn, or pnpm

### Installation

1. **Clone or download the project**
   ```bash
   cd netflix-portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

```
netflix-portfolio/
├── app/
│   ├── (site)/
│   │   ├── page.tsx                # Home: Netflix grid of experience profiles
│   │   ├── experience/
│   │   │   └── [slug]/page.tsx     # Detail page per experience
│   │   └── layout.tsx
│   └── layout.tsx
├── components/
│   ├── ui/                         # shadcn/ui components
│   ├── ProfileCard.tsx
│   ├── ExperienceHero.tsx
│   ├── EpisodeCarousel.tsx
│   ├── SkillBadges.tsx
│   ├── Navbar.tsx
│   ├── ThemeToggle.tsx
│   ├── Skeletons.tsx
│   └── KeyboardNavigation.tsx
├── content/
│   ├── experiences.json            # Single source of truth for data
│   └── images/                     # Image assets
├── lib/
│   ├── data.ts                     # Data loading and validation
│   ├── types.ts                    # TypeScript type definitions
│   └── utils.ts                    # Utility functions
├── styles/
│   └── globals.css                 # Global styles and CSS variables
└── public/
    └── favicon.svg
```

## 🎨 Customization

### 1. Update Your Information

Edit `content/experiences.json` to add your own experiences:

```json
{
  "owner": {
    "name": "Your Name",
    "tagline": "Your Professional Tagline",
    "avatar": "path/to/your/avatar.jpg"
  },
  "experiences": [
    {
      "slug": "unique-slug",
      "title": "Company Name",
      "role": "Your Role",
      "period": "2024 — Present",
      "location": "City, State",
      "poster": "path/to/poster.jpg",
      "backdrop": "path/to/backdrop.jpg",
      "logo": "path/to/logo.png",
      "summary": "Brief description of your role and achievements.",
      "skills": ["Skill 1", "Skill 2", "Skill 3"],
      "links": [
        {"label": "Company Website", "href": "https://company.com"}
      ],
      "episodes": [
        {
          "title": "Project Name",
          "thumb": "path/to/thumbnail.jpg",
          "description": "Project description and achievements.",
          "metrics": [
            {"label": "Metric Name", "value": "Value"}
          ]
        }
      ]
    }
  ]
}
```

### 2. Add Your Images

1. **Option A: Use Unsplash URLs** (Current setup)
   - The project is configured to use Unsplash URLs directly
   - Images are optimized automatically by Next.js

2. **Option B: Download and use local images**
   - Open `content/images/image-preview.html` in your browser
   - Download the images and save them to `content/images/`
   - Update the JSON file to use local paths (e.g., `/content/images/your-image.jpg`)

3. **Option C: Use your own images**
   - Replace the image URLs in `experiences.json` with your own image paths
   - Ensure images are optimized for web (WebP format recommended)

### 3. Customize Design

**Colors and Theme:**
- Edit `styles/globals.css` to modify CSS variables
- Update `tailwind.config.ts` for custom color schemes

**Animations:**
- Modify Framer Motion animations in components
- Adjust timing and easing in `components/ProfileCard.tsx` and other components

**Layout:**
- Customize grid layouts in `app/(site)/page.tsx`
- Modify hero sections in `components/ExperienceHero.tsx`

## 🎯 Key Components

### ProfileCard
- Netflix-style experience cards with hover effects
- Poster images with logo overlays
- Smooth animations and transitions

### ExperienceHero
- Cinematic hero sections with backdrop images
- Gradient overlays and floating content
- Responsive design for all screen sizes

### EpisodeCarousel
- Horizontal scrolling project showcase
- Keyboard navigation support
- Smooth scrolling with snap points

### SkillBadges
- Interactive skill tags with tooltips
- Hover effects and animations
- Consistent styling across the site

## 🚀 Deployment

### Deploy to Vercel (Recommended)

1. **Push to GitHub**
   ```bash
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

2. **Deploy to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Import your GitHub repository
   - Vercel will automatically detect Next.js and deploy

3. **Custom Domain (Optional)**
   - Add your custom domain in Vercel dashboard
   - Update DNS settings as instructed

### Deploy to Other Platforms

The project can be deployed to any platform that supports Next.js:
- **Netlify**: Connect your GitHub repo
- **Railway**: Deploy directly from GitHub
- **AWS Amplify**: Connect your repository

## 🔧 Development

### Available Scripts

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint
npm run format       # Format code with Prettier
```

### Code Quality

- **ESLint**: Configured with Next.js recommended rules
- **Prettier**: Code formatting with Tailwind CSS plugin
- **TypeScript**: Strict type checking enabled

## 📱 Responsive Design

The portfolio is fully responsive with breakpoints:
- **Mobile**: 320px - 768px
- **Tablet**: 768px - 1024px  
- **Desktop**: 1024px+

## ♿ Accessibility

- Semantic HTML structure
- Keyboard navigation support
- Screen reader friendly
- High contrast ratios
- Focus indicators
- Alt text for all images

## 🎨 Design System

### Colors
- **Primary**: Rose-600 (#e11d48)
- **Background**: Black (#000000)
- **Cards**: Gray-900 with transparency
- **Text**: White with gray variants

### Typography
- **Font**: Inter (Google Fonts)
- **Headings**: Bold, large sizes
- **Body**: Regular weight, readable sizes

### Spacing
- **Container**: Max-width with responsive padding
- **Grid**: CSS Grid with responsive columns
- **Gaps**: Consistent spacing scale

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🆘 Support

If you encounter any issues:

1. Check the [Issues](https://github.com/your-repo/issues) page
2. Create a new issue with detailed information
3. Include screenshots and error messages

## 🎉 Acknowledgments

- **Netflix** for design inspiration
- **shadcn/ui** for beautiful components
- **Framer Motion** for smooth animations
- **Unsplash** for free stock images
- **Next.js** team for the amazing framework

---

**Built with ❤️ using Next.js, TypeScript, and Tailwind CSS**
