# SoterStock - Especificacion Completa de Diseno Grafico

## 1. VISION GENERAL DEL PROYECTO

SoterStock es un catalogo web de servidores dedicados de alto rendimiento. La aplicacion permite a los usuarios explorar, filtrar y ordenar servidores bare-metal distribuidos en 12 paises (Paises Bajos, Suiza, Polonia, Italia, Espana, Francia, Reino Unido, Alemania, Finlandia, Estados Unidos, Turquia y Rusia). Incluye un mapa interactivo, sistema de filtrado avanzado, tablas de especificaciones tecnicas, y controles de idioma, moneda e IVA. El idioma principal es el espanol. La estetica es corporativa-tecnologica: fondo claro, tarjetas blancas, tipografia limpia y una paleta dominada por azul marino oscuro con acentos azul brillante.

---

## 2. PALETA DE COLORES

### Colores principales
| Nombre           | HEX       | Uso                                                        |
|------------------|-----------|------------------------------------------------------------|
| Primary          | `#0C2C4D` | Header, footer, titulos, textos destacados, fondo del mapa |
| Primary Light    | `#366287` | Fondos de selectores en header, gradientes                 |
| Accent           | `#569EE6` | Botones primarios, enlaces activos, bordes de acento       |
| Accent Hover     | `#4278AF` | Estado hover de botones primarios                          |
| Coral            | `#F0774A` | Alertas de stock critico, boton "limpiar filtros"          |
| Surface          | `#F7FAFC` | Fondo general del body, celdas de filtros, celdas moviles  |
| Surface Dark     | `#05121F` | Inicio del gradiente oscuro del hero                       |
| Body Text        | `#2F2F2F` | Color de texto general del body                            |

### Colores de sistema (Tailwind defaults usados)
| Nombre             | HEX / Clase           | Uso                                      |
|--------------------|-----------------------|------------------------------------------|
| Blanco             | `#FFFFFF`             | Fondo de tarjetas, texto sobre oscuro    |
| Gris 100           | `#F3F4F6` / gray-100 | Bordes de tarjetas, divisores            |
| Gris 200           | `#E5E7EB` / gray-200 | Bordes de inputs, bordes de cabecera     |
| Gris 300           | gray-300              | Texto de nav links en header             |
| Gris 400           | gray-400              | Texto secundario, iconos placeholder     |
| Gris 500           | gray-500              | Texto terciario, bordes de selectores    |
| Verde 300          | green-300             | Texto del badge de disponibilidad hero   |
| Verde 400          | green-400             | Punto pulsante del hero                  |
| Verde 500          | green-500             | Punto del badge stock saludable          |
| Verde 50/700       | green-50 / green-700  | Badge stock disponible (fondo/texto)     |
| Amarillo 50/500/700| yellow-50/500/700     | Badge stock limitado (fondo/punto/texto) |
| Azul 500           | blue-500              | Indicador CPU Intel                      |
| Rojo 500           | red-500               | Indicador CPU AMD                        |
| Fondo del mapa     | `#E2E8F0`            | Background del contenedor Leaflet        |

### Gradientes
| Nombre          | CSS                                                                 | Uso                  |
|-----------------|---------------------------------------------------------------------|----------------------|
| Gradient Dark   | `linear-gradient(135deg, #05121F 0%, #0C2C4D 50%, #366287 100%)`   | Fondo del Hero       |
| Gradient Accent | `linear-gradient(135deg, #4278AF 0%, #25445E 100%)`                | Disponible para uso  |

---

## 3. TIPOGRAFIA

### Fuentes
- **Heading (Poppins):** Google Fonts, pesos 300, 400, 500, 600, 700. Usada en todos los titulos (h1-h6), botones, badges, precios y labels de la tabla.
- **Body (Roboto):** Google Fonts, pesos 300, 400, 500, 700. Usada en todo el texto de parrafo, inputs, descripciones y contenido general.

