# PEVLYN — Landing Page v0.1

> **Business Technology**
> Simplifica. Automatiza. Crece.

Landing page oficial de PEVLYN, implementada según
[`docs/LANDING_DEVELOPMENT.md`](docs/LANDING_DEVELOPMENT.md) y
[`docs/pevlyn-general-context.md`](docs/pevlyn-general-context.md).

---

## Stack

| Pieza        | Versión | Motivo                                              |
| ------------ | ------- | --------------------------------------------------- |
| React        | 19      | Obligatorio por la especificación (§9)               |
| Vite         | 8       | Obligatorio por la especificación (§9)               |
| Tailwind CSS | 4       | Obligatorio por la especificación (§9)               |
| lucide-react | 1       | Iconografía recomendada (§9)                         |

Sin Bootstrap, sin jQuery, sin backend y sin dependencias adicionales.

---

## Arranque

```bash
cd frontend
npm install
npm run dev      # desarrollo  → http://localhost:5173
npm run build    # build de producción → dist/
npm run preview  # sirve dist/ localmente
```

---

## Estructura

```text
pevlyn-start/
├── docs/                        Especificación y contexto de marca
├── logo/                        Logo oficial original (fuente de los assets)
└── frontend/
    ├── public/                  Favicons, apple-touch-icon, OG, webmanifest
    └── src/
        ├── assets/              Isotipo optimizado (webp)
        ├── components/          Piezas reutilizables (Button, Card, Field…)
        ├── config/site.js       ⚙️ Configuración central (ver abajo)
        ├── data/                Todo el contenido: servicios, precios, FAQ…
        ├── lib/                 WhatsApp, envío de leads, hook de animación
        ├── sections/            Las 13 secciones de la landing
        ├── index.css            🎨 Design tokens
        ├── App.jsx
        └── main.jsx
```

El contenido vive en `src/data/`, no dentro de los componentes: cambiar un
precio, una pregunta del FAQ o un servicio es editar un único array.

---

## Puntos de configuración

### 1. Canales de contacto — `src/config/site.js`

La especificación prohíbe publicar datos de contacto inventados (§27, §36),
así que los canales siguen siendo placeholders:

```js
export const WHATSAPP_NUMBER = 'REPLACE_WITH_OFFICIAL_NUMBER'
export const CONTACT_EMAIL   = 'REPLACE_WITH_OFFICIAL_EMAIL'
export const SITE_URL        = 'REPLACE_WITH_OFFICIAL_DOMAIN'
```

El código se adapta solo al estado de estos valores:

| Estado                              | Comportamiento                                                        |
| ----------------------------------- | --------------------------------------------------------------------- |
| Sin configurar (actual)             | Los CTA de WhatsApp llevan al formulario. El formulario valida y avisa de que los canales se están configurando. |
| `WHATSAPP_NUMBER` definido          | Los CTA abren `wa.me` y el formulario envía el lead por WhatsApp.      |
| Solo `CONTACT_EMAIL` definido       | El formulario envía el lead por `mailto`.                             |

> Para poner la landing en producción basta con sustituir `WHATSAPP_NUMBER`
> por el número oficial en formato internacional y solo dígitos
> (p. ej. `573001234567`). No hace falta tocar ningún componente.

**Pendiente al publicar el dominio:** `index.html` deja `og:url` fuera y
`og:image` como ruta relativa. Cuando exista el dominio oficial, conviene
pasarlos a URL absolutas para que las previsualizaciones en redes funcionen.

### 2. Conectar un backend

`src/lib/leads.js` expone `submitLead(lead)`, que devuelve
`{ status: 'whatsapp' | 'email' | 'unconfigured' | 'error' }`. Para persistir
los leads solo hay que sustituir el cuerpo por la llamada HTTP; la firma y los
estados que consume el formulario no cambian.

### 3. Identidad visual — `src/index.css`

Todos los colores, tipografías, radios y sombras son tokens en el bloque
`@theme`. No hay colores de marca dispersos por los componentes: cambiar la
paleta es editar ese bloque.

Los valores actuales están muestreados del logo oficial:

