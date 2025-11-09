# Privacy Policy for OneDay Journal

**Effective Date:** November 8, 2025
**Last Updated:** November 8, 2025

## Introduction

DEVIGNITE LLC ("we," "our," or "us") operates the OneDay Journal mobile application (the "App"). This Privacy Policy explains our policies regarding the collection, use, and disclosure of information when you use our App.

## Our Privacy Commitment

**OneDay Journal collects ZERO user data.** We are committed to protecting your privacy. All your journal entries, photos, and personal information remain on your device and are never transmitted to our servers or any third parties.

## Information We Do NOT Collect

We do not collect, store, or transmit:
- Personal identification information
- Journal entries or content
- Photos or media files
- Device information
- Usage statistics or analytics
- Location data
- Crash reports
- Any other user data

**Your journal is yours and yours alone.**

## Local Data Storage

The following data is stored locally on your device only:

### Journal Entries
- **Content**: All your journal entries and text
- **Photos**: Images you attach to entries
- **Storage Location**: Device local storage (app private directory)
- **Access**: Only you can access this data through the App
- **Encryption**: Photos are compressed and stored in your app's secure directory

### Authentication Data
- **PIN Code**: Securely hashed using SHA-256 encryption before storage
- **Storage**: Encrypted storage using flutter_secure_storage
- **Biometric Data**: Managed entirely by your device's secure enclave (Face ID, Touch ID, fingerprint)
- **Important**: We never store your PIN in plain text, and biometric data never leaves your device

### App Settings
- **Preferences**: Theme (dark/light mode), font size, notification times
- **Statistics**: Entry count, word count, streaks (calculated locally)
- **Storage**: Local database using Hive (NoSQL)

## Permissions Requested

The App requests the following permissions:

### Camera (Optional)
- **Purpose**: To take photos for journal entries
- **Control**: Can be denied; app works without it
- **Privacy**: Photos are stored locally in app's private directory

### Storage
- **Purpose**: To save and retrieve journal entries and photos
- **Privacy**: Data stays on your device only
- **Backup**: You control data export via the backup feature

### Notifications (Optional)
- **Purpose**: Daily reminders to journal
- **Control**: Can be disabled anytime in Settings
- **Privacy**: Notifications are generated locally, no external services

### Biometric Authentication (Optional)
- **Purpose**: Unlock app with fingerprint/face recognition
- **Privacy**: Biometric data is handled by your device OS, not by the App
- **Control**: Can be disabled; PIN authentication always available

## Data Export & Backup

You have complete control over your data:

### Export Feature
- **Format**: JSON file containing your entries and metadata
- **Includes**: Entry dates, content, word counts, timestamps
- **Does NOT Include**: Actual image files (only image paths)
- **Location**: Saved to your device or shared via your choice of app
- **Privacy**: Export is local, no cloud upload

### Important Notes
- You are responsible for backing up your data regularly
- Uninstalling the app permanently deletes all local data
- We recommend exporting your data periodically for safekeeping

## Security Measures

We implement security measures to protect your data:

- **PIN Authentication**: Required for app access
- **SHA-256 Hashing**: PIN is hashed before storage
- **Encrypted Storage**: Sensitive data stored using platform encryption
- **Biometric Support**: Optional fingerprint/face unlock
- **No Network Access**: App operates entirely offline
- **Private Directory**: Photos stored in app-only accessible location

## Third-Party Services

**OneDay Journal does NOT use:**
- Analytics services (Google Analytics, Firebase Analytics, etc.)
- Advertising networks
- Tracking tools or cookies
- Cloud storage services
- Social media integrations
- Any external APIs or services

The app operates entirely offline without internet connectivity.

## Children's Privacy

OneDay Journal does not knowingly collect information from children under 13 years of age. The app is designed for personal use and does not require age verification. Parents should supervise children's use of the app if they allow access.

## Data Deletion

You have complete control over data deletion:

### Individual Entries
- Delete any journal entry at any time
- Associated photos are automatically deleted

### All Data
- Use "Delete All Entries" in Settings
- Permanently removes all journal entries and photos
- Cannot be undone

### App Uninstall
- Uninstalling removes all local data permanently
- Make sure to export your data before uninstalling

## Changes to This Policy

We may update this Privacy Policy from time to time. Changes will be reflected in the app and on this page with an updated "Last Updated" date. Continued use of the app after changes constitutes acceptance of the new policy.

## Data Portability

Your data is yours:
- Export anytime via the backup feature
- JSON format for easy parsing
- No vendor lock-in
- Import to other apps or services as you wish

## Your Rights

Under this Privacy Policy, you have the right to:
- Access all your data (stored locally on your device)
- Export your data at any time
- Delete your data whenever you want
- Control all app permissions
- Use the app completely offline

## Contact Information

For questions about this Privacy Policy or the App, please contact:

**DevIgnite LLC**
- Email: privacy@devignite.dev
- Website: www.devignite.dev

## Transparency

We believe in complete transparency:
- No hidden data collection
- No third-party sharing
- No cloud backups (unless you export manually)
- No analytics or tracking
- Complete data ownership

## Legal Compliance

This Privacy Policy complies with:
- General Data Protection Regulation (GDPR)
- California Consumer Privacy Act (CCPA)
- Children's Online Privacy Protection Act (COPPA)
- Other applicable privacy laws

## Summary

**In Plain English:**

✅ Your journal entries stay on your device
✅ We never see, collect, or store your data
✅ Photos are stored locally in a secure directory
✅ PIN is hashed with SHA-256, never stored in plain text
✅ No internet connection required
✅ No tracking, no analytics, no ads
✅ You own and control all your data
✅ Export anytime in JSON format

**Your Data, Your Privacy, Your Journal.**

---

If you have any questions or concerns about your privacy, please don't hesitate to contact us at privacy@devignite.dev.
