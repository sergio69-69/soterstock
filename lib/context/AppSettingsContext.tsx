'use client'

import { createContext, useContext, useCallback, ReactNode } from 'react'
import { TranslationKey, translations } from '@/lib/i18n/translations'
import { countryNames } from '@/lib/i18n/countryNames'
import { formatPrice, formatPriceHourly } from '@/lib/pricing/currencies'
import { CountryCode } from '@/types/server'

interface AppSettings {
  t: (key: TranslationKey, params?: Record<string, string | number>) => string
  countryName: (code: CountryCode) => string
  price: (eurAmount: number) => string
  priceHourly: (eurAmount: number) => string
  priceRaw: (eurAmount: number) => number
  priceLabel: () => string
}

const AppSettingsContext = createContext<AppSettings | null>(null)

export function AppSettingsProvider({ children }: { children: ReactNode }) {
  const t = useCallback((key: TranslationKey, params?: Record<string, string | number>): string => {
    let text = translations.ES[key] ?? key
    if (params) {
      for (const [k, v] of Object.entries(params)) {
        text = text.replace(`{${k}}`, String(v))
      }
    }
    return text
  }, [])

  const countryNameFn = useCallback((code: CountryCode): string => {
    return countryNames.ES[code] ?? code
  }, [])

  const priceRaw = useCallback((eurAmount: number): number => {
    return eurAmount
  }, [])

  const priceFn = useCallback((eurAmount: number): string => {
    return formatPrice(eurAmount, 'EUR')
  }, [])

  const priceHourlyFn = useCallback((eurAmount: number): string => {
    return formatPriceHourly(eurAmount, 'EUR')
  }, [])

  const priceLabel = useCallback((): string => {
    return 'EUR · Sin IVA'
  }, [])

  return (
    <AppSettingsContext.Provider value={{
      t,
      countryName: countryNameFn,
      price: priceFn,
      priceHourly: priceHourlyFn,
      priceRaw,
      priceLabel,
    }}>
      {children}
    </AppSettingsContext.Provider>
  )
}

export function useAppSettings(): AppSettings {
  const ctx = useContext(AppSettingsContext)
  if (!ctx) throw new Error('useAppSettings must be used within AppSettingsProvider')
  return ctx
}
