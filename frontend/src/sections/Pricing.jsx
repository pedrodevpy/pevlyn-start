import Section from '../components/Section.jsx'
import SectionHeading from '../components/SectionHeading.jsx'
import Reveal from '../components/Reveal.jsx'
import PricingCard from '../components/PricingCard.jsx'
import { pricingPlans, pricingNote } from '../data/pricing.js'

/** Planes (§22 y §23). */
export default function Pricing() {
  return (
    <Section id="precios" tone="surface" labelledBy="precios-title">
      <SectionHeading
        id="precios-title"
        eyebrow="Precios"
        title="Planes para empezar a digitalizar tu negocio."
        description="Elige el punto de partida. Cada solución se adapta a lo que tu negocio necesita hoy."
      />

      <div className="mt-14 grid gap-6 lg:grid-cols-3">
        {pricingPlans.map((plan, i) => (
          <Reveal key={plan.id} delay={i * 110} className="h-full">
            <PricingCard plan={plan} />
          </Reveal>
        ))}
      </div>

      <p className="mx-auto mt-10 max-w-xl text-center text-sm text-text-subtle">
        {pricingNote}
      </p>
    </Section>
  )
}
