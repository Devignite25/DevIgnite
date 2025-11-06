# DevIgnite LLC - Official Website

**Igniting Ideas into Powerful Products**

A modern, bilingual (English/Spanish) company website built with React + Vite, showcasing our AI-powered applications and serving as a central hub for user support and contact.

🌐 **Live Site:** [devignite.dev](https://devignite.dev)

---

## 🔥 Features

### 🌍 Bilingual Support
- **Complete English and Spanish translations** for entire site
- **Flag-based language switcher** (🇺🇸/🇪🇸) in header
- **Persistent language preference** via localStorage
- **Seamless switching** without page reload
- Custom translation system with dot notation (`t('page.key')`)

### 📱 App Showcase
- Dynamic app catalog with status badges (Available, Coming Soon, In Development)
- **Professional app icon support** (images + emoji fallback)
- **App filtering system** by status
- Individual privacy policy pages for each app
- Ready-to-use App Store and Google Play download links
- Centralized app management in `src/data/apps.js`

### 📄 Privacy Policy System
- Dynamic routing: `/privacy/:appName`
- Markdown-based policy files for easy editing
- Fallback to default `PRIVACY_POLICY.md`
- Beautiful markdown rendering with custom styling
- Per-app privacy commitments

### 📊 Research Section
- Embedded PDF viewer for research papers
- Download and open in new tab options
- Responsive PDF display
- Fallback download link if viewer fails

### 📧 Contact Center
- **Formspree-integrated contact form**
- Success/error message handling
- Email, social media, and movement links
- Multi-purpose contact hub for app users
- Bilingual form labels and validation

### 🎨 Modern Design
- **Flame-themed gradient branding** (orange/red/yellow)
- Responsive mobile-first design
- Smooth animations and transitions
- **Tailwind CSS** utility-first styling
- Custom gradient backgrounds
- Logo as hero background
- Overflow logo design in compact header

---

## 🛠️ Tech Stack

- **Frontend Framework:** React 18
- **Build Tool:** Vite
- **Styling:** Tailwind CSS (custom flame theme)
- **Routing:** React Router v6
- **Icons:** Lucide React
- **Markdown:** React Markdown
- **Form Handling:** Formspree
- **State Management:** React Context API (i18n)
- **Internationalization:** Custom translation system

---

## 📁 Project Structure

```
devignite/
├── public/
│   ├── assets/
│   │   ├── FAA_paper.pdf           # Research paper
│   │   ├── icons/
│   │   │   └── mindful_icon.png    # App icons
│   │   └── privacy-policies/
│   │       ├── mindfulminute.md    # Per-app policies
│   │       └── PRIVACY_POLICY.md   # Default fallback
│   └── logo.png                     # Company logo (1024x1024)
├── src/
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Header.jsx          # Navigation + language switcher
│   │   │   ├── Footer.jsx          # Contact + social links
│   │   │   └── Layout.jsx          # Main layout wrapper
│   │   └── ui/
│   │       ├── AppCard.jsx         # App showcase card
│   │       ├── Button.jsx          # Reusable button
│   │       ├── Card.jsx            # Container component
│   │       ├── DownloadLinks.jsx   # App store buttons
│   │       └── LanguageSwitcher.jsx # Flag language toggle
│   ├── contexts/
│   │   └── LanguageContext.jsx     # Global language state
│   ├── data/
│   │   ├── apps.js                 # App definitions + helpers
│   │   └── siteConfig.js           # Site-wide configuration
│   ├── hooks/
│   │   └── useTranslation.js       # Translation hook
│   ├── pages/
│   │   ├── Home.jsx                # Landing page
│   │   ├── Apps.jsx                # App catalog with filters
│   │   ├── Contact.jsx             # Contact form
│   │   ├── Research.jsx            # PDF viewer
│   │   └── PrivacyPolicy.jsx       # Dynamic privacy pages
│   ├── translations/
│   │   ├── en.js                   # English translations
│   │   └── es.js                   # Spanish translations
│   ├── App.jsx                     # Main app component
│   ├── main.jsx                    # Entry point
│   └── index.css                   # Global styles + Tailwind
├── tailwind.config.js               # Custom flame theme
├── vite.config.js                   # Vite configuration
├── package.json
└── README.md
```

---

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ and npm
- Git

### Installation

1. **Clone the repository:**
```bash
git clone https://github.com/yourusername/devignite.git
cd devignite
```

2. **Install dependencies:**
```bash
npm install
```

3. **Start development server:**
```bash
npm run dev
```

4. **Open browser:**
   Navigate to `http://localhost:3000`

---

## 📜 Available Scripts

| Script | Description |
|--------|-------------|
| `npm run dev` | Start development server with hot reload (port 3000) |
| `npm run build` | Build production-ready bundle to `dist/` |
| `npm run preview` | Preview production build locally |
| `npm run lint` | Run ESLint to check code quality |

---

## 📱 Adding New Apps

1. **Open** `src/data/apps.js`

2. **Add new app** to the `apps` array:

```javascript
{
  id: 'your-app-id',              // Used in URL routing
  name: 'Your App Name',
  tagline: 'Brief tagline',
  description: 'Detailed description...',
  icon: '/assets/icons/app.png',  // Image path or emoji '📱'
  color: 'from-blue-500 to-purple-500', // Tailwind gradient
  features: [
    'Feature 1',
    'Feature 2',
    'Feature 3'
  ],
  status: 'coming-soon',          // 'available' | 'coming-soon' | 'in-development'
  appStoreUrl: '',                // Add when available
  playStoreUrl: '',               // Add when available
  hasPrivacyPolicy: true,
  tech: ['React Native', 'TypeScript', 'AI']
}
```

3. **Add app icon** (optional):
   - Place image in `public/assets/icons/`
   - Reference in `icon` field: `/assets/icons/your-icon.png`
   - Or use emoji: `icon: '🚀'`

4. **Add privacy policy** (optional):
   - Create `public/assets/privacy-policies/your-app-id.md`
   - Will be accessible at `/privacy/your-app-id`

---

## 📄 Adding Privacy Policies

1. **Create markdown file:**
```bash
public/assets/privacy-policies/{app-id}.md
```

2. **Set in app config:**
```javascript
hasPrivacyPolicy: true
```

3. **Auto-routing:**
   - Privacy policy automatically available at `/privacy/{app-id}`
   - Falls back to `PRIVACY_POLICY.md` if specific policy doesn't exist

**Example markdown structure:**
```markdown
# Privacy Policy for {App Name}

## Data Collection
We collect...

## Data Usage
Your data is used for...

## Third-Party Services
We use...

## Contact
Questions? Email us at...
```

---

## 🔗 Adding App Store Links

When your app launches:

1. **Update** `src/data/apps.js`
```javascript
{
  id: 'your-app',
  // ... other fields
  status: 'available',           // Change status
  appStoreUrl: 'https://apps.apple.com/app/...',
  playStoreUrl: 'https://play.google.com/store/apps/...'
}
```

2. **Download buttons automatically appear** on the Apps page

---

## 🌐 Adding Translations

### Adding New Translation Keys

1. **Add to English** (`src/translations/en.js`):
```javascript
export const en = {
  yourSection: {
    title: 'Your Title',
    description: 'Your description'
  }
}
```

2. **Add to Spanish** (`src/translations/es.js`):
```javascript
export const es = {
  yourSection: {
    title: 'Tu Título',
    description: 'Tu descripción'
  }
}
```

### Using Translations in Components

```javascript
import { useTranslation } from '../hooks/useTranslation'

const YourComponent = () => {
  const { t } = useTranslation()

  return (
    <h1>{t('yourSection.title')}</h1>
  )
}
```

### With Parameters

```javascript
// Translation file
privacy: {
  message: 'Privacy policy for {appName}'
}

// Component
t('privacy.message', { appName: 'MindfulMinute' })
```

---

## 🎨 Customizing Brand Colors

Brand colors are defined in `tailwind.config.js`:

```javascript
colors: {
  flame: {
    orange: '#FF6B35',
    red: '#E63946',
    yellow: '#FFB627',
  },
  dark: {
    bg: '#1A1A1A',
    card: '#1E1E1E',
  }
},
backgroundImage: {
  'gradient-flame': 'linear-gradient(135deg, #FF6B35 0%, #E63946 50%, #FFB627 100%)',
}
```

Use in components:
- `text-flame-orange`
- `bg-gradient-flame`
- `from-flame-orange to-flame-red`

---

## 📧 Contact Form Setup

The contact form uses **Formspree**. Update in `src/pages/Contact.jsx`:

```javascript
const FORMSPREE_ENDPOINT = 'https://formspree.io/f/your-form-id'
```

Get your Formspree ID:
1. Sign up at [formspree.io](https://formspree.io)
2. Create new form
3. Copy form ID
4. Update endpoint

---

## 🌐 Deployment

### Build for Production

```bash
npm run build
```

Output: `dist/` folder ready for deployment

### Deploy to GitHub Pages

1. **Install gh-pages:**
```bash
npm install --save-dev gh-pages
```

2. **Update `package.json`:**
```json
{
  "homepage": "https://devignite.dev",
  "scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d dist"
  }
}
```

3. **Create CNAME file:**
```bash
echo "devignite.dev" > public/CNAME
```

4. **Deploy:**
```bash
npm run deploy
```

### Custom Domain Setup (devignite.dev)

#### DNS Configuration

With your domain registrar, add these DNS records:

**Option A: A Records (Recommended)**
```
Type: A
Name: @
Value: 185.199.108.153

Type: A
Name: @
Value: 185.199.109.153

Type: A
Name: @
Value: 185.199.110.153

Type: A
Name: @
Value: 185.199.111.153

Type: CNAME
Name: www
Value: yourusername.github.io
```

**Option B: CNAME Record (Alternative)**
```
Type: CNAME
Name: @
Value: yourusername.github.io
```

#### GitHub Repository Settings

1. Go to **Settings** → **Pages**
2. Set **Source** to `gh-pages` branch
3. Add **Custom domain**: `devignite.dev`
4. Enable **Enforce HTTPS**

---

## 🚀 Other Deployment Options

### Vercel
1. Connect GitHub repository
2. Auto-detects Vite
3. Deploy with zero config

### Netlify
1. Drag & drop `dist/` folder
2. Or connect GitHub repo
3. Build command: `npm run build`
4. Publish directory: `dist`

### Cloudflare Pages
1. Connect GitHub repository
2. Build command: `npm run build`
3. Build output: `dist`

---

## 🔒 Privacy-First Philosophy

All DevIgnite apps showcase:

- **Local-first data processing**
- **No unnecessary tracking**
- **Complete user data ownership**
- **Transparent privacy policies**
- **Minimal data collection**

---

## 📦 Assets Checklist

Before deploying, ensure:

- [ ] `public/logo.png` - Company logo (1024x1024)
- [ ] `public/assets/FAA_paper.pdf` - Research paper
- [ ] `public/assets/icons/` - All app icons
- [ ] `public/assets/privacy-policies/` - All privacy policies
- [ ] `public/CNAME` - Custom domain file (if using)

---

## 🐛 Troubleshooting

### Build Errors

**Issue:** Module not found
```bash
rm -rf node_modules package-lock.json
npm install
```

**Issue:** Port 3000 already in use
```bash
# Kill process on port 3000
lsof -ti:3000 | xargs kill -9
npm run dev
```

### Deployment Issues

**Issue:** GitHub Pages 404
- Ensure `gh-pages` branch exists
- Check repository settings → Pages
- Verify CNAME file in `public/`

**Issue:** Custom domain not working
- Wait 24-48 hours for DNS propagation
- Verify DNS records with `dig devignite.dev`
- Check GitHub Pages settings

---

## 🎯 Features Roadmap

- [x] Bilingual English/Spanish support
- [x] App showcase with filtering
- [x] Privacy policy system
- [x] Research paper viewer
- [x] Contact form integration
- [x] Professional app icons (image support)
- [ ] Dark mode toggle
- [ ] Blog section
- [ ] User testimonials
- [ ] Newsletter subscription
- [ ] Analytics integration (privacy-focused)
- [ ] RSS feed

---

## 👥 Contributing

This is a private company website. For internal contributions:

1. Create feature branch from `main`
2. Make changes (test both languages!)
3. Test translations: switch to Spanish and verify
4. Run build: `npm run build`
5. Submit pull request with clear description

---

## 📞 Contact

**DevIgnite LLC**

- 📧 **Email:** devignite25@gmail.com
- 🐦 **Twitter/X:** [@DevIgniteLLC](https://x.com/DevIgniteLLC)
- 📱 **Reddit:** [r/DevIgnite](https://www.reddit.com/r/DevIgnite)
- 🌐 **Website:** [devignite.dev](https://devignite.dev)

---

## 📝 License

© 2025 DevIgnite LLC. All rights reserved.

---

## 🙏 Acknowledgments

- Flame gradient design inspired by innovation and transformation
- Built with modern React best practices
- Translations provided with cultural nuance
- PDF integration for research transparency
- Privacy-first approach in all implementations

---

**Built with 🔥 and passion by DevIgnite LLC**

*Igniting Ideas into Powerful Products*
