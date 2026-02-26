import { Server, CountryCode } from '@/types/server'

const SUPPORTED_LOCATIONS = new Set<string>([
  'NL', 'CH', 'PL', 'IT', 'ES', 'FR', 'UK', 'DE', 'FI', 'US', 'TR', 'RU',
])

interface HostkeyTag {
  tag: string
  value: string
  extra: string
}

interface HostkeyPreset {
  id: number
  name: string
  active: number
  cpu: number
  ram: number
  hdd: string
  gpu: string
  locations: string
  virtual: number
  available: number
  server_type: string
  price: Record<string, { USD: number; EUR: number; RUR: number }>
  tags: HostkeyTag[]
}

interface HostkeyResponse {
  result: string
  presets: HostkeyPreset[]
}

function getTag(tags: HostkeyTag[], name: string): HostkeyTag | undefined {
  return tags.find((t) => t.tag === name)
}

function inferCpuBrand(cpuName: string): 'Intel' | 'AMD' {
  const lower = cpuName.toLowerCase()
  if (lower.includes('epyc') || lower.includes('ryzen')) return 'AMD'
  return 'Intel'
}

function inferRamType(preset: HostkeyPreset): string {
  const ramTag = getTag(preset.tags, 'web_ram')
  if (ramTag?.value && ramTag.value !== 'true') return ramTag.value

  const version = preset.name.match(/\.(v\d)/)?.[1]
  switch (version) {
    case 'v1':
      return 'DDR3'
    case 'v4':
    case 'v5':
      return 'DDR5'
    default:
      return 'DDR4'
  }
}

function parseStorageType(storageStr: string): Server['storageType'] {
  const lower = storageStr.toLowerCase()
  if (lower.includes('nvme') && lower.includes('hdd')) return 'NVMe SSD + HDD'
  if (lower.includes('ssd') && lower.includes('hdd')) return 'SSD + HDD'
  if (lower.includes('nvme')) return 'NVMe SSD'
  if (lower.includes('ssd')) return 'SSD'
  if (lower.includes('sas')) return 'SAS'
  return 'HDD'
}

function parseStorageCapacity(hdd: string): number {
  // Formats: "1000", "2x960", "2x1920", "2x3840"
  const match = hdd.match(/^(\d+)x(\d+)$/)
  if (match) {
    return parseInt(match[1]) * parseInt(match[2])
  }
  return parseInt(hdd) || 0
}

function inferCategory(preset: HostkeyPreset): Server['category'] {
  if (preset.name.startsWith('gpu.')) return 'gpu'
  return 'instant'
}

export function transformPresets(apiResponse: HostkeyResponse): Server[] {
  const servers: Server[] = []

  for (const preset of apiResponse.presets) {
    // Only physical servers (virtual=0), active
    if (preset.virtual !== 0 || preset.active !== 1) continue

    const tags = preset.tags || []
    const cpuName = getTag(tags, 'web_line')?.value ?? ''
    const clockSpeed = getTag(tags, 'web_ghz')?.value ?? ''
    const storageTag = getTag(tags, 'web_storage')?.extra ?? ''
    const bandwidthTag = getTag(tags, 'web_traffic')?.extra ?? ''

    if (!cpuName) continue

    const cpuBrand = inferCpuBrand(cpuName)
    const ramType = inferRamType(preset)
    const storageType = parseStorageType(storageTag)
    const storageCapacity = parseStorageCapacity(preset.hdd)
    const category = inferCategory(preset)
    const cores = preset.cpu
    const threads = cores * 2

    // Expand each location with valid EUR pricing into a Server entry
    for (const [loc, prices] of Object.entries(preset.price)) {
      if (!SUPPORTED_LOCATIONS.has(loc)) continue
      const eur = prices.EUR
      if (eur <= 0) continue

      servers.push({
        id: `${preset.name}-${loc}`,
        cpu: cpuName,
        cpuBrand,
        cores,
        threads,
        clockSpeed: clockSpeed ? `${clockSpeed} GHz` : '',
        ram: preset.ram,
        ramType,
        storage: storageTag || `${preset.hdd} GB`,
        storageType,
        storageCapacity,
        bandwidth: bandwidthTag || '1Gbps / 50TB',
        location: loc as CountryCode,
        priceMonthly: eur,
        priceHourly: Math.round((eur / 730) * 10000) / 10000,
        stock: preset.available,
        category,
        ...(preset.gpu ? { gpu: preset.gpu } : {}),
      })
    }
  }

  return servers
}
