import Section from '../components/Section.jsx'
import SectionHeading from '../components/SectionHeading.jsx'
import Reveal from '../components/Reveal.jsx'
import ServiceCard from '../components/ServiceCard.jsx'
import { servicesList, servicesNote } from '../data/services.js'

/**
 * Sección de Servicios y Soluciones en la portada.
 *
 * Muestra las tres soluciones principales de PEVLYN (Web, Agenda, Software)
 * con foco en su alcance y valor, sin fijar precios cerrados de desarrollo.
 */
export default function Services() {
  return (
    <Section id="servicios" tone="surface" labelledBy="servicios-title">
      <SectionHeading
        id="servicios-title"
        eyebrow="Servicios & Soluciones"
        title="Tecnología construida para el tamaño real de tu negocio."
        description="Desde una landing rápida de alto impacto hasta sistemas integrales de citas y automatización. Sin tarifas rígidas: te proponemos exactamente lo que tu operación necesita."
      />

      <div className="mt-14 grid gap-6 lg:grid-cols-3">
        {servicesList.map((service, i) => (
          <Reveal key={service.id} delay={i * 110} className="h-full">
            <ServiceCard service={service} />
          </Reveal>
        ))}
      </div>

      <p className="mx-auto mt-12 max-w-2xl text-center text-sm text-text-subtle">
        {servicesNote}
      </p>
    </Section>
  )
}
