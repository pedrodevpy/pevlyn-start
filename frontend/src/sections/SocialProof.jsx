import Container from '../components/Container.jsx'
import { audiences } from '../data/audiences.js'

/**
 * Franja de confianza (LANDING_DEVELOPMENT.md §15).
 *
 * PEVLYN está en fase inicial: NO se muestran clientes, logos, testimonios
 * ni métricas. Solo las categorías de negocio para las que está diseñado.
 * Cuando existan clientes reales, esta sección pasará a ser testimonios.
 */
export default function SocialProof() {
  return (
    <section aria-labelledby="social-proof-title" className="border-y border-border bg-surface py-12 sm:py-14">
      <Container className="flex flex-col items-center gap-6 text-center">
        <h2 id="social-proof-title" className="max-w-md font-heading text-base font-semibold text-text-muted sm:text-lg">
          Diseñado para negocios que quieren dar el siguiente paso.
        </h2>
        <ul className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-3">
          {audiences.map((item) => (
            <li
              key={item}
              className="rounded-full bg-white px-4 py-2 font-sans text-xs font-semibold text-text-muted ring-1 ring-border sm:text-sm"
            >
              {item}
            </li>
          ))}
        </ul>
      </Container>
    </section>
  )
}
