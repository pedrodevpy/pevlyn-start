import Section from '../components/Section.jsx'
import SectionHeading from '../components/SectionHeading.jsx'
import Reveal from '../components/Reveal.jsx'
import UseCaseCard from '../components/UseCaseCard.jsx'
import { useCases } from '../data/useCases.js'

/**
 * Casos de uso por sector.
 *
 * ⚠️ Son ejemplos de aplicación, NO clientes actuales. La nota al pie lo dice
 * explícitamente para que nadie lo lea como un portafolio.
 */
export default function UseCases() {
  return (
    <Section labelledBy="casos-title">
      <SectionHeading
        id="casos-title"
        eyebrow="Para quién"
        title="Negocios que trabajan con clientes, servicios y citas."
        description="Si tu día depende de a quién atiendes y cuándo, PEVLYN encaja con tu operación."
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
  )
}
