import { useState } from 'react'
import { Compass, CalendarCheck, Zap } from 'lucide-react'
import Section from '../components/Section.jsx'
import SectionHeading from '../components/SectionHeading.jsx'
import Reveal from '../components/Reveal.jsx'
import ToolCard from '../components/ToolCard.jsx'
import BusinessDiagnostic from '../components/BusinessDiagnostic.jsx'
import SolutionBuilder from '../components/SolutionBuilder.jsx'

/**
 * PRUEBA PEVLYN — el corazón de la V3.
 *
 * Tres puertas de entrada. El diagnóstico y el constructor se abren aquí
 * mismo, debajo de las tarjetas. La demo de Agenda no se duplica aquí: vive
 * en su propia sección (#agenda), que es donde se explica el producto, y esta
 * tarjeta lleva hasta allí.
 */
const tools = [
  {
    id: 'diagnostico',
    number: '01',
    icon: Compass,
    title: 'Diagnóstico',
    description: 'Responde unas preguntas y descubre qué podría mejorar en tu negocio.',
  },
  {
    id: 'agenda',
    number: '02',
    icon: CalendarCheck,
    title: 'PEVLYN Agenda',
    description: 'Explora una demo interactiva de la plataforma que estamos construyendo.',
    href: '#agenda',
  },
  {
    id: 'constructor',
    number: '03',
    icon: Zap,
    title: 'Constructor',
    description: 'Construye una solución según lo que necesita tu negocio.',
  },
]

export default function TryPevlyn() {
  const [open, setOpen] = useState(null)

  return (
    <Section id="prueba" tone="dark" glow size="lg" labelledBy="prueba-title">
      <SectionHeading
        id="prueba-title"
        eyebrow="Prueba PEVLYN"
        tone="light"
        title="Descubre cómo la tecnología podría ayudarte a trabajar mejor."
        description="No tienes que imaginarlo. Puedes probarlo."
      />

      <div className="mt-14 grid gap-5 lg:grid-cols-3">
        {tools.map((tool, i) => (
          <Reveal key={tool.id} delay={i * 100} className="h-full">
            <ToolCard
              {...tool}
              active={open === tool.id}
              onClick={tool.href ? undefined : () => setOpen((v) => (v === tool.id ? null : tool.id))}
            />
          </Reveal>
        ))}
      </div>

      {open && (
        <div id="herramienta-activa" className="mt-8 motion-safe:animate-reveal">
          {open === 'diagnostico' && <BusinessDiagnostic />}
          {open === 'constructor' && <SolutionBuilder />}
        </div>
      )}
    </Section>
  )
}
