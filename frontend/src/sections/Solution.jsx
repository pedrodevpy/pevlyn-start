import Section from '../components/Section.jsx'
import SectionHeading from '../components/SectionHeading.jsx'
import Reveal from '../components/Reveal.jsx'
import ServiceCard from '../components/ServiceCard.jsx'
import { solutions } from '../data/solutions.js'

/** La solución de PEVLYN (§17). Ancla de "Soluciones" en la navbar. */
export default function Solution() {
  return (
    <Section id="soluciones" tone="surface" labelledBy="solucion-title">
      <SectionHeading
        id="solucion-title"
        eyebrow="La solución"
        title="Todo puede ser más sencillo."
        description="PEVLYN te ayuda a digitalizar las tareas que más tiempo consumen en tu negocio para que puedas concentrarte en atender clientes y hacerlo crecer."
      />

      <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {solutions.map((solution, i) => (
          <Reveal key={solution.title} delay={i * 90} className="h-full">
            <ServiceCard {...solution} />
          </Reveal>
        ))}
      </div>
    </Section>
  )
}
