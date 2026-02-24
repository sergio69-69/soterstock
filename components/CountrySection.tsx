'use client'

import { useState, useEffect } from 'react'
import { Server, CountryInfo } from '@/types/server'
import { getCountryStats } from '@/lib/groupServers'
import CountrySummary from './CountrySummary'
import ServerTable from './ServerTable'

interface CountrySectionProps {
  country: CountryInfo
  servers: Server[]
}

export default function CountrySection({ country, servers }: CountrySectionProps) {
  const [expanded, setExpanded] = useState(false)

  useEffect(() => {
    const handler = (e: Event) => {
      const code = (e as CustomEvent).detail
      if (code === country.code) setExpanded(true)
    }
    window.addEventListener('expand-country', handler)
    return () => window.removeEventListener('expand-country', handler)
  }, [country.code])

  if (servers.length === 0) return null

  const stats = getCountryStats(servers)
  const priceRange = `$${stats.minPrice.toFixed(2)}/mes`

  return (
    <section id={`country-${country.code}`} className="space-y-4 scroll-mt-20">
      <button
        onClick={() => setExpanded(!expanded)}
        className="w-full text-left"
      >
        <CountrySummary
          country={country}
          serverCount={stats.count}
          totalStock={stats.totalStock}
          priceRange={priceRange}
          expanded={expanded}
        />
      </button>
      {expanded && <ServerTable servers={servers} />}
    </section>
  )
}
