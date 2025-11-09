export const apps = [
  {
    id: 'oneday-journal',
    name: 'OneDay Journal',
    tagline: 'Your Private Daily Journal',
    description: 'Beautiful, secure daily journaling with photos, streaks, and PDF yearbooks. Your entries stay private on your device.',
    icon: '/assets/icons/oneday_journal.png',
    color: 'from-blue-400 to-orange-300',
    features: [
      'Local-only data storage',
      'PIN & biometric security',
      'Photo attachments',
      'Daily streak tracking',
      'PDF yearbook generation',
      'No cloud, no tracking'
    ],
    status: 'available',
    appStoreUrl: '', // Add when published
    playStoreUrl: '', // Add when published
    hasPrivacyPolicy: true,
    tech: ['Flutter', 'Dart', 'Hive Database']
  },
  {
    id: 'mindfulminute',
    name: 'MindfulMinute',
    tagline: 'Privacy-First Wellness App',
    description: 'Personalized meditation and mindfulness without tracking. All data stays on your device.',
    icon: '/assets/icons/mindful_icon.png', // Path to image icon
    color: 'from-purple-500 to-pink-500',
    features: [
      'Local-only data storage',
      'Personalized meditation sessions',
      'No tracking or analytics',
      'Biometric authentication'
    ],
    status: 'coming-soon', // 'available' | 'coming-soon' | 'in-development'
    appStoreUrl: '', // Add when available
    playStoreUrl: '', // Add when available
    hasPrivacyPolicy: true,
    tech: ['React Native', 'TypeScript', 'Local Storage']
  },
  {
    id: 'clarafixer',
    name: 'ClaraFixer',
    tagline: 'AI Code Refactorer',
    description: 'Intelligent code analysis and automated fixes using local AI. Your code never leaves your machine.',
    icon: '🔧',
    color: 'from-blue-500 to-cyan-500',
    features: [
      'Local AI processing',
      'Automated code refactoring',
      'Legacy code modernization',
      'Privacy-first approach'
    ],
    status: 'in-development',
    appStoreUrl: '',
    playStoreUrl: '',
    hasPrivacyPolicy: false,
    tech: ['Python', 'Local AI', 'VS Code Extension']
  },
  {
    id: 'kaspa-miner-pro',
    name: 'KASPA Miner Pro',
    tagline: 'Professional Mining Dashboard',
    description: 'Real-time monitoring, profit optimization, and secure pool management for KASPA mining operations.',
    icon: '⛏️',
    color: 'from-green-500 to-teal-500',
    features: [
      'Real-time monitoring',
      'Profit optimization',
      'Secure pool management',
      'Multi-rig support'
    ],
    status: 'in-development',
    appStoreUrl: '',
    playStoreUrl: '',
    hasPrivacyPolicy: false,
    tech: ['JavaScript', 'React', 'WebSocket']
  },
  {
    id: 'clara-office',
    name: 'ClaraOffice',
    tagline: 'Privacy-First Productivity Suite',
    description: 'AI-powered document analysis and productivity tools with local processing.',
    icon: '📄',
    color: 'from-orange-500 to-red-500',
    features: [
      'Local document processing',
      'AI-powered analysis',
      'Complete data ownership',
      'Offline-first'
    ],
    status: 'coming-soon',
    appStoreUrl: '',
    playStoreUrl: '',
    hasPrivacyPolicy: false,
    tech: ['Rust', 'Local AI', 'Cross-platform']
  },
  {
    id: 'clara-cloud',
    name: 'ClaraCloud',
    tagline: 'Private Infrastructure Platform',
    description: 'Secure hosting and deployment platform with maximum security and zero vendor lock-in.',
    icon: '☁️',
    color: 'from-indigo-500 to-purple-500',
    features: [
      'Maximum security',
      'Developer data ownership',
      'No vendor lock-in',
      'Easy deployment'
    ],
    status: 'coming-soon',
    appStoreUrl: '',
    playStoreUrl: '',
    hasPrivacyPolicy: false,
    tech: ['Ruby', 'Infrastructure', 'Docker']
  },
  {
    id: 'devtools-suite',
    name: 'DevTools Suite',
    tagline: 'Local-First Development Tools',
    description: 'Comprehensive developer tools that work entirely on your machine without cloud dependencies.',
    icon: '🛠️',
    color: 'from-yellow-500 to-orange-500',
    features: [
      'Local-first architecture',
      'Cloud-free operation',
      'API testing tools',
      'Code generation'
    ],
    status: 'in-development',
    appStoreUrl: '',
    playStoreUrl: '',
    hasPrivacyPolicy: false,
    tech: ['Go', 'CLI', 'Local-first']
  }
]

export const getAppById = (id) => {
  return apps.find(app => app.id === id)
}

export const getAvailableApps = () => {
  return apps.filter(app => app.status === 'available')
}

export const getComingSoonApps = () => {
  return apps.filter(app => app.status === 'coming-soon')
}

export const getInDevelopmentApps = () => {
  return apps.filter(app => app.status === 'in-development')
}
