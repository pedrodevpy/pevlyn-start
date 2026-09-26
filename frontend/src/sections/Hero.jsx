import { ArrowRight } from 'lucide-react'
import Container from '../components/Container.jsx'
import Button from '../components/Button.jsx'
import Eyebrow from '../components/Eyebrow.jsx'
import AppMockup from '../components/AppMockup.jsx'
import { CONTACT_ANCHOR, BRAND } from '../config/site.js'

/** Hero — sección principal (LANDING_DEVELOPMENT.md §13 y §14). */
export default function Hero() {
  return (
    <section id="inicio" className="relative overflow-hidden pt-28 pb-20 sm:pt-32 lg:pt-40 lg:pb-28">
      {/* Fondo decorativo sutil */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-[-18rem] h-[36rem] w-[36rem] -translate-x-1/2 rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute right-[-10rem] top-32 h-[24rem] w-[24rem] rounded-full bg-accent/10 blur-3xl" />
      </div>

      <Container>
        <div className="grid items-center gap-14 lg:grid-cols-[minmax(0,1fr)_minmax(0,26rem)] lg:gap-16">
          {/* Copy */}
          <div className="flex flex-col items-center text-center motion-safe:animate-reveal lg:items-start lg:text-left">
            <Eyebrow>{BRAND.category}</Eyebrow>

            <h1 className="mt-6 text-[2.75rem] leading-[1.05] tracking-[-0.03em] sm:text-6xl lg:text-[4.25rem]">
              <span className="block text-ink">Simplifica.</span>
              <span className="block text-ink">Automatiza.</span>
              <span className="block text-gradient-brand">Crece.</span>
            </h1>

            <p className="mt-6 max-w-lg text-base leading-relaxed text-text-muted sm:text-lg">
              Tecnología sencilla para que tu negocio gestione clientes, citas y
              procesos sin complicaciones.
            </p>

            <div className="mt-9 flex w-full flex-col gap-3 sm:w-auto sm:flex-row sm:items-center">
              <Button href={CONTACT_ANCHOR} size="lg">
                Digitaliza tu negocio
                <ArrowRight size={18} aria-hidden="true" />
              </Button>
              <Button href="#soluciones" variant="secondary" size="lg">
                Conoce PEVLYN
              </Button>
            </div>
          </div>

          {/* Mockup de interfaz */}
          <div className="w-full motion-safe:animate-reveal [animation-delay:150ms]">
            <AppMockup />
          </div>
        </div>
      </Container>
    </section>
  )
}
