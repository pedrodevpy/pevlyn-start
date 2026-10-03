import { ArrowRight } from 'lucide-react'
import Container from '../components/Container.jsx'
import Section from '../components/Section.jsx'
import SectionHeading from '../components/SectionHeading.jsx'
import Button from '../components/Button.jsx'
import Reveal from '../components/Reveal.jsx'
import StatusBadge from '../components/StatusBadge.jsx'
import AgendaPreview from '../components/AgendaPreview.jsx'
import WhatsAppButton from '../components/WhatsAppButton.jsx'
import UseCaseCard from '../components/UseCaseCard.jsx'
import { agendaModules, agendaStatus } from '../data/agenda.js'
import { useCases } from '../data/useCases.js'

/**
 * /agenda — página comercial del producto.
 *
 * Explica qué es PEVLYN Agenda y para quién. No es la demo: la experiencia
 * navegable vive en /demo?tool=agenda, y desde aquí se enlaza. Separarlas
 * evita contar lo mismo dos veces y da un recorrido claro:
 * conocer → probar → contactar.
 */
const AGENDA_WHATSAPP =
  'Hola PEVLYN 👋 Me interesa PEVLYN Agenda y me gustaría saber cuándo estará disponible.'

export default function AgendaPage() {
  return (
    <>
      <section className="relative isolate overflow-hidden bg-ink pb-20 pt-32 sm:pt-36 lg:pb-24 lg:pt-44">
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-grid mask-fade-b opacity-70" />
          <div className="absolute left-1/2 top-[-14rem] h-[32rem] w-[48rem] max-w-[130vw] -translate-x-1/2 rounded-full bg-primary/25 blur-3xl" />
        </div>

        <Container>
          <div className="grid items-center gap-14 lg:grid-cols-[minmax(0,1fr)_minmax(0,28rem)] lg:gap-16">
            <div className="flex flex-col items-start motion-safe:animate-reveal">
              <StatusBadge tone="soon">En desarrollo</StatusBadge>

              <h1 className="mt-6 text-[2.25rem] leading-[1.08] tracking-[-0.03em] text-white sm:text-5xl lg:text-[3.5rem]">
                PEVLYN <span className="text-gradient-on-dark">Agenda</span>
              </h1>

              <p className="mt-6 max-w-xl text-base leading-relaxed text-white/60 sm:text-lg">
                Tu negocio tiene clientes. Ahora también puede tener un sistema
                para organizarlos.
              </p>

              <div className="mt-9 flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
                <WhatsAppButton variant="light" size="lg" message={AGENDA_WHATSAPP}>
                  Quiero conocer PEVLYN Agenda
                </WhatsAppButton>
                <Button to="/demo?tool=agenda" variant="outlineLight" size="lg">
                  Probar demo
                  <ArrowRight size={18} aria-hidden="true" />
                </Button>
              </div>
            </div>

            <div className="w-full motion-safe:animate-reveal [animation-delay:160ms]">
              <AgendaPreview />
            </div>
          </div>
        </Container>
      </section>

      {/* Qué incluye */}
      <Section labelledBy="modulos-title">
        <SectionHeading
          id="modulos-title"
          eyebrow="Qué incluye"
          title="Todo tu día, en un solo lugar."
          description="Estos son los módulos que estamos definiendo. No prometemos funcionalidades que todavía no hemos construido."
        />

        <ul className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {agendaModules.map((module, i) => (
            <Reveal as="li" key={module.title} delay={(i % 3) * 90} className="h-full">
              <div className="flex h-full items-start gap-3.5 rounded-card bg-white p-6 ring-1 ring-border transition duration-300 motion-safe:hover:-translate-y-1 hover:shadow-lift">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary-soft text-primary-dark">
                  <module.icon size={20} strokeWidth={1.9} aria-hidden="true" />
                </span>
                <span className="min-w-0">
                  <h3 className="text-base text-ink">{module.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-text-muted">
                    {module.description}
                  </p>
                </span>
              </div>
            </Reveal>
          ))}
        </ul>
      </Section>

      {/* Para quién */}
      <Section tone="surface" labelledBy="para-quien-title">
        <SectionHeading
          id="para-quien-title"
          eyebrow="Para quién"
          title="Negocios que trabajan con clientes, servicios y citas."
          description="Si tu día depende de a quién atiendes y cuándo, PEVLYN Agenda encaja con tu operación."
        />

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {useCases.map((useCase, i) => (
            <Reveal key={useCase.sector} delay={(i % 3) * 90} className="h-full">
              <UseCaseCard useCase={useCase} />
            </Reveal>
          ))}
        </div>

        <p className="mx-auto mt-10 max-w-xl text-center text-sm text-text-subtle">
          Ejemplos de aplicación por sector. No representan clientes actuales de PEVLYN.
        </p>
      </Section>

      {/* Cierre */}
      <Section tone="dark" glow>
        <Reveal className="mx-auto flex max-w-2xl flex-col items-center text-center">
          <StatusBadge tone="soon">{agendaStatus}</StatusBadge>
          <h2 className="mt-6 text-3xl leading-[1.15] text-white sm:text-4xl">
            Estamos construyéndolo.
          </h2>
          <p className="mt-5 text-base leading-relaxed text-white/60">
            Estamos construyendo una herramienta para ayudar a los negocios que
            trabajan con citas y servicios a organizar su operación desde un solo
            lugar. Si te interesa, escríbenos y te avisamos.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <WhatsAppButton variant="light" size="lg" message={AGENDA_WHATSAPP}>
              Quiero conocer PEVLYN Agenda
            </WhatsAppButton>
            <Button to="/demo?tool=agenda" variant="outlineLight" size="lg">
              Probar demo
            </Button>
          </div>
        </Reveal>
      </Section>
    </>
  )
}
