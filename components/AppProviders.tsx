'use client'

import { ReactNode } from 'react'
import { AppSettingsProvider } from '@/lib/context/AppSettingsContext'

export default function AppProviders({ children }: { children: ReactNode }) {
  return (
    <AppSettingsProvider>
      {children}
    </AppSettingsProvider>
  )
}
