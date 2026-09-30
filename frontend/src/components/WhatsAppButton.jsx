import { MessageCircle } from 'lucide-react'
import Button from './Button.jsx'
import { openWhatsApp } from '../lib/whatsapp.js'
import { hasWhatsApp } from '../config/site.js'

/**
 * CTA de WhatsApp con mensaje dinámico.
 *
 * `message` puede ser una función para que el texto se calcule en el momento
 * del clic y refleje el estado más reciente del diagnóstico o del constructor.
 * Si no hay número oficial configurado, `openWhatsApp` lleva al formulario.
 */
export default function WhatsAppButton({
  message,
  children = 'Hablar con PEVLYN',
  variant = 'primary',
  size = 'md',
  className = '',
}) {
  return (
    <Button
      variant={variant}
      size={size}
      className={className}
      onClick={() => openWhatsApp(typeof message === 'function' ? message() : message)}
    >
      {hasWhatsApp() && <MessageCircle size={17} aria-hidden="true" />}
      {children}
    </Button>
  )
}
