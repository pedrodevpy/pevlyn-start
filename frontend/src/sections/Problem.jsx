import Section from '../components/Section.jsx'
import SectionHeading from '../components/SectionHeading.jsx'
import Reveal from '../components/Reveal.jsx'
import Card from '../components/Card.jsx'
import IconBadge from '../components/IconBadge.jsx'
import { problems } from '../data/problems.js'

/** El problema que viven los negocios hoy (§16). */
export default function Problem() {
  return (
    <Section labelledBy="problema-title">
      <SectionHeading
        id="problema-title"
        eyebrow="El problema"
        title={
          <>
            Tu negocio no debería depender
            <br className="hidden sm:block" /> de 20 conversaciones de WhatsApp.
          </>
        }
      />

      <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {problems.map((problem, i) => (
          <Reveal key={problem.title} delay={i * 90} className="h-full">
            <Card className="flex h-full flex-col gap-4">
              <IconBadge icon={problem.icon} />
              <h3 className="text-lg text-ink">{problem.title}</h3>
              <p className="text-sm leading-relaxed text-text-muted">{problem.description}</p>
              {problem.items && (
                <ul className="mt-auto flex flex-col gap-1.5 pt-1">
                  {problem.items.map((item) => (
                    <li key={item} className="flex items-center gap-2 text-sm text-text-muted">
                      <span aria-hidden="true" className="h-1 w-1 shrink-0 rounded-full bg-primary" />
                      {item}
                    </li>
                  ))}
                </ul>
              )}
            </Card>
          </Reveal>
        ))}
      </div>
    </Section>
  )
}
