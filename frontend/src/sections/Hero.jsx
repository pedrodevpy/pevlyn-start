import { ArrowRight } from 'lucide-react'
import Container from '../components/Container.jsx'
import Button from '../components/Button.jsx'
import HeroMockup from '../components/HeroMockup.jsx'
import { trustPillars } from '../data/navigation.js'
import { CONTACT_ANCHOR, BRAND } from '../config/site.js'

/**
 * Hero oscuro: el cambio de percepción más importante de la V2.
 *
 * La V1 era clara de principio a fin y leía como un sitio de agencia. Sobre
 * oscuro, el logo y el mockup de producto hacen que lo primero que se perciba
 * sea "aquí se construye tecnología".
 */
export default function Hero() {
  return (
    <section id="inicio" className="relative isolate overflow-hidden bg-ink">
      {/* Profundidad: rejilla técnica + halos de marca */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-grid mask-fade-b opacity-70" />
        <div className="absolute left-1/2 top-[-14rem] h-[34rem] w-[52rem] max-w-[130vw] -translate-x-1/2 rounded-full bg-primary/25 blur-3xl" />
        <div className="absolute right-[-12rem] top-[18rem] h-[26rem] w-[26rem] rounded-full bg-accent/15 blur-3xl" />
      </div>

      <Container className="pb-16 pt-32 sm:pb-20 sm:pt-36 lg:pb-24 lg:pt-44">
        <div className="grid items-center gap-14 lg:grid-cols-[minmax(0,1fr)_minmax(0,27rem)] lg:gap-16">
          <div className="flex flex-col items-center text-center motion-safe:animate-reveal lg:items-start lg:text-left">
            <span className="inline-flex items-center gap-2 rounded-full bg-white/[0.06] px-3.5 py-1.5 font-sans text-xs font-semibold uppercase tracking-[0.14em] text-white/65 ring-1 ring-white/12">
              <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-accent-on-dark" />
              {BRAND.category}
            </span>

            <h1 className="mt-7 text-[2.5rem] leading-[1.08] tracking-[-0.03em] text-white sm:text-5xl lg:text-[3.75rem]">
              Tu negocio merece una tecnología{' '}
              <span className="text-gradient-on-dark">que trabaje contigo.</span>
            </h1>

            <p className="mt-6 max-w-xl text-base leading-relaxed text-white/60 sm:text-lg">
              Construimos páginas web, sistemas y automatizaciones que ayudan a
              los pequeños negocios a conseguir clientes, organizar su
              operación y crecer.
            </p>

            <div className="mt-9 flex w-full flex-col gap-3 sm:w-auto sm:flex-row sm:items-center">
              <Button href={CONTACT_ANCHOR} variant="light" size="lg">
                Quiero mejorar mi negocio
                <ArrowRight size={18} aria-hidden="true" />
              </Button>
              <Button href="#soluciones" variant="outlineLight" size="lg">
                Explorar soluciones
              </Button>
            </div>
          </div>

          <div className="w-full motion-safe:animate-reveal [animation-delay:180ms]">
            <HeroMockup />
          </div>
        </div>
      </Container>

      {/* Micro-mensaje de contexto: discreto, cierra el hero */}
      <div className="relative border-t border-white/8">
        <Container className="flex flex-wrap items-center justify-center gap-x-3 gap-y-2 py-5 sm:gap-x-5">
          {trustPillars.map((pillar, i) => (
            <span key={pillar} className="flex items-center gap-3 sm:gap-5">
              {i > 0 && (
                <span aria-hidden="true" className="h-1 w-1 rounded-full bg-white/20" />
              )}
              <span className="font-sans text-xs font-semibold uppercase tracking-[0.16em] text-white/55 sm:text-sm">
                {pillar}
              </span>
            </span>
          ))}
        </Container>
      </div>
    </section>
  )
}
