import { ArrowDown, ArrowRight } from 'lucide-react'

/**
 * Tarjeta de entrada a una de las tres herramientas.
 *
 * Dos comportamientos distintos, señalados con iconos distintos: las que
 * abren una herramienta aquí mismo son <button> con `aria-pressed`, y la que
 * navega a otra sección es un <a> con flecha lateral. Mezclar ambos bajo el
 * mismo aspecto haría que uno de los dos engañase al usuario.
 */
export default function ToolCard({ number, icon: Icon, title, description, active, href, onClick }) {
  const Tag = href ? 'a' : 'button'

  return (
    <Tag
      {...(href ? { href } : { type: 'button', onClick, 'aria-pressed': active })}
      className={[
        'group relative flex h-full flex-col items-start overflow-hidden rounded-xl2 p-7 text-left',
        'transition duration-300 motion-safe:hover:-translate-y-1',
        active
          ? 'bg-ink-raised ring-2 ring-primary shadow-glow'
          : 'bg-white/[0.04] ring-1 ring-white/10 hover:bg-white/[0.07] hover:ring-white/20',
      ].join(' ')}
    >
      {/* Glow contenido que aparece al pasar el cursor */}
      <span
        aria-hidden="true"
        className={`pointer-events-none absolute -top-16 left-1/2 h-40 w-56 -translate-x-1/2 rounded-full bg-primary/30 blur-3xl transition-opacity duration-500 ${
          active ? 'opacity-100' : 'opacity-0 group-hover:opacity-70'
        }`}
      />

      <span className="relative flex w-full items-center justify-between">
        <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-brand text-white shadow-primary transition-transform duration-300 motion-safe:group-hover:-translate-y-0.5">
          <Icon size={22} strokeWidth={1.9} aria-hidden="true" />
        </span>
        <span className="font-heading text-xs font-bold tracking-[0.16em] text-white/30">
          {number}
        </span>
      </span>

      <h3 className="relative mt-6 text-lg text-white">{title}</h3>
      <p className="relative mt-2 flex-1 text-sm leading-relaxed text-white/55">{description}</p>

      <span
        className={`relative mt-6 inline-flex items-center gap-2 font-sans text-sm font-semibold ${
          active ? 'text-accent-on-dark' : 'text-white/70 group-hover:text-white'
        }`}
      >
        {href ? 'Ver la demo' : active ? 'Abierto' : 'Empezar'}
        {href ? (
          <ArrowRight
            size={16}
            aria-hidden="true"
            className="transition-transform duration-300 motion-safe:group-hover:translate-x-1"
          />
        ) : (
          <ArrowDown
            size={16}
            aria-hidden="true"
            className={`transition-transform duration-300 ${active ? 'rotate-180' : 'motion-safe:group-hover:translate-y-0.5'}`}
          />
        )}
      </span>
    </Tag>
  )
}
