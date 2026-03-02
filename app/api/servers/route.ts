import { NextResponse } from 'next/server'
import { transformPresetsForLocation } from '@/lib/hostkey/transform'
import { servers as fallbackServers } from '@/data/servers'
import { Server, CountryCode } from '@/types/server'

const LOCATIONS: CountryCode[] = ['NL', 'CH', 'PL', 'IT', 'ES', 'FR', 'UK', 'DE', 'FI', 'US', 'TR', 'RU']
const BASE_URL = 'https://invapi.hostkey.com/presets.php'
const CACHE_TTL = 5 * 60 * 1000 // 5 minutes
const FETCH_TIMEOUT = 15_000 // 15 seconds

let cachedServers: Server[] | null = null
let cacheTimestamp = 0

function buildUrl(location: CountryCode): string {
  const params = new URLSearchParams({
    action: 'list',
    tag: 'bm',
    netag: 'web_nocom,web_nosite',
    location,
    currency: 'eur',
    servertype: '1',
    filter: 'yes',
  })
  return `${BASE_URL}?${params}`
}

async function fetchLocation(location: CountryCode, signal: AbortSignal): Promise<Server[]> {
  try {
    const res = await fetch(buildUrl(location), { signal })
    if (!res.ok) return []
    const data = await res.json()
    return transformPresetsForLocation(data, location)
  } catch {
    return []
  }
}

export async function GET() {
  const now = Date.now()

  if (cachedServers && now - cacheTimestamp < CACHE_TTL) {
    return NextResponse.json(cachedServers)
  }

  try {
    const controller = new AbortController()
    const timeout = setTimeout(() => controller.abort(), FETCH_TIMEOUT)

    const results = await Promise.all(
      LOCATIONS.map(loc => fetchLocation(loc, controller.signal))
    )
    clearTimeout(timeout)

    const servers = results.flat()

    if (servers.length === 0) {
      return NextResponse.json(cachedServers ?? fallbackServers)
    }

    cachedServers = servers
    cacheTimestamp = now

    return NextResponse.json(servers)
  } catch {
    return NextResponse.json(cachedServers ?? fallbackServers)
  }
}
