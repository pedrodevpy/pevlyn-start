import { ArrowRight } from 'lucide-react'
import Container from '../components/Container.jsx'
import Button from '../components/Button.jsx'
import HeroMockup from '../components/HeroMockup.jsx'
import { trustPillars } from '../data/navigation.js'
import { BRAND } from '../config/site.js'

/**
 * Hero oscuro: el cambio de percepción más importante de la V2.
 *
 * La V1 era clara de principio a fin y leía como un sitio de agencia. Sobre
 * oscuro, el logo y el mockup de producto hacen que lo primero que se perciba
 * sea "aquí se construye tecnología".
 */
export default function Hero() {
  return (
    <section id="inicio" className="relative isolate overflow-hidden bg-white pt-28 sm:pt-32 lg:pt-36">
      {/* Fondo sutil: gradiente tenue hacia warm-linen */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-white via-warm-linen/35 to-white" />
        <div className="absolute left-1/2 top-[-10rem] h-[30rem] w-[50rem] max-w-[120vw] -translate-x-1/2 rounded-full bg-lavender-mist/20 blur-3xl" />
      </div>

      <Container className="pb-12 sm:pb-16 lg:pb-20">
        {/* Cabecera centrada */}
        <div className="mx-auto flex max-w-4xl flex-col items-center text-center motion-safe:animate-reveal">
          <span className="font-sans text-xs font-semibold uppercase tracking-open text-periwinkle">
            {BRAND.category}
          </span>

          <h1 className="mt-5 font-heading text-4xl font-bold leading-[1.05] tracking-tight text-ink sm:text-5xl lg:text-[4rem]">
            Tu negocio merece una tecnología{' '}
            <span className="inline-block rounded-lg bg-lavender-mist px-3 py-0.5 text-ink">
              que trabaje contigo.
            </span>
          </h1>

          <p className="mt-6 max-w-2xl font-sans text-base font-light leading-relaxed text-ink/75 sm:text-lg">
            Construimos páginas web, sistemas y automatizaciones que ayudan a
            los pequeños negocios a conseguir clientes, organizar su
            operación y crecer.
          </p>

          <div className="mt-8 flex w-full flex-col items-center justify-center gap-3 sm:w-auto sm:flex-row">
            <Button to="/demo" variant="primary" size="lg" className="w-full rounded-xl px-7 shadow-lift sm:w-auto">
              Probar PEVLYN
              <ArrowRight size={18} aria-hidden="true" />
            </Button>
            <Button href="#soluciones" variant="secondary" size="lg" className="w-full rounded-xl px-7 sm:w-auto">
              Conocer soluciones
            </Button>
          </div>
        </div>

        {/* Mockup flotante sobre la superficie (32px radius + soft shadow) */}
        <div className="mx-auto mt-14 max-w-3xl motion-safe:animate-reveal [animation-delay:180ms] sm:mt-18">
          <div className="rounded-[32px] bg-white p-2 sm:p-3.5 shadow-xl ring-1 ring-black/[0.04] transition-transform duration-300 hover:-translate-y-0.5">
            <HeroMockup />
          </div>
        </div>
      </Container>

      {/* Micro-mensaje de contexto: pilares de confianza */}
      <div className="relative border-t border-warm-linen bg-warm-linen/30">
        <Container className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2.5 py-5 sm:gap-x-8">
          {trustPillars.map((pillar, i) => (
            <span key={pillar} className="flex items-center gap-3 sm:gap-5">
              {i > 0 && (
                <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-periwinkle/30" />
              )}
              <span className="font-sans text-xs font-semibold uppercase tracking-open text-fog sm:text-xs">
                {pillar}
              </span>
            </span>
          ))}
        </Container>
      </div>
    </section>
  )
}
