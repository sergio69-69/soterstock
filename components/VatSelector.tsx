'use client'

import { useAppSettings } from '@/lib/context/AppSettingsContext'
import { vatCountries, formatVatRate } from '@/lib/pricing/vat'

export default function VatSelector() {
  const { vatCountry, setVatCountry, t } = useAppSettings()

  return (
    <select
      value={vatCountry.code}
      onChange={(e) => {
        const found = vatCountries.find((vc) => vc.code === e.target.value)
        if (found) setVatCountry(found)
      }}
      className="bg-primary-light text-white text-xs border border-gray-500 rounded-lg px-2 py-1.5 focus:outline-none focus:ring-1 focus:ring-accent cursor-pointer"
      aria-label={t('settings.vat')}
    >
      {vatCountries.map((vc) => (
        <option key={vc.code} value={vc.code}>
          {vc.code === 'NONE' ? t('settings.noVat') : `${vc.name} (${formatVatRate(vc.rate)})`}
        </option>
      ))}
    </select>
  )
}
