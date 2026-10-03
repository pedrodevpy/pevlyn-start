/**
 * Navegación del sitio.
 *
 * `to` es una ruta del router; los enlaces con ancla la llevan incluida
 * (`/#soluciones`) para que funcionen igual desde cualquier página, no solo
 * desde la portada.
 */
export const navLinks = [
  { label: 'Inicio', to: '/' },
  { label: 'Soluciones', to: '/#soluciones' },
  { label: 'Demo', to: '/demo' },
  { label: 'PEVLYN Agenda', to: '/agenda' },
  { label: 'Nosotros', to: '/#nosotros' },
  { label: 'Contacto', to: '/#contacto' },
]

/** CTA destacado de la navbar. */
export const navCta = { label: 'Probar PEVLYN', to: '/demo' }

/** Micro-mensaje bajo el hero: contextualiza sin ocupar una banda entera. */
export const trustPillars = ['Websites', 'Software', 'Automatización']
