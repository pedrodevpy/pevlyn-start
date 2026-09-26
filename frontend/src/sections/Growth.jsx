import Section from '../components/Section.jsx'
import SectionHeading from '../components/SectionHeading.jsx'
import Reveal from '../components/Reveal.jsx'
import Button from '../components/Button.jsx'
import GrowthTimeline from '../components/GrowthTimeline.jsx'
import { CONTACT_ANCHOR } from '../config/site.js'

/**
 * La idea central de PEVLYN, y la sección que más la diferencia: no hace
 * falta transformar todo el negocio de golpe. Va en oscuro porque es una de
 * las protagonistas de la página.
 */
export default function Growth() {
  return (
    <Section id="crecimiento" tone="dark" glow size="lg" labelledBy="crecimiento-title">
      <SectionHeading
        id="crecimiento-title"
        eyebrow="Cómo crecemos contigo"
        tone="light"
        title={
          <>
            Empieza con lo que necesitas.
            <br className="hidden sm:block" /> Crece con lo que necesitas.
          </>
        }
        description="No necesitas transformar todo tu negocio de una vez. Construimos contigo paso a paso."
      />

      <GrowthTimeline />

      <Reveal className="mt-12 flex flex-col items-center gap-4 text-center lg:mt-16">
        <p className="max-w-lg text-sm leading-relaxed text-white/45">
          Cada etapa se apoya en la anterior. Nada de lo que construyas se tira
          cuando llega el siguiente paso.
        </p>
        <Button href={CONTACT_ANCHOR} variant="light" size="lg">
          ¿En qué etapa está tu negocio?
        </Button>
      </Reveal>
    </Section>
  )
}
