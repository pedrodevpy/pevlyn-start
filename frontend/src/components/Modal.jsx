import { useEffect, useId, useRef } from 'react'
import { X } from 'lucide-react'

/**
 * Diálogo accesible para los paneles de detalle de la demo.
 *
 * Implementa lo que un modal necesita para no ser una trampa de teclado:
 * cierre con Escape, clic en el fondo, foco movido al panel al abrir,
 * devuelto al disparador al cerrar, tabulación confinada dentro, scroll de
 * fondo bloqueado y `aria-modal` con título asociado.
 *
 * En móvil entra como hoja inferior; en escritorio, centrado.
 */
const FOCUSABLE =
  'a[href], button:not([disabled]), input, select, textarea, [tabindex]:not([tabindex="-1"])'

export default function Modal({ open, onClose, title, subtitle, children }) {
  const panelRef = useRef(null)
  const previouslyFocused = useRef(null)
  const titleId = useId()

  useEffect(() => {
    if (!open) return

    previouslyFocused.current = document.activeElement
    const panel = panelRef.current
    panel?.focus()

    const onKeyDown = (e) => {
      if (e.key === 'Escape') {
        e.stopPropagation()
        onClose()
        return
      }
      if (e.key !== 'Tab' || !panel) return
      const items = [...panel.querySelectorAll(FOCUSABLE)].filter(
        (el) => el.offsetParent !== null,
      )
      if (items.length === 0) {
        e.preventDefault()
        return
      }
      const first = items[0]
      const last = items[items.length - 1]
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault()
        last.focus()
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault()
        first.focus()
      }
    }

    document.addEventListener('keydown', onKeyDown, true)
    const prevOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    return () => {
      document.removeEventListener('keydown', onKeyDown, true)
      document.body.style.overflow = prevOverflow
      previouslyFocused.current?.focus?.()
    }
  }, [open, onClose])

  if (!open) return null

  return (
    <div className="fixed inset-0 z-[70] flex items-end justify-center sm:items-center">
      <button
        type="button"
        aria-label="Cerrar"
        tabIndex={-1}
        onClick={onClose}
        className="absolute inset-0 cursor-default bg-ink/70 backdrop-blur-sm motion-safe:animate-[reveal_0.2s_ease-out]"
      />

      <div
        ref={panelRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        tabIndex={-1}
        className="relative w-full max-w-md rounded-t-xl2 bg-white p-6 shadow-lift outline-none motion-safe:animate-reveal sm:m-5 sm:rounded-xl2 sm:p-7"
      >
        <div className="flex items-start justify-between gap-4">
          <div className="min-w-0">
            <h3 id={titleId} className="text-xl text-ink">
              {title}
            </h3>
            {subtitle && <p className="mt-1 text-sm text-text-muted">{subtitle}</p>}
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Cerrar"
            className="-mr-1 -mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-text-muted transition-colors hover:bg-surface hover:text-ink"
          >
            <X size={20} aria-hidden="true" />
          </button>
        </div>

        <div className="mt-5">{children}</div>
      </div>
    </div>
  )
}
