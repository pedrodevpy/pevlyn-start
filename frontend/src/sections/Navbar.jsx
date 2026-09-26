import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import Container from '../components/Container.jsx'
import Logo from '../components/Logo.jsx'
import Button from '../components/Button.jsx'
import { navLinks } from '../data/navigation.js'
import { CONTACT_ANCHOR } from '../config/site.js'

/** Navbar fija y responsive con menú hamburguesa en móvil (§12). */
export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Cierra el menú móvil con Escape y bloquea el scroll de fondo.
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

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition duration-300 ${
        scrolled || open
          ? 'border-b border-border bg-white/90 backdrop-blur-lg'
          : 'border-b border-transparent bg-transparent'
      }`}
    >
      <Container className="flex h-18 items-center justify-between gap-4 py-4">
        <a href="#inicio" className="shrink-0" aria-label="PEVLYN — inicio">
          <Logo size="md" />
        </a>

        {/* Navegación desktop */}
        <nav aria-label="Principal" className="hidden lg:block">
          <ul className="flex items-center gap-1">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="inline-flex h-10 items-center rounded-full px-4 font-sans text-[0.95rem] font-medium text-text-muted transition-colors hover:bg-surface hover:text-ink"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          {/*
            El wrapper controla la visibilidad: aplicar `hidden` directamente
            sobre el Button chocaría con el `inline-flex` de su clase base
            (ambas son utilidades de `display` sin variante, y el orden lo
            decide el CSS generado, no el atributo class).
          */}
          <span className="hidden sm:block">
            <Button href={CONTACT_ANCHOR} size="sm">
              Digitaliza tu negocio
            </Button>
          </span>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="menu-movil"
            aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full text-ink transition-colors hover:bg-surface lg:hidden"
          >
            {open ? <X size={22} aria-hidden="true" /> : <Menu size={22} aria-hidden="true" />}
          </button>
        </div>
      </Container>

      {/* Menú móvil */}
      <div
        id="menu-movil"
        hidden={!open}
        className="border-t border-border bg-white lg:hidden"
      >
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
            Digitaliza tu negocio
          </Button>
        </Container>
      </div>
    </header>
  )
}
