import { Link } from 'react-router-dom'
import { ArrowRight, Lock, Zap } from 'lucide-react'
import Card from './Card'
import Button from './Button'
import { useTranslation } from '../../hooks/useTranslation'

const AppCard = ({ app, featured = false }) => {
  const { t } = useTranslation()

  const statusBadge = {
    'available': { text: t('apps.status.available'), color: 'bg-green-500' },
    'coming-soon': { text: t('apps.status.comingSoon'), color: 'bg-yellow-500' },
    'in-development': { text: t('apps.status.inDevelopment'), color: 'bg-blue-500' }
  }

  const badge = statusBadge[app.status]

  // Check if icon is an image path or emoji
  const isImageIcon = app.icon && (app.icon.startsWith('/') || app.icon.startsWith('http'))

  return (
    <Card hover className={`${featured ? 'border-2 border-flame-orange' : ''} relative overflow-hidden`}>
      {/* Status Badge */}
      <div className="absolute top-4 right-4">
        <span className={`${badge.color} text-white text-xs font-bold px-3 py-1 rounded-full`}>
          {badge.text}
        </span>
      </div>

      {/* Icon */}
      <div className={`mb-4 bg-gradient-to-br ${app.color} w-20 h-20 rounded-2xl flex items-center justify-center p-3 overflow-hidden`}>
        {isImageIcon ? (
          <img src={app.icon} alt={`${app.name} icon`} className="w-full h-full object-contain" />
        ) : (
          <span className="text-5xl">{app.icon}</span>
        )}
      </div>

      {/* Content */}
      <h3 className="text-2xl font-bold text-gray-900 mb-2">{app.name}</h3>
      <p className="text-flame-orange font-semibold mb-3">{app.tagline}</p>
      <p className="text-gray-600 mb-4 line-clamp-3">{app.description}</p>

      {/* Features */}
      <div className="space-y-2 mb-6">
        {app.features.slice(0, 3).map((feature, index) => (
          <div key={index} className="flex items-start gap-2 text-sm text-gray-600">
            <Zap size={16} className="text-flame-orange mt-0.5 flex-shrink-0" />
            <span>{feature}</span>
          </div>
        ))}
      </div>

      {/* Privacy Badge */}
      {app.hasPrivacyPolicy && (
        <div className="flex items-center gap-2 text-sm text-gray-500 mb-4">
          <Lock size={16} className="text-green-600" />
          <Link
            to={`/privacy/${app.id}`}
            className="hover:text-flame-orange transition-colors underline"
          >
            {t('apps.privacyPolicy')}
          </Link>
        </div>
      )}

      {/* Tech Stack */}
      <div className="flex flex-wrap gap-2 mb-4">
        {app.tech.map((tech, index) => (
          <span
            key={index}
            className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded-full"
          >
            {tech}
          </span>
        ))}
      </div>

      {/* CTA */}
      <Button
        variant="primary"
        size="sm"
        className="w-full group"
      >
        {t('apps.learnMore')}
        <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
      </Button>
    </Card>
  )
}

export default AppCard
