/**
 * PEVLYN — Configuración central del sitio.
 *
 * Punto único de verdad para datos de contacto y metadatos.
 *
 * ⚠️ IMPORTANTE (LANDING_DEVELOPMENT.md §27 y §36):
 * No se deben publicar números, correos ni redes sociales inventados. Los
 * canales que aún no existen se dejan como placeholder `REPLACE_WITH_*`: la
 * UI los detecta y redirige al formulario de contacto, de modo que nunca se
 * renderiza un enlace roto ni un dato falso.
 *
 * WhatsApp ya está configurado con el número oficial; correo y dominio no.
 */

/** Número oficial de WhatsApp en formato internacional, solo dígitos (ej: "573001234567"). */
export const WHATSAPP_NUMBER = '573163423228'

/** Correo oficial de contacto (ej: "hola@pevlyn.com"). */
export const CONTACT_EMAIL = 'REPLACE_WITH_OFFICIAL_EMAIL'

/** Dominio público, usado para las URL canónicas y Open Graph. */
export const SITE_URL = 'REPLACE_WITH_OFFICIAL_DOMAIN'

export const BRAND = {
  name: 'PEVLYN',
  category: 'Business Technology',
  slogan: 'Simplifica. Automatiza. Crece.',
  shortPitch: 'Tecnología para hacer crecer tu negocio.',
  valueProp:
    'Tecnología sencilla para que tu negocio gestione clientes, citas y procesos sin complicaciones.',
  year: 2026,
}

/** Un placeholder se considera "no configurado". */
const isPlaceholder = (value) =>
  typeof value !== 'string' || value.trim() === '' || value.startsWith('REPLACE_WITH_')

export const hasWhatsApp = () => isPlaceholder(WHATSAPP_NUMBER) === false
export const hasEmail = () => isPlaceholder(CONTACT_EMAIL) === false

/** Id del ancla del formulario: destino de todos los CTA principales. */
export const CONTACT_ANCHOR = '#contacto'