### Escala tipografica usada
| Elemento                            | Tamano              | Peso        | Fuente   | Color              |
|-------------------------------------|---------------------|-------------|----------|--------------------|
| Hero h1 (movil)                     | text-3xl (30px)     | bold (700)  | Poppins  | Blanco             |
| Hero h1 (sm)                        | text-4xl (36px)     | bold        | Poppins  | Blanco             |
| Hero h1 (lg)                        | text-5xl (48px)     | bold        | Poppins  | Blanco             |
| Hero h1 linea 2                     | (mismo tamano)      | bold        | Poppins  | Accent #569EE6     |
| Nombre de pais (CountrySummary)     | text-xl (20px)      | bold        | Poppins  | Primary #0C2C4D    |
| Footer marca "SoterStock"           | text-2xl (24px)     | semibold    | Poppins  | Blanco             |
| Logo texto "SoterStock" (header)    | text-lg (18px)      | semibold    | Poppins  | Blanco             |
| Precio mensual (tabla desktop)      | text-lg (18px)      | bold        | Poppins  | Primary            |
| Precio mensual (tarjeta movil)      | text-2xl (24px)     | bold        | Poppins  | Primary            |
| Titulo seccion mapa                 | text-2xl (24px)     | bold        | Poppins  | Primary            |
| Cabeceras de tabla                  | text-xs (12px)      | semibold    | Poppins  | Primary, uppercase |
| Texto de filtros/selects            | text-sm (14px)      | normal      | Roboto   | Body #2F2F2F       |
| Texto nav header (desktop)          | text-xs (12px)      | normal      | Roboto   | gray-300           |
| Badge de stock                      | text-xs (12px)      | medium      | Roboto   | Variable           |
| Subtexto hero                       | text-sm (14px)      | normal      | Roboto   | gray-400           |
| Subtitulo header                    | text-xs (12px)      | normal      | Roboto   | accent/80          |
| Texto de footer links               | text-sm (14px)      | normal      | Roboto   | gray-400           |
| Footer headings columnas            | text-sm (14px)      | semibold    | Poppins  | Accent, uppercase  |
| Copyright                           | text-xs (12px)      | normal      | Roboto   | gray-500           |

---

## 4. ESTRUCTURA DE LAYOUT GENERAL

```
+------------------------------------------------------------------+
|                     HEADER (sticky, z-9999)                       |
|  bg-primary, h-20 (80px), shadow-lg                             |
+------------------------------------------------------------------+
|                                                                    |
|  MAIN (flex-1)                                                    |
|    +------------------------------------------------------------+ |
|    |  HERO (gradient-dark, py-10 a py-14)                       | |
|    +------------------------------------------------------------+ |
|    |  MAPA INTERACTIVO (section #mapa, py-10)                   | |
|    +------------------------------------------------------------+ |
|    |  CATALOGO (section #catalogo, py-10)                       | |
|    |    [FilterBar]                                              | |
|    |    [CountrySection] x N (acordeon)                         | |
|    |       [CountrySummary] (siempre visible)                   | |
|    |       [ServerTable] (visible si expandido)                 | |
|    +------------------------------------------------------------+ |
|                                                                    |
+------------------------------------------------------------------+
|                        FOOTER                                      |
|  bg-primary, 4 columnas en lg, texto blanco                     |
+------------------------------------------------------------------+
```

### Contenedor principal
- Ancho maximo: `max-w-7xl` (1280px)
- Padding horizontal: `px-4` (16px) / `sm:px-6` (24px) / `lg:px-8` (32px)
- Centrado: `mx-auto`

### Fondo general
- `body`: background `#F7FAFC` (surface), color `#2F2F2F`
- Scroll: `scroll-behavior: smooth`

---

## 5. COMPONENTES - DESCRIPCION VISUAL DETALLADA

### 5.1 HEADER

**Posicion y tamano:**
- Sticky en la parte superior (`sticky top-0`)
- Z-index: 9999 (por encima de todo, incluido el mapa Leaflet)
- Altura: 80px (`h-20`)
- Fondo: `#0C2C4D` (primary) con `shadow-lg`

**Disposicion interna (desktop, md+):**
```
[Logo 76x76] [SoterStock] | [Stock de Servidores]  [ES v][EUR|USD][IVA v]  |  Mapa  Docs  Contacto  [Ver Servidores]  [Carrito]  [Login]
```

