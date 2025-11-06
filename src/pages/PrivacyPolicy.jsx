import { useParams, Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { ArrowLeft, Shield, FileText } from 'lucide-react'
import ReactMarkdown from 'react-markdown'
import Button from '../components/ui/Button'
import Card from '../components/ui/Card'
import { getAppById } from '../data/apps'
import { useTranslation } from '../hooks/useTranslation'

const PrivacyPolicy = () => {
  const { appName } = useParams()
  const { t } = useTranslation()
  const [content, setContent] = useState('')
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)

  const app = getAppById(appName)

  // Check if icon is an image path or emoji
  const isImageIcon = app?.icon && (app.icon.startsWith('/') || app.icon.startsWith('http'))

  useEffect(() => {
    const loadPrivacyPolicy = async () => {
      try {
        // Try to load the specific privacy policy for this app
        const response = await fetch(`/assets/privacy-policies/${appName}.md`)

        if (response.ok) {
          const text = await response.text()
          setContent(text)
        } else {
          // If specific policy doesn't exist, try the default PRIVACY_POLICY.md
          const fallbackResponse = await fetch('/assets/PRIVACY_POLICY.md')
          if (fallbackResponse.ok) {
            const text = await fallbackResponse.text()
            setContent(text)
          } else {
            setError(true)
          }
        }
      } catch (err) {
        setError(true)
      } finally {
        setLoading(false)
      }
    }

    loadPrivacyPolicy()
  }, [appName])

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-flame-orange mx-auto mb-4"></div>
          <p className="text-gray-600">{t('common.loading')}</p>
        </div>
      </div>
    )
  }

  if (error || !app) {
    return (
      <div className="min-h-screen bg-gray-50">
        <section className="bg-gradient-to-br from-dark-bg to-gray-900 text-white py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-5xl font-bold mb-4">
              <span className="text-gradient-flame">{t('privacy.notFound')}</span>
            </h1>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <Card className="text-center py-12">
              <FileText className="text-gray-400 mx-auto mb-4" size={64} />
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                {t('privacy.notAvailable')}
              </h2>
              <p className="text-gray-600 mb-6">
                {t('privacy.notAvailableDesc')}
              </p>
              <div className="flex gap-4 justify-center">
                <Button to="/apps" variant="primary">
                  <ArrowLeft className="mr-2" size={20} />
                  {t('privacy.backToApps')}
                </Button>
                <Button to="/contact" variant="outline">
                  {t('privacy.contactUs')}
                </Button>
              </div>
            </Card>
          </div>
        </section>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-gradient-to-br from-dark-bg to-gray-900 text-white py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <Link
              to="/apps"
              className="inline-flex items-center text-flame-yellow hover:text-flame-orange transition-colors mb-6"
            >
              <ArrowLeft className="mr-2" size={20} />
              {t('privacy.backToApps')}
            </Link>

            <div className="flex items-center gap-4 mb-4">
              <div className={`bg-gradient-to-br ${app.color} w-16 h-16 rounded-2xl flex items-center justify-center p-3 overflow-hidden`}>
                {isImageIcon ? (
                  <img src={app.icon} alt={`${app.name} icon`} className="w-full h-full object-contain" />
                ) : (
                  <span className="text-4xl">{app.icon}</span>
                )}
              </div>
              <div>
                <h1 className="text-4xl font-bold">
                  <span className="text-gradient-flame">{app.name}</span>
                </h1>
                <p className="text-xl text-gray-300 mt-2">{t('privacy.title')}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Privacy Policy Content */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <Card className="mb-8">
              <div className="flex items-start gap-4 p-4 bg-green-50 rounded-lg border border-green-200">
                <Shield className="text-green-600 flex-shrink-0 mt-1" size={24} />
                <div>
                  <h3 className="font-bold text-green-900 mb-1">{t('privacy.commitment')}</h3>
                  <p className="text-sm text-green-800">
                    {t('privacy.commitmentDesc', { appName: app.name })}
                  </p>
                </div>
              </div>
            </Card>

            <Card>
              <div className="prose prose-lg max-w-none">
                <ReactMarkdown
                  components={{
                    h1: ({ children }) => <h1 className="text-3xl font-bold text-gray-900 mb-4 mt-8 first:mt-0">{children}</h1>,
                    h2: ({ children }) => <h2 className="text-2xl font-bold text-gray-900 mb-3 mt-6">{children}</h2>,
                    h3: ({ children }) => <h3 className="text-xl font-bold text-gray-900 mb-2 mt-4">{children}</h3>,
                    p: ({ children }) => <p className="text-gray-700 mb-4 leading-relaxed">{children}</p>,
                    ul: ({ children }) => <ul className="list-disc list-inside mb-4 space-y-2 text-gray-700">{children}</ul>,
                    ol: ({ children }) => <ol className="list-decimal list-inside mb-4 space-y-2 text-gray-700">{children}</ol>,
                    li: ({ children }) => <li className="ml-4">{children}</li>,
                    a: ({ href, children }) => (
                      <a href={href} className="text-flame-orange hover:text-flame-red transition-colors underline" target="_blank" rel="noopener noreferrer">
                        {children}
                      </a>
                    ),
                    strong: ({ children }) => <strong className="font-bold text-gray-900">{children}</strong>,
                    em: ({ children }) => <em className="italic">{children}</em>,
                    code: ({ children }) => <code className="bg-gray-100 px-2 py-1 rounded text-sm font-mono text-flame-orange">{children}</code>,
                    blockquote: ({ children }) => (
                      <blockquote className="border-l-4 border-flame-orange pl-4 italic text-gray-600 my-4">
                        {children}
                      </blockquote>
                    )
                  }}
                >
                  {content}
                </ReactMarkdown>
              </div>
            </Card>

            <div className="mt-8 text-center">
              <Button to="/contact" variant="outline" size="lg">
                {t('privacy.contactButton')}
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default PrivacyPolicy
