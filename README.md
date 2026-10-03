# PEVLYN — Landing Page v2

> **Business Technology**
> Simplifica. Automatiza. Crece.

Landing oficial de PEVLYN. La v2 reescribe la narrativa y la dirección visual
sobre la arquitectura de la v1, que se mantiene.

---

## Stack

React 19 · Vite 8 · Tailwind CSS 4 · lucide-react.

Sin Bootstrap, sin jQuery, sin backend y sin dependencias añadidas respecto a
la v1.

```bash
cd frontend
npm install
npm run dev      # desarrollo  → http://localhost:5173
npm run build    # producción  → dist/
npm run preview  # sirve dist/ localmente
```

---

## Arquitectura de páginas

El sitio son tres páginas con un propósito distinto cada una. Separarlas evita
que la portada crezca sin control y hace que nada se cuente dos veces.

| Ruta | Función | Contiene |
| --- | --- | --- |
| `/` | **Vender PEVLYN** | El argumento comercial, cada idea una sola vez. Ninguna herramienta interactiva. |
| `/demo` | **Probar PEVLYN** | Diagnóstico, demo de Agenda y constructor, en pestañas. |
| `/agenda` | **Presentar el producto** | Qué es PEVLYN Agenda, sus módulos y para quién. |

El recorrido previsto es: conocer en `/` → probar en `/demo` → contactar.

### Una idea, un sitio

La portada tenía dos secciones ("Soluciones" y "Evolución") que nombraban los
mismos cuatro conceptos —presencia, organización, automatización, software— con
palabras casi idénticas. Ahora las cuatro capas se cuentan **una vez**, en
`Solutions`, con su número de etapa incorporado: el *qué hacemos* y el *en qué
orden* se leen juntos.

Por el mismo motivo la FAQ pasó de siete preguntas a cuatro: seis repetían lo
que ya dicen el hero, Soluciones o la sección de Agenda. Una FAQ resuelve
objeciones, no vuelve a explicar la oferta.

Antes de añadir una sección a `/`, conviene comprobar que no responde a algo
que la página ya contesta más arriba.

### Routing

`src/lib/router.jsx` es un router propio de ~100 líneas sobre la History API.
Para tres rutas estáticas y un query param, una librería añadiría ~20 kB y una
capa de abstracción que el sitio no necesita. Cubre navegación sin recarga,
anclas que funcionan desde cualquier página, botones atrás/adelante y
`?tool=`.

⚠️ **Las rutas necesitan el rewrite de `vercel.json`.** `/demo` y `/agenda` no
son archivos: sin `rewrites` apuntando a `/index.html`, entrar directamente a
ellas o recargar devolvería 404.

### Pestañas de `/demo`

La herramienta activa se refleja en la URL (`/demo?tool=agenda`), así que un
enlace abre directamente esa herramienta y se puede compartir. Se usa
`replace` para no llenar el historial al cambiar de pestaña.

### Carga diferida

`/demo` y `/agenda` se cargan con `React.lazy`, de modo que quien entra a `/`
no descarga el diagnóstico, el dashboard ni el constructor. Vite las separa en
chunks propios: `/demo` pesa unos 36 kB aparte del bundle principal.

## Estructura

```text
pevlyn-start/
├── vercel.json                  Config de despliegue (ver "Despliegue")
├── docs/                        Especificación y contexto de marca
├── logo/                        Logo oficial original
└── frontend/
    ├── public/                  Favicons, apple-touch-icon, OG, webmanifest
    └── src/
        ├── assets/              Isotipo optimizado (webp, 12.7 kB)
        ├── components/          Piezas reutilizables y las dos maquetas
        ├── config/site.js       ⚙️ Canales de contacto y marca
        ├── data/                Todo el contenido del sitio
        ├── lib/                 Router, WhatsApp, envío de leads, animación
        ├── pages/               Una por ruta: Home, Demo, Agenda
        ├── sections/            Bloques reutilizables de las páginas
        ├── index.css            🎨 Design tokens y utilidades
        ├── App.jsx              Rutas y carga diferida
        └── main.jsx
```

**Todo el contenido vive en `src/data/`**, nunca dentro de los componentes.
Cambiar un precio, una pregunta del FAQ, un caso de uso o una etapa de la ruta
de crecimiento es editar un array.

---

## Puntos de configuración

### 1. Canales de contacto — `src/config/site.js`

```js
export const WHATSAPP_NUMBER = '573163423228'            // ✅ configurado
export const CONTACT_EMAIL   = 'REPLACE_WITH_OFFICIAL_EMAIL'
export const SITE_URL        = 'REPLACE_WITH_OFFICIAL_DOMAIN'
```

La UI se adapta sola al estado de estos valores: si un canal no existe, los
CTA caen al formulario en lugar de renderizar un enlace roto. Con WhatsApp
activo, enviar el formulario abre una conversación con el lead ya redactado.