- **Logo:** Imagen PNG de 76x76px a la izquierda. Al lado, el texto "SoterStock" en Poppins semibold 18px blanco, con tracking-tight. Separados por gap de 12px.
- **Subtitulo:** Texto "Stock de Servidores" en texto xs, color accent al 80% de opacidad. Separado del logo por un borde izquierdo de 1px (`border-primary-light`), con margen izquierdo de 20px y padding izquierdo de 20px. Solo visible en xl (1280px+).
- **Selectores (bloque de 3):** Agrupados con gap de 6px, visibles solo en md+.
  - **Selector de idioma:** Select con fondo `#366287` (primary-light), texto blanco xs, borde `gray-500`, border-radius 8px, padding 8px horizontal / 6px vertical. Opciones con emoji de bandera + nombre del idioma.
  - **Toggle de moneda:** Grupo de 2 botones inline ("EUR" | "USD") con borde `gray-500`, border-radius 8px, overflow hidden. El boton activo tiene fondo accent (`#569EE6`) con texto primary. El inactivo tiene fondo primary-light, texto gray-300. Texto xs, font-medium, padding 10px horizontal / 6px vertical.
  - **Selector de IVA:** Mismo estilo que el selector de idioma. Muestra "Sin IVA" como primera opcion, luego paises europeos con su porcentaje (ej: "Spain (21%)").
- **Divisor:** Caracter `|` en gray-500 entre selectores y navegacion.
- **Links de navegacion:** "Mapa", "Documentacion", "Contacto" en texto xs, gray-300, transicion a blanco en hover.
- **Boton "Ver Servidores":** Clase `btn-primary` con override de padding a `py-1.5 px-4`, texto xs. Fondo accent, texto blanco, border-radius pill (50px).
- **Boton carrito:** Icono SVG de carrito de compras (24x20px stroke), texto gray-300, hover blanco, padding 6px.
- **Boton Login:** Texto xs, gray-300, borde `gray-500`, border-radius 8px, padding 10px horizontal / 6px vertical. Incluye icono SVG de usuario (16x16) + texto "Login".

**Disposicion movil (< md):**
- Solo se muestra Logo + texto + boton hamburguesa.
- Boton hamburguesa: Icono 24x24 SVG, padding 8px, border-radius 8px, hover `bg-primary-light`.
- Al abrir, aparece un `nav` debajo con:
  - Fila de selectores (idioma, moneda, IVA) envueltos en flex-wrap con gap 8px, separados por borde inferior.
  - Links de nav como bloques (texto sm, gray-300, hover blanco).
  - Boton "Ver Servidores" como `btn-primary` con padding 8px/20px.
  - Fila inferior con Carrito (icono + texto) y Login (icono + texto), separados por borde superior.

---

### 5.2 HERO

**Fondo:**
- Gradiente a 135 grados: `#05121F` (0%) -> `#0C2C4D` (50%) -> `#366287` (100%)
- Padding vertical: `py-10` (40px) en movil, `py-14` (56px) en sm+.
- `overflow-hidden` para contener los blobs decorativos.

**Elementos decorativos (fondo, opacity 10%):**
- Blob superior-izquierdo: Circulo de 288x288px, color accent (`#569EE6`), desenfoque 120px, posicion `top-10 left-10`.
- Blob inferior-derecho: Circulo de 384x384px, color primary-light (`#366287`), desenfoque 150px, posicion `bottom-10 right-10`.

**Contenido (z-10, sobre los blobs):**
- Layout: Columna en movil, fila en lg con items centrados verticalmente y espacio entre ellos.

**Lado izquierdo:**
1. **Badge de disponibilidad:** Contenedor inline-flex, fondo blanco al 10%, backdrop-blur, border-radius completo (pill), padding 16px horizontal / 6px vertical.
   - Punto verde: 8x8px, `bg-green-400`, redondo, `animate-pulse`.
   - Texto: "XX servidores disponibles", texto sm, font-medium, `text-green-300`.
2. **Titulo h1:** Poppins bold. Dos lineas:
   - Linea 1: "Servidores Dedicados" en blanco.
   - Linea 2: "de Alto Rendimiento" en color accent (`#569EE6`), mostrado como `display: block`.
   - Tamano: 30px movil, 36px sm, 48px lg. Line-height: tight.
   - Margin-bottom: 12px.
3. **Subtexto de precios:** Texto sm, gray-400. Incluye "Precios desde" seguido de rango de precios en blanco semibold, luego separador `middot`, "Sin IVA", otro `middot`, "Sin contratos de permanencia".

