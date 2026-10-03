import { Compass, CalendarCheck, Zap, ArrowRight } from 'lucide-react'
import Section from '../components/Section.jsx'
import Reveal from '../components/Reveal.jsx'
import Button from '../components/Button.jsx'
import Eyebrow from '../components/Eyebrow.jsx'

/**
 * Invitación a /demo desde la portada.
 *
 * Deliberadamente NO monta aquí ninguna herramienta: su trabajo es despertar
 * la curiosidad y mandar a /demo, que es donde viven. Montarlas aquí volvería
 * a alargar la portada, que es justo lo que esta arquitectura evita.
 */
const highlights = [
  { icon: Compass, label: 'Diagnóstico', description: 'Qué necesita tu negocio' },
  { icon: CalendarCheck, label: 'Agenda', description: 'Demo interactiva' },
  { icon: Zap, label: 'Constructor', description: 'Diseña tu solución' },
]

export default function DemoPreview() {
  return (
    <Section id="probar" tone="dark" glow labelledBy="probar-title">
      <Reveal className="mx-auto flex max-w-3xl flex-col items-center text-center">
        <Eyebrow tone="light">Prueba PEVLYN</Eyebrow>

        <h2
          id="probar-title"
          className="mt-6 text-3xl leading-[1.15] text-white sm:text-4xl lg:text-[2.75rem]"
        >
          Descubre qué podría necesitar tu negocio.
        </h2>

        <p className="mt-5 max-w-xl text-base leading-relaxed text-white/60 sm:text-lg">
          No tienes que imaginarlo. Tenemos tres herramientas para que lo
          pruebes ahora mismo, sin registrarte.
        </p>

        <ul className="mt-9 flex flex-wrap justify-center gap-2.5">
          {highlights.map((item, i) => (
            <li
              key={item.label}
              style={{ animationDelay: `${i * 90}ms` }}
              className="flex items-center gap-2.5 rounded-full bg-white/[0.05] py-2 pl-2 pr-4 ring-1 ring-white/10 motion-safe:animate-reveal"
            >
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-brand text-white">
                <item.icon size={16} strokeWidth={2} aria-hidden="true" />
              </span>
              <span className="font-sans text-sm font-semibold text-white">{item.label}</span>
            </li>
          ))}
        </ul>

        <Button to="/demo" variant="light" size="lg" className="mt-9">
          Explorar demo
          <ArrowRight size={18} aria-hidden="true" />
        </Button>
      </Reveal>
    </Section>
  )
}
