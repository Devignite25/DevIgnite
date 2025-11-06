import { Link } from 'react-router-dom'
import { Sparkles, Shield, Code, Rocket } from 'lucide-react'
import Button from '../components/ui/Button'
import AppCard from '../components/ui/AppCard'
import { siteConfig } from '../data/siteConfig'
import { apps } from '../data/apps'
import { useTranslation } from '../hooks/useTranslation'

const Home = () => {
  const featuredApps = apps.slice(0, 3)
  const { t } = useTranslation()

  return (
    <div>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center bg-gradient-to-br from-dark-bg via-gray-900 to-dark-bg overflow-hidden">
        {/* Logo Background */}
        <div className="absolute inset-0 flex items-center justify-center opacity-10">
          <img
            src="/logo.png"
            alt="DevIgnite Background"
            className="w-[80%] max-w-4xl h-auto object-contain"
          />
        </div>

        {/* Animated Background */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-20 left-20 w-64 h-64 bg-flame-orange rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-flame-red rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6">
            <span className="text-gradient-flame">
              {t('hero.tagline')}
            </span>
          </h1>
          <p className="text-xl sm:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
            {t('hero.description')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button to="/apps" size="lg">
              <Sparkles className="mr-2" size={20} />
              {t('hero.exploreApps')}
            </Button>
            <Button to="/contact" variant="outline" size="lg" className="bg-white/10 border-white text-white hover:bg-white hover:text-gray-900">
              {t('hero.getInTouch')}
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">{t('about.title')}</h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              {t('about.mission')}
            </p>
          </div>

          {/* Values Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {siteConfig.about.values.map((value, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1"
              >
                <div className="text-4xl mb-4">{value.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{t(`about.values.${['privacy', 'empowerment', 'ai', 'innovation'][index]}.title`)}</h3>
                <p className="text-gray-600 text-sm">{t(`about.values.${['privacy', 'empowerment', 'ai', 'innovation'][index]}.description`)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Apps Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">{t('apps.featuredTitle')}</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              {t('apps.featuredSubtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto mb-12">
            {featuredApps.map((app) => (
              <AppCard key={app.id} app={app} />
            ))}
          </div>

          <div className="text-center">
            <Button to="/apps" size="lg">
              {t('apps.viewAll')}
            </Button>
          </div>
        </div>
      </section>

      {/* Movement Section */}
      <section className="py-16 bg-dark-bg text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">{t('movement.title')}</h2>
            <p className="text-lg text-gray-300 mb-6">
              {t('movement.description').split('{link}')[0]}
              <a
                href={siteConfig.movement.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-flame-yellow font-semibold hover:text-flame-orange transition-colors underline"
              >
                {t('movement.linkText')}
              </a>
              {t('movement.description').split('{link}')[1]}
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
