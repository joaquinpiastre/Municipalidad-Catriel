# Municipalidad de Catriel - Portal Web Institucional

Portal web oficial de la **Municipalidad de Catriel**, Río Negro, Argentina. Sitio institucional moderno, accesible y preparado para crecer.

## Stack

- **React 18** (JavaScript, sin TypeScript)
- **Vite 5**
- **React Router v6**
- **react-helmet-async** (SEO)

## Requisitos

- Node.js 18+ (recomendado 20.x)
- npm

## Instalación

```bash
npm install
```

## Desarrollo

```bash
npm run dev
```

Abre [http://localhost:5173](http://localhost:5173) en el navegador.

## Build

```bash
npm run build
```

Genera la carpeta `dist/` lista para desplegar.

## Preview del build

```bash
npm run preview
```

## Estructura del proyecto

```
src/
  assets/           # Imágenes y recursos
  components/
    common/         # Botones, cards, breadcrumbs, etc.
    layout/         # Header, Navbar, Footer, MainLayout
    home/           # Componentes de la página de inicio
    institutional/  # (opcional) Componentes institucionales
    services/       # (opcional) Componentes de trámites
    news/           # (opcional) Componentes de noticias
    transparency/   # (opcional)
    tourism/       # (opcional)
    contact/        # (opcional)
  config/           # Navegación y datos del sitio
  data/             # Datos mock (home, noticias, trámites, áreas, etc.)
  pages/             # Páginas y subpáginas
  routes/            # Enrutado y lazy loading
  styles/            # CSS (variables, global, componentes, páginas)
  hooks/             # (para futuros custom hooks)
  context/           # (para futuro estado global)
  utils/             # (utilidades)
```

## Contenido y datos

- Los datos iniciales están en `src/data/` (home, news, tramites, areas, transparency, institutional, tourism, desarrolloLocal, contact).
- Los datos institucionales (nombre, teléfono, dirección, etc.) están en `src/config/site.js`.
- La navegación está centralizada en `src/config/navigation.js`.

Para integrar un CMS o API REST, se pueden reemplazar las importaciones desde `data/` por llamadas a servicios.

## Paleta institucional

Basada en el escudo de Catriel (azur, plata, neutros):

- **Primario:** `#1e3a5f` (azul institucional)
- **Blanco / grises** para fondos y texto
- Variables en `src/styles/variables.css`

## Próximos pasos sugeridos

- Panel administrador
- CMS (Strapi, etc.)
- Trámites online y autogestión real
- Turnos y reclamos
- Chatbot municipal
- Integración con APIs de pago

---

© Municipalidad de Catriel, Río Negro, Argentina.
"# Municipalidad-Catriel" 
