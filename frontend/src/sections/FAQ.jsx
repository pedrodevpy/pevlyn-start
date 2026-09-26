import Section from '../components/Section.jsx'
import SectionHeading from '../components/SectionHeading.jsx'
import Reveal from '../components/Reveal.jsx'
import FAQItem from '../components/FAQItem.jsx'
import { faqItems } from '../data/faq.js'

/** Preguntas frecuentes (§24). */
export default function FAQ() {
  return (
    <Section id="faq" labelledBy="faq-title">
      <SectionHeading id="faq-title" eyebrow="FAQ" title="Preguntas frecuentes." />

      <Reveal className="mx-auto mt-12 w-full max-w-3xl">
        <div className="rounded-xl2 bg-white px-6 ring-1 ring-border sm:px-8">
          {faqItems.map((item) => (
            <FAQItem key={item.question} {...item} />
          ))}
        </div>
      </Reveal>
    </Section>
  )
}
