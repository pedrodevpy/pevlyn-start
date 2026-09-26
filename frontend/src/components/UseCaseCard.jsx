/** Escenario de aplicación por sector. No representa un cliente actual. */
export default function UseCaseCard({ useCase }) {
  const { icon: Icon, sector, description } = useCase

  return (
    <article className="group flex h-full items-start gap-4 rounded-card bg-white p-6 ring-1 ring-border transition duration-300 motion-safe:hover:-translate-y-1 hover:shadow-lift hover:ring-primary/25">
      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary-soft text-primary-dark transition-colors duration-300 group-hover:bg-gradient-brand group-hover:text-white">
        <Icon size={20} strokeWidth={1.9} aria-hidden="true" />
      </span>
      <span className="min-w-0">
        <h3 className="font-heading text-[0.7rem] font-bold uppercase tracking-[0.16em] text-primary">
          {sector}
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-text-muted">{description}</p>
      </span>
    </article>
  )
}
