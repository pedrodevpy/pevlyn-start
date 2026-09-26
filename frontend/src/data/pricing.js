/**
 * Planes de validación inicial (LANDING_DEVELOPMENT.md §22 y §23).
 *
 * `highlighted` solo aplica diferenciación VISUAL al plan que queremos
 * impulsar. No se usan etiquetas tipo "el mejor plan" ni "más elegido":
 * mientras no existan datos reales que lo respalden, sería una afirmación
 * inventada (§23 y §36).
 */
export const pricingPlans = [
  {
    id: 'start',
    name: 'START',
    price: '$350.000',
    currency: 'COP',
    description: 'Para empezar a existir online de forma profesional.',
    features: [
      'Landing profesional',
      'WhatsApp',
      'Servicios',
      'Ubicación',
      'Formulario',
      'Responsive',
    ],
    cta: 'Empezar',
    highlighted: false,
  },
  {
    id: 'business',
    name: 'BUSINESS',
    price: '$550.000',
    currency: 'COP',
    description: 'Presencia digital completa con agenda y posicionamiento.',
    inheritsFrom: 'START',
    features: [
      'Agenda',
      'Galería',
      'Google Maps',
      'SEO básico',
      'Configuración de dominio',
    ],
    cta: 'Elegir Business',
    highlighted: true,
  },
  {
    id: 'pro',
    name: 'PRO',
    pricePrefix: 'Desde',
    price: '$800.000',
    currency: 'COP',
    description: 'Cuando necesitas gestionar clientes y citas desde un panel.',
    inheritsFrom: 'BUSINESS',
    features: [
      'Panel administrativo',
      'Clientes',
      'Citas',
      'Notificaciones',
      'Personalización avanzada',
    ],
    cta: 'Hablar con PEVLYN',
    highlighted: false,
  },
]

/** Nota honesta sobre la vigencia de los precios (contexto general §21). */
export const pricingNote =
  'Precios iniciales de lanzamiento. Cada solución se cotiza según las necesidades del negocio.'
