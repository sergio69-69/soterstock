import { Server, CountryCode } from '@/types/server'
import { countries } from '@/data/countries'

export function groupServersByCountry(servers: Server[]): Map<CountryCode, Server[]> {
  const grouped = new Map<CountryCode, Server[]>()
  for (const country of countries) {
    grouped.set(country.code, servers.filter(s => s.location === country.code))
  }
  return grouped
}

export function getCountryStats(servers: Server[]) {
  if (servers.length === 0) {
    return { count: 0, minPrice: 0, maxPrice: 0, totalStock: 0 }
  }
  const minPrice = Math.min(...servers.map(s => s.priceMonthly))
  const maxPrice = Math.max(...servers.map(s => s.priceMonthly))
  const totalStock = servers.reduce((sum, s) => sum + s.stock, 0)
  return { count: servers.length, minPrice, maxPrice, totalStock }
}
