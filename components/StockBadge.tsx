'use client'

import { useAppSettings } from '@/lib/context/AppSettingsContext'

export default function StockBadge({ stock }: { stock: number }) {
  const { t } = useAppSettings()

  if (stock <= 0) {
    return (
      <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-blue-50 text-blue-600">
        <span className="w-1.5 h-1.5 bg-blue-400 rounded-full" />
        {t('stock.onDemand')}
      </span>
    )
  }

  if (stock <= 2) {
    return (
      <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-coral/10 text-coral">
        <span className="w-1.5 h-1.5 bg-coral rounded-full animate-pulse" />
        {stock} {stock > 1 ? t('stock.remainingPlural') : t('stock.remaining')}
      </span>
    )
  }

  if (stock <= 5) {
    return (
      <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-yellow-50 text-yellow-700">
        <span className="w-1.5 h-1.5 bg-yellow-500 rounded-full" />
        {stock} {t('stock.available')}
      </span>
    )
  }

  return (
    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-green-50 text-green-700">
      <span className="w-1.5 h-1.5 bg-green-500 rounded-full" />
      {stock} {t('stock.inStock')}
    </span>
  )
}
