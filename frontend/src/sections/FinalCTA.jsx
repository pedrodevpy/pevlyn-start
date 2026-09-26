import { MessageCircle } from 'lucide-react'
import Container from '../components/Container.jsx'
import Eyebrow from '../components/Eyebrow.jsx'
import Button from '../components/Button.jsx'
import Reveal from '../components/Reveal.jsx'
import ContactForm from '../components/ContactForm.jsx'
import { whatsAppLinkProps } from '../lib/whatsapp.js'
import { hasWhatsApp } from '../config/site.js'

/**
 * CTA final + formulario.
 *
 * El CTA de WhatsApp solo se renderiza como enlace externo si hay número
 * oficial configurado; si no, desplaza al formulario.
 */
export default function FinalCTA() {
  const whatsapp = whatsAppLinkProps(
    'Hola PEVLYN, quiero mejorar un proceso de mi negocio.',
  )

  return (
    <section
      id="contacto"
      aria-labelledby="contacto-title"
      className="relative isolate overflow-hidden bg-ink py-20 sm:py-24 lg:py-28"
    >
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-grid mask-fade-b opacity-60" />
        <div className="absolute left-1/2 top-[-10rem] h-[26rem] w-[44rem] max-w-[130vw] -translate-x-1/2 rounded-full bg-primary/20 blur-3xl" />
      </div>

      <Container>
        <div className="grid items-start gap-14 lg:grid-cols-[minmax(0,1fr)_minmax(0,32rem)] lg:gap-16">
          <Reveal className="flex flex-col items-start lg:sticky lg:top-28">
            <Eyebrow tone="light">Hablemos</Eyebrow>

            <h2
              id="contacto-title"
              className="mt-6 text-3xl leading-[1.15] text-white sm:text-4xl lg:text-[2.75rem]"
            >
              Tu negocio ya está trabajando.
              <br className="hidden sm:block" />{' '}
              <span className="text-gradient-on-dark">
                Ahora hagamos que la tecnología trabaje contigo.
              </span>
            </h2>

            <p className="mt-6 max-w-md text-base leading-relaxed text-white/55 sm:text-lg">
              Cuéntanos qué proceso quieres mejorar. Miramos cómo trabajas hoy y
              te decimos por dónde tiene más sentido empezar.
            </p>

            <div className="mt-9 flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
              <Button href="#formulario-contacto" variant="light" size="lg">
                Hablemos de mi negocio
              </Button>
              <Button {...whatsapp} variant="outlineLight" size="lg">
                {hasWhatsApp() && <MessageCircle size={18} aria-hidden="true" />}
                Escribir por WhatsApp
              </Button>
            </div>
          </Reveal>

          <Reveal delay={120} id="formulario-contacto" className="w-full scroll-mt-28">
            <ContactForm />
          </Reveal>
        </div>
      </Container>
    </section>
  )
}
