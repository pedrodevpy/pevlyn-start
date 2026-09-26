import { useEffect, useState } from 'react'
import { Menu, X, ArrowRight } from 'lucide-react'
import Container from '../components/Container.jsx'
import Logo from '../components/Logo.jsx'
import Button from '../components/Button.jsx'
import { navLinks } from '../data/navigation.js'
import { CONTACT_ANCHOR } from '../config/site.js'

/**
 * Navbar adaptativa.
 *
 * Arriba del todo es transparente sobre el hero oscuro (logo y enlaces en
 * blanco); al hacer scroll pasa a fondo claro con blur. El menú móvil abierto
 * fuerza el estado claro para que siempre haya contraste suficiente.
 */
export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (!open) return
    const onKey = (e) => e.key === 'Escape' && setOpen(false)
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [open])

  const solid = scrolled || open

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-[background-color,border-color,backdrop-filter] duration-300 ${
        solid
          ? 'border-b border-border bg-white/85 backdrop-blur-xl'
          : 'border-b border-transparent bg-transparent'
      }`}
    >
      <Container className="flex h-18 items-center justify-between gap-4 py-4">
        <a href="#inicio" className="shrink-0" aria-label="PEVLYN — inicio">
          <Logo size="md" tone={solid ? 'dark' : 'light'} />
        </a>

        <nav aria-label="Principal" className="hidden lg:block">
          <ul className="flex items-center gap-0.5">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className={`inline-flex h-10 items-center rounded-full px-3.5 font-sans text-sm font-medium transition-colors ${
                    solid
                      ? 'text-text-muted hover:bg-surface hover:text-ink'
                      : 'text-white/70 hover:bg-white/10 hover:text-white'
                  }`}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          {/* El wrapper controla la visibilidad: aplicar `hidden` sobre el
              Button chocaría con el `inline-flex` de su clase base. */}
          <span className="hidden sm:block">
            <Button
              href={CONTACT_ANCHOR}
              size="sm"
              variant={solid ? 'primary' : 'light'}
            >
              Quiero mejorar mi negocio
            </Button>
          </span>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="menu-movil"
            aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
            className={`inline-flex h-11 w-11 items-center justify-center rounded-full transition-colors lg:hidden ${
              solid ? 'text-ink hover:bg-surface' : 'text-white hover:bg-white/10'
            }`}
          >
            {open ? <X size={22} aria-hidden="true" /> : <Menu size={22} aria-hidden="true" />}
          </button>
        </div>
      </Container>

      <div id="menu-movil" hidden={!open} className="border-t border-border bg-white lg:hidden">
        <Container className="py-4">
          <nav aria-label="Principal móvil">
            <ul className="flex flex-col">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="block rounded-xl px-3 py-3.5 font-sans text-base font-medium text-ink transition-colors hover:bg-surface"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <Button
            href={CONTACT_ANCHOR}
            onClick={() => setOpen(false)}
            className="mt-3 w-full sm:hidden"
          >
            Quiero mejorar mi negocio
            <ArrowRight size={17} aria-hidden="true" />
          </Button>
        </Container>
      </div>
    </header>
  )
}
