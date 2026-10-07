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

      <ul className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {/* Solo los cuatro principales: la portada resume, no inventaría. */}
        {problems.slice(0, 4).map((problem, i) => (
          <Reveal
            as="li"
            key={problem.title}
            delay={(i % 4) * 80}
            className="group flex flex-col rounded-[32px] bg-white p-7 sm:p-8 shadow-card ring-1 ring-black/[0.04] transition-all duration-300 motion-safe:hover:-translate-y-1 hover:shadow-xl"
          >
            <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-lavender-mist/35 text-periwinkle transition-colors duration-300 group-hover:bg-periwinkle group-hover:text-white">
              <problem.icon size={20} strokeWidth={1.9} aria-hidden="true" />
            </span>
            <h3 className="mt-6 font-heading text-lg font-bold text-ink">{problem.title}</h3>
            <p className="mt-2.5 font-sans text-sm font-light leading-relaxed text-ink/75">{problem.description}</p>
          </Reveal>
        ))}
      </ul>
    </Section>
  )
}
