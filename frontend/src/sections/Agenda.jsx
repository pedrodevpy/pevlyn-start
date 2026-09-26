import { ArrowRight } from 'lucide-react'
import Section from '../components/Section.jsx'
import Eyebrow from '../components/Eyebrow.jsx'
import Reveal from '../components/Reveal.jsx'
import Button from '../components/Button.jsx'
import StatusBadge from '../components/StatusBadge.jsx'
import AgendaMockup from '../components/AgendaMockup.jsx'
import { agendaModules, agendaStatus } from '../data/agenda.js'
import { CONTACT_ANCHOR } from '../config/site.js'

/**
 * PEVLYN Agenda — el primer producto del ecosistema.
 *
 * ⚠️ Presentación CONCEPTUAL de un producto en desarrollo. El badge
 * "Próximamente" y el rótulo de la maqueta son deliberados: no debe parecer
 * que se puede contratar hoy. Solo se nombran módulos ya definidos.
 */
export default function Agenda() {
  return (
    <Section id="agenda" tone="surface" size="lg" labelledBy="agenda-title">
      <div className="flex flex-col items-center text-center">
        <Reveal className="flex flex-col items-center">
          <span className="flex flex-wrap items-center justify-center gap-3">
            <Eyebrow>Producto</Eyebrow>
            <StatusBadge tone="building">{agendaStatus}</StatusBadge>
          </span>

          <h2
            id="agenda-title"
            className="mt-6 max-w-3xl text-3xl leading-[1.15] text-ink sm:text-4xl lg:text-[2.75rem]"
          >
            Conoce PEVLYN Agenda.
          </h2>

          <p className="mt-5 max-w-2xl text-base leading-relaxed text-text-muted sm:text-lg">
            Tu negocio tiene clientes. Ahora también puede tener un sistema para
            organizarlos.
          </p>
        </Reveal>
      </div>

      {/* Maqueta del producto */}
      <Reveal delay={120} className="mx-auto mt-14 w-full max-w-4xl">
        <AgendaMockup />
      </Reveal>

      {/* Módulos definidos */}
      <Reveal className="mt-16">
        <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {agendaModules.map((module) => (
            <li
              key={module.title}
              className="flex items-start gap-3.5 rounded-card bg-white p-5 ring-1 ring-border transition duration-300 motion-safe:hover:-translate-y-0.5 hover:shadow-soft"
            >
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary-soft text-primary-dark">
                <module.icon size={18} strokeWidth={1.9} aria-hidden="true" />
              </span>
              <span className="min-w-0">
                <h3 className="text-sm text-ink">{module.title}</h3>
                <p className="mt-1 text-sm leading-relaxed text-text-muted">
                  {module.description}
                </p>
              </span>
            </li>
          ))}
        </ul>
      </Reveal>

      <Reveal className="mt-14 flex flex-col items-center gap-5 text-center">
        <p className="max-w-2xl text-base leading-relaxed text-text-muted">
          Estamos construyendo una herramienta para que los negocios que
          trabajan con citas puedan organizar su operación desde un solo lugar.
        </p>
        <Button href={CONTACT_ANCHOR} size="lg">
          Quiero conocer PEVLYN Agenda
          <ArrowRight size={18} aria-hidden="true" />
        </Button>
        <p className="text-xs text-text-subtle">
          Te avisamos cuando esté disponible. Sin compromiso.
        </p>
      </Reveal>
    </Section>
  )
}
