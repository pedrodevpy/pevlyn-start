import { Check, ArrowRight, ShieldCheck, Percent, RefreshCw, Headphones, Sparkles } from 'lucide-react'
import Section from '../components/Section.jsx'
import SectionHeading from '../components/SectionHeading.jsx'
import Reveal from '../components/Reveal.jsx'
import Button from '../components/Button.jsx'
import { whatsAppLinkProps } from '../lib/whatsapp.js'
import { agendaSubscriptionPlans, agendaSubscriptionPerks } from '../data/agenda.js'

const PERK_ICONS = [ShieldCheck, Percent, RefreshCw, Headphones]

/**
 * Sección de Suscripciones y Planes de PEVLYN Agenda.
 *
 * Muestra los valores reales en COP ($0, $39.900, $69.900) y explica
 * de forma clara y honesta el modelo de suscripción mensual sin comisiones.
 */
export default function AgendaPricing() {
  return (
    <Section id="suscripciones" tone="surface" labelledBy="suscripciones-title">
      <SectionHeading
        id="suscripciones-title"
        eyebrow="Suscripciones PEVLYN Agenda"
        title="Valores claros. Cero comisiones por tus citas."
        description="Elige el plan que se ajusta a la escala de tu equipo. Precios fijos mensuales en pesos colombianos, sin contratos forzosos y con soporte directo."
      />

      {/* Grid de tarjetas de suscripción */}
      <div className="mt-14 grid gap-6 lg:grid-cols-3">
        {agendaSubscriptionPlans.map((plan, i) => {
          const {
            id,
            name,
            badge,
            price,
            period,
            currency,
            description,
            stats,
            features,
            cta,
            whatsappMessage,
            highlighted,
          } = plan

          const headingId = `plan-${id}`
          const linkProps = whatsAppLinkProps(whatsappMessage)

          return (
            <Reveal key={id} delay={i * 110} className="h-full">
              <div
                className={[
                  'relative flex h-full flex-col rounded-xl2 p-7 transition duration-300 sm:p-8',
                  highlighted
                    ? 'bg-ink text-white ring-2 ring-primary/60 shadow-xl'
                    : 'bg-white text-ink ring-1 ring-border motion-safe:hover:-translate-y-1 hover:shadow-lift',
                ].join(' ')}
              >
                {/* Cabecera del plan */}
                <div className="flex items-center justify-between gap-3">
                  <span
                    className={`font-heading text-xs font-bold uppercase tracking-[0.18em] ${
                      highlighted ? 'text-primary-soft' : 'text-primary'
                    }`}
                  >
                    Plan {name}
                  </span>
                  {badge && (
                    <span
                      className={`inline-flex items-center gap-1 rounded-full px-2.5 py-0.5 text-[0.7rem] font-semibold tracking-wide ${
                        highlighted
                          ? 'bg-primary/25 text-white ring-1 ring-primary/40'
                          : 'bg-primary-soft text-primary-dark ring-1 ring-primary/20'
                      }`}
                    >
                      {highlighted && <Sparkles size={11} className="text-accent-on-dark" />}
                      {badge}
                    </span>
                  )}
                </div>

                <h3
                  id={headingId}
                  className={`mt-4 font-heading text-2xl font-bold tracking-tight sm:text-3xl ${
                    highlighted ? 'text-white' : 'text-ink'
                  }`}
                >
                  {name}
                </h3>

                <p
                  className={`mt-2 text-sm leading-relaxed ${
                    highlighted ? 'text-white/70' : 'text-text-muted'
                  }`}
                >
                  {description}
                </p>

                {/* Importe y moneda */}
                <div className="mt-6 flex flex-col">
                  <div className="flex flex-wrap items-baseline gap-x-2">
                    <span
                      className={`font-heading text-3xl font-bold tracking-tight sm:text-4xl ${
                        highlighted ? 'text-white' : 'text-ink'
                      }`}
                    >
                      {price}
                    </span>
                    <span
                      className={`text-sm font-medium ${
                        highlighted ? 'text-white/60' : 'text-text-subtle'
                      }`}
                    >
                      {currency} {period}
                    </span>
                  </div>
                </div>

                {/* Resumen de capacidades clave */}
                {stats && (
                  <div
                    className={`mt-5 grid grid-cols-3 gap-2 rounded-xl p-3 text-center ${
                      highlighted
                        ? 'bg-white/5 ring-1 ring-white/10'
                        : 'bg-surface ring-1 ring-border'
                    }`}
                  >
                    {stats.map((s) => (
                      <div key={s.label} className="min-w-0">
                        <p
                          className={`font-heading text-xs font-bold truncate ${
                            highlighted ? 'text-white' : 'text-ink'
                          }`}
                        >
                          {s.value}
                        </p>
                        <p
                          className={`text-[0.68rem] truncate ${
                            highlighted ? 'text-white/60' : 'text-text-subtle'
                          }`}
                        >
                          {s.label}
                        </p>
                      </div>
                    ))}
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
                  Qué incluye:
                </p>

                <ul className="flex flex-col gap-3">
                  {features.map((feature) => (
                    <li key={feature.text} className="flex items-start gap-3">
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
                          highlighted ? 'text-white/85' : 'text-text-muted'
                        }`}
                      >
                        {feature.text}
                        {feature.tag && (
                          <span
                            className={`ml-2 inline-flex items-center rounded-full px-2 py-0.5 text-[0.65rem] font-semibold tracking-wide ${
                              highlighted
                                ? 'bg-primary/30 text-white ring-1 ring-primary/50'
                                : 'bg-primary-soft text-primary-dark ring-1 ring-primary/20'
                            }`}
                          >
                            {feature.tag}
                          </span>
                        )}
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
            </Reveal>
          )
        })}
      </div>

      {/* Cómo se manejan las suscripciones en PEVLYN Agenda */}
      <Reveal className="mt-16 rounded-card bg-white p-8 ring-1 ring-border sm:p-10">
        <div className="mx-auto max-w-3xl text-center">
          <span className="font-heading text-xs font-bold uppercase tracking-[0.16em] text-primary">
            Modelo de suscripción
          </span>
          <h3 className="mt-2 text-2xl font-bold tracking-tight text-ink sm:text-3xl">
            ¿Cómo se manejan las suscripciones en PEVLYN Agenda?
          </h3>
          <p className="mt-3 text-sm leading-relaxed text-text-muted">
            Diseñamos el servicio pensando en la tranquilidad del dueño del negocio.
            Sin letras chicas, sin comisión por venta y con acompañamiento real.
          </p>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {agendaSubscriptionPerks.map((perk, idx) => {
            const Icon = PERK_ICONS[idx % PERK_ICONS.length]
            return (
              <div key={perk.title} className="flex flex-col items-start gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary-soft text-primary-dark">
                  <Icon size={20} strokeWidth={2} aria-hidden="true" />
                </span>
                <h4 className="text-base font-bold text-ink">{perk.title}</h4>
                <p className="text-xs leading-relaxed text-text-muted">
                  {perk.description}
                </p>
              </div>
            )
          })}
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-border pt-6 sm:flex-row">
          <p className="text-xs text-text-subtle">
            El sistema es muy intuitivo. Para iniciar o resolver cualquier duda sobre los planes, te acompañamos directamente por WhatsApp.
          </p>
          <Button
            {...whatsAppLinkProps('Hola PEVLYN 💜 Tengo preguntas sobre los planes de suscripción de PEVLYN Agenda.')}
            variant="ghost"
            size="sm"
            className="shrink-0 text-primary hover:text-primary-dark"
          >
            Consultar por WhatsApp
            <ArrowRight size={14} aria-hidden="true" />
          </Button>
        </div>
      </Reveal>
    </Section>
  )
}
