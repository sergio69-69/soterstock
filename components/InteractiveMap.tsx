'use client'

import { useEffect, useState } from 'react'
import { MapContainer, TileLayer, Marker, Popup, useMapEvents } from 'react-leaflet'
import L from 'leaflet'
import { CountryCode } from '@/types/server'
import { useAppSettings } from '@/lib/context/AppSettingsContext'

interface MapCountryData {
  code: CountryCode
  name: string
  count: number
  totalStock: number
  priceRange: string
  coordinates: [number, number]
}

interface InteractiveMapProps {
  countryData: MapCountryData[]
}

function getScale(zoom: number) {
  if (zoom <= 2) return 0.7
  if (zoom <= 3) return 0.85
  if (zoom <= 4) return 1
  return 1.15
}

function createFlagIcon(code: string, totalStock: number, zoom: number) {
  const s = getScale(zoom)
  const fw = Math.round(36 * s)
  const fh = Math.round(26 * s)
  const bw = Math.round(20 * s)
  const bh = Math.round(20 * s)
  const fs = Math.round(10 * s)
  const br = Math.round(4 * s)
  const tw = fw + 12
  const th = fh + 8

  return L.divIcon({
    className: '',
    html: `
      <div style="position:relative; width:${tw}px; height:${th}px;">
        <img src="/flags/${code}.svg" style="
          width:${fw}px;
          height:${fh}px;
          border-radius:${br}px;
          border:2px solid white;
          box-shadow: 0 2px 8px rgba(0,0,0,0.35);
          object-fit: cover;
          display:block;
        " />
        <div style="
          position:absolute;
          bottom:-6px;
          right:-6px;
          background:#0C2C4D;
          color:white;
          border:2px solid white;
          border-radius:50%;
          width:${bw}px;
          height:${bh}px;
          display:flex;
          align-items:center;
          justify-content:center;
          font-size:${fs}px;
          font-weight:700;
          font-family:'Poppins',sans-serif;
          box-shadow: 0 1px 4px rgba(0,0,0,0.3);
        ">${totalStock}</div>
      </div>
    `,
    iconSize: [tw, th],
    iconAnchor: [tw / 2, th / 2],
    popupAnchor: [0, -(th / 2 + 4)],
  })
}

function ZoomTracker({ onZoom }: { onZoom: (z: number) => void }) {
  useMapEvents({
    zoomend: (e) => onZoom(e.target.getZoom()),
  })
  return null
}

function MapContent({ countryData }: InteractiveMapProps) {
  const { t, countryName } = useAppSettings()
  const [zoom, setZoom] = useState(2)

  useEffect(() => {
    // Fix Leaflet default marker icon issue with bundlers
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    delete (L.Icon.Default.prototype as any)._getIconUrl
    L.Icon.Default.mergeOptions({
      iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon-2x.png',
      iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon.png',
      shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-shadow.png',
    })
  }, [])

  const scrollToCountry = (code: CountryCode) => {
    window.dispatchEvent(new CustomEvent('expand-country', { detail: code }))
    document.getElementById(`country-${code}`)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <MapContainer
      center={[40, -10]}
      zoom={2}
      minZoom={2}
      maxZoom={6}
      scrollWheelZoom={false}
      className="h-[300px] sm:h-[400px] lg:h-[450px] w-full rounded-lg"
      style={{ background: '#E2E8F0' }}
    >
      <ZoomTracker onZoom={setZoom} />
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {countryData.filter((item) => item.count > 0).map((item) => (
        <Marker
          key={item.code}
          position={item.coordinates}
          icon={createFlagIcon(item.code, item.count, zoom)}
        >
          <Popup>
            <div className="text-center min-w-[160px]">
              <p className="font-heading font-bold text-primary text-base mb-1">{countryName(item.code)}</p>
              <p className="text-sm text-gray-600 mb-1">
                {item.count} {item.count === 1 ? t('map.server') : t('map.servers')}
              </p>
              <p className="text-sm text-gray-500 mb-2">
                {item.totalStock} {t('map.units')} &middot; {t('map.from')} {item.priceRange}
              </p>
              <button
                onClick={() => scrollToCountry(item.code)}
                className="btn-primary text-xs !py-1.5 !px-4 w-full"
              >
                {t('map.viewServers')}
              </button>
            </div>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  )
}

export default function InteractiveMap({ countryData }: InteractiveMapProps) {
  return <MapContent countryData={countryData} />
}
