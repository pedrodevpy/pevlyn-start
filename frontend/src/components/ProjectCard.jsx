import StatusBadge from './StatusBadge.jsx'

const statusTone = {
  'En desarrollo': 'building',
  Disponible: 'live',
  Próximamente: 'soon',
}

/** Proyecto real, con su estado real. Sin métricas ni resultados. */
export default function ProjectCard({ project }) {
  const { name, kind, status, description, accent } = project

  return (
    <article
      className={`flex h-full flex-col rounded-xl2 p-7 transition duration-300 motion-safe:hover:-translate-y-1 ${
        accent
          ? 'bg-ink text-white ring-1 ring-primary/35 hover:shadow-dark'
          : 'bg-white ring-1 ring-border hover:shadow-lift'
      }`}
    >
      <p
        className={`font-heading text-[0.68rem] font-bold uppercase tracking-[0.16em] ${
          accent ? 'text-accent-on-dark' : 'text-text-subtle'
        }`}
      >
        {kind}
      </p>

      <h3 className={`mt-3 text-xl ${accent ? 'text-white' : 'text-ink'}`}>{name}</h3>

      <p
        className={`mt-3 flex-1 text-sm leading-relaxed ${
          accent ? 'text-white/60' : 'text-text-muted'
        }`}
      >
        {description}
      </p>

      <span className="mt-6">
        <StatusBadge tone={accent ? 'soon' : statusTone[status] ?? 'building'}>
          {status}
        </StatusBadge>
      </span>
    </article>
  )
}
