import { ArrowRight } from 'lucide-react'
import Section from '../components/Section.jsx'
import SectionHeading from '../components/SectionHeading.jsx'
import Reveal from '../components/Reveal.jsx'
import Button from '../components/Button.jsx'
import SolutionPillar from '../components/SolutionPillar.jsx'
import { solutionPillars } from '../data/solutions.js'

/**
 * Las cuatro capas de PEVLYN, contadas una sola vez.
 *
 * Esta sección sustituye a las antiguas "Soluciones" y "Evolución", que
 * nombraban los mismos cuatro conceptos por separado. Aquí cada capa lleva su
 * número de etapa y lo que incluye, así que el "qué hacemos" y el "en qué
 * orden" se leen de una vez.
 */
export default function Solutions() {
  return (
    <Section id="soluciones" labelledBy="soluciones-title">
      <SectionHeading
        id="soluciones-title"
        eyebrow="Soluciones"
        title="Empieza por la capa que necesitas hoy."
        description="Cuatro capas de un mismo ecosistema. Cada una se apoya en la anterior, así que nada de lo que construyas se tira cuando llega el siguiente paso."
      />

      <ol className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {solutionPillars.map((pillar, i) => (
          <Reveal as="li" key={pillar.id} delay={i * 90} className="h-full">
            <SolutionPillar pillar={pillar} />
          </Reveal>
        ))}
      </ol>

      <Reveal className="mt-12 flex flex-col items-center gap-4 text-center">
        <p className="max-w-lg text-sm leading-relaxed text-text-muted">
          No necesitas transformar todo tu negocio de una vez. Construimos
          contigo paso a paso.
        </p>
        <Button to="/demo?tool=diagnostico" variant="secondary">
          ¿En qué capa está tu negocio?
          <ArrowRight size={16} aria-hidden="true" />
        </Button>
      </Reveal>
    </Section>
  )
}
