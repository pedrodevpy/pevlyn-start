import { CONTACT_EMAIL, hasEmail, hasWhatsApp } from '../config/site.js'
import { whatsAppHref } from './whatsapp.js'

/**
 * Envío de leads del formulario de contacto.
 *
 * Esta v0.1 no tiene backend (LANDING_DEVELOPMENT.md §9 y §26). El transporte
 * se resuelve en runtime según los canales configurados en config/site.js:
 *
 *   1. WhatsApp  — abre wa.me con el mensaje ya redactado.
 *   2. mailto    — si hay correo oficial pero no WhatsApp.
 *   3. unconfigured — todavía no hay canal oficial: la UI lo comunica
 *      explícitamente en lugar de fingir un envío exitoso.
 *
 * Para conectar un backend más adelante basta con reemplazar el cuerpo de
 * `submitLead` por la llamada HTTP; la firma y los estados no cambian.
 *
 * @typedef {'whatsapp' | 'email' | 'unconfigured' | 'error'} LeadStatus
 * @returns {Promise<{ status: LeadStatus }>}
 */
export async function submitLead(lead) {
  try {
    if (hasWhatsApp()) {
      window.open(whatsAppHref(formatLeadMessage(lead)), '_blank', 'noopener,noreferrer')
      return { status: 'whatsapp' }
    }

    if (hasEmail()) {
      const subject = `Nueva solicitud PEVLYN — ${lead.businessName || lead.name}`
      const href = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(
        subject,
      )}&body=${encodeURIComponent(formatLeadMessage(lead))}`
      window.location.href = href
      return { status: 'email' }
    }

    if (import.meta.env.DEV) {
      // Solo en desarrollo: permite verificar el payload sin canal configurado.
      console.info('[PEVLYN] Lead capturado (sin canal configurado):', lead)
    }
    return { status: 'unconfigured' }
  } catch {
    return { status: 'error' }
  }
}

/** Convierte el lead en un mensaje legible para WhatsApp o correo. */
export function formatLeadMessage(lead) {
  return [
    'Hola PEVLYN, quiero digitalizar mi negocio.',
    '',
    `Nombre: ${lead.name}`,
    `Negocio: ${lead.businessName}`,
    `WhatsApp: ${lead.whatsapp}`,
    `Correo: ${lead.email}`,
    `Tipo de negocio: ${lead.businessType}`,
    `Necesito: ${lead.need}`,
  ].join('\n')
}