**Lado derecho (botones CTA):**
- Disposicion: Columna en movil, fila en sm+, gap 12px.
- **Boton primario "Ver Ubicaciones":** Clase `btn-primary`, texto sm, padding 12px vertical / 24px horizontal, centrado.
- **Boton secundario "Explorar Catalogo":** Borde blanco al 20%, texto blanco, Poppins medium, padding 12px/24px, border-radius pill (50px), transicion 300ms. Hover: fondo blanco al 10%, borde blanco al 40%.

---

### 5.3 SECCION DEL MAPA INTERACTIVO

**Contenedor:**
- `section` con id `mapa`, padding vertical 40px, dentro del contenedor max-w-7xl.
- Titulo: Poppins bold, 24px, color primary, mb 8px.
- Subtitulo: texto sm, gray-500.

**Mapa (React Leaflet):**
- Contenedor: Altura responsive `300px` (movil) / `400px` (sm) / `450px` (lg). Ancho 100%. Border-radius 8px.
- Color de fondo del mapa: `#E2E8F0`.
- Centro inicial: coordenadas [40, -10], zoom 2, zoom minimo 2, zoom maximo 6.
- Sin zoom con scroll del raton (`scrollWheelZoom: false`).
- Tiles: OpenStreetMap estandar.

**Marcadores personalizados:**
- Forma: Circulo de 44x44px.
- Fondo: `#0C2C4D` (primary).
- Borde: 3px solido `#569EE6` (accent).
- Texto interno: Numero de servidores disponibles en ese pais, Poppins bold 14px, blanco.
- Sombra: `0 2px 8px rgba(0,0,0,0.3)`.
- Anclaje del icono: centro (22, 22).

**Popup del marcador:**
- Ancho minimo: 160px, texto centrado.
- Nombre del pais: Poppins bold, color primary, tamano base (16px), mb 4px.
- Conteo: "X servidores" en texto sm, gray-600, mb 4px.
- Stock y precio: "X unidades - Desde EUR XX/mes" en texto sm, gray-500, mb 8px.
- Boton "Ver servidores": `btn-primary`, texto xs, padding 6px/16px, ancho completo.

---

### 5.4 BARRA DE FILTROS (FilterBar)

**Contenedor:**
- Tarjeta blanca: fondo blanco, border-radius 10px, sombra sm, borde 1px `gray-100`.
- Padding: 16px en movil, 24px en sm+.

**Campo de busqueda:**
- Margin-bottom: 16px.
- Icono de lupa SVG a la izquierda: 20x20px, gray-400, posicionado absolutamente.
- Input: padding-left 40px, padding-right 16px, padding vertical 12px. Fondo surface (`#F7FAFC`), border-radius 8px, borde 1px gray-200, texto sm.
- Focus: anillo de 2px accent al 30%, borde accent.
- Placeholder: "Buscar por CPU, modelo o especificacion..."

**Grilla de filtros:**
- Grid: 2 columnas (movil) / 3 columnas (sm) / 6 columnas (lg). Gap 12px.
- Cada select: padding 12px horizontal / 10px vertical, fondo surface, border-radius 8px, borde gray-200, texto sm. Focus igual que input.
- **Filtros disponibles:**
  1. CPU Brand: "Todos los CPU", "Intel", "AMD"
  2. RAM minima: "RAM (cualquiera)", "16 GB+", "32 GB+", "64 GB+", "128 GB+", "256 GB+"
  3. Almacenamiento: "Almacenamiento", "NVMe SSD", "SSD", "HDD", "SAS"
  4. Pais: "Filtrar por Pais" + lista de 12 paises
  5. Ordenar por: "Precio: menor a mayor", "Precio: mayor a menor", "RAM: mayor a menor", "Cores: mayor a menor", "Stock: mayor a menor"
  6. Boton "Limpiar" (solo visible si hay filtros activos): texto coral, borde coral al 30%, border-radius 8px, hover fondo coral al 5%. Incluye icono X de 16x16px.

**Contador de resultados:**
- Debajo de los filtros, separado por borde superior 1px gray-100, margin-top 16px, padding-top 12px.
- Izquierda: "Mostrando X servidores disponibles" (X en semibold primary).
- Derecha: Indicador de moneda/IVA en texto xs, gray-400.

---

### 5.5 SECCION DE PAIS (CountrySection) - Acordeon

Cada pais se muestra como un acordeon colapsable con un resumen siempre visible y la tabla de servidores oculta hasta que se expande.

