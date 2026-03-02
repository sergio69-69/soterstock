export type TranslationKey =
  // Header
  | 'header.serverStock'
  | 'header.map'
  | 'header.contact'
  | 'header.viewServers'
  // Hero
  | 'hero.serversAvailable'
  | 'hero.title1'
  | 'hero.title2'
  | 'hero.pricesFrom'
  | 'hero.noVat'
  | 'hero.noContracts'
  | 'hero.viewLocations'
  | 'hero.exploreCatalog'
  // Map section
  | 'map.title'
  | 'map.subtitle'
  | 'map.loadingMap'
  | 'map.servers'
  | 'map.server'
  | 'map.units'
  | 'map.from'
  | 'map.viewServers'
  // Filter bar
  | 'filter.searchPlaceholder'
  | 'filter.allCpu'
  | 'filter.ramAny'
  | 'filter.coresAny'
  | 'filter.storageType'
  | 'filter.storageCapacity'
  | 'filter.filterByCountry'
  | 'filter.priceAsc'
  | 'filter.priceDesc'
  | 'filter.ramDesc'
  | 'filter.coresDesc'
  | 'filter.stockDesc'
  | 'filter.clear'
  | 'filter.showing'
  | 'filter.serversAvailable'
  | 'filter.serverAvailable'
  | 'filter.priceInfo'
  // Country summary
  | 'country.servers'
  | 'country.server'
  | 'country.unitsInStock'
  | 'country.from'
  // Server table
  | 'table.processor'
  | 'table.cores'
  | 'table.ram'
  | 'table.storage'
  | 'table.bandwidth'
  | 'table.stock'
  | 'table.price'
  | 'table.perMonth'
  | 'table.perHour'
  // Stock badge
  | 'stock.outOfStock'
  | 'stock.onDemand'
  | 'stock.remaining'
  | 'stock.remainingPlural'
  | 'stock.available'
  | 'stock.inStock'
  // Order button
  | 'order.order'
  | 'order.alertMessage'
  // No results
  | 'noResults.title'
  | 'noResults.subtitle'
  // Footer
  | 'footer.description'
  | 'footer.servers'
  | 'footer.serversInstant'
  | 'footer.serversCustom'
  | 'footer.serversGpu'
  | 'footer.offers'
  | 'footer.company'
  | 'footer.aboutUs'
  | 'footer.dataCenter'
  | 'footer.sla'
  | 'footer.contact'
  | 'footer.contactHeading'
  | 'footer.allRightsReserved'
  | 'footer.terms'
  | 'footer.privacy'
  | 'footer.cookies'
  // Settings
  | 'settings.noVat'
  | 'settings.vatIncluded'

type TranslationDict = Record<TranslationKey, string>

export const translations: Record<string, TranslationDict> = {
  ES: {
    'header.serverStock': 'Stock de Servidores',
    'header.map': 'Mapa',
    'header.contact': 'Contacto',
    'header.viewServers': 'Ver Servidores',
    'hero.serversAvailable': '{count} servidores disponibles',
    'hero.title1': 'Servidores Dedicados',
    'hero.title2': 'de Alto Rendimiento',
    'hero.pricesFrom': 'Precios desde',
    'hero.noVat': 'Sin IVA',
    'hero.noContracts': 'Sin contratos de permanencia',
    'hero.viewLocations': 'Ver Ubicaciones',
    'hero.exploreCatalog': 'Explorar Catálogo',
    'map.title': 'Nuestras Ubicaciones',
    'map.subtitle': 'Haz clic en un marcador para ver los servidores disponibles en cada ubicación.',
    'map.loadingMap': 'Cargando mapa...',
    'map.servers': 'servidores',
    'map.server': 'servidor',
    'map.units': 'unidades',
    'map.from': 'Desde',
    'map.viewServers': 'Ver servidores',
    'filter.searchPlaceholder': 'Buscar por CPU, modelo o especificación...',
    'filter.allCpu': 'Todos los CPU',
    'filter.coresAny': 'Cores (cualquiera)',
    'filter.ramAny': 'RAM (cualquiera)',
    'filter.storageType': 'Tipo de disco',
    'filter.storageCapacity': 'Capacidad de disco',
    'filter.filterByCountry': 'Filtrar por País',
    'filter.priceAsc': 'Precio: menor a mayor',
    'filter.priceDesc': 'Precio: mayor a menor',
    'filter.ramDesc': 'RAM: mayor a menor',
    'filter.coresDesc': 'Cores: mayor a menor',
    'filter.stockDesc': 'Stock: mayor a menor',
    'filter.clear': 'Limpiar',
    'filter.showing': 'Mostrando',
    'filter.serversAvailable': 'servidores disponibles',
    'filter.serverAvailable': 'servidor disponible',
    'filter.priceInfo': 'Sin IVA',
    'country.servers': 'servidores',
    'country.server': 'servidor',
    'country.unitsInStock': 'unidades en stock',
    'country.from': 'Desde',
    'table.processor': 'Procesador',
    'table.cores': 'Cores',
    'table.ram': 'RAM',
    'table.storage': 'Almacenamiento',
    'table.bandwidth': 'Ancho de Banda',
    'table.stock': 'Stock',
    'table.price': 'Precio',
    'table.perMonth': '/mes',
    'table.perHour': '/hr',
    'stock.outOfStock': 'Sin stock',
    'stock.onDemand': 'Bajo pedido',
    'stock.remaining': 'restante',
    'stock.remainingPlural': 'restantes',
    'stock.available': 'disponibles',
    'stock.inStock': 'en stock',
    'order.order': 'Ordenar',
    'order.alertMessage': 'Solicitud de orden para servidor {id}. En producción, esto abriría el flujo de compra.',
    'noResults.title': 'No se encontraron servidores',
    'noResults.subtitle': 'Intenta ajustar los filtros de búsqueda para ver más resultados.',
    'footer.description': 'Simplificamos la gestión IT. Servidores dedicados de alto rendimiento con despliegue inmediato y soporte 24/7.',
    'footer.servers': 'Servidores',
    'footer.serversInstant': 'Servidores Instant',
    'footer.serversCustom': 'Servidores Custom',
    'footer.serversGpu': 'Servidores GPU',
    'footer.offers': 'Ofertas',
    'footer.company': 'Empresa',
    'footer.aboutUs': 'Sobre Nosotros',
    'footer.dataCenter': 'Centro de Datos',
    'footer.sla': 'SLA',
    'footer.contact': 'Contacto',
    'footer.contactHeading': 'Contacto',
    'footer.allRightsReserved': 'Todos los derechos reservados.',
    'footer.terms': 'Términos',
    'footer.privacy': 'Privacidad',
    'footer.cookies': 'Cookies',
    'settings.noVat': 'Sin IVA',
    'settings.vatIncluded': 'IVA incluido',
  },
}
