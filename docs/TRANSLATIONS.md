# Bilingual Translation System

## 🌍 Overview

Your DevIgnite site now supports **English** and **Spanish** with an elegant flag switcher!

## ✨ Features

- 🇺🇸 English and 🇪🇸 Spanish translations
- Flag toggle switcher in header (desktop and mobile)
- Automatic language persistence in localStorage
- Smooth hot-reloading when switching languages
- Professional translations for all major sections

## 🎯 What's Translated

### ✅ Fully Translated Pages:
- **Home Page** - Hero, About, Featured Apps, Movement
- **Header Navigation** - All menu items
- **Footer** - Contact, Social, Movement sections
- **App Cards** - Status badges, buttons, privacy policy links

### 📝 Sections Covered:
- Navigation menu
- Hero section
- About section with values
- Apps showcase
- Movement section
- Footer
- App status badges
- Common UI elements

## 🔧 How It Works

### 1. Language Context
The `LanguageContext` wraps the entire app and provides:
- Current language state
- Language toggle function
- Automatic localStorage persistence

### 2. Translation Files
Located in `src/translations/`:
- `en.js` - English translations
- `es.js` - Spanish translations
- `index.js` - Export helper

### 3. useTranslation Hook
Use in any component:
```javascript
import { useTranslation } from '../hooks/useTranslation'

const MyComponent = () => {
  const { t } = useTranslation()

  return <h1>{t('hero.tagline')}</h1>
}
```

## 📖 Adding New Translations

### 1. Add to English file (`src/translations/en.js`):
```javascript
export const en = {
  // ... existing
  newSection: {
    title: 'My New Title',
    description: 'My description'
  }
}
```

### 2. Add to Spanish file (`src/translations/es.js`):
```javascript
export const es = {
  // ... existing
  newSection: {
    title: 'Mi Nuevo Título',
    description: 'Mi descripción'
  }
}
```

### 3. Use in component:
```javascript
<h1>{t('newSection.title')}</h1>
<p>{t('newSection.description')}</p>
```

## 🎨 Language Switcher

The switcher appears in:
- **Desktop**: Header right side, next to navigation
- **Mobile**: Inside the hamburger menu

Features:
- Flag icons (🇺🇸 🇪🇸)
- Active state highlighting
- Smooth transitions

## 📱 Pages Still Using Static Text

Some pages aren't translated yet (you can add them later):
- Apps page (filters and main content)
- Contact page
- Privacy Policy page
- Research page

## 🚀 Quick Translation Guide

To translate a new page:

1. Import the hook:
```javascript
import { useTranslation } from '../hooks/useTranslation'
```

2. Use it in the component:
```javascript
const MyPage = () => {
  const { t } = useTranslation()
  // ... component code
}
```

3. Replace static text:
```javascript
// Before:
<h1>Welcome</h1>

// After:
<h1>{t('page.welcome')}</h1>
```

4. Add translations to both `en.js` and `es.js`

## 💡 Tips

- Keep translation keys organized by section
- Use dot notation for nested translations (e.g., `'nav.home'`)
- Always add translations to BOTH files
- Test by switching languages in the UI
- Language preference is saved automatically

## 🎯 File Structure

```
src/
├── contexts/
│   └── LanguageContext.jsx     # Language state management
├── translations/
│   ├── en.js                   # English translations
│   ├── es.js                   # Spanish translations
│   └── index.js                # Exports
├── hooks/
│   └── useTranslation.js       # Translation hook
└── components/
    └── ui/
        └── LanguageSwitcher.jsx # Flag toggle component
```

## 🔄 How Language Switching Works

1. User clicks flag in switcher
2. LanguageContext updates state
3. New language saved to localStorage
4. Document `lang` attribute updated
5. All components re-render with new translations
6. On reload, saved language is restored

---

Built with 🔥 by DevIgnite LLC
