import { MessageCircle } from 'lucide-react'
import Container from '../components/Container.jsx'
import Eyebrow from '../components/Eyebrow.jsx'
import Button from '../components/Button.jsx'
import Reveal from '../components/Reveal.jsx'
import ContactForm from '../components/ContactForm.jsx'
import { whatsAppLinkProps } from '../lib/whatsapp.js'
import { hasWhatsApp } from '../config/site.js'

/**
 * CTA final + formulario de contacto (§25 y §26).
 *
 * El CTA "Hablar con PEVLYN" solo se renderiza como enlace externo cuando
 * existe un WhatsApp oficial configurado; si no, desplaza al formulario.
 */
export default function FinalCTA() {
  const whatsapp = whatsAppLinkProps()

  return (
    <section id="contacto" aria-labelledby="contacto-title" className="bg-ink py-20 sm:py-24 lg:py-28">
      <Container>
        <div className="grid items-start gap-14 lg:grid-cols-[minmax(0,1fr)_minmax(0,32rem)] lg:gap-16">
          <Reveal className="flex flex-col items-start lg:sticky lg:top-28">
            <Eyebrow tone="light">Empieza hoy</Eyebrow>

            <h2 id="contacto-title" className="mt-6 text-3xl leading-[1.15] text-white sm:text-4xl lg:text-[2.75rem]">
              Tu negocio está listo para crecer.
            </h2>

            <p className="mt-5 max-w-md text-base leading-relaxed text-white/70 sm:text-lg">
              Empieza a digitalizar las tareas que más tiempo te quitan.
            </p>

            <div className="mt-9 flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
              <Button href="#formulario-contacto" variant="light" size="lg">
                Digitaliza tu negocio
              </Button>
              <Button {...whatsapp} variant="outlineLight" size="lg">
                {hasWhatsApp() && <MessageCircle size={18} aria-hidden="true" />}
                Hablar con PEVLYN
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