**CountrySummary (cabecera del acordeon):**
- Tarjeta: fondo blanco, border-radius 10px, sombra sm, borde 1px gray-100 + **borde izquierdo de 4px en color accent** (`#569EE6`). Padding 20px.
- Hover: sombra md. Cursor pointer.
- Layout: Columna en movil, fila con items centrados en sm+.
- **Lado izquierdo:**
  - Bandera del pais: Imagen SVG de 40x40px, border-radius redondeado (`rounded`).
  - Nombre del pais: Poppins bold, 20px, color primary. Debajo: "X servidores - Y unidades en stock" en texto sm, gray-500.
- **Lado derecho (ml-auto en desktop):**
  - Texto de precio: "Desde EUR XX/mes" en texto sm, gray-600, con el precio en semibold primary.
  - Icono chevron: SVG 20x20px, gray-400. Rota 180 grados cuando esta expandido (transicion suave).

**Scroll offset:** `scroll-mt-20` (80px) para compensar el header sticky al navegar con anclas.

---

### 5.6 TABLA DE SERVIDORES (ServerTable)

Dos presentaciones completamente diferentes segun el breakpoint:

#### Vista Desktop (lg+, 1024px+):
**Contenedor:** Tarjeta blanca, border-radius 10px, sombra sm, borde gray-100, overflow hidden.

**Cabecera de tabla:**
- Fondo: surface (`#F7FAFC`), borde inferior gray-200.
- Celdas: texto xs, Poppins semibold, color primary, uppercase, tracking wider.
- Columnas: Procesador | Cores | RAM | Almacenamiento | Ancho de Banda | Stock | Precio | (acciones)

**Filas de datos:**
- Divisor entre filas: 1px gray-100 (`divide-y`).
- Hover: fondo accent al 3% (`hover:bg-accent/[0.03]`), transicion de colores.
- Padding de celdas: 12-16px horizontal, 16px vertical.

**Columna Procesador:**
- Indicador de marca CPU: Barra vertical de 6px ancho x 32px alto, border-radius completo.
  - Intel: `bg-blue-500` (azul).
  - AMD: `bg-red-500` (rojo).
- Nombre del CPU: texto sm, font-medium, primary.
- Si tiene GPU: texto xs, accent, font-medium (debajo del CPU).

**Columna Cores:**
- "XC" en texto sm, font-medium, primary.
- "/YT" en texto xs, gray-400.
- Velocidad de reloj debajo: texto xs, gray-500.

**Columna RAM:**
- "X GB" en texto sm, font-semibold, primary.
- Tipo (DDR4/DDR5): texto xs, gray-400.

**Columna Storage:**
- Descripcion (ej: "2x1TB NVMe SSD"): texto sm, primary.
- Tipo: texto xs, gray-400.

**Columna Bandwidth:**
- Texto sm, primary (ej: "1Gbps / 50TB").

**Columna Stock:**
- Componente StockBadge (ver seccion 5.7).

**Columna Precio:**
- Precio mensual: Poppins bold, 18px (text-lg), primary.
- "/mes": texto xs, gray-400.
- Precio por hora: texto xs, accent (ej: "EUR 0.082/hr").

**Columna Acciones:**
- Boton "Ordenar" (OrderButton): `btn-primary`, texto sm, padding 10px/20px, whitespace nowrap.

#### Vista Movil (< lg):
- Serie de tarjetas con `space-y-4` (gap 16px).

**Cada tarjeta movil:**
- Clase `.card` (blanco, border-radius 10px, sombra sm, borde gray-100, hover sombra md, hover scale 1.01). Padding 20px.

**Cabecera de tarjeta:**
- Flex entre procesador (izquierda) y badge de stock (derecha).
- Barra de color de marca CPU: 6px x 32px como en desktop.
- Nombre CPU: texto sm, font-semibold, primary.
- Debajo: velocidad + cores/threads en texto xs, gray-500 (ej: "3.8 GHz - 8C/16T").
- Si GPU: linea adicional en texto xs, accent, font-medium.

**Grid de especificaciones:**
- Grid de 2 columnas, gap 12px, margin-bottom 16px.
- Cada celda: fondo surface, border-radius 8px, padding 10px.
  - Label: texto xs, gray-500, margin-bottom 2px.
  - Valor: texto sm, font-semibold, primary.
  - Subtexto (ej: tipo RAM): texto xs, gray-400.
