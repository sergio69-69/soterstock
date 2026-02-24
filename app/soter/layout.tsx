import type { Metadata } from 'next'
import 'leaflet/dist/leaflet.css'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'SoterStock | Servidores Dedicados',
  description: 'Catálogo de servidores dedicados de alto rendimiento. Despliegue inmediato en 5 ubicaciones globales, hardware de última generación y soporte 24/7. Precios en USD sin IVA.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
