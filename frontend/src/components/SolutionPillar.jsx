import { ArrowUpRight } from 'lucide-react'

/**
 * Uno de los cuatro pilares de PEVLYN.
 *
 * Deliberadamente NO reutiliza la tarjeta genérica: los pilares son la
 * columna vertebral de la oferta y deben tener más peso visual que una card
 * de servicio cualquiera.
 */
export default function SolutionPillar({ pillar }) {
  const { number, title, tagline, items, icon: Icon } = pillar

  return (
    <article className="group relative flex h-full flex-col overflow-hidden rounded-xl2 bg-white p-7 ring-1 ring-border transition duration-300 motion-safe:hover:-translate-y-1 hover:shadow-lift hover:ring-primary/30 sm:p-8">
      {/* Número de fondo: marca la secuencia sin competir con el título */}
      {/* Dentro de la tarjeta, no sangrando por el borde: al sangrar, en móvil
          la cifra se cortaba a la mitad y parecía un fallo de maquetación. */}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute right-5 top-4 font-heading text-[3.25rem] font-extrabold leading-none text-surface-strong transition-colors duration-300 group-hover:text-primary-soft sm:text-[4rem]"
      >
        {number}
      </span>

      <span className="relative flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-brand text-white shadow-primary">
        <Icon size={23} strokeWidth={1.9} aria-hidden="true" />
      </span>

      <h3 className="relative mt-6 text-xl text-ink">{title}</h3>
      <p className="relative mt-2 text-sm font-medium leading-relaxed text-primary">{tagline}</p>

      <ul className="relative mt-6 flex flex-col gap-2.5 border-t border-border pt-5">
        {items.map((item) => (
          <li key={item} className="flex items-center gap-2.5 text-sm text-text-muted">
            <ArrowUpRight
              size={14}
              strokeWidth={2.4}
              aria-hidden="true"
              className="shrink-0 text-primary/60"
            />
            {item}
          </li>
        ))}
      </ul>
    </article>
  )
}
