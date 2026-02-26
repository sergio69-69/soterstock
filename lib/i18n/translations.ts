export type Language = 'ES' | 'EN' | 'FR' | 'ZH' | 'TR'

export type TranslationKey =
  // Header
  | 'header.serverStock'
  | 'header.map'
  | 'header.docs'
  | 'header.contact'
  | 'header.viewServers'
  | 'header.cart'
  | 'header.login'
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
  | 'filter.storage'
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
  // Settings selectors
  | 'settings.language'
  | 'settings.currency'
  | 'settings.vat'
  | 'settings.noVat'
  | 'settings.vatIncluded'

type TranslationDict = Record<TranslationKey, string>

export const translations: Record<Language, TranslationDict> = {
  ES: {
    'header.serverStock': 'Stock de Servidores',
    'header.map': 'Mapa',
    'header.docs': 'Documentación',
    'header.contact': 'Contacto',
    'header.viewServers': 'Ver Servidores',
    'header.cart': 'Carrito',
    'header.login': 'Login',
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
    'filter.ramAny': 'RAM (cualquiera)',
    'filter.storage': 'Almacenamiento',
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
    'settings.language': 'Idioma',
    'settings.currency': 'Moneda',
    'settings.vat': 'IVA',
    'settings.noVat': 'Sin IVA',
    'settings.vatIncluded': 'IVA incluido',
  },
  EN: {
    'header.serverStock': 'Server Stock',
    'header.map': 'Map',
    'header.docs': 'Documentation',
    'header.contact': 'Contact',
    'header.viewServers': 'View Servers',
    'header.cart': 'Cart',
    'header.login': 'Login',
    'hero.serversAvailable': '{count} servers available',
    'hero.title1': 'Dedicated Servers',
    'hero.title2': 'High Performance',
    'hero.pricesFrom': 'Prices from',
    'hero.noVat': 'No VAT',
    'hero.noContracts': 'No lock-in contracts',
    'hero.viewLocations': 'View Locations',
    'hero.exploreCatalog': 'Explore Catalog',
    'map.title': 'Our Locations',
    'map.subtitle': 'Click a marker to see available servers at each location.',
    'map.loadingMap': 'Loading map...',
    'map.servers': 'servers',
    'map.server': 'server',
    'map.units': 'units',
    'map.from': 'From',
    'map.viewServers': 'View servers',
    'filter.searchPlaceholder': 'Search by CPU, model or specification...',
    'filter.allCpu': 'All CPUs',
    'filter.ramAny': 'RAM (any)',
    'filter.storage': 'Storage',
    'filter.filterByCountry': 'Filter by Country',
    'filter.priceAsc': 'Price: low to high',
    'filter.priceDesc': 'Price: high to low',
    'filter.ramDesc': 'RAM: high to low',
    'filter.coresDesc': 'Cores: high to low',
    'filter.stockDesc': 'Stock: high to low',
    'filter.clear': 'Clear',
    'filter.showing': 'Showing',
    'filter.serversAvailable': 'servers available',
    'filter.serverAvailable': 'server available',
    'filter.priceInfo': 'No VAT',
    'country.servers': 'servers',
    'country.server': 'server',
    'country.unitsInStock': 'units in stock',
    'country.from': 'From',
    'table.processor': 'Processor',
    'table.cores': 'Cores',
    'table.ram': 'RAM',
    'table.storage': 'Storage',
    'table.bandwidth': 'Bandwidth',
    'table.stock': 'Stock',
    'table.price': 'Price',
    'table.perMonth': '/mo',
    'table.perHour': '/hr',
    'stock.outOfStock': 'Out of stock',
    'stock.remaining': 'remaining',
    'stock.remainingPlural': 'remaining',
    'stock.available': 'available',
    'stock.inStock': 'in stock',
    'order.order': 'Order',
    'order.alertMessage': 'Order request for server {id}. In production, this would open the purchase flow.',
    'noResults.title': 'No servers found',
    'noResults.subtitle': 'Try adjusting your search filters to see more results.',
    'footer.description': 'We simplify IT management. High-performance dedicated servers with instant deployment and 24/7 support.',
    'footer.servers': 'Servers',
    'footer.serversInstant': 'Instant Servers',
    'footer.serversCustom': 'Custom Servers',
    'footer.serversGpu': 'GPU Servers',
    'footer.offers': 'Offers',
    'footer.company': 'Company',
    'footer.aboutUs': 'About Us',
    'footer.dataCenter': 'Data Centers',
    'footer.sla': 'SLA',
    'footer.contact': 'Contact',
    'footer.contactHeading': 'Contact',
    'footer.allRightsReserved': 'All rights reserved.',
    'footer.terms': 'Terms',
    'footer.privacy': 'Privacy',
    'footer.cookies': 'Cookies',
    'settings.language': 'Language',
    'settings.currency': 'Currency',
    'settings.vat': 'VAT',
    'settings.noVat': 'No VAT',
    'settings.vatIncluded': 'VAT included',
  },
  FR: {
    'header.serverStock': 'Stock de Serveurs',
    'header.map': 'Carte',
    'header.docs': 'Documentation',
    'header.contact': 'Contact',
    'header.viewServers': 'Voir les Serveurs',
    'header.cart': 'Panier',
    'header.login': 'Connexion',
    'hero.serversAvailable': '{count} serveurs disponibles',
    'hero.title1': 'Serveurs Dédiés',
    'hero.title2': 'Haute Performance',
    'hero.pricesFrom': 'Prix à partir de',
    'hero.noVat': 'Hors TVA',
    'hero.noContracts': 'Sans engagement',
    'hero.viewLocations': 'Voir les Emplacements',
    'hero.exploreCatalog': 'Explorer le Catalogue',
    'map.title': 'Nos Emplacements',
    'map.subtitle': 'Cliquez sur un marqueur pour voir les serveurs disponibles à chaque emplacement.',
    'map.loadingMap': 'Chargement de la carte...',
    'map.servers': 'serveurs',
    'map.server': 'serveur',
    'map.units': 'unités',
    'map.from': 'À partir de',
    'map.viewServers': 'Voir les serveurs',
    'filter.searchPlaceholder': 'Rechercher par CPU, modèle ou spécification...',
    'filter.allCpu': 'Tous les CPU',
    'filter.ramAny': 'RAM (tous)',
    'filter.storage': 'Stockage',
    'filter.filterByCountry': 'Filtrer par Pays',
    'filter.priceAsc': 'Prix : croissant',
    'filter.priceDesc': 'Prix : décroissant',
    'filter.ramDesc': 'RAM : décroissant',
    'filter.coresDesc': 'Cores : décroissant',
    'filter.stockDesc': 'Stock : décroissant',
    'filter.clear': 'Effacer',
    'filter.showing': 'Affichage de',
    'filter.serversAvailable': 'serveurs disponibles',
    'filter.serverAvailable': 'serveur disponible',
    'filter.priceInfo': 'Hors TVA',
    'country.servers': 'serveurs',
    'country.server': 'serveur',
    'country.unitsInStock': 'unités en stock',
    'country.from': 'À partir de',
    'table.processor': 'Processeur',
    'table.cores': 'Cœurs',
    'table.ram': 'RAM',
    'table.storage': 'Stockage',
    'table.bandwidth': 'Bande Passante',
    'table.stock': 'Stock',
    'table.price': 'Prix',
    'table.perMonth': '/mois',
    'table.perHour': '/hr',
    'stock.outOfStock': 'Rupture de stock',
    'stock.remaining': 'restant',
    'stock.remainingPlural': 'restants',
    'stock.available': 'disponibles',
    'stock.inStock': 'en stock',
    'order.order': 'Commander',
    'order.alertMessage': 'Demande de commande pour le serveur {id}. En production, cela ouvrirait le flux d\'achat.',
    'noResults.title': 'Aucun serveur trouvé',
    'noResults.subtitle': 'Essayez d\'ajuster vos filtres de recherche pour voir plus de résultats.',
    'footer.description': 'Nous simplifions la gestion IT. Serveurs dédiés haute performance avec déploiement instantané et support 24/7.',
    'footer.servers': 'Serveurs',
    'footer.serversInstant': 'Serveurs Instant',
    'footer.serversCustom': 'Serveurs Custom',
    'footer.serversGpu': 'Serveurs GPU',
    'footer.offers': 'Offres',
    'footer.company': 'Entreprise',
    'footer.aboutUs': 'À Propos',
    'footer.dataCenter': 'Centres de Données',
    'footer.sla': 'SLA',
    'footer.contact': 'Contact',
    'footer.contactHeading': 'Contact',
    'footer.allRightsReserved': 'Tous droits réservés.',
    'footer.terms': 'Conditions',
    'footer.privacy': 'Confidentialité',
    'footer.cookies': 'Cookies',
    'settings.language': 'Langue',
    'settings.currency': 'Devise',
    'settings.vat': 'TVA',
    'settings.noVat': 'Hors TVA',
    'settings.vatIncluded': 'TVA incluse',
  },
  ZH: {
    'header.serverStock': '服务器库存',
    'header.map': '地图',
    'header.docs': '文档',
    'header.contact': '联系我们',
    'header.viewServers': '查看服务器',
    'header.cart': '购物车',
    'header.login': '登录',
    'hero.serversAvailable': '{count} 台服务器可用',
    'hero.title1': '专用服务器',
    'hero.title2': '高性能',
    'hero.pricesFrom': '价格从',
    'hero.noVat': '不含增值税',
    'hero.noContracts': '无合约束缚',
    'hero.viewLocations': '查看位置',
    'hero.exploreCatalog': '浏览目录',
    'map.title': '我们的位置',
    'map.subtitle': '点击标记查看各位置的可用服务器。',
    'map.loadingMap': '加载地图中...',
    'map.servers': '台服务器',
    'map.server': '台服务器',
    'map.units': '单位',
    'map.from': '起价',
    'map.viewServers': '查看服务器',
    'filter.searchPlaceholder': '按CPU、型号或规格搜索...',
    'filter.allCpu': '所有CPU',
    'filter.ramAny': 'RAM（任意）',
    'filter.storage': '存储',
    'filter.filterByCountry': '按国家筛选',
    'filter.priceAsc': '价格：从低到高',
    'filter.priceDesc': '价格：从高到低',
    'filter.ramDesc': 'RAM：从高到低',
    'filter.coresDesc': '核心：从高到低',
    'filter.stockDesc': '库存：从高到低',
    'filter.clear': '清除',
    'filter.showing': '显示',
    'filter.serversAvailable': '台可用服务器',
    'filter.serverAvailable': '台可用服务器',
    'filter.priceInfo': '不含增值税',
    'country.servers': '台服务器',
    'country.server': '台服务器',
    'country.unitsInStock': '单位有货',
    'country.from': '起价',
    'table.processor': '处理器',
    'table.cores': '核心',
    'table.ram': 'RAM',
    'table.storage': '存储',
    'table.bandwidth': '带宽',
    'table.stock': '库存',
    'table.price': '价格',
    'table.perMonth': '/月',
    'table.perHour': '/时',
    'stock.outOfStock': '无库存',
    'stock.remaining': '剩余',
    'stock.remainingPlural': '剩余',
    'stock.available': '可用',
    'stock.inStock': '有货',
    'order.order': '订购',
    'order.alertMessage': '服务器 {id} 的订购请求。在生产环境中，这将打开购买流程。',
    'noResults.title': '未找到服务器',
    'noResults.subtitle': '请尝试调整搜索过滤条件以查看更多结果。',
    'footer.description': '简化IT管理。高性能专用服务器，即时部署，全天候支持。',
    'footer.servers': '服务器',
    'footer.serversInstant': '即时服务器',
    'footer.serversCustom': '定制服务器',
    'footer.serversGpu': 'GPU服务器',
    'footer.offers': '优惠',
    'footer.company': '公司',
    'footer.aboutUs': '关于我们',
    'footer.dataCenter': '数据中心',
    'footer.sla': 'SLA',
    'footer.contact': '联系方式',
    'footer.contactHeading': '联系方式',
    'footer.allRightsReserved': '版权所有。',
    'footer.terms': '条款',
    'footer.privacy': '隐私',
    'footer.cookies': 'Cookies',
    'settings.language': '语言',
    'settings.currency': '货币',
    'settings.vat': '增值税',
    'settings.noVat': '不含增值税',
    'settings.vatIncluded': '含增值税',
  },
  TR: {
    'header.serverStock': 'Sunucu Stoğu',
    'header.map': 'Harita',
    'header.docs': 'Dokümantasyon',
    'header.contact': 'İletişim',
    'header.viewServers': 'Sunucuları Gör',
    'header.cart': 'Sepet',
    'header.login': 'Giriş',
    'hero.serversAvailable': '{count} sunucu mevcut',
    'hero.title1': 'Özel Sunucular',
    'hero.title2': 'Yüksek Performans',
    'hero.pricesFrom': 'Fiyatlar',
    'hero.noVat': 'KDV hariç',
    'hero.noContracts': 'Taahhütsüz',
    'hero.viewLocations': 'Konumları Gör',
    'hero.exploreCatalog': 'Kataloğu Keşfet',
    'map.title': 'Konumlarımız',
    'map.subtitle': 'Her konumdaki mevcut sunucuları görmek için bir işaretçiye tıklayın.',
    'map.loadingMap': 'Harita yükleniyor...',
    'map.servers': 'sunucu',
    'map.server': 'sunucu',
    'map.units': 'adet',
    'map.from': 'Başlayan',
    'map.viewServers': 'Sunucuları gör',
    'filter.searchPlaceholder': 'CPU, model veya özellik ara...',
    'filter.allCpu': 'Tüm CPU',
    'filter.ramAny': 'RAM (hepsi)',
    'filter.storage': 'Depolama',
    'filter.filterByCountry': 'Ülkeye Göre Filtrele',
    'filter.priceAsc': 'Fiyat: düşükten yükseğe',
    'filter.priceDesc': 'Fiyat: yüksekten düşüğe',
    'filter.ramDesc': 'RAM: yüksekten düşüğe',
    'filter.coresDesc': 'Çekirdek: yüksekten düşüğe',
    'filter.stockDesc': 'Stok: yüksekten düşüğe',
    'filter.clear': 'Temizle',
    'filter.showing': 'Gösterilen',
    'filter.serversAvailable': 'sunucu mevcut',
    'filter.serverAvailable': 'sunucu mevcut',
    'filter.priceInfo': 'KDV hariç',
    'country.servers': 'sunucu',
    'country.server': 'sunucu',
    'country.unitsInStock': 'adet stokta',
    'country.from': 'Başlayan',
    'table.processor': 'İşlemci',
    'table.cores': 'Çekirdek',
    'table.ram': 'RAM',
    'table.storage': 'Depolama',
    'table.bandwidth': 'Bant Genişliği',
    'table.stock': 'Stok',
    'table.price': 'Fiyat',
    'table.perMonth': '/ay',
    'table.perHour': '/sa',
    'stock.outOfStock': 'Stokta yok',
    'stock.remaining': 'kalan',
    'stock.remainingPlural': 'kalan',
    'stock.available': 'mevcut',
    'stock.inStock': 'stokta',
    'order.order': 'Sipariş',
    'order.alertMessage': 'Sunucu {id} için sipariş talebi. Üretimde, bu satın alma akışını açar.',
    'noResults.title': 'Sunucu bulunamadı',
    'noResults.subtitle': 'Daha fazla sonuç görmek için arama filtrelerini ayarlamayı deneyin.',
    'footer.description': 'BT yönetimini basitleştiriyoruz. Anında dağıtım ve 7/24 destek ile yüksek performanslı özel sunucular.',
    'footer.servers': 'Sunucular',
    'footer.serversInstant': 'Instant Sunucular',
    'footer.serversCustom': 'Özel Sunucular',
    'footer.serversGpu': 'GPU Sunucular',
    'footer.offers': 'Teklifler',
    'footer.company': 'Şirket',
    'footer.aboutUs': 'Hakkımızda',
    'footer.dataCenter': 'Veri Merkezleri',
    'footer.sla': 'SLA',
    'footer.contact': 'İletişim',
    'footer.contactHeading': 'İletişim',
    'footer.allRightsReserved': 'Tüm hakları saklıdır.',
    'footer.terms': 'Şartlar',
    'footer.privacy': 'Gizlilik',
    'footer.cookies': 'Çerezler',
    'settings.language': 'Dil',
    'settings.currency': 'Para Birimi',
    'settings.vat': 'KDV',
    'settings.noVat': 'KDV hariç',
    'settings.vatIncluded': 'KDV dahil',
  },
}

export const languageNames: Record<Language, string> = {
  ES: 'Español',
  EN: 'English',
  FR: 'Français',
  ZH: '中文',
  TR: 'Türkçe',
}

export const languageFlags: Record<Language, string> = {
  ES: '🇪🇸',
  EN: '🇬🇧',
  FR: '🇫🇷',
  ZH: '🇨🇳',
  TR: '🇹🇷',
}
