# Giovani Ramírez Méndez · Portafolio

Sitio personal de Giovani Ramírez Méndez, ingeniero de software fullstack en Monterrey, N.L.

**En vivo:** https://giovaniraym.github.io

## Características

- Diseño responsive: hero y dock en escritorio, tarjetas tipo *bento* en móvil.
- Modo claro y oscuro según la configuración del sistema (`prefers-color-scheme`).
- Botones de correo que copian la dirección al portapapeles.
- Imágenes optimizadas en AVIF y WebP con `astro:assets`, sin saltos de layout.
- Metadatos Open Graph y Twitter para compartir en redes.

## Stack

- [Astro](https://astro.build) 7
- Tipografía [Geist](https://vercel.com/font) y Geist Mono
- GitHub Actions + GitHub Pages para el despliegue

## Desarrollo

Requiere Node.js 22.23.4 o superior.

```bash
npm install
npm run dev       # http://localhost:3000
npm run build     # genera el sitio estático en dist/
npm run preview   # sirve el build localmente
```

## Estructura

```
src/
├── assets/          # imágenes optimizadas en el build (foto y logos)
├── components/      # Bento, Dock, Experience, Icon, TechLogo
├── data/profile.ts  # datos personales y experiencia
├── data/stack.ts    # tecnologías y sus logos (SVG)
└── pages/index.astro
public/              # favicon, apple-touch-icon e imagen Open Graph
```

El contenido (experiencia, enlaces y datos de contacto) se edita en `src/data/profile.ts`.

## Despliegue

Cada push a `main` construye y publica el sitio con el workflow `.github/workflows/deploy.yml`.

## Créditos de íconos

- [Simple Icons](https://simpleicons.org) (CC0): TypeScript, Node.js, Express, PostgreSQL, Redis, MariaDB, GitHub Actions y Splunk.
- [Devicon](https://devicon.dev) (MIT): Azure.
- [Lucide](https://lucide.dev) (ISC): RAG / Embeddings y Active Directory.

Las marcas pertenecen a sus respectivos dueños.

## Licencia

[MIT](LICENSE)
