import { useLanguage } from '../../contexts/LanguageContext'

const LanguageSwitcher = () => {
  const { language, setLanguage } = useLanguage()

  return (
    <div className="flex items-center gap-2 bg-gray-100 rounded-full p-1">
      <button
        onClick={() => setLanguage('en')}
        className={`flex items-center gap-1 px-3 py-1.5 rounded-full transition-all ${
          language === 'en'
            ? 'bg-white shadow-md'
            : 'hover:bg-gray-200'
        }`}
        title="English"
      >
        <span className="text-lg">🇺🇸</span>
        <span className="text-sm font-medium hidden sm:inline">EN</span>
      </button>
      <button
        onClick={() => setLanguage('es')}
        className={`flex items-center gap-1 px-3 py-1.5 rounded-full transition-all ${
          language === 'es'
            ? 'bg-white shadow-md'
            : 'hover:bg-gray-200'
        }`}
        title="Español"
      >
        <span className="text-lg">🇪🇸</span>
        <span className="text-sm font-medium hidden sm:inline">ES</span>
      </button>
    </div>
  )
}

export default LanguageSwitcher
