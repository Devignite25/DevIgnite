import { en } from './en'
import { es } from './es'

export const translations = {
  en,
  es
}

export const getTranslation = (language, key) => {
  const keys = key.split('.')
  let value = translations[language]

  for (const k of keys) {
    if (value && typeof value === 'object') {
      value = value[k]
    } else {
      return key // Return key if translation not found
    }
  }

  return value || key
}