- Celdas:
  1. RAM (valor + tipo)
  2. Almacenamiento (valor)
  3. Ancho de Banda (col-span-2, ancho completo)

**Pie de tarjeta:**
- Separador superior: borde 1px gray-100, padding-top 12px.
- Flex entre precio (izquierda) y boton ordenar (derecha), alineados al fondo.
- Precio: Poppins bold 24px primary + "/mes" en texto sm gray-400 normal.
- Precio por hora debajo: texto xs, accent.
- Boton "Ordenar": `btn-primary`.

---

### 5.7 BADGE DE STOCK (StockBadge)

Componente pill con 4 estados visuales:

| Estado                 | Condicion  | Fondo         | Texto         | Punto (6x6px)                | Ejemplo        |
|------------------------|------------|---------------|---------------|------------------------------|----------------|
| Sin stock              | stock <= 0 | `bg-gray-100` | `text-gray-500` | `bg-gray-400`              | "Sin stock"    |
| Critico                | stock <= 2 | `bg-coral/10` | `text-coral`    | `bg-coral animate-pulse`   | "2 restantes"  |
| Limitado               | stock <= 5 | `bg-yellow-50`| `text-yellow-700` | `bg-yellow-500`          | "4 disponibles"|
| Saludable              | stock > 5  | `bg-green-50` | `text-green-700`  | `bg-green-500`           | "14 en stock"  |

**Estructura comun:**
- `inline-flex items-center gap-1.5`
- Padding: 10px horizontal, 4px vertical.
- Border-radius: completo (pill).
- Texto: xs (12px), font-medium.
- Punto indicador: 6x6px circulo a la izquierda.

---

### 5.8 BOTON DE ORDEN (OrderButton)

- Clase: `btn-primary` con overrides.
- Texto: "Ordenar" (localizado).
- Tamano: texto sm, padding 10px vertical / 20px horizontal.
- `whitespace-nowrap` para evitar que el texto se rompa.
- Al hacer clic: alerta con mensaje de confirmacion (placeholder para flujo de compra).

---

### 5.9 FOOTER

**Fondo:** `#0C2C4D` (primary), texto blanco.
**Padding:** 32px vertical.

**Grid de 4 columnas (lg):**
- Responsive: 1 col (movil) -> 2 col (sm) -> 4 col (lg). Gap 32px.

**Columna 1 - Marca:**
- Logo PNG 64x64px + "SoterStock" en Poppins semibold 24px blanco, separados por gap 8px.
- Descripcion: texto sm, gray-400, line-height relajado.

**Columna 2 - Servidores:**
- Encabezado: Poppins semibold, texto sm, uppercase, tracking wider, color accent. Margin-bottom 16px.
- Lista de links: texto sm, gray-400, hover blanco, gap vertical 8px.
- Items: "Servidores Instant", "Servidores Custom", "Servidores GPU", "Ofertas".

**Columna 3 - Empresa:**
- Mismo estilo de encabezado.
- Items: "Sobre Nosotros", "Centro de Datos", "SLA", "Contacto".

**Columna 4 - Contacto:**
- Mismo estilo de encabezado.
- Cada item: flex con icono SVG 16x16 en color accent + texto gray-400, gap 8px.
- Items: Email (ventas@soterguard.com), Telefono (+1 (800) 123-4567).

**Pie del footer:**
- Separador: borde superior blanco al 10%, margin-top 32px, padding-top 20px.
- Layout: Columna en movil, fila en sm+, espacio entre elementos.
- Izquierda: "(c) 2026 SoterStock. Todos los derechos reservados." en texto xs, gray-500.
- Derecha: Links "Terminos", "Privacidad", "Cookies" en texto xs, gray-500, hover blanco, gap 16px.

---

## 6. COMPONENTES DE CONFIGURACION (Header)

### 6.1 Selector de Idioma
- Tipo: `<select>` nativo.
- Fondo: primary-light (`#366287`), texto blanco, texto xs.
- Borde: 1px gray-500, border-radius 8px.
- Padding: 8px horizontal, 6px vertical.
- Focus: anillo 1px accent.
- Opciones con emoji: "ES Espanol", "EN English", "FR Francais", "ZH Zhongwen", "TR Turkce".

