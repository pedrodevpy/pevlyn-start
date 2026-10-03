import { ArrowRight, Check } from 'lucide-react'
import Section from '../components/Section.jsx'
import Eyebrow from '../components/Eyebrow.jsx'
import Reveal from '../components/Reveal.jsx'
import Button from '../components/Button.jsx'
import StatusBadge from '../components/StatusBadge.jsx'
import AgendaPreview from '../components/AgendaPreview.jsx'
import { agendaModules, agendaStatus } from '../data/agenda.js'

/**
 * Introducción a PEVLYN Agenda en la portada.
 *
 * Versión corta: qué es, qué incluye y dos salidas —la página de producto y la
 * demo—. El desarrollo completo vive en /agenda y la experiencia en /demo, así
 * que aquí no se repiten.
 */
export default function AgendaIntro() {
  return (
    <Section id="agenda" tone="surface" labelledBy="agenda-intro-title">
      <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-16">
        <Reveal className="flex flex-col items-start">
          <span className="flex flex-wrap items-center gap-3">
            <Eyebrow>Nuestro producto</Eyebrow>
            <StatusBadge tone="building">{agendaStatus}</StatusBadge>
          </span>

          <h2
            id="agenda-intro-title"
            className="mt-6 text-3xl leading-[1.15] text-ink sm:text-4xl lg:text-[2.75rem]"
          >
            PEVLYN Agenda.
          </h2>

          <p className="mt-5 max-w-lg text-base leading-relaxed text-text-muted sm:text-lg">
            Tu negocio tiene clientes. Ahora también puede tener un sistema para
            organizarlos.
          </p>

          <ul className="mt-8 grid w-full gap-x-6 gap-y-3 sm:grid-cols-2">
            {agendaModules.map((module) => (
              <li key={module.title} className="flex items-center gap-2.5">
                <Check size={16} strokeWidth={2.6} aria-hidden="true" className="shrink-0 text-primary" />
                <span className="text-sm text-text-muted">{module.title}</span>
              </li>
            ))}
          </ul>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Button to="/agenda" size="lg">
              Conocer PEVLYN Agenda
              <ArrowRight size={18} aria-hidden="true" />
            </Button>
            <Button to="/demo?tool=agenda" variant="secondary" size="lg">
              Probar la demo
            </Button>
          </div>
        </Reveal>

        <Reveal delay={120} className="w-full">
          <AgendaPreview />
        </Reveal>
      </div>
    </Section>
  )
}
