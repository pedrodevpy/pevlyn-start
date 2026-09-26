import { Check, ArrowRight } from 'lucide-react'
import Section from '../components/Section.jsx'
import Eyebrow from '../components/Eyebrow.jsx'
import Reveal from '../components/Reveal.jsx'
import Button from '../components/Button.jsx'
import BusinessSiteMockup from '../components/BusinessSiteMockup.jsx'
import { webFeatures } from '../data/webFeatures.js'
import { CONTACT_ANCHOR } from '../config/site.js'

/** PEVLYN Web — primer producto comercial (§21). */
export default function PevlynWeb() {
  return (
    <Section id="pevlyn-web" labelledBy="pevlyn-web-title">
      <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-16">
        <Reveal className="flex flex-col items-start">
          <Eyebrow>Primer producto</Eyebrow>

          <h2 id="pevlyn-web-title" className="mt-6 text-3xl leading-[1.15] text-ink sm:text-4xl lg:text-[2.75rem]">
            Tu negocio merece estar online.
          </h2>

          <p className="mt-5 max-w-lg text-base leading-relaxed text-text-muted sm:text-lg">
            Creamos una presencia digital profesional para que tus clientes
            puedan conocer tus servicios, encontrarte y contactarte fácilmente.
          </p>

          <p className="mt-8 font-heading text-sm font-semibold text-ink">Incluye</p>
          <ul className="mt-4 grid w-full gap-x-6 gap-y-3 sm:grid-cols-2">
            {webFeatures.map((feature) => (
              <li key={feature} className="flex items-center gap-2.5">
                <Check
                  size={17}
                  strokeWidth={2.6}
                  aria-hidden="true"
                  className="shrink-0 text-primary"
                />
                <span className="text-sm text-text-muted">{feature}</span>
              </li>
            ))}
          </ul>

          <Button href={CONTACT_ANCHOR} size="lg" className="mt-9">
            Quiero mi página
            <ArrowRight size={18} aria-hidden="true" />
          </Button>
        </Reveal>

        <Reveal delay={120} className="w-full">
          <BusinessSiteMockup />
        </Reveal>
      </div>
    </Section>
  )
}