| Token                   | Valor     | Origen                                  |
| ----------------------- | --------- | --------------------------------------- |
| `--color-primary`       | `#5b21e6` | Violeta principal de marca              |
| `--color-primary-dark`  | `#3b1cba` | Extremo oscuro del degradado del logo   |
| `--color-accent`        | `#903efb` | Electric violet, extremo claro          |
| `--color-ink`           | `#090916` | Deep black del logo                     |

Contrastes verificados contra WCAG AA (texto normal ≥ 4.5:1).

### 4. Logo

`src/assets/pevlyn-isotipo.webp` se extrajo de `logo/Pevlynlogos.png`. El
componente `Logo` renderiza el lockup `[ISOTIPO] PEVLYN`; para actualizarlo
basta con reemplazar ese archivo. Los favicons y la imagen Open Graph de
`frontend/public/` proceden del mismo original.

---

## Decisiones de contenido

La especificación es explícita en no presentar como real nada que todavía no
lo sea (§15, §23, §36). En consecuencia:

- **Sin testimonios, logos de clientes ni métricas.** La franja de confianza
  muestra categorías de negocio, como indica §15.
- **Los mockups van rotulados.** El dashboard del Hero y la web de negocio de
  la sección PEVLYN Web llevan un pie que dice que son ejemplos ilustrativos.
- **El plan BUSINESS se destaca solo visualmente.** Sin "más elegido" ni "el
  mejor plan": no hay datos que lo respalden (§23).
- **Sin datos de contacto ni textos legales ficticios.** El footer no inventa
  dirección, teléfono, correo ni redes. Los documentos legales y los productos
  aún no lanzados aparecen marcados como *Próximamente* en lugar de enlazar a
  páginas inexistentes.

---

## Despliegue en Vercel

La app vive en `frontend/`, no en la raíz del repo. Ese es el único ajuste que
Vercel no puede adivinar:

**Root Directory → `frontend`**

Con eso, Vercel detecta Vite automáticamente y usa `npm run build` con salida
en `dist`. `frontend/vercel.json` añade el `Content-Type` correcto del
webmanifest y las cabeceras de caché de los assets.

### Opción A — Integración con Git (recomendada)

1. En Vercel: **Add New → Project** e importa `pedrodevpy/pevlyn-start`.
2. En **Root Directory** pulsa *Edit* y selecciona `frontend`.
3. Deja el resto como viene (Framework: Vite) y despliega.

Cada push a `main` publica a producción, y cada PR genera su propia preview
URL. No hace falta ningún token.

### Opción B — CLI

```bash
cd frontend
npx vercel login
npx vercel --prod
```

La primera ejecución pregunta por el directorio del proyecto: responde `.`
estando ya dentro de `frontend`.

### Antes del primer despliegue a producción

Conviene resolver los dos pendientes de la sección anterior: sin
`WHATSAPP_NUMBER` los CTA de WhatsApp llevan al formulario y el formulario no
entrega el lead a ningún sitio. Para una preview no es problema.

Una vez tengas el dominio, pásalo a `SITE_URL` en `src/config/site.js` y
convierte `og:url` y `og:image` a URL absolutas en `index.html`.

---

## Verificación

Comprobado con Chromium sobre el build de producción:

- **Responsive:** sin overflow horizontal a 320, 390, 768, 1024 y 1440 px.
- **Consola:** sin errores ni excepciones de React.
- **Estructura:** un único `<h1>`, jerarquía `h2`/`h3` correcta, landmarks
  `header`/`main`/`footer`/`nav`, ningún `<img>` sin `alt`.
- **Enlaces:** ningún `href` vacío; todas las anclas internas resuelven.
- **Teclado:** skip link como primer tab, anillo de foco visible en todos los
  controles, menú móvil operable y cerrable con `Escape`.
- **Formulario:** valida los seis campos, marca errores con `aria-invalid` y
  `role="alert"`, y comunica el resultado del envío.
- **FAQ y menú móvil:** `aria-expanded` / `aria-controls` correctos.
- **Movimiento:** las animaciones respetan `prefers-reduced-motion`.

---

## Estado según los criterios de aceptación (§37)

Todos los puntos de la lista de la especificación están cubiertos, con estas
dos salvedades, ambas a la espera de datos oficiales y no de código:

- Los CTA de WhatsApp y el envío del formulario quedan activos en cuanto se
  defina `WHATSAPP_NUMBER`.
- Las URL absolutas de Open Graph quedan pendientes del dominio.
