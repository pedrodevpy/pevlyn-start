import Section from '../components/Section.jsx'
import SectionHeading from '../components/SectionHeading.jsx'
import Reveal from '../components/Reveal.jsx'
import IconBadge from '../components/IconBadge.jsx'
import { benefits } from '../data/benefits.js'

/** Beneficios (§20). */
export default function Benefits() {
  return (
    <Section tone="dark" labelledBy="beneficios-title">
      <SectionHeading
        id="beneficios-title"
        eyebrow="Beneficios"
        tone="light"
        title={
          <>
            Menos tiempo gestionando.
            <br className="hidden sm:block" /> Más tiempo creciendo.
          </>
        }
      />

      <ul className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {benefits.map((benefit, i) => (
          <Reveal as="li" key={benefit.title} delay={(i % 4) * 80} className="h-full">
            <div className="flex h-full items-center gap-3.5 rounded-card bg-white/5 p-5 ring-1 ring-white/10 transition-colors duration-300 hover:bg-white/10">
              <IconBadge icon={benefit.icon} tone="light" size="sm" />
              <span className="font-sans text-sm font-medium leading-snug text-white/90">
                {benefit.title}
              </span>
            </div>
          </Reveal>
        ))}
      </ul>
    </Section>
  )
}