**Pendiente al publicar el dominio:** definir `SITE_URL` y convertir `og:url`
y `og:image` a URL absolutas en `frontend/index.html`, para que al compartir
el enlace salga la tarjeta con el logo.

### 2. Conectar un backend

`src/lib/leads.js` expone `submitLead(lead)` y devuelve
`{ status: 'whatsapp' | 'email' | 'unconfigured' | 'error' }`. Para persistir
leads basta con sustituir el cuerpo por la llamada HTTP: la firma y los
estados que consume el formulario no cambian.

### 3. Identidad visual — `src/index.css`

Colores, tipografías, radios, sombras y animaciones son tokens del bloque
`@theme`. No hay colores de marca dispersos por los componentes.

Los valores están muestreados del logo oficial:

| Token | Valor | Origen |
| --- | --- | --- |
| `--color-primary` | `#5b21e6` | Violeta principal |
| `--color-primary-dark` | `#3b1cba` | Extremo oscuro del degradado |
| `--color-accent` | `#903efb` | Electric violet |
| `--color-accent-on-dark` | `#b98cff` | Variante legible sobre oscuro |
| `--color-ink` | `#090916` | Deep black |
| `--color-ink-raised` | `#101020` | Superficies elevadas en oscuro |

⚠️ **Dos degradados de texto, no uno.** `text-gradient-brand` es para fondos
claros; sobre `--color-ink` sus dos primeros stops caen a 1.94:1 y 2.64:1, por
debajo del 3:1 que exige AA para texto grande. Sobre oscuro va
`text-gradient-on-dark`, cuyos tres tonos van de 4.67:1 a 11.6:1.

---

## Reglas de contenido

La landing no presenta como real nada que todavía no lo sea:

- **Sin testimonios, logos de clientes, métricas ni resultados.**
- **Los casos de uso son escenarios**, no clientes. La sección lo dice al pie.
- **Las maquetas van rotuladas.** El mockup del hero y el dashboard de Agenda
  llevan un pie indicando que son ejemplos ilustrativos, y ninguna cifra se
  anima: animar números sugeriría que son datos reales.
- **PEVLYN Agenda es una presentación conceptual** de un producto en
  desarrollo. Solo se nombran los módulos ya definidos.
- **`projects.js` solo lleva proyectos reales con su estado real.** Un negocio
  identificable que aparezca ahí debe contar con autorización; borrar su
  entrada del array lo retira de la sección.
- **Sin datos de contacto ni textos legales ficticios.** Los documentos
  legales y los productos no lanzados se marcan como *Próximamente*.

---

## Despliegue en Vercel

La app vive en `frontend/`, no en la raíz del repo. Eso importa más de lo que
parece, porque **un deployment puede completar con éxito y aun así servir un
404**: si Vercel toma la raíz como directorio del proyecto, no encuentra nada
que compilar, publica los archivos tal cual, y como en la raíz no hay
`index.html`, la web responde `404 NOT_FOUND`.

El repo trae dos `vercel.json`. Vercel lee **solo** el que está en el *Root
Directory* del proyecto:

| Root Directory | Archivo que se usa | Qué hace |
| --- | --- | --- |
| Raíz del repo (por defecto) | `vercel.json` | Compila en `frontend/` y publica `frontend/dist`. |
| `frontend` | `frontend/vercel.json` | Preset de Vite; Vercel detecta el build solo. |

Cada push a `main` publica a producción y cada PR genera su preview URL.

**Si la web responde 404:** míralo en *Settings → General → Root Directory*, y
revisa el log del build. Si no aparece ninguna línea de Vite (`vite build`,
`dist/assets/…`), no se compiló nada.

---

## Verificación

Comprobado con Chromium sobre el build de producción:

- **Responsive:** sin overflow horizontal a 320, 390, 768, 1024 y 1440 px.
- **Consola:** sin errores ni excepciones de React.
- **Contraste:** auditoría sobre el DOM renderizado, componiendo el alfa de
  cada texto contra su fondo real. Sin fallos AA en texto visible.
- **Estructura:** un único `<h1>`, jerarquía correcta, landmarks, ningún
  `<img>` sin `alt`.
- **Enlaces:** ningún `href` vacío; todas las anclas internas resuelven.
- **Teclado:** skip link como primer tab, foco visible en todos los controles,
  menú móvil operable y cerrable con `Escape`.
- **Formulario:** valida los seis campos con `aria-invalid` y `role="alert"`,
  y entrega el lead por WhatsApp.
- **Movimiento:** las animaciones respetan `prefers-reduced-motion`.

> Al auditar contraste sobre el DOM, `getComputedStyle` devuelve `oklab()` para
> los colores con alfa de Tailwind 4. Parsearlo como `rgb()` da ratios
> absurdos; hay que convertir con el navegador (canvas) antes de comparar.
