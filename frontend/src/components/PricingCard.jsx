import { Check } from 'lucide-react'
import Button from './Button.jsx'
import { CONTACT_ANCHOR } from '../config/site.js'

/**
 * Tarjeta de plan.
 *
 * `highlighted` aplica ÚNICAMENTE diferenciación visual al plan que
 * queremos impulsar: sin etiquetas de "más elegido" o "el mejor plan",
 * que serían afirmaciones sin datos reales (LANDING_DEVELOPMENT.md §23).
 */
export default function PricingCard({ plan }) {
  const { name, price, pricePrefix, currency, description, inheritsFrom, features, cta, highlighted } = plan
  const headingId = `plan-${plan.id}`

  return (
    <div
      className={[
        'flex h-full flex-col rounded-xl2 p-7 transition duration-300 sm:p-8',
        highlighted
          ? 'bg-ink text-white ring-1 ring-primary/40 shadow-lift lg:-my-4 lg:py-12'
          : 'bg-white text-ink ring-1 ring-border motion-safe:hover:-translate-y-1 hover:shadow-lift',
      ].join(' ')}
    >
      <h3
        id={headingId}
        className={`font-heading text-sm font-bold uppercase tracking-[0.18em] ${
          highlighted ? 'text-primary-soft' : 'text-primary'
        }`}
      >
        {name}
      </h3>

      <p className={`mt-4 text-sm leading-relaxed ${highlighted ? 'text-white/70' : 'text-text-muted'}`}>
        {description}
      </p>

      <p className="mt-6 flex flex-col">
        {/* El prefijo va en su propia línea para que los importes de los tres
            planes queden alineados entre sí. */}
        <span
          aria-hidden={pricePrefix ? undefined : 'true'}
          className={`text-sm font-medium ${highlighted ? 'text-white/60' : 'text-text-subtle'} ${
            pricePrefix ? '' : 'invisible'
          }`}
        >
          {pricePrefix || '\u00A0'}
        </span>
        <span className="flex flex-wrap items-baseline gap-x-2">
          <span className={`font-heading text-3xl font-bold tracking-tight sm:text-4xl ${highlighted ? 'text-white' : 'text-ink'}`}>
            {price}
          </span>
          <span className={`text-sm font-medium ${highlighted ? 'text-white/60' : 'text-text-subtle'}`}>
            {currency}
          </span>
        </span>
      </p>

      <div className={`my-7 h-px w-full ${highlighted ? 'bg-white/10' : 'bg-border'}`} />

      {/* START no hereda de nadie: se reserva la línea para que las tres
          listas de características arranquen a la misma altura. */}
      <p
        aria-hidden={inheritsFrom ? undefined : 'true'}
        className={`mb-4 text-sm font-semibold ${highlighted ? 'text-white' : 'text-ink'} ${
          inheritsFrom ? '' : 'invisible'
        }`}
      >
        {inheritsFrom ? `Todo ${inheritsFrom}, más:` : '\u00A0'}
      </p>

      <ul className="flex flex-col gap-3">
        {features.map((feature) => (
          <li key={feature} className="flex items-start gap-3">
            <Check
              size={18}
              strokeWidth={2.4}
              aria-hidden="true"
              className={`mt-0.5 shrink-0 ${highlighted ? 'text-accent-on-dark' : 'text-primary'}`}
            />
            <span className={`text-sm leading-relaxed ${highlighted ? 'text-white/80' : 'text-text-muted'}`}>
              {feature}
            </span>
          </li>
        ))}
      </ul>

      <div className="mt-auto pt-8">
        <Button
          href={CONTACT_ANCHOR}
          variant={highlighted ? 'light' : 'secondary'}
          className="w-full"
          aria-describedby={headingId}
        >
          {cta}
        </Button>
      </div>
    </div>
  )
}
