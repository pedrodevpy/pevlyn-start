import { MapPin, MessageCircle, Clock } from 'lucide-react'

/**
 * Maqueta de la web de un negocio, para la sección PEVLYN Web (§21).
 *
 * ⚠️ El negocio es FICTICIO e intencionadamente genérico. No se usa ningún
 * negocio real sin autorización (§21) ni se presentan datos como reales (§36).
 */
export default function BusinessSiteMockup() {
  return (
    <figure className="m-0 w-full">
      <div className="overflow-hidden rounded-xl2 bg-white shadow-lift ring-1 ring-border">
        {/* Barra del navegador */}
        <div className="flex items-center gap-2 border-b border-border bg-surface px-4 py-3">
          <span className="flex gap-1.5" aria-hidden="true">
            <span className="h-2.5 w-2.5 rounded-full bg-border-strong" />
            <span className="h-2.5 w-2.5 rounded-full bg-border-strong" />
            <span className="h-2.5 w-2.5 rounded-full bg-border-strong" />
          </span>
          <span className="ml-2 min-w-0 flex-1 truncate rounded-md bg-white px-3 py-1 text-[0.7rem] text-text-subtle ring-1 ring-border">
            tunegocio.com
          </span>
        </div>

        {/* Hero del negocio */}
        <div className="bg-ink px-5 py-8 text-center sm:px-8 sm:py-10">
          <p className="font-heading text-[0.6rem] font-semibold uppercase tracking-[0.22em] text-accent-on-dark">
            Tu negocio
          </p>
          <p className="mt-3 font-heading text-xl font-bold tracking-tight text-white sm:text-2xl">
            Atención profesional,
            <br />
            cerca de ti.
          </p>
          <span className="mt-5 inline-flex h-9 items-center rounded-full bg-white px-4 text-xs font-semibold text-ink">
            Reservar cita
          </span>
        </div>

        {/* Bloques de contenido */}
        <div className="grid grid-cols-3 gap-2 p-4 sm:gap-3 sm:p-5">
          {[
            { icon: Clock, label: 'Horarios' },
            { icon: MapPin, label: 'Ubicación' },
            { icon: MessageCircle, label: 'WhatsApp' },
          ].map((b) => (
            <div
              key={b.label}
              className="flex flex-col items-center gap-1.5 rounded-xl bg-surface px-2 py-3 ring-1 ring-border/70"
            >
              <b.icon size={16} strokeWidth={2} aria-hidden="true" className="text-primary" />
              <span className="text-center text-[0.65rem] font-medium text-text-muted sm:text-xs">
                {b.label}
              </span>
            </div>
          ))}
        </div>

        {/* Galería */}
        <div className="grid grid-cols-3 gap-2 px-4 pb-5 sm:gap-3 sm:px-5" aria-hidden="true">
          {[0, 1, 2].map((i) => (
            <div
              key={i}
              className="aspect-[4/3] rounded-lg bg-gradient-to-br from-primary-soft to-surface-strong ring-1 ring-border/70"
            />
          ))}
        </div>
      </div>

      <figcaption className="mt-3 text-center text-xs text-text-subtle">
        Ejemplo de presencia digital. Negocio ficticio usado como referencia visual.
      </figcaption>
    </figure>
  )
}
