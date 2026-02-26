'use client'

import { useEffect } from 'react'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
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

function createCustomIcon(count: number) {
  return L.divIcon({
    className: '',
    html: `
      <div style="
        background: #0C2C4D;
        color: white;
        border: 3px solid #569EE6;
        border-radius: 50%;
        width: 44px;
        height: 44px;
        display: flex;
        align-items: center;
        justify-content: center;
        font-weight: 700;
        font-size: 14px;
        font-family: 'Poppins', sans-serif;
        box-shadow: 0 2px 8px rgba(0,0,0,0.3);
      ">${count}</div>
    `,
    iconSize: [44, 44],
    iconAnchor: [22, 22],
    popupAnchor: [0, -24],
  })
}

function MapContent({ countryData }: InteractiveMapProps) {
  const { t, countryName } = useAppSettings()

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
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {countryData.map((item) => (
        <Marker
          key={item.code}
          position={item.coordinates}
          icon={createCustomIcon(item.count)}
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
