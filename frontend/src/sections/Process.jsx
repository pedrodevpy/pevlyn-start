import Section from '../components/Section.jsx'
import SectionHeading from '../components/SectionHeading.jsx'
import Reveal from '../components/Reveal.jsx'
import { processSteps } from '../data/process.js'

/** Cómo trabajamos. Cinco pasos, del primer contacto a la evolución. */
export default function Process() {
  return (
    <Section id="proceso" tone="surface" labelledBy="proceso-title">
      <SectionHeading
        id="proceso-title"
        eyebrow="Cómo trabajamos"
        title="Primero entender. Después construir."
        description="Trabajamos contigo, no simplemente para entregarte un proyecto y desaparecer."
      />

      <ol className="mt-14 grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
        {processSteps.map((step, i) => (
          <Reveal as="li" key={step.number} delay={i * 90} className="h-full">
            <div className="group relative flex h-full flex-col gap-3 rounded-card bg-white p-6 ring-1 ring-border transition duration-300 motion-safe:hover:-translate-y-1 hover:shadow-lift">
              <span className="flex items-center gap-2.5">
                <span
                  aria-hidden="true"
                  className="font-heading text-sm font-bold text-primary"
                >
                  {step.number}
                </span>
                <span
                  aria-hidden="true"
                  className="h-px flex-1 bg-border transition-colors duration-300 group-hover:bg-primary/30"
                />
              </span>
              <h3 className="text-base text-ink">{step.title}</h3>
              <p className="text-sm leading-relaxed text-text-muted">{step.description}</p>
            </div>
          </Reveal>
        ))}
      </ol>
    </Section>
  )
}
