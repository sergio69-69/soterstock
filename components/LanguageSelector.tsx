'use client'

import { useAppSettings } from '@/lib/context/AppSettingsContext'
import { Language, languageNames, languageFlags } from '@/lib/i18n/translations'

const languages: Language[] = ['ES', 'EN', 'FR', 'ZH', 'TR']

export default function LanguageSelector() {
  const { language, setLanguage } = useAppSettings()

  return (
    <select
      value={language}
      onChange={(e) => setLanguage(e.target.value as Language)}
      className="bg-primary-light text-white text-xs border border-gray-500 rounded-lg px-2 py-1.5 focus:outline-none focus:ring-1 focus:ring-accent cursor-pointer"
      aria-label="Language"
    >
      {languages.map((lang) => (
        <option key={lang} value={lang}>
          {languageFlags[lang]} {languageNames[lang]}
        </option>
      ))}
    </select>
  )
}
