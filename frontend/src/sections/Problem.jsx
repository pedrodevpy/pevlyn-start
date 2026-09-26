import Section from '../components/Section.jsx'
import SectionHeading from '../components/SectionHeading.jsx'
import Reveal from '../components/Reveal.jsx'
import { problems } from '../data/problems.js'

/** El problema: síntomas de un negocio que creció más rápido que su método. */
export default function Problem() {
  return (
    <Section labelledBy="problema-title">
      <SectionHeading
        id="problema-title"
        eyebrow="El problema"
        title={
          <>
            Tu negocio está creciendo.
            <br className="hidden sm:block" />{' '}
            <span className="text-text-subtle">¿Tu forma de trabajar también?</span>
          </>
        }
        description="Casi ningún negocio se rompe de golpe. Se va llenando de pequeños procesos manuales que un día dejan de sostenerse."
      />

      <ul className="mt-14 grid gap-px overflow-hidden rounded-xl2 bg-border ring-1 ring-border sm:grid-cols-2 lg:grid-cols-3">
        {problems.map((problem, i) => (
          <Reveal
            as="li"
            key={problem.title}
            delay={(i % 3) * 80}
            className="group bg-white p-7 transition-colors duration-300 hover:bg-primary-softer"
          >
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-surface text-primary ring-1 ring-border transition-colors duration-300 group-hover:bg-white">
              <problem.icon size={19} strokeWidth={1.9} aria-hidden="true" />
            </span>
            <h3 className="mt-5 text-base text-ink">{problem.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-text-muted">{problem.description}</p>
          </Reveal>
        ))}
      </ul>
    </Section>
  )
}
