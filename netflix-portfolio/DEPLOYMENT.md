# 🚀 Production Deployment Guide

## Quick Deploy to Vercel (Recommended)

### 1. Prepare Your Repository
```bash
# Initialize git if not already done
git init
git add .
git commit -m "Initial commit: Netflix Portfolio"

# Push to GitHub
git remote add origin https://github.com/yourusername/netflix-portfolio.git
git push -u origin main
```

### 2. Deploy to Vercel
1. Go to [vercel.com](https://vercel.com) and sign in
2. Click "New Project"
3. Import your GitHub repository
4. Vercel will auto-detect Next.js settings
5. Click "Deploy"

### 3. Configure Environment Variables (Optional)
In Vercel dashboard, add environment variables:
- `NEXT_PUBLIC_SITE_URL`: Your domain URL
- `NEXT_PUBLIC_GA_ID`: Google Analytics ID (optional)

## Alternative Deployment Options

### Deploy to Netlify
1. Connect your GitHub repository to Netlify
2. Build command: `npm run build`
3. Publish directory: `.next`
4. Deploy!

### Deploy to Railway
1. Connect your GitHub repository
2. Railway will auto-detect Next.js
3. Deploy automatically

### Deploy to AWS Amplify
1. Connect your repository
2. Build settings: Auto-detect
3. Deploy!

## Pre-Deployment Checklist

### ✅ Code Quality
- [ ] No TypeScript errors
- [ ] ESLint passes
- [ ] Prettier formatting applied
- [ ] All images optimized
- [ ] No console.log statements in production

### ✅ Performance
- [ ] Images use next/image with proper sizing
- [ ] Lazy loading implemented
- [ ] Bundle size optimized
- [ ] Core Web Vitals optimized

### ✅ SEO & Accessibility
- [ ] Meta tags configured
- [ ] Open Graph tags added
- [ ] Sitemap generated
- [ ] Robots.txt configured
- [ ] Alt text for all images
- [ ] Keyboard navigation working
- [ ] Focus indicators visible

### ✅ Content
- [ ] Update `content/experiences.json` with your data
- [ ] Replace placeholder images
- [ ] Update metadata in `app/layout.tsx`
- [ ] Test all links and navigation

## Production Optimizations

### 1. Update Domain URLs
Replace `https://your-domain.com` in:
- `app/layout.tsx` (Open Graph URLs)
- `app/sitemap.ts`
- `app/robots.ts`

### 2. Add Analytics (Optional)
```bash
npm install @vercel/analytics
```

Add to `app/layout.tsx`:
```tsx
import { Analytics } from '@vercel/analytics/react'

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
```

### 3. Add Google Analytics (Optional)
```bash
npm install gtag
```

### 4. Performance Monitoring
Add to `next.config.js`:
```javascript
const nextConfig = {
  // ... existing config
  experimental: {
    instrumentationHook: true,
  },
}
```

## Post-Deployment

### 1. Test Everything
- [ ] Home page loads correctly
- [ ] All experience cards work
- [ ] Detail pages load properly
- [ ] Images load and are optimized
- [ ] Mobile responsiveness
- [ ] Keyboard navigation
- [ ] Filter functionality

### 2. SEO Verification
- [ ] Google Search Console setup
- [ ] Sitemap submitted
- [ ] Meta tags working
- [ ] Social sharing previews

### 3. Performance Check
- [ ] Lighthouse score > 90
- [ ] Core Web Vitals green
- [ ] Images optimized
- [ ] Fast loading times

## Custom Domain Setup

### Vercel
1. Go to Project Settings → Domains
2. Add your custom domain
3. Update DNS records as instructed
4. Update URLs in code

### Netlify
1. Go to Domain Settings
2. Add custom domain
3. Configure DNS
4. Update URLs in code

## Monitoring & Maintenance

### 1. Set up monitoring
- Vercel Analytics
- Google Analytics
- Error tracking (Sentry)

### 2. Regular updates
- Update dependencies monthly
- Check for security updates
- Monitor performance metrics

### 3. Content updates
- Update `experiences.json` as needed
- Add new images
- Refresh content regularly

## Troubleshooting

### Common Issues
1. **Build fails**: Check TypeScript errors
2. **Images not loading**: Verify image URLs
3. **Styling issues**: Check Tailwind CSS build
4. **Performance slow**: Optimize images and bundle

### Support
- Check Vercel/Netlify logs
- Use browser dev tools
- Test locally first
- Check Next.js documentation

---

**Your Netflix Portfolio is now production-ready! 🎉**
