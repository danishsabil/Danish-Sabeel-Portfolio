# 🚀 Netflix Portfolio Setup Guide

## ⚠️ **Node.js Required**

The error you're seeing (`MODULE_NOT_FOUND`) occurs because Node.js is not installed or not in your system PATH.

## 📋 **Quick Setup Steps**

### 1. **Install Node.js**
1. Go to [nodejs.org](https://nodejs.org/)
2. Download the **LTS version** (recommended)
3. Run the installer and follow the setup wizard
4. **Restart your terminal/command prompt** after installation

### 2. **Verify Installation**
Open a new terminal/command prompt and run:
```bash
node --version
npm --version
```
You should see version numbers (e.g., `v18.17.0` and `9.6.7`)

### 3. **Install Dependencies**
Navigate to your project folder and run:
```bash
cd netflix-portfolio
npm install
```

### 4. **Start Development Server**
```bash
npm run dev
```

### 5. **Open in Browser**
Navigate to `http://localhost:3000`

## 🔧 **Alternative Setup Methods**

### **Option A: Using Yarn (if you prefer)**
```bash
# Install Yarn globally
npm install -g yarn

# Install dependencies
yarn install

# Start development server
yarn dev
```

### **Option B: Using pnpm (if you prefer)**
```bash
# Install pnpm globally
npm install -g pnpm

# Install dependencies
pnpm install

# Start development server
pnpm dev
```

## 🐛 **Troubleshooting**

### **If you still get MODULE_NOT_FOUND errors:**

1. **Clear cache and reinstall:**
   ```bash
   rm -rf node_modules package-lock.json
   npm install
   ```

2. **Check Node.js version:**
   ```bash
   node --version
   ```
   Should be 18+ for Next.js 14

3. **Verify npm is working:**
   ```bash
   npm --version
   ```

### **If the server starts but shows errors:**

1. **Check the terminal output** for specific error messages
2. **Look for missing dependencies** in the error logs
3. **Try building the project:**
   ```bash
   npm run build
   ```

## 📁 **Project Structure**
```
netflix-portfolio/
├── app/                    # Next.js app router
├── components/             # React components
├── content/               # Data and images
├── lib/                  # Utilities and types
├── styles/               # Global styles
├── package.json           # Dependencies
└── next.config.js        # Next.js configuration
```

## 🎯 **What You'll See**

Once everything is working, you'll see:
- **Home Page**: Netflix-style grid of experience cards
- **Experience Details**: Cinematic detail pages with episodes
- **Responsive Design**: Works on mobile, tablet, desktop
- **Smooth Animations**: Framer Motion animations
- **Dark Theme**: Netflix-inspired design

## 🚀 **Ready to Deploy**

Once the development server is running:
1. **Test everything** works locally
2. **Customize content** in `content/experiences.json`
3. **Deploy to Vercel** (recommended) or other platforms

## 📞 **Need Help?**

If you're still having issues:
1. **Check Node.js installation** - restart terminal after installing
2. **Verify you're in the right directory** - should contain `package.json`
3. **Try a different terminal** - sometimes PATH issues persist
4. **Check for antivirus interference** - some antivirus software blocks npm

---

**Once Node.js is installed, the portfolio will work perfectly! 🎉**
