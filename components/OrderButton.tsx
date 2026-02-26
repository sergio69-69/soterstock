'use client'

import { useAppSettings } from '@/lib/context/AppSettingsContext'

export default function OrderButton({ serverId }: { serverId: string }) {
  const { t } = useAppSettings()

  return (
    <button
      onClick={() => alert(t('order.alertMessage', { id: serverId }))}
      className="btn-primary text-sm !py-2.5 !px-5 whitespace-nowrap"
    >
      {t('order.order')}
    </button>
  )
}
