export type Currency = 'EUR' | 'USD'

export interface CurrencyConfig {
  code: Currency
  symbol: string
  locale: string
}

export const currencyConfigs: Record<Currency, CurrencyConfig> = {
  EUR: { code: 'EUR', symbol: '€', locale: 'de-DE' },
  USD: { code: 'USD', symbol: '$', locale: 'en-US' },
}

export const DEFAULT_EUR_TO_USD = 1.08

export async function fetchExchangeRate(): Promise<number> {
  try {
    const res = await fetch(
      'https://api.frankfurter.dev/v1/latest?base=EUR&symbols=USD',
    )
    if (!res.ok) return DEFAULT_EUR_TO_USD
    const data = await res.json()
    const rate = data?.rates?.USD
    return typeof rate === 'number' ? rate : DEFAULT_EUR_TO_USD
  } catch {
    return DEFAULT_EUR_TO_USD
  }
}

export function convertPrice(
  eurPrice: number,
  currency: Currency,
  eurToUsd: number = DEFAULT_EUR_TO_USD,
): number {
  if (currency === 'USD') return eurPrice * eurToUsd
  return eurPrice
}

export function formatPrice(amount: number, currency: Currency): string {
  const cfg = currencyConfigs[currency]
  return `${cfg.symbol}${amount.toFixed(2)}`
}

export function formatPriceHourly(amount: number, currency: Currency): string {
  const cfg = currencyConfigs[currency]
  return `${cfg.symbol}${amount.toFixed(3)}`
}
