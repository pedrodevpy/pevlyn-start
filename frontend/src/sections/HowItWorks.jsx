import { ArrowRight } from 'lucide-react'
import Section from '../components/Section.jsx'
import SectionHeading from '../components/SectionHeading.jsx'
import Reveal from '../components/Reveal.jsx'
import Button from '../components/Button.jsx'
import { steps } from '../data/steps.js'
import { CONTACT_ANCHOR } from '../config/site.js'

/** Cómo funciona — tres pasos (§19). */
export default function HowItWorks() {
  return (
    <Section id="como-funciona" tone="surface" labelledBy="como-funciona-title">
      <SectionHeading
        id="como-funciona-title"
        eyebrow="Cómo funciona"
        title="Empieza en tres pasos."
      />

      <ol className="mt-14 grid gap-5 lg:grid-cols-3">
        {steps.map((step, i) => (
          <Reveal as="li" key={step.number} delay={i * 110} className="h-full">
            <div className="relative flex h-full flex-col gap-4 rounded-card bg-white p-7 ring-1 ring-border transition duration-300 motion-safe:hover:-translate-y-1 hover:shadow-lift">
              <span
                aria-hidden="true"
                className="font-heading text-4xl font-bold tracking-tight text-gradient-brand"
              >
                {step.number}
              </span>
              <h3 className="text-lg text-ink">{step.title}</h3>
              <p className="text-sm leading-relaxed text-text-muted">{step.description}</p>
            </div>
          </Reveal>
        ))}
      </ol>

      <div className="mt-12 flex justify-center">
        <Button href={CONTACT_ANCHOR} size="lg">
          Quiero empezar
          <ArrowRight size={18} aria-hidden="true" />
        </Button>
      </div>
    </Section>
  )
}
