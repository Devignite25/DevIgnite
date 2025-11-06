import { FileText, Download, ExternalLink } from 'lucide-react'
import Card from '../components/ui/Card'
import Button from '../components/ui/Button'
import { useTranslation } from '../hooks/useTranslation'

const Research = () => {
  const { t } = useTranslation()

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-gradient-to-br from-dark-bg to-gray-900 text-white py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-4">
            <span className="text-gradient-flame">{t('research.title')}</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            {t('research.subtitle')}
          </p>
        </div>
      </section>

      {/* Research Paper */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <Card className="mb-8">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 rounded-full bg-gradient-flame flex items-center justify-center flex-shrink-0">
                  <FileText className="text-white" size={24} />
                </div>
                <div className="flex-grow">
                  <h2 className="text-2xl font-bold text-gray-900 mb-2">{t('research.paperTitle')}</h2>
                  <p className="text-gray-600">
                    {t('research.paperDesc')}
                  </p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 mb-6">
                <Button
                  href="/assets/FAA_paper.pdf"
                  variant="primary"
                  className="flex-1"
                >
                  <ExternalLink className="mr-2" size={20} />
                  {t('research.openNewTab')}
                </Button>
                <Button
                  href="/assets/FAA_paper.pdf"
                  variant="outline"
                  className="flex-1"
                  download
                >
                  <Download className="mr-2" size={20} />
                  {t('research.download')}
                </Button>
              </div>
            </Card>

            {/* PDF Viewer */}
            <Card className="p-0 overflow-hidden">
              <div className="bg-gradient-flame text-white p-6 text-center">
                <h3 className="text-xl font-semibold mb-2">{t('research.paperTitle')}</h3>
                <p className="text-sm opacity-90">{t('research.paperDesc')}</p>
              </div>

              <div className="bg-gray-100">
                <iframe
                  src="/assets/FAA_paper.pdf#toolbar=1&navpanes=1&scrollbar=1"
                  className="w-full h-[600px] md:h-[800px]"
                  title="FAA Paper PDF"
                  style={{ border: 'none' }}
                />
              </div>

              <div className="bg-gray-50 p-4 text-center border-t border-gray-200">
                <p className="text-sm text-gray-600">
                  {t('research.trouble')}{' '}
                  <a
                    href="/assets/FAA_paper.pdf"
                    className="text-flame-orange font-semibold hover:text-flame-red transition-colors"
                    download
                  >
                    {t('research.downloadHere')}
                  </a>
                </p>
              </div>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Research
