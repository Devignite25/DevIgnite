import { useState } from 'react'
import AppCard from '../components/ui/AppCard'
import { apps } from '../data/apps'
import { useTranslation } from '../hooks/useTranslation'

const Apps = () => {
  const [filter, setFilter] = useState('all')
  const { t } = useTranslation()

  const filteredApps = filter === 'all'
    ? apps
    : apps.filter(app => app.status === filter)

  const filterTabs = [
    { value: 'all', label: t('apps.filters.all'), count: apps.length },
    { value: 'available', label: t('apps.filters.available'), count: apps.filter(a => a.status === 'available').length },
    { value: 'coming-soon', label: t('apps.filters.comingSoon'), count: apps.filter(a => a.status === 'coming-soon').length },
    { value: 'in-development', label: t('apps.filters.inDevelopment'), count: apps.filter(a => a.status === 'in-development').length }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-gradient-to-br from-dark-bg to-gray-900 text-white py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-4">
            <span className="text-gradient-flame">{t('apps.title')}</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            {t('apps.subtitle')}
          </p>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="bg-white border-b border-gray-200 sticky top-20 z-40">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-2 py-4 justify-center">
            {filterTabs.map((tab) => (
              <button
                key={tab.value}
                onClick={() => setFilter(tab.value)}
                className={`px-6 py-2 rounded-full font-semibold transition-all ${
                  filter === tab.value
                    ? 'bg-gradient-flame text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {tab.label} ({tab.count})
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Apps Grid */}
      <section className="py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {filteredApps.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-gray-500 text-lg">{t('common.noResults')}</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {filteredApps.map((app) => (
                <AppCard key={app.id} app={app} />
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  )
}

export default Apps
