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

/**
 * Abre WhatsApp con un mensaje ya redactado.
 *
 * Punto único para todos los CTA que generan mensajes dinámicos (diagnóstico,
 * constructor, demo de Agenda), de modo que la lógica de número y codificación
 * no se duplica. Si todavía no hay número oficial configurado, lleva al
 * formulario de contacto en lugar de abrir un enlace roto.
 *
 * @returns {boolean} true si abrió WhatsApp, false si redirigió al formulario.
 */
export function openWhatsApp(message = DEFAULT_WHATSAPP_MESSAGE) {
  const href = whatsAppHref(message)
  if (!hasWhatsApp()) {
    window.location.hash = CONTACT_ANCHOR
    return false
  }
  window.open(href, '_blank', 'noopener,noreferrer')
  return true
}
