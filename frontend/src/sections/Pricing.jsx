import Section from '../components/Section.jsx'
import SectionHeading from '../components/SectionHeading.jsx'
import Reveal from '../components/Reveal.jsx'
import PricingCard from '../components/PricingCard.jsx'
import { pricingPlans, pricingNote } from '../data/pricing.js'

/**
 * Planes. Responde a "qué puedo comprar hoy", que es una de las preguntas que
 * la landing debe contestar rápido. Cada plan se sitúa además en una etapa de
 * la ruta de crecimiento.
 */
export default function Pricing() {
  return (
    <Section id="precios" tone="surface" labelledBy="precios-title">
      <SectionHeading
        id="precios-title"
        eyebrow="Precios"
        title="Lo que puedes contratar hoy."
        description="Presencia digital lista para trabajar. Los siguientes pasos del ecosistema se cotizan según lo que tu negocio necesite."
      />

      <div className="mt-14 grid gap-6 lg:grid-cols-3">
        {pricingPlans.map((plan, i) => (
          <Reveal key={plan.id} delay={i * 110} className="h-full">
            <PricingCard plan={plan} />
          </Reveal>
        ))}
      </div>

      <p className="mx-auto mt-10 max-w-2xl text-center text-sm text-text-subtle">
        {pricingNote}
      </p>
    </Section>
  )
}
