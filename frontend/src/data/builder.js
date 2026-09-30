/**
 * Constructor de solución.
 *
 * ⚠️ START / GROWTH / CUSTOM son NIVELES CONCEPTUALES para explicar cómo
 * evoluciona una solución PEVLYN. No son planes comerciales y por eso aquí no
 * hay precios: los planes reales viven en `pricing.js` y en la sección Precios.
 */

export const builderGoals = [
  { id: 'presencia-online', label: 'Presencia online', tier: 'start' },
  { id: 'clientes', label: 'Clientes', tier: 'growth' },
  { id: 'citas', label: 'Citas', tier: 'growth' },
  { id: 'automatizacion', label: 'Automatización', tier: 'growth' },
  { id: 'procesos', label: 'Procesos internos', tier: 'custom' },
  { id: 'reportes', label: 'Información / reportes', tier: 'custom' },
  { id: 'sistema', label: 'Sistema personalizado', tier: 'custom' },
]

export const builderTools = [
  { id: 'landing', label: 'Landing Page', tier: 'start' },
  { id: 'sitio', label: 'Sitio web', tier: 'start' },
  { id: 'whatsapp', label: 'WhatsApp', tier: 'start' },
  { id: 'formulario', label: 'Formulario', tier: 'start' },
  { id: 'agenda', label: 'Agenda', tier: 'growth' },
  { id: 'clientes', label: 'Clientes', tier: 'growth' },
  { id: 'automatizaciones', label: 'Automatizaciones', tier: 'growth' },
  { id: 'dashboard', label: 'Dashboard', tier: 'custom' },
  { id: 'sistema', label: 'Sistema personalizado', tier: 'custom' },
]

export const tiers = [
  {
    id: 'start',
    name: 'PEVLYN START',
    tagline: 'Tu negocio empieza a existir online.',
    fallback: ['Landing', 'WhatsApp', 'Formulario'],
  },
  {
    id: 'growth',
    name: 'PEVLYN GROWTH',
    tagline: 'Tu operación deja de vivir en chats y libretas.',
    fallback: ['Clientes', 'Agenda', 'Automatización'],
  },
  {
    id: 'custom',
    name: 'PEVLYN CUSTOM',
    tagline: 'Una herramienta pensada para cómo trabajas tú.',
    fallback: ['Software personalizado', 'Integraciones', 'Datos'],
  },
]

/**
 * Construye la ruta de niveles a partir de lo que el usuario seleccionó.
 *
 * Un nivel aparece si alguna selección le corresponde. Si se selecciona un
 * nivel superior sin el inferior, el inferior se incluye igualmente con sus
 * piezas por defecto: la solución se construye por capas, y saltarse la base
 * daría una recomendación incoherente.
 */
export function buildSolution({ goals, tools }) {
  const selected = [
    ...builderGoals.filter((g) => goals.includes(g.id)),
    ...builderTools.filter((t) => tools.includes(t.id)),
  ]
  if (selected.length === 0) return []

  const highest = ['custom', 'growth', 'start'].find((tier) =>
    selected.some((s) => s.tier === tier),
  )
  const order = ['start', 'growth', 'custom']
  const upTo = order.slice(0, order.indexOf(highest) + 1)

  return upTo.map((tierId) => {
    const tier = tiers.find((t) => t.id === tierId)
    const picked = [...new Set(selected.filter((s) => s.tier === tierId).map((s) => s.label))]
    return {
      ...tier,
      items: picked.length > 0 ? picked : tier.fallback,
      inferred: picked.length === 0,
    }
  })
}

/** Redacta el mensaje de WhatsApp con las selecciones reales. */
export function builderWhatsAppMessage({ goals, tools }) {
  const goalLabels = builderGoals.filter((g) => goals.includes(g.id)).map((g) => g.label.toLowerCase())
  const toolLabels = builderTools.filter((t) => tools.includes(t.id)).map((t) => t.label.toLowerCase())
  const parts = []
  if (goalLabels.length) parts.push(`trabajar en ${listToText(goalLabels)}`)
  if (toolLabels.length) parts.push(`con ${listToText(toolLabels)}`)
  const detail = parts.length ? ` Me interesa ${parts.join(' ')}.` : ''
  return `Hola PEVLYN 👋 Estoy interesado en una solución para mi negocio.${detail}`
}

function listToText(items) {
  if (items.length === 1) return items[0]
  return `${items.slice(0, -1).join(', ')} y ${items[items.length - 1]}`
}
