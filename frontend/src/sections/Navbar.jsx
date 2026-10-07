import { useEffect, useState } from 'react'
import { Menu, X, ArrowRight } from 'lucide-react'
import Container from '../components/Container.jsx'
import Logo from '../components/Logo.jsx'
import Button from '../components/Button.jsx'
import { navLinks, navCta } from '../data/navigation.js'
import { Link, useRouter } from '../lib/router.jsx'

/**
 * Navbar adaptativa.
 *
 * Arriba del todo es transparente sobre el hero oscuro (logo y enlaces en
 * blanco); al hacer scroll pasa a fondo claro con blur. El menú móvil abierto
 * fuerza el estado claro para que siempre haya contraste suficiente.
 */
/**
 * Solo los enlaces de ruta marcan página activa.
 *
 * Los que llevan ancla (`/#soluciones`) son saltos dentro de la página, no
 * destinos: resolverlos a su ruta hacía que en `/` se marcaran activos a la
 * vez Inicio, Soluciones, Nosotros y Contacto.
 */
function isActive(to, pathname) {
  if (to.includes('#')) return false
  return to === pathname
}

export default function Navbar() {
  const { pathname } = useRouter()
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
      className={`fixed inset-x-0 top-0 z-50 transition-[background-color,border-color,box-shadow] duration-200 ${
        scrolled
          ? 'border-b border-warm-linen bg-white/95 shadow-sm backdrop-blur-md'
          : 'border-b border-warm-linen/80 bg-white/85 backdrop-blur-md'
      }`}
    >
      <Container className="flex h-16 items-center justify-between gap-4">
        <Link to="/" className="shrink-0" aria-label="PEVLYN — inicio">
          <Logo size="md" tone="dark" />
        </Link>

        <nav aria-label="Principal" className="hidden lg:block">
          <ul className="flex items-center gap-1">
            {navLinks.map((link) => {
              const active = isActive(link.to, pathname)
              return (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    aria-current={active ? 'page' : undefined}
                    className={`inline-flex h-9 items-center rounded-full px-3.5 font-sans text-sm tracking-[0.05em] transition-colors ${
                      active
                        ? 'bg-lavender-mist/35 font-semibold text-periwinkle'
                        : 'font-normal text-ink/80 hover:bg-warm-linen hover:text-periwinkle'
                    }`}
                  >
                    {link.label}
                  </Link>
                </li>
              )
            })}
          </ul>
        </nav>

        <div className="flex items-center gap-3">
          <span className="hidden sm:block">
            <Button to={navCta.to} size="sm" variant="primary" className="rounded-xl">
              {navCta.label}
            </Button>
          </span>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="menu-movil"
            aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full text-ink transition-colors hover:bg-warm-linen lg:hidden"
          >
            {open ? <X size={20} aria-hidden="true" /> : <Menu size={20} aria-hidden="true" />}
          </button>
        </div>
      </Container>

      <div id="menu-movil" hidden={!open} className="border-t border-warm-linen bg-white shadow-xl lg:hidden">
        <Container className="py-4">
          <nav aria-label="Principal móvil">
            <ul className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    onClick={() => setOpen(false)}
                    aria-current={isActive(link.to, pathname) ? 'page' : undefined}
                    className={`block rounded-xl px-3 py-3 font-sans text-base transition-colors ${
                      isActive(link.to, pathname)
                        ? 'bg-lavender-mist/35 font-semibold text-periwinkle'
                        : 'font-normal text-ink hover:bg-warm-linen'
                    }`}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <Button to={navCta.to} onClick={() => setOpen(false)} className="mt-3 w-full sm:hidden">
            {navCta.label}
            <ArrowRight size={17} aria-hidden="true" />
          </Button>
        </Container>
      </div>
    </header>
  )
}
