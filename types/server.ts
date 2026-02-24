export type CountryCode = 'NL' | 'CH' | 'PL' | 'IT' | 'ES' | 'FR' | 'UK' | 'DE' | 'FI' | 'US' | 'TR' | 'RU'

export interface CountryInfo {
  code: CountryCode
  name: string
  flagPath: string
  coordinates: [number, number]
}

export interface Server {
  id: string
  cpu: string
  cpuBrand: 'Intel' | 'AMD'
  cores: number
  threads: number
  clockSpeed: string
  ram: number
  ramType: string
  storage: string
  storageType: 'NVMe SSD' | 'SSD' | 'HDD' | 'SAS' | 'NVMe SSD + HDD' | 'SSD + HDD'
  storageCapacity: number
  bandwidth: string
  location: CountryCode
  priceMonthly: number
  priceHourly: number
  stock: number
  category: 'instant' | 'custom' | 'gpu'
  gpu?: string
  featured?: boolean
}
