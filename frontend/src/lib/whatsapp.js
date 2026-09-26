import { WHATSAPP_NUMBER, hasWhatsApp, CONTACT_ANCHOR } from '../config/site.js'

/** Mensaje por defecto de los CTA de WhatsApp. */
export const DEFAULT_WHATSAPP_MESSAGE =
  'Hola, estoy interesado en digitalizar mi negocio con PEVLYN.'

/**
 * Construye el enlace de WhatsApp con mensaje prellenado.
 * Si todavía no hay número oficial configurado devuelve el ancla del
 * formulario, de modo que el CTA sigue siendo útil y nunca apunta a un
 * número inventado.
 */
export function whatsAppHref(message = DEFAULT_WHATSAPP_MESSAGE) {
  if (!hasWhatsApp()) return CONTACT_ANCHOR
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`
}

/** Atributos de enlace externo, solo cuando realmente apunta a WhatsApp. */
export function whatsAppLinkProps(message) {
  const href = whatsAppHref(message)
  const external = hasWhatsApp()
  return {
    href,
    ...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {}),
  }
}
