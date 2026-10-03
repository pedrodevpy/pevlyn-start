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

        <ul className="mt-10 grid w-full gap-3 sm:grid-cols-3">
          {highlights.map((item, i) => (
            <li
              key={item.label}
              style={{ animationDelay: `${i * 90}ms` }}
              className="flex flex-col items-center gap-2.5 rounded-card bg-white/[0.04] px-5 py-6 ring-1 ring-white/10 motion-safe:animate-reveal"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-brand text-white shadow-primary">
                <item.icon size={20} strokeWidth={1.9} aria-hidden="true" />
              </span>
              <span className="font-heading text-sm font-semibold text-white">{item.label}</span>
              <span className="text-xs text-white/55">{item.description}</span>
            </li>
          ))}
        </ul>

        <Button to="/demo" variant="light" size="lg" className="mt-10">
          Explorar demo
          <ArrowRight size={18} aria-hidden="true" />
        </Button>
      </Reveal>
    </Section>
  )
}
