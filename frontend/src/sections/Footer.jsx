import Container from '../components/Container.jsx'
import Logo from '../components/Logo.jsx'
import { navLinks } from '../data/navigation.js'
import { products } from '../data/products.js'
import { BRAND, CONTACT_ANCHOR } from '../config/site.js'

const footerLinks = [...navLinks, { label: 'Contacto', href: CONTACT_ANCHOR }]

/**
 * Footer.
 *
 * ⚠️ No se incluyen dirección, teléfono, correo ni redes sociales: todavía no
 * existen canales oficiales y no se inventa información de contacto. Los
 * documentos legales se listan como pendientes en lugar de enlazar a páginas
 * inexistentes o a texto legal ficticio.
 */
export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-ink py-14 sm:py-16">
      <Container>
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <Logo size="md" tone="light" withTagline />
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-white/50">
              Business Technology para negocios que quieren crecer.
            </p>
            <p className="mt-4 font-heading text-sm font-semibold text-white/80">
              {BRAND.slogan}
            </p>
          </div>

          <nav aria-labelledby="footer-nav-title">
            <h2 id="footer-nav-title" className="font-heading text-sm font-semibold text-white">
              Navegación
            </h2>
            <ul className="mt-4 flex flex-col gap-3">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-white/55 transition-colors hover:text-white"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h2 className="font-heading text-sm font-semibold text-white">Ecosistema</h2>
            <ul className="mt-4 flex flex-col gap-3">
              {products.map((product) => (
                <li key={product.name} className="flex flex-wrap items-center gap-2">
                  {product.available && product.href ? (
                    <a
                      href={product.href}
                      className="text-sm text-white/55 transition-colors hover:text-white"
                    >
                      {product.name}
                    </a>
                  ) : product.href ? (
                    <a
                      href={product.href}
                      className="text-sm text-white/55 transition-colors hover:text-white/70"
                    >
                      {product.name}
                    </a>
                  ) : (
                    <span className="text-sm text-white/55">{product.name}</span>
                  )}
                  {!product.available && (
                    <span className="rounded-full bg-white/5 px-2 py-0.5 text-[0.6rem] font-semibold uppercase tracking-wider text-white/55">
                      Próximamente
                    </span>
                  )}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="font-heading text-sm font-semibold text-white">Legal</h2>
            <ul className="mt-4 flex flex-col gap-3">
              {['Política de privacidad', 'Términos y condiciones'].map((item) => (
                <li key={item} className="flex flex-wrap items-center gap-2">
                  <span className="text-sm text-white/55">{item}</span>
                  <span className="rounded-full bg-white/5 px-2 py-0.5 text-[0.6rem] font-semibold uppercase tracking-wider text-white/55">
                    Próximamente
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-8">
          <p className="text-xs text-white/55">
            © {BRAND.year} {BRAND.name}. Todos los derechos reservados.
          </p>
        </div>
      </Container>
    </footer>
  )
}
