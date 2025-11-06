import { Mail } from 'lucide-react'
import { siteConfig } from '../../data/siteConfig'
import { useTranslation } from '../../hooks/useTranslation'

const Footer = () => {
  const { t } = useTranslation()

  return (
    <footer className="bg-dark-bg text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Contact */}
          <div>
            <h3 className="text-flame-orange font-bold text-lg mb-4">{t('footer.contact')}</h3>
            <a
              href={`mailto:${siteConfig.contact.email}`}
              className="inline-flex items-center gap-2 text-gray-300 hover:text-flame-yellow transition-colors"
            >
              <div className="w-10 h-10 rounded-full bg-gradient-flame flex items-center justify-center">
                <Mail size={20} />
              </div>
              <span className="font-medium">{t('footer.emailUs')}</span>
            </a>
          </div>

          {/* Social */}
          <div>
            <h3 className="text-flame-orange font-bold text-lg mb-4">{t('footer.social')}</h3>
            <div className="flex gap-3">
              <a
                href={siteConfig.social.twitter.url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-gradient-flame flex items-center justify-center font-bold hover:scale-110 transition-transform"
                title={t('footer.followTwitter')}
              >
                𝕏
              </a>
              <a
                href={siteConfig.social.reddit.url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-gradient-flame flex items-center justify-center font-bold hover:scale-110 transition-transform"
                title={t('footer.findReddit')}
              >
                R
              </a>
            </div>
          </div>

          {/* Movement */}
          <div>
            <h3 className="text-flame-orange font-bold text-lg mb-4">{t('footer.movement')}</h3>
            <a
              href={siteConfig.movement.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-flame-yellow transition-colors"
            >
              <span className="font-semibold">{t('footer.freeTheDevs')}</span>
              <p className="text-sm mt-1">{t('footer.supportingDev')}</p>
            </a>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-gray-700 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} {siteConfig.name}. {t('footer.rights')}</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
