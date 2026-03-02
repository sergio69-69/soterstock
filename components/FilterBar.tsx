'use client'

import { useAppSettings } from '@/lib/context/AppSettingsContext'
import { CountryCode } from '@/types/server'
import { countries } from '@/data/countries'

export interface Filters {
  search: string
  cpuBrand: string
  coresMin: string
  ramMin: string
  storageType: string
  storageMin: string
  location: string
  sortBy: string
}

interface FilterBarProps {
  filters: Filters
  onChange: (filters: Filters) => void
  resultCount: number
}

export default function FilterBar({ filters, onChange, resultCount }: FilterBarProps) {
  const { t, countryName, priceLabel } = useAppSettings()

  const update = (key: keyof Filters, value: string) => {
    onChange({ ...filters, [key]: value })
  }

  const clearFilters = () => {
    onChange({
      search: '',
      cpuBrand: '',
      coresMin: '',
      ramMin: '',
      storageType: '',
      storageMin: '',
      location: '',
      sortBy: 'price-asc',
    })
  }

  const hasActiveFilters = filters.search || filters.cpuBrand || filters.coresMin || filters.ramMin || filters.storageType || filters.storageMin || filters.location

  const selectClass = "min-w-0 flex-1 px-2 py-1.5 bg-primary text-white text-xs rounded-md border border-primary/80 focus:outline-none focus:ring-2 focus:ring-accent/40 transition-colors cursor-pointer appearance-none bg-[length:10px] bg-[right_4px_center] bg-no-repeat truncate"

  const selectStyle = {
    backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' fill='white' viewBox='0 0 16 16'%3E%3Cpath d='M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z'/%3E%3C/svg%3E")`,
    paddingRight: '18px',
  }

  return (
    <div className="bg-white rounded-[10px] shadow-sm border border-gray-100 p-4 sm:p-5">
      {/* Search */}
      <div className="mb-3">
        <div className="relative">
          <svg className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
          <input
            type="text"
            placeholder={t('filter.searchPlaceholder')}
            value={filters.search}
            onChange={(e) => update('search', e.target.value)}
            className="w-full pl-9 pr-4 py-2 bg-surface rounded-md border border-gray-200 text-xs focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent transition-colors"
          />
        </div>
      </div>

      {/* All filters on one line, stretching to fill width */}
      <div className="flex items-center gap-1.5 w-full">
        <select
          value={filters.cpuBrand}
          onChange={(e) => update('cpuBrand', e.target.value)}
          className={selectClass}
          style={selectStyle}
        >
          <option value="">{t('filter.allCpu')}</option>
          <option value="Intel">Intel</option>
          <option value="AMD">AMD</option>
        </select>

        <select
          value={filters.coresMin}
          onChange={(e) => update('coresMin', e.target.value)}
          className={selectClass}
          style={selectStyle}
        >
          <option value="">{t('filter.coresAny')}</option>
          <option value="4">4+ cores</option>
          <option value="8">8+ cores</option>
          <option value="16">16+ cores</option>
          <option value="24">24+ cores</option>
          <option value="32">32+ cores</option>
          <option value="64">64+ cores</option>
        </select>

        <select
          value={filters.ramMin}
          onChange={(e) => update('ramMin', e.target.value)}
          className={selectClass}
          style={selectStyle}
        >
          <option value="">{t('filter.ramAny')}</option>
          <option value="16">16 GB+</option>
          <option value="32">32 GB+</option>
          <option value="64">64 GB+</option>
          <option value="128">128 GB+</option>
          <option value="256">256 GB+</option>
          <option value="512">512 GB+</option>
        </select>

        <select
          value={filters.storageType}
          onChange={(e) => update('storageType', e.target.value)}
          className={selectClass}
          style={selectStyle}
        >
          <option value="">{t('filter.storageType')}</option>
          <option value="NVMe SSD">NVMe SSD</option>
          <option value="SSD">SSD</option>
          <option value="HDD">HDD</option>
          <option value="SAS">SAS</option>
        </select>

        <select
          value={filters.storageMin}
          onChange={(e) => update('storageMin', e.target.value)}
          className={selectClass}
          style={selectStyle}
        >
          <option value="">{t('filter.storageCapacity')}</option>
          <option value="256">256 GB+</option>
          <option value="512">512 GB+</option>
          <option value="1000">1 TB+</option>
          <option value="2000">2 TB+</option>
          <option value="4000">4 TB+</option>
          <option value="8000">8 TB+</option>
        </select>

        <select
          value={filters.location}
          onChange={(e) => update('location', e.target.value)}
          className={selectClass}
          style={selectStyle}
        >
          <option value="">{t('filter.filterByCountry')}</option>
          {countries.map((c) => (
            <option key={c.code} value={c.code}>{countryName(c.code as CountryCode)}</option>
          ))}
        </select>

        <select
          value={filters.sortBy}
          onChange={(e) => update('sortBy', e.target.value)}
          className={selectClass}
          style={selectStyle}
        >
          <option value="price-asc">{t('filter.priceAsc')}</option>
          <option value="price-desc">{t('filter.priceDesc')}</option>
          <option value="ram-desc">{t('filter.ramDesc')}</option>
          <option value="cores-desc">{t('filter.coresDesc')}</option>
          <option value="stock-desc">{t('filter.stockDesc')}</option>
        </select>

        {hasActiveFilters && (
          <button
            onClick={clearFilters}
            className="flex-shrink-0 px-2 py-1.5 text-xs text-white bg-coral hover:bg-coral/90 rounded-md transition-colors flex items-center gap-1"
          >
            <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
            {t('filter.clear')}
          </button>
        )}
      </div>

      {/* Result count */}
      <div className="mt-3 pt-2.5 border-t border-gray-100 flex items-center justify-between">
        <p className="text-xs text-gray-500">
          {t('filter.showing')} <span className="font-semibold text-primary">{resultCount}</span> {resultCount !== 1 ? t('filter.serversAvailable') : t('filter.serverAvailable')}
        </p>
        <p className="text-[11px] text-gray-400">
          {priceLabel()}
        </p>
      </div>
    </div>
  )
}
