# Deployment Guide

## Quick Start: Deploy to Vercel

### Step 1: Push to GitHub

1. **Initialize Git repository** (if not already done)
   ```bash
   git init
   git add .
   git commit -m "Initial commit - Tria Contact List App"
   ```

2. **Create a new repository on GitHub**
   - Go to [github.com/new](https://github.com/new)
   - Name it (e.g., "tria-contact-list")
   - Don't initialize with README (we already have one)
   - Click "Create repository"

3. **Push your code**
   ```bash
   git remote add origin https://github.com/YOUR_USERNAME/tria-contact-list.git
   git branch -M main
   git push -u origin main
   ```

### Step 2: Deploy to Vercel

1. **Sign up/Login to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Sign up with your GitHub account (it's free!)

2. **Import Project**
   - Click "Add New..." → "Project"
   - Select "Import Git Repository"
   - Choose your GitHub repository
   - Vercel will automatically detect it's a Vite project

3. **Configure & Deploy**
   - Framework Preset: **Vite** (auto-detected)
   - Build Command: `npm run build` (auto-filled)
   - Output Directory: `dist` (auto-filled)
   - Click **"Deploy"**

4. **Done!** 🎉
   - Your app will be live in ~1 minute
   - You'll get a URL like: `https://your-project.vercel.app`
   - Every push to `main` will auto-deploy

### Environment Variables (if needed in future)

If you add environment variables later:

1. Go to your project in Vercel dashboard
2. Settings → Environment Variables
3. Add variables like `VITE_API_URL`
4. Redeploy

## Alternative: Deploy to Netlify

### Option 1: Drag & Drop

1. **Build the project**
   ```bash
   npm run build
   ```

2. **Deploy**
   - Go to [netlify.com](https://netlify.com)
   - Drag the `dist` folder to the deployment zone
   - Done! You'll get a live URL

### Option 2: Git Integration

1. **Connect Repository**
   - Go to [netlify.com](https://netlify.com)
   - Click "Add new site" → "Import an existing project"
   - Choose GitHub and select your repository

2. **Configure Build Settings**
   - Build command: `npm run build`
   - Publish directory: `dist`
   - Click "Deploy site"

3. **Done!**
   - Auto-deploys on every push to main

## Alternative: GitHub Pages

1. **Install gh-pages**
   ```bash
   npm install --save-dev gh-pages
   ```

2. **Update package.json**
   Add to `scripts`:
   ```json
   "predeploy": "npm run build",
   "deploy": "gh-pages -d dist"
   ```

   Add `homepage` (replace with your username and repo):
   ```json
   "homepage": "https://YOUR_USERNAME.github.io/tria-contact-list"
   ```

3. **Update vite.config.js**
   ```js
   export default defineConfig({
     plugins: [react()],
     base: '/tria-contact-list/' // Your repo name
   })
   ```

4. **Deploy**
   ```bash
   npm run deploy
   ```

5. **Enable GitHub Pages**
   - Go to repository Settings → Pages
   - Source: "Deploy from a branch"
   - Branch: `gh-pages` → `/ (root)`
   - Save

## Custom Domain (Optional)

### Vercel
1. Go to project settings → Domains
2. Add your custom domain
3. Follow DNS configuration instructions

### Netlify
1. Go to Site settings → Domain management
2. Add custom domain
3. Update DNS records as instructed

## Troubleshooting

### Build Fails on Vercel/Netlify

**Issue**: "Module not found" or similar

**Solution**: Make sure all imports use correct casing and extensions
```bash
# Test build locally first
npm run build
npm run preview
```

### Routes Don't Work (404 on refresh)

**Issue**: SPA routing issues

**Solution**: Add `_redirects` file to `public/` folder:
```
/*    /index.html   200
```

### Environment Variables Not Working

**Issue**: `process.env.REACT_APP_*` undefined

**Solution**: In Vite, use `import.meta.env.VITE_*` instead
- Prefix with `VITE_` not `REACT_APP_`
- Add to `.env` file for local dev
- Add to Vercel/Netlify dashboard for production

## Monitoring & Analytics

### Add Vercel Analytics (Free)

1. Install package:
   ```bash
   npm install @vercel/analytics
   ```

2. Add to `src/main.jsx`:
   ```js
   import { inject } from '@vercel/analytics'
   inject()
   ```

3. Redeploy - analytics will appear in Vercel dashboard

## Performance Optimization

Your build is already optimized with:
- ✅ Vite's automatic code splitting
- ✅ Tree shaking for unused code
- ✅ Minification
- ✅ Asset optimization

For even better performance:
1. Enable compression on your hosting platform (usually automatic)
2. Use a CDN (Vercel/Netlify include this by default)
3. Add caching headers (automatic on most platforms)

## CI/CD Pipeline (Advanced)

Both Vercel and Netlify provide automatic CI/CD out of the box:
- Auto-deploy on push to main
- Preview deployments for PRs
- Build logs and error tracking
- Rollback capability

No additional setup needed!

---

**Questions?** Check the main README.md or platform documentation.