### 6.2 Toggle de Moneda
- Grupo de 2 botones sin separacion visual interna.
- Contenedor: border-radius 8px, overflow hidden, borde 1px gray-500.
- Boton activo: fondo accent, texto primary (oscuro sobre azul claro).
- Boton inactivo: fondo primary-light, texto gray-300, hover texto blanco.
- Cada boton: texto xs, font-medium, padding 10px horizontal / 6px vertical.

### 6.3 Selector de IVA
- Mismo estilo visual que el selector de idioma.
- Primera opcion: "Sin IVA".
- Demas opciones: Nombre del pais + tasa entre parentesis (ej: "Germany (19%)", "Spain (21%)", "Switzerland (8.1%)").
- Mas de 30 paises europeos + Turquia disponibles.

---

## 7. ESTADOS INTERACTIVOS Y ANIMACIONES

### Transiciones globales
- Duracion estandar: 300ms (`duration-300`).
- Propiedad: `transition-all` para la mayoria de componentes.

### Botones primarios (`.btn-primary`)
- Estado normal: fondo accent, texto blanco, border-radius pill.
- Hover: `shadow-lg` con color accent al 30%, escala 1.02.
- Active (click): escala 0.98.

### Boton coral (`.btn-coral`)
- Identico al primario pero con color coral (`#F0774A`).

### Tarjetas (`.card`)
- Normal: sombra sm.
- Hover: sombra md, escala 1.01.

### Filas de tabla (desktop)
- Hover: fondo accent al 3%.

### Links del header
- Transicion de color: gray-300 -> blanco.

### Links del footer
- Transicion de color: gray-400 -> blanco.

### Badge de stock critico
- Punto rojo/coral con `animate-pulse` (latido CSS nativo de Tailwind).

### Punto del hero
- Punto verde con `animate-pulse`.

### Chevron de acordeon
- Rotacion de 0 a 180 grados con `transition-transform`.

### Inputs/selects de filtro
- Focus: anillo de 2px en accent al 30%, borde accent.

---

## 8. DISENO RESPONSIVE

### Breakpoints (Tailwind defaults)
| Breakpoint | Ancho minimo | Cambios principales                                        |
|------------|--------------|-------------------------------------------------------------|
| Base       | 0px          | Layout en columna, tarjetas moviles, 2 cols en filtros      |
| sm         | 640px        | Hero botones en fila, footer 2 cols, CountrySummary en fila |
| md         | 768px        | Header nav desktop visible, menu movil oculto               |
| lg         | 1024px       | Tabla desktop visible, tarjetas ocultas, footer 4 cols, filtros 6 cols, mapa 450px |
| xl         | 1280px       | Subtitulo del header visible                                |

### Patron responsive del mapa
- Movil: 300px altura
- sm: 400px altura
- lg: 450px altura

### Patron responsive de filtros
- Movil: Grid 2 columnas
- sm: Grid 3 columnas
- lg: Grid 6 columnas (todos los filtros en una fila)

### Patron responsive de tabla/tarjetas
- < lg: Tarjetas verticales individuales con grid de specs 2x2
- lg+: Tabla HTML completa con 8 columnas

---

## 9. ICONOGRAFIA

Todos los iconos son SVGs inline (no biblioteca externa). Estilo: `stroke` lineal, `strokeWidth: 2`, `fill: none`, `strokeLinecap: round`, `strokeLinejoin: round`.

| Icono              | Tamano   | Donde se usa                                  |
|--------------------|----------|-----------------------------------------------|
| Hamburguesa        | 24x24    | Boton de menu movil                           |
| X (cerrar)         | 24x24    | Boton de menu movil (abierto)                 |
| Carrito            | 20x20    | Header (desktop y movil)                      |
| Usuario            | 16x16    | Boton Login del header                        |
| Lupa               | 20x20    | Input de busqueda del filtro                   |
| X pequeno          | 16x16    | Boton "Limpiar filtros"                       |
| Chevron abajo      | 20x20    | CountrySummary (rotable)                       |
| Servidor (rack)    | 64x64    | Estado vacio (sin resultados)                  |
| Email (sobre)      | 16x16    | Footer contacto                                |
| Telefono           | 16x16    | Footer contacto                                |

---

## 10. IMAGENES Y ASSETS

### Logo
- Archivo: `/public/logo.png`
- Tamano en header: 76x76px
- Tamano en footer: 64x64px
- Presentacion: `object-contain`

