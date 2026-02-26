'use client'

import { useAppSettings } from '@/lib/context/AppSettingsContext'
import { Currency } from '@/lib/pricing/currencies'

export default function CurrencyToggle() {
  const { currency, setCurrency } = useAppSettings()

  const options: Currency[] = ['EUR', 'USD']

  return (
    <div className="inline-flex rounded-lg overflow-hidden border border-gray-500" role="group" aria-label="Currency">
      {options.map((cur) => (
        <button
          key={cur}
          onClick={() => setCurrency(cur)}
          className={`text-xs px-2.5 py-1.5 font-medium transition-colors ${
            currency === cur
              ? 'bg-accent text-primary'
              : 'bg-primary-light text-gray-300 hover:text-white'
          }`}
        >
          {cur}
        </button>
      ))}
    </div>
  )
}
