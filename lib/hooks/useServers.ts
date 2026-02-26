'use client'

import { useState, useEffect } from 'react'
import { servers as fallbackServers } from '@/data/servers'
import { Server } from '@/types/server'

const REFRESH_INTERVAL = 5 * 60 * 1000 // 5 minutes

// Module-level cache shared across pages/components
let moduleCache: Server[] | null = null
let lastFetchTime = 0

export function useServers() {
  const [servers, setServers] = useState<Server[]>(moduleCache ?? fallbackServers)
  const [isLoading, setIsLoading] = useState(!moduleCache)
  const [error, setError] = useState<string | null>(null)
  const [source, setSource] = useState<'cache' | 'api' | 'fallback'>(
    moduleCache ? 'cache' : 'fallback'
  )

  useEffect(() => {
    let cancelled = false

    async function fetchServers() {
      try {
        const res = await fetch('/api/servers')
        if (!res.ok) throw new Error(`HTTP ${res.status}`)

        const data: Server[] = await res.json()
        if (data.length === 0) throw new Error('Empty response')

        moduleCache = data
        lastFetchTime = Date.now()

        if (!cancelled) {
          setServers(data)
          setSource('api')
          setError(null)
        }
      } catch (err) {
        if (!cancelled) {
          setError(err instanceof Error ? err.message : 'Fetch failed')
        }
      } finally {
        if (!cancelled) {
          setIsLoading(false)
        }
      }
    }

    // Fetch immediately if cache is stale or missing
    const now = Date.now()
    if (!moduleCache || now - lastFetchTime >= REFRESH_INTERVAL) {
      fetchServers()
    } else {
      setIsLoading(false)
    }

    // Auto-refresh interval
    const interval = setInterval(fetchServers, REFRESH_INTERVAL)
    return () => {
      cancelled = true
      clearInterval(interval)
    }
  }, [])

  return { servers, isLoading, error, source }
}
