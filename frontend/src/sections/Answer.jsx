import { ArrowRight } from 'lucide-react'
import Section from '../components/Section.jsx'
import Eyebrow from '../components/Eyebrow.jsx'
import Reveal from '../components/Reveal.jsx'
import { solutionPillars } from '../data/solutions.js'

/**
 * La respuesta: PEVLYN conecta las piezas.
 *
 * Sección bisagra entre el problema y las soluciones. El diagrama muestra los
 * cuatro pilares convergiendo en la marca, que es literalmente la idea.
 */
export default function Answer() {
  return (
    <Section tone="surface" labelledBy="respuesta-title">
      <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
        <Reveal className="flex flex-col items-start">
          <Eyebrow>La respuesta</Eyebrow>
          <h2
            id="respuesta-title"
            className="mt-6 text-3xl leading-[1.15] text-ink sm:text-4xl lg:text-[2.75rem]"
          >
            PEVLYN conecta las piezas.
          </h2>
          <p className="mt-5 max-w-lg text-base leading-relaxed text-text-muted sm:text-lg">
            Convertimos procesos manuales en experiencias digitales simples,
            organizadas y escalables.
          </p>
          <p className="mt-5 max-w-lg text-base leading-relaxed text-text-muted">
            No entregamos piezas sueltas. Cada solución encaja con la anterior,
            de manera que lo que construyas hoy siga sirviendo cuando tu negocio
            necesite el siguiente paso.
          </p>
          <a
            href="#soluciones"
            className="group mt-6 inline-flex min-h-11 items-center gap-2 font-sans text-[0.95rem] font-semibold text-primary transition-colors hover:text-primary-dark"
          >
            Ver las cuatro soluciones
            <ArrowRight
              size={17}
              aria-hidden="true"
              className="transition-transform duration-300 motion-safe:group-hover:translate-x-1"
            />
          </a>
        </Reveal>

        {/* Diagrama: los cuatro pilares convergen en PEVLYN */}
        <Reveal delay={140} className="w-full">
          <div className="relative rounded-xl2 bg-white p-6 ring-1 ring-border sm:p-8">
            <ul className="grid grid-cols-2 gap-3">
              {solutionPillars.map((pillar) => (
                <li
                  key={pillar.id}
                  className="flex flex-col gap-2 rounded-xl bg-surface p-4 ring-1 ring-border/70"
                >
                  <pillar.icon
                    size={18}
                    strokeWidth={1.9}
                    aria-hidden="true"
                    className="text-primary"
                  />
                  <span className="font-heading text-sm font-semibold text-ink">
                    {pillar.title}
                  </span>
                </li>
              ))}
            </ul>

            <div
              aria-hidden="true"
              className="mt-5 flex flex-col items-center gap-3 border-t border-border pt-5"
            >
              <span className="h-6 w-px bg-gradient-to-b from-border to-primary" />
              <span className="rounded-full bg-gradient-brand px-5 py-2 font-heading text-sm font-bold tracking-tight text-white shadow-primary">
                PEVLYN
              </span>
              <span className="text-xs text-text-subtle">Un solo ecosistema</span>
            </div>
          </div>
        </Reveal>
      </div>
    </Section>
  )
}
