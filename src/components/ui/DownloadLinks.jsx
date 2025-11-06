import { Apple, Play } from 'lucide-react'
import Button from './Button'

const DownloadLinks = ({ appStoreUrl, playStoreUrl, size = 'md' }) => {
  const hasAppStore = appStoreUrl && appStoreUrl.trim() !== ''
  const hasPlayStore = playStoreUrl && playStoreUrl.trim() !== ''
  const hasAnyLink = hasAppStore || hasPlayStore

  if (!hasAnyLink) {
    return (
      <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
        <div className="bg-gray-100 border-2 border-dashed border-gray-300 rounded-xl px-6 py-4 text-center">
          <p className="text-gray-600 font-semibold">📱 Coming Soon to App Stores</p>
          <p className="text-sm text-gray-500 mt-1">Stay tuned for the official release!</p>
        </div>
      </div>
    )
  }

  return (
    <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
      {hasAppStore && (
        <Button
          href={appStoreUrl}
          variant="outline"
          size={size}
          className="w-full sm:w-auto"
        >
          <Apple className="mr-2" size={20} />
          App Store
        </Button>
      )}

      {hasPlayStore && (
        <Button
          href={playStoreUrl}
          variant="outline"
          size={size}
          className="w-full sm:w-auto"
        >
          <Play className="mr-2" size={20} />
          Google Play
        </Button>
      )}
    </div>
  )
}

export default DownloadLinks
