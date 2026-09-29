import { ArrowUpRight } from 'lucide-react'
import StatusBadge from './StatusBadge.jsx'

const statusTone = {
  'En desarrollo': 'building',
  Disponible: 'live',
  Próximamente: 'soon',
}

/**
 * Proyecto real, con su estado real. Sin métricas ni resultados.
 *
 * Si el proyecto tiene `href`, la tarjeta entera es clicable mediante el
 * patrón de "enlace estirado": el ancla envuelve solo el título —así el
 * nombre accesible del enlace es el del proyecto, y no todo el texto de la
 * tarjeta— y un pseudoelemento absoluto extiende el área de pulsación al
 * resto. La tarjeta conserva su semántica de <article>.
 */
export default function ProjectCard({ project }) {
  const { name, kind, status, description, href, accent } = project

  return (
    <article
      className={`group relative flex h-full flex-col rounded-xl2 p-7 transition duration-300 motion-safe:hover:-translate-y-1 ${
        accent
          ? 'bg-ink text-white ring-1 ring-primary/35 hover:shadow-dark'
          : 'bg-white ring-1 ring-border hover:shadow-lift'
      } ${href ? 'focus-within:ring-2 focus-within:ring-primary' : ''}`}
    >
      <p
        className={`font-heading text-[0.68rem] font-bold uppercase tracking-[0.16em] ${
          accent ? 'text-accent-on-dark' : 'text-text-subtle'
        }`}
      >
        {kind}
      </p>

      <h3 className={`mt-3 flex items-start gap-2 text-xl ${accent ? 'text-white' : 'text-ink'}`}>
        {href ? (
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="after:absolute after:inset-0 after:rounded-xl2 after:content-[''] focus:outline-none"
          >
            {name}
            <span className="sr-only"> (se abre en una pestaña nueva)</span>
          </a>
        ) : (
          name
        )}
        {href && (
          <ArrowUpRight
            size={18}
            strokeWidth={2.2}
            aria-hidden="true"
            className={`mt-1.5 shrink-0 transition-transform duration-300 motion-safe:group-hover:-translate-y-0.5 motion-safe:group-hover:translate-x-0.5 ${
              accent ? 'text-accent-on-dark' : 'text-primary'
            }`}
          />
        )}
      </h3>

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
