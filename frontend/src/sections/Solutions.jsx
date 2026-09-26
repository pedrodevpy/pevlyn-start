import Section from '../components/Section.jsx'
import SectionHeading from '../components/SectionHeading.jsx'
import Reveal from '../components/Reveal.jsx'
import SolutionPillar from '../components/SolutionPillar.jsx'
import { solutionPillars } from '../data/solutions.js'

/** Las cuatro soluciones, como capas de un mismo ecosistema. */
export default function Solutions() {
  return (
    <Section id="soluciones" labelledBy="soluciones-title">
      <SectionHeading
        id="soluciones-title"
        eyebrow="Soluciones"
        title="Cuatro capas. Un mismo ecosistema."
        description="Puedes entrar por cualquiera de ellas. La mayoría de negocios empieza por la primera y avanza cuando lo necesita."
      />

      <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {solutionPillars.map((pillar, i) => (
          <Reveal key={pillar.id} delay={i * 90} className="h-full">
            <SolutionPillar pillar={pillar} />
          </Reveal>
        ))}
      </div>
    </Section>
  )
}