### Banderas de paises
- Ubicacion: `/public/flags/{CODIGO}.svg`
- Codigos: FI, PL, UK, TR, IT, ES, FR, RU, NL, CH, US, DE
- Formato: SVG vectorial
- Tamano en CountrySummary: 40x40px con `rounded`
- Tamano en otros contextos (CountryFlag): 24x24px default con `rounded-sm shadow-sm`

---

## 11. INTERNACIONALIZACION

### Idiomas soportados
- Espanol (ES) - idioma por defecto
- Ingles (EN)
- Frances (FR)
- Chino (ZH)
- Turco (TR)

### Monedas
- EUR (por defecto) - Simbolo: EUR, formato locale de-DE
- USD - Simbolo: $, formato locale en-US
- Tasa de cambio por defecto: 1 EUR = 1.08 USD (con fetch en vivo desde frankfurter.dev como fallback)

### Formato de precios
- Mensual: 2 decimales (ej: "EUR 110.00")
- Por hora: 3 decimales (ej: "EUR 0.151")

### Nombres de paises localizados
Cada idioma tiene su propia traduccion de los 12 paises.

---

## 12. DATOS DE SERVIDORES

### Estructura de cada servidor
| Campo            | Tipo                                                     | Ejemplo               |
|------------------|----------------------------------------------------------|-----------------------|
| id               | string                                                   | "bm.v5-ultra-mini-CH" |
| cpu              | string                                                   | "Ryzen 9700X"         |
| cpuBrand         | "Intel" / "AMD"                                          | "AMD"                 |
| cores            | number                                                   | 8                     |
| threads          | number                                                   | 16                    |
| clockSpeed       | string                                                   | "3.8 GHz"             |
| ram              | number (GB)                                              | 64                    |
| ramType          | string                                                   | "DDR5"                |
| storage          | string                                                   | "1TB NVMe SSD"        |
| storageType      | "NVMe SSD" / "SSD" / "HDD" / "SAS" / combinaciones      | "NVMe SSD"            |
| storageCapacity  | number (GB)                                              | 1000                  |
| bandwidth        | string                                                   | "1Gbps / 50TB"        |
| location         | Codigo de 2 letras                                       | "CH"                  |
| priceMonthly     | number (EUR)                                             | 110                   |
| priceHourly      | number (EUR)                                             | 0.1833                |
| stock            | number                                                   | 3                     |
| category         | "instant" / "custom" / "gpu"                             | "instant"             |
| gpu              | string (opcional)                                        | "1xRTX 4090 24GB"     |

### Paises con servidores
12 ubicaciones con coordenadas para el mapa:
- NL: Paises Bajos (52.37, 4.89)
- CH: Suiza (47.37, 8.54)
- PL: Polonia (52.23, 21.01)
- IT: Italia (45.46, 9.19)
- ES: Espana (40.42, -3.70)
- FR: Francia (48.86, 2.35)
- UK: Reino Unido (51.51, -0.13)
- DE: Alemania (50.11, 8.68)
- FI: Finlandia (60.17, 24.94)
- US: Estados Unidos (40.71, -74.01)
- TR: Turquia (41.01, 28.98)
- RU: Rusia (55.76, 37.62)

---

## 13. FLUJO DE USUARIO

1. **Carga inicial:** El usuario ve el Hero con el gradiente oscuro, la cantidad de servidores disponibles y el rango de precios. Dos CTAs: "Ver Ubicaciones" y "Explorar Catalogo".
2. **Mapa interactivo:** Al hacer scroll o clic en "Ver Ubicaciones", llega al mapa con marcadores circulares numerados en cada pais. Al clic en un marcador, aparece un popup con resumen + boton "Ver servidores" que hace scroll a esa seccion del catalogo y expande el acordeon.
3. **Catalogo con filtros:** Barra de filtros con busqueda de texto libre + 5 selectores de filtrado/ordenacion. Debajo, acordeones por pais.
4. **Acordeon de pais:** Clic en la tarjeta resumen expande y muestra la tabla de servidores de ese pais. Los servidores con stock se muestran primero, ordenados por precio ascendente.
5. **Seleccion de servidor:** En la tabla (desktop) o tarjeta (movil), el usuario ve todas las specs y puede clicar "Ordenar".
6. **Configuracion global:** En cualquier momento, el usuario puede cambiar idioma (5 opciones), moneda (EUR/USD) o aplicar IVA de su pais desde los selectores del header. Todos los precios se recalculan en tiempo real.
