'use client'

import { createContext, useContext, useState, useCallback, useEffect, ReactNode } from 'react'
import { Language, TranslationKey, translations } from '@/lib/i18n/translations'
import { countryNames } from '@/lib/i18n/countryNames'
import { Currency, convertPrice, formatPrice, formatPriceHourly, fetchExchangeRate, DEFAULT_EUR_TO_USD } from '@/lib/pricing/currencies'
import { VatCountry, vatCountries, applyVat } from '@/lib/pricing/vat'
import { CountryCode } from '@/types/server'

interface AppSettings {
  language: Language
  setLanguage: (lang: Language) => void
  currency: Currency
  setCurrency: (cur: Currency) => void
  vatCountry: VatCountry
  setVatCountry: (vc: VatCountry) => void
  t: (key: TranslationKey, params?: Record<string, string | number>) => string
  countryName: (code: CountryCode) => string
  price: (eurAmount: number) => string
  priceHourly: (eurAmount: number) => string
  priceRaw: (eurAmount: number) => number
  priceLabel: () => string
}

const AppSettingsContext = createContext<AppSettings | null>(null)

export function AppSettingsProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('ES')
  const [currency, setCurrency] = useState<Currency>('EUR')
  const [vatCountry, setVatCountry] = useState<VatCountry>(vatCountries[0]) // No VAT
  const [eurToUsd, setEurToUsd] = useState(DEFAULT_EUR_TO_USD)

  useEffect(() => {
    fetchExchangeRate().then(setEurToUsd)
  }, [])

  const t = useCallback((key: TranslationKey, params?: Record<string, string | number>): string => {
    let text = translations[language][key] ?? key
    if (params) {
      for (const [k, v] of Object.entries(params)) {
        text = text.replace(`{${k}}`, String(v))
      }
    }
    return text
  }, [language])

  const countryNameFn = useCallback((code: CountryCode): string => {
    return countryNames[language][code] ?? code
  }, [language])

  const priceRaw = useCallback((eurAmount: number): number => {
    const converted = convertPrice(eurAmount, currency, eurToUsd)
    return applyVat(converted, vatCountry.rate)
  }, [currency, vatCountry, eurToUsd])

  const priceFn = useCallback((eurAmount: number): string => {
    const converted = convertPrice(eurAmount, currency, eurToUsd)
    const withVat = applyVat(converted, vatCountry.rate)
    return formatPrice(withVat, currency)
  }, [currency, vatCountry, eurToUsd])

  const priceHourlyFn = useCallback((eurAmount: number): string => {
    const converted = convertPrice(eurAmount, currency, eurToUsd)
    const withVat = applyVat(converted, vatCountry.rate)
    return formatPriceHourly(withVat, currency)
  }, [currency, vatCountry, eurToUsd])

  const priceLabel = useCallback((): string => {
    const currLabel = currency
    if (vatCountry.rate === 0) {
      return `${currLabel} · ${t('settings.noVat')}`
    }
    return `${currLabel} · ${t('settings.vatIncluded')}`
  }, [currency, vatCountry, t])

  return (
    <AppSettingsContext.Provider value={{
      language, setLanguage,
      currency, setCurrency,
      vatCountry, setVatCountry,
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
