export interface VatCountry {
  code: string
  name: string
  rate: number // e.g. 0.21 for 21%
}

export const vatCountries: VatCountry[] = [
  { code: 'NONE', name: 'Sin IVA / No VAT', rate: 0 },
  { code: 'AT', name: 'Austria', rate: 0.20 },
  { code: 'BE', name: 'Belgium', rate: 0.21 },
  { code: 'BG', name: 'Bulgaria', rate: 0.20 },
  { code: 'HR', name: 'Croatia', rate: 0.25 },
  { code: 'CY', name: 'Cyprus', rate: 0.19 },
  { code: 'CZ', name: 'Czech Republic', rate: 0.21 },
  { code: 'DK', name: 'Denmark', rate: 0.25 },
  { code: 'EE', name: 'Estonia', rate: 0.22 },
  { code: 'FI', name: 'Finland', rate: 0.255 },
  { code: 'FR', name: 'France', rate: 0.20 },
  { code: 'DE', name: 'Germany', rate: 0.19 },
  { code: 'GR', name: 'Greece', rate: 0.24 },
  { code: 'HU', name: 'Hungary', rate: 0.27 },
  { code: 'IE', name: 'Ireland', rate: 0.23 },
  { code: 'IT', name: 'Italy', rate: 0.22 },
  { code: 'LV', name: 'Latvia', rate: 0.21 },
  { code: 'LT', name: 'Lithuania', rate: 0.21 },
  { code: 'LU', name: 'Luxembourg', rate: 0.17 },
  { code: 'MT', name: 'Malta', rate: 0.18 },
  { code: 'NL', name: 'Netherlands', rate: 0.21 },
  { code: 'PL', name: 'Poland', rate: 0.23 },
  { code: 'PT', name: 'Portugal', rate: 0.23 },
  { code: 'RO', name: 'Romania', rate: 0.19 },
  { code: 'SK', name: 'Slovakia', rate: 0.23 },
  { code: 'SI', name: 'Slovenia', rate: 0.22 },
  { code: 'ES', name: 'Spain', rate: 0.21 },
  { code: 'SE', name: 'Sweden', rate: 0.25 },
  { code: 'CH', name: 'Switzerland', rate: 0.081 },
  { code: 'UK', name: 'United Kingdom', rate: 0.20 },
  { code: 'TR', name: 'Turkey', rate: 0.20 },
]

export function applyVat(price: number, rate: number): number {
  return price * (1 + rate)
}

export function formatVatRate(rate: number): string {
  if (rate === 0) return '0%'
  const pct = rate * 100
  // Handle decimals like 8.1% or 25.5%
  return pct % 1 === 0 ? `${pct}%` : `${pct.toFixed(1)}%`
}
