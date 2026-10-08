import { Check, ArrowRight } from 'lucide-react'
import Button from './Button.jsx'
import { whatsAppLinkProps } from '../lib/whatsapp.js'

/**
 * Tarjeta de servicio de PEVLYN.
 *
 * Enfocada en la propuesta de valor, el perfil de cliente y las características
 * entregables, sin precios fijos de desarrollo.
 */
export default function ServiceCard({ service }) {
  const {
    id,
    name,
    eyebrow,
    badge,
    tagline,
    description,
    forWhom,
    features,
    cta,
    whatsappMessage,
    highlighted,
  } = service

  const headingId = `service-${id}`
  const linkProps = whatsAppLinkProps(whatsappMessage)

  return (
    <div
      className={[
        'flex h-full flex-col rounded-xl2 p-7 transition duration-300 sm:p-8',
        highlighted
          ? 'bg-ink text-white ring-1 ring-primary/40 shadow-lift lg:-my-3 lg:py-10'
          : 'bg-white text-ink ring-1 ring-border motion-safe:hover:-translate-y-1 hover:shadow-lift',
      ].join(' ')}
    >
      <div className="flex items-center justify-between gap-3">
        <span
          className={`font-heading text-xs font-bold uppercase tracking-[0.16em] ${
            highlighted ? 'text-primary-soft' : 'text-primary'
          }`}
        >
          {eyebrow}
        </span>
        {badge && (
          <span
            className={`rounded-full px-2.5 py-0.5 text-[0.7rem] font-semibold tracking-wide ${
              highlighted
                ? 'bg-white/10 text-white/90 ring-1 ring-white/20'
                : 'bg-primary-soft text-primary-dark ring-1 ring-primary/20'
            }`}
          >
            {badge}
          </span>
        )}
      </div>

      <h3
        id={headingId}
        className={`mt-4 font-heading text-xl font-bold tracking-tight sm:text-2xl ${
          highlighted ? 'text-white' : 'text-ink'
        }`}
      >
        {name}
      </h3>

      <p
        className={`mt-2 font-medium text-sm leading-snug ${
          highlighted ? 'text-white/90' : 'text-ink'
        }`}
      >
        {tagline}
      </p>

      <p
        className={`mt-3 text-sm leading-relaxed ${
          highlighted ? 'text-white/70' : 'text-text-muted'
        }`}
      >
        {description}
      </p>

      {/* Para quién es */}
      {forWhom && (
        <div
          className={`mt-5 rounded-xl p-3 text-xs leading-relaxed ${
            highlighted
              ? 'bg-white/5 text-white/80 ring-1 ring-white/10'
              : 'bg-surface text-text-muted ring-1 ring-border'
          }`}
        >
          <span
            className={`font-semibold ${highlighted ? 'text-white' : 'text-ink'}`}
          >
            Ideal para:{' '}
          </span>
          {forWhom}
        </div>
      )}

      <div
        className={`my-6 h-px w-full ${
          highlighted ? 'bg-white/10' : 'bg-border'
        }`}
      />

      <p
        className={`mb-4 text-xs font-semibold uppercase tracking-wider ${
          highlighted ? 'text-white/60' : 'text-text-subtle'
        }`}
      >
        Qué incluye esta solución:
      </p>

      <ul className="flex flex-col gap-3">
        {features.map((feature) => (
          <li key={feature} className="flex items-start gap-3">
            <Check
              size={18}
              strokeWidth={2.4}
              aria-hidden="true"
              className={`mt-0.5 shrink-0 ${
                highlighted ? 'text-accent-on-dark' : 'text-primary'
              }`}
            />
            <span
              className={`text-sm leading-relaxed ${
                highlighted ? 'text-white/80' : 'text-text-muted'
              }`}
            >
              {feature}
            </span>
          </li>
        ))}
      </ul>

      <div className="mt-auto pt-8">
        <Button
          {...linkProps}
          variant={highlighted ? 'light' : 'secondary'}
          className="w-full justify-center"
          aria-describedby={headingId}
        >
          {cta}
          <ArrowRight size={16} aria-hidden="true" />
        </Button>
      </div>
    </div>
  )
}
