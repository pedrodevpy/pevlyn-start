import Section from '../components/Section.jsx'
import SectionHeading from '../components/SectionHeading.jsx'
import Reveal from '../components/Reveal.jsx'
import ServiceCard from '../components/ServiceCard.jsx'
import { services } from '../data/services.js'

/** Servicios (§18). */
export default function Services() {
  return (
    <Section labelledBy="servicios-title">
      <SectionHeading
        id="servicios-title"
        eyebrow="Servicios"
        title="Herramientas para hacer crecer tu negocio."
      />

      <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((service, i) => (
          <Reveal key={service.title} delay={(i % 3) * 90} className="h-full">
            <ServiceCard {...service} />
          </Reveal>
        ))}
      </div>
    </Section>
  )
}
