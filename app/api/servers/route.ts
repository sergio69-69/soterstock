import { NextResponse } from 'next/server'
import { transformPresets } from '@/lib/hostkey/transform'
import { servers as fallbackServers } from '@/data/servers'
import { Server } from '@/types/server'

const HOSTKEY_API = 'https://invapi.hostkey.com/presets.php?action=list'
const CACHE_TTL = 5 * 60 * 1000 // 5 minutes
const FETCH_TIMEOUT = 10_000 // 10 seconds

let cachedServers: Server[] | null = null
let cacheTimestamp = 0

export async function GET() {
  const now = Date.now()

  // Return fresh cache if available
  if (cachedServers && now - cacheTimestamp < CACHE_TTL) {
    return NextResponse.json(cachedServers)
  }

  try {
    const controller = new AbortController()
    const timeout = setTimeout(() => controller.abort(), FETCH_TIMEOUT)

    const res = await fetch(HOSTKEY_API, { signal: controller.signal })
    clearTimeout(timeout)

    if (!res.ok) throw new Error(`Hostkey API returned ${res.status}`)

    const data = await res.json()
    const servers = transformPresets(data)

    // Sanity check: don't cache empty results
    if (servers.length === 0) {
      return NextResponse.json(cachedServers ?? fallbackServers)
    }

    cachedServers = servers
    cacheTimestamp = now

    return NextResponse.json(servers)
  } catch {
    // Return stale cache or static fallback
    return NextResponse.json(cachedServers ?? fallbackServers)
  }
}
