'use client'

import { Server } from '@/types/server'
import { useAppSettings } from '@/lib/context/AppSettingsContext'
import StockBadge from './StockBadge'
import OrderButton from './OrderButton'

export default function ServerTable({ servers }: { servers: Server[] }) {
  const { t, price, priceHourly } = useAppSettings()

  if (servers.length === 0) {
    return (
      <div className="bg-white rounded-[10px] shadow-sm border border-gray-100 p-12 text-center">
        <svg className="w-16 h-16 text-gray-300 mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2" />
        </svg>
        <h3 className="font-heading font-semibold text-lg text-primary mb-2">
          {t('noResults.title')}
        </h3>
        <p className="text-sm text-gray-500">
          {t('noResults.subtitle')}
        </p>
      </div>
    )
  }

  return (
    <>
      {/* Desktop Table */}
      <div className="hidden lg:block bg-white rounded-[10px] shadow-sm border border-gray-100 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="bg-surface border-b border-gray-200">
                <th className="text-left px-4 py-3 text-xs font-heading font-semibold text-primary uppercase tracking-wider">{t('table.processor')}</th>
                <th className="text-center px-3 py-3 text-xs font-heading font-semibold text-primary uppercase tracking-wider">{t('table.cores')}</th>
                <th className="text-center px-3 py-3 text-xs font-heading font-semibold text-primary uppercase tracking-wider">{t('table.ram')}</th>
                <th className="text-left px-3 py-3 text-xs font-heading font-semibold text-primary uppercase tracking-wider">{t('table.storage')}</th>
                <th className="text-left px-3 py-3 text-xs font-heading font-semibold text-primary uppercase tracking-wider">{t('table.bandwidth')}</th>
                <th className="text-center px-3 py-3 text-xs font-heading font-semibold text-primary uppercase tracking-wider">{t('table.stock')}</th>
                <th className="text-right px-4 py-3 text-xs font-heading font-semibold text-primary uppercase tracking-wider">{t('table.price')}</th>
                <th className="px-4 py-3"></th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {servers.map((server) => (
                <tr key={server.id} className="hover:bg-accent/[0.03] transition-colors group">
                  <td className="px-4 py-4">
                    <div className="flex items-center gap-2">
                      <span className={`inline-block w-1.5 h-8 rounded-full ${server.cpuBrand === 'Intel' ? 'bg-blue-500' : 'bg-red-500'}`} />
                      <div>
                        <div className="text-sm font-medium text-primary">{server.cpu}</div>
                        {server.gpu && <div className="text-xs text-accent font-medium">{server.gpu}</div>}
                      </div>
                    </div>
                  </td>
                  <td className="px-3 py-4 text-center">
                    <span className="text-sm font-medium text-primary">{server.cores}C</span>
                    <span className="text-xs text-gray-400">/{server.threads}T</span>
                    <div className="text-xs text-gray-500">{server.clockSpeed}</div>
                  </td>
                  <td className="px-3 py-4 text-center">
                    <span className="text-sm font-semibold text-primary">{server.ram} GB</span>
                    <div className="text-xs text-gray-400">{server.ramType}</div>
                  </td>
                  <td className="px-3 py-4">
                    <div className="text-sm text-primary">{server.storage}</div>
                    <div className="text-xs text-gray-400">{server.storageType}</div>
                  </td>
                  <td className="px-3 py-4">
                    <div className="text-sm text-primary">{server.bandwidth}</div>
                  </td>
                  <td className="px-3 py-4 text-center">
                    <StockBadge stock={server.stock} />
                  </td>
                  <td className="px-4 py-4 text-right">
                    <div className="text-lg font-heading font-bold text-primary">
                      {price(server.priceMonthly)}
                    </div>
                    <div className="text-xs text-gray-400">{t('table.perMonth')}</div>
                    <div className="text-xs text-accent">{priceHourly(server.priceHourly)}{t('table.perHour')}</div>
                  </td>
                  <td className="px-4 py-4">
                    <OrderButton serverId={server.id} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Mobile Cards */}
      <div className="lg:hidden space-y-4">
        {servers.map((server) => (
          <div key={server.id} className="card p-5">
            <div className="flex items-start justify-between mb-3">
              <div className="flex items-center gap-2">
                <span className={`inline-block w-1.5 h-8 rounded-full ${server.cpuBrand === 'Intel' ? 'bg-blue-500' : 'bg-red-500'}`} />
                <div>
                  <div className="text-sm font-semibold text-primary">{server.cpu}</div>
                  <div className="text-xs text-gray-500">{server.clockSpeed} &middot; {server.cores}C/{server.threads}T</div>
                  {server.gpu && <div className="text-xs text-accent font-medium">{server.gpu}</div>}
                </div>
              </div>
              <StockBadge stock={server.stock} />
            </div>

            <div className="grid grid-cols-2 gap-3 mb-4">
              <div className="bg-surface rounded-lg p-2.5">
                <div className="text-xs text-gray-500 mb-0.5">{t('table.ram')}</div>
                <div className="text-sm font-semibold text-primary">{server.ram} GB</div>
                <div className="text-xs text-gray-400">{server.ramType}</div>
              </div>
              <div className="bg-surface rounded-lg p-2.5">
                <div className="text-xs text-gray-500 mb-0.5">{t('table.storage')}</div>
                <div className="text-sm font-semibold text-primary">{server.storage}</div>
              </div>
              <div className="bg-surface rounded-lg p-2.5 col-span-2">
                <div className="text-xs text-gray-500 mb-0.5">{t('table.bandwidth')}</div>
                <div className="text-sm font-semibold text-primary">{server.bandwidth}</div>
              </div>
            </div>

            <div className="flex items-end justify-between pt-3 border-t border-gray-100">
              <div>
                <div className="text-2xl font-heading font-bold text-primary">
                  {price(server.priceMonthly)}
                  <span className="text-sm font-normal text-gray-400">{t('table.perMonth')}</span>
                </div>
                <div className="text-xs text-accent">{priceHourly(server.priceHourly)}{t('table.perHour')}</div>
              </div>
              <OrderButton serverId={server.id} />
            </div>
          </div>
        ))}
      </div>
    </>
  )
}
