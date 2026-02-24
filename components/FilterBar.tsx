'use client'

export interface Filters {
  search: string
  cpuBrand: string
  ramMin: string
  storageType: string
  location: string
  sortBy: string
}

interface FilterBarProps {
  filters: Filters
  onChange: (filters: Filters) => void
  resultCount: number
}

export default function FilterBar({ filters, onChange, resultCount }: FilterBarProps) {
  const update = (key: keyof Filters, value: string) => {
    onChange({ ...filters, [key]: value })
  }

  const clearFilters = () => {
    onChange({
      search: '',
      cpuBrand: '',
      ramMin: '',
      storageType: '',
      location: '',
      sortBy: 'price-asc',
    })
  }

  const hasActiveFilters = filters.search || filters.cpuBrand || filters.ramMin || filters.storageType || filters.location

  return (
    <div className="bg-white rounded-[10px] shadow-sm border border-gray-100 p-4 sm:p-6">
      {/* Search */}
      <div className="mb-4">
        <div className="relative">
          <svg className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
          <input
            type="text"
            placeholder="Buscar por CPU, modelo o especificación..."
            value={filters.search}
            onChange={(e) => update('search', e.target.value)}
            className="w-full pl-10 pr-4 py-3 bg-surface rounded-lg border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent transition-colors"
          />
        </div>
      </div>

      {/* Filter row */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
        <select
          value={filters.cpuBrand}
          onChange={(e) => update('cpuBrand', e.target.value)}
          className="px-3 py-2.5 bg-surface rounded-lg border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent transition-colors"
        >
          <option value="">Todos los CPU</option>
          <option value="Intel">Intel</option>
          <option value="AMD">AMD</option>
        </select>

        <select
          value={filters.ramMin}
          onChange={(e) => update('ramMin', e.target.value)}
          className="px-3 py-2.5 bg-surface rounded-lg border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent transition-colors"
        >
          <option value="">RAM (cualquiera)</option>
          <option value="16">16 GB+</option>
          <option value="32">32 GB+</option>
          <option value="64">64 GB+</option>
          <option value="128">128 GB+</option>
          <option value="256">256 GB+</option>
        </select>

        <select
          value={filters.storageType}
          onChange={(e) => update('storageType', e.target.value)}
          className="px-3 py-2.5 bg-surface rounded-lg border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent transition-colors"
        >
          <option value="">Almacenamiento</option>
          <option value="NVMe SSD">NVMe SSD</option>
          <option value="SSD">SSD</option>
          <option value="HDD">HDD</option>
          <option value="SAS">SAS</option>
        </select>

        <select
          value={filters.location}
          onChange={(e) => update('location', e.target.value)}
          className="px-3 py-2.5 bg-surface rounded-lg border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent transition-colors"
        >
          <option value="">Filtrar por País</option>
          <option value="NL">Países Bajos</option>
          <option value="CH">Suiza</option>
          <option value="PL">Polonia</option>
          <option value="IT">Italia</option>
          <option value="ES">España</option>
          <option value="FR">Francia</option>
          <option value="UK">Reino Unido</option>
          <option value="DE">Alemania</option>
          <option value="FI">Finlandia</option>
          <option value="US">Estados Unidos</option>
          <option value="TR">Turquía</option>
          <option value="RU">Rusia</option>
        </select>

        <select
          value={filters.sortBy}
          onChange={(e) => update('sortBy', e.target.value)}
          className="px-3 py-2.5 bg-surface rounded-lg border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent transition-colors"
        >
          <option value="price-asc">Precio: menor a mayor</option>
          <option value="price-desc">Precio: mayor a menor</option>
          <option value="ram-desc">RAM: mayor a menor</option>
          <option value="cores-desc">Cores: mayor a menor</option>
          <option value="stock-desc">Stock: mayor a menor</option>
        </select>

        {hasActiveFilters && (
          <button
            onClick={clearFilters}
            className="px-3 py-2.5 text-sm text-coral hover:text-coral/80 border border-coral/30 rounded-lg hover:bg-coral/5 transition-colors flex items-center justify-center gap-1"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
            Limpiar
          </button>
        )}
      </div>

      {/* Result count */}
      <div className="mt-4 pt-3 border-t border-gray-100 flex items-center justify-between">
        <p className="text-sm text-gray-500">
          Mostrando <span className="font-semibold text-primary">{resultCount}</span> servidor{resultCount !== 1 ? 'es' : ''} disponible{resultCount !== 1 ? 's' : ''}
        </p>
        <p className="text-xs text-gray-400">
          Precios en USD &middot; Sin IVA
        </p>
      </div>
    </div>
  )
}
