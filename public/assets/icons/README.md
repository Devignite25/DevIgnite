# App Icons

Place your app icons in this directory.

## Naming Convention

Name your icon files after the app ID from `src/data/apps.js`:

- `mindfulminute.png` - For MindfulMinute app
- `clarafixer.png` - For ClaraFixer app
- `kaspa-miner-pro.png` - For KASPA Miner Pro app
- etc.

## Recommended Specs

- **Format**: PNG with transparency
- **Size**: 512x512px or 1024x1024px
- **Background**: Transparent (the gradient background is applied via CSS)
- **Design**: Keep the icon design simple and clear

## Usage

In `src/data/apps.js`, update the `icon` field to use the path:

```javascript
{
  id: 'your-app-id',
  name: 'Your App Name',
  icon: '/assets/icons/your-app-id.png',  // Use image path instead of emoji
  // ... other fields
}
```

## Fallback to Emojis

If you don't have a custom icon yet, you can still use emojis:

```javascript
{
  id: 'your-app-id',
  name: 'Your App Name',
  icon: '🚀',  // Emoji works too!
  // ... other fields
}
```
