import { useEffect, useState } from 'react'
import { Compass, CalendarCheck, Zap, ArrowRight } from 'lucide-react'
import Container from '../components/Container.jsx'
import Section from '../components/Section.jsx'
import Button from '../components/Button.jsx'
import Reveal from '../components/Reveal.jsx'
import StatusBadge from '../components/StatusBadge.jsx'
import ToolTabs from '../components/ToolTabs.jsx'
import WhatsAppButton from '../components/WhatsAppButton.jsx'
import BusinessDiagnostic from '../components/BusinessDiagnostic.jsx'
import AgendaDashboard from '../components/AgendaDashboard.jsx'
import SolutionBuilder from '../components/SolutionBuilder.jsx'
import { useQueryParam, useRouter } from '../lib/router.jsx'

/**
 * /demo — la experiencia interactiva.
 *
 * Las tres herramientas son las mismas de la V3, sin tocar su lógica: aquí
 * solo cambia dónde viven y cómo se navega entre ellas. Mostrar una sola a la
 * vez es lo que mantiene la página corta.
 *
 * La pestaña activa se refleja en `?tool=`, de modo que un enlace como
 * /demo?tool=agenda abre directamente esa herramienta y se puede compartir.
 */
const tools = [
  {
    id: 'diagnostico',
    label: 'Diagnóstico',
    icon: Compass,
    title: '¿Qué necesita realmente tu negocio?',
    description: 'Responde unas preguntas y descubre qué tipo de solución podría ayudarte.',
  },
  {
    id: 'agenda',
    label: 'PEVLYN Agenda',
    shortLabel: 'Agenda',
    icon: CalendarCheck,
    title: 'Explora PEVLYN Agenda',
    description:
      'Explora cómo podría funcionar una plataforma para organizar clientes, citas y servicios.',
    badge: 'Demo interactiva',
  },
  {
    id: 'constructor',
    label: 'Constructor',
    icon: Zap,
    title: 'Construye tu solución PEVLYN',
    description:
      'Selecciona lo que quieres mejorar y descubre cómo podría evolucionar tu solución.',
  },
]

const isValid = (id) => tools.some((t) => t.id === id)

export default function DemoPage() {
  const param = useQueryParam('tool')
  const { navigate } = useRouter()
  const [active, setActive] = useState(() => (isValid(param) ? param : tools[0].id))

  // Mantiene la pestaña sincronizada con la URL al navegar atrás/adelante.
  useEffect(() => {
    if (isValid(param) && param !== active) setActive(param)
  }, [param]) // eslint-disable-line react-hooks/exhaustive-deps

  const change = (id) => {
    setActive(id)
    navigate(`/demo?tool=${id}`, { replace: true })
  }

  const tool = tools.find((t) => t.id === active)

  return (
    <>
      {/* Cabecera */}
      <section className="relative isolate overflow-hidden bg-ink pb-12 pt-32 sm:pb-14 sm:pt-36 lg:pt-40">
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-grid mask-fade-b opacity-70" />
          <div className="absolute left-1/2 top-[-12rem] h-[30rem] w-[46rem] max-w-[130vw] -translate-x-1/2 rounded-full bg-primary/25 blur-3xl" />
        </div>

        <Container className="flex flex-col items-center text-center">
          <h1 className="text-[2.25rem] leading-[1.1] tracking-[-0.03em] text-white sm:text-5xl">
            Prueba <span className="text-gradient-on-dark">PEVLYN</span>
          </h1>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-white/60 sm:text-lg">
            Explora nuestras herramientas y descubre qué podría funcionar para tu
            negocio. Sin registro y sin compromiso.
          </p>

          <div className="mt-10 w-full">
            <ToolTabs tools={tools} active={active} onChange={change} />
          </div>
        </Container>
      </section>

      {/* Herramienta activa */}
      <Section tone="surface" size="lg">
        <div
          key={active}
          role="tabpanel"
          id={`panel-${active}`}
          aria-labelledby={`tab-${active}`}
          tabIndex={-1}
          className="mx-auto max-w-4xl motion-safe:animate-reveal"
        >
          <div className="flex flex-col items-center text-center">
            {tool.badge && <StatusBadge tone="building">{tool.badge}</StatusBadge>}
            <h2 className={`text-2xl text-ink sm:text-3xl ${tool.badge ? 'mt-4' : ''}`}>
              {tool.title}
            </h2>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-text-muted">
              {tool.description}
            </p>
          </div>

          <div className="mt-10">
            {active === 'diagnostico' && <BusinessDiagnostic />}
            {active === 'agenda' && (
              <>
                <AgendaDashboard />
                <div className="mt-8 flex flex-col items-center gap-4 text-center">
                  <p className="max-w-xl text-sm leading-relaxed text-text-muted">
                    Estamos construyendo PEVLYN Agenda para ayudar a los negocios
                    a organizar mejor su día a día.
                  </p>
                  <div className="flex flex-col gap-3 sm:flex-row">
                    <WhatsAppButton message="¡Hola PEVLYN! Estuve probando la demo interactiva de PEVLYN Agenda y me gustaría conocer cómo implementarla en mi negocio.">
                      Quiero conocer PEVLYN Agenda
                    </WhatsAppButton>
                    <Button to="/agenda" variant="secondary">
                      Ver la página del producto
                      <ArrowRight size={16} aria-hidden="true" />
                    </Button>
                  </div>
                </div>
              </>
            )}
            {active === 'constructor' && <SolutionBuilder />}
          </div>
        </div>
      </Section>

      {/* Cierre */}
      <Section tone="dark" glow>
        <Reveal className="mx-auto flex max-w-2xl flex-col items-center text-center">
          <h2 className="text-3xl leading-[1.15] text-white sm:text-4xl">
            ¿Hablamos de lo que descubriste?
          </h2>
          <p className="mt-5 text-base leading-relaxed text-white/60">
            Cuéntanos qué proceso quieres mejorar y te decimos por dónde tiene
            más sentido empezar.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <WhatsAppButton
              variant="light"
              size="lg"
              message="¡Hola PEVLYN! Estuve probando las herramientas en su web y me gustaría hablar sobre las soluciones para mi negocio."
            >
              Hablemos de mi negocio
            </WhatsAppButton>
            <Button to="/#contacto" variant="outlineLight" size="lg">
              Escribirnos por formulario
            </Button>
          </div>
        </Reveal>
      </Section>
    </>
  )
}
