export type Currency = 'EUR'

export function formatPrice(amount: number, currency: Currency = 'EUR'): string {
  return `€${amount.toFixed(2)}`
}

export function formatPriceHourly(amount: number, currency: Currency = 'EUR'): string {
  return `€${amount.toFixed(3)}`
}
