import Section from '../components/Section.jsx'
import SectionHeading from '../components/SectionHeading.jsx'
import Reveal from '../components/Reveal.jsx'
import { differentiators } from '../data/differentiators.js'

/**
 * Por qué PEVLYN. La primera tarjeta ocupa el doble de ancho en escritorio
 * para romper la cuadrícula y evitar el efecto "listado de plantilla".
 */
export default function WhyPevlyn() {
  return (
    <Section id="nosotros" tone="dark" glow labelledBy="porque-title">
      <SectionHeading
        id="porque-title"
        eyebrow="Por qué PEVLYN"
        tone="light"
        title="Somos pequeños. Y eso juega a tu favor."
        description="Estamos empezando, y por eso cada negocio con el que trabajamos importa de verdad."
      />

      <ul className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {differentiators.map((item, i) => (
          <Reveal
            as="li"
            key={item.title}
            delay={(i % 3) * 90}
            className={i === 0 ? 'h-full lg:col-span-2' : 'h-full'}
          >
            <div className="flex h-full flex-col gap-4 rounded-card bg-white/[0.04] p-7 ring-1 ring-white/10 transition duration-300 hover:bg-white/[0.07] hover:ring-white/20">
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/8 text-accent-on-dark ring-1 ring-white/10">
                <item.icon size={20} strokeWidth={1.9} aria-hidden="true" />
              </span>
              <h3 className="text-lg text-white">{item.title}</h3>
              <p className="text-sm leading-relaxed text-white/50">{item.description}</p>
            </div>
          </Reveal>
        ))}
      </ul>
    </Section>
  )
}
