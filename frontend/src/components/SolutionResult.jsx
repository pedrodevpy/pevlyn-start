import { ArrowDown, RotateCcw } from 'lucide-react'
import Button from './Button.jsx'
import WhatsAppButton from './WhatsAppButton.jsx'
import { builderWhatsAppMessage } from '../data/builder.js'

/**
 * Resultado del constructor: la ruta de niveles según lo seleccionado.
 *
 * ⚠️ START / GROWTH / CUSTOM son niveles CONCEPTUALES, no planes comerciales,
 * y por eso no se muestran precios. La nota al pie lo dice explícitamente.
 */
export default function SolutionResult({ path, selection, onRestart }) {
  return (
    <div className="rounded-xl2 bg-white p-6 shadow-lift ring-1 ring-border sm:p-8">
      <p className="font-heading text-[0.7rem] font-bold uppercase tracking-[0.16em] text-primary">
        Tu solución
      </p>
      <h3 className="mt-3 text-2xl text-ink">Podría construirse así.</h3>

      <ol className="mt-7 flex flex-col">
        {path.map((tier, i) => (
          <li key={tier.id}>
            <div
              style={{ animationDelay: `${i * 120}ms` }}
              className={`rounded-xl2 p-6 motion-safe:animate-reveal ${
                i === 0 ? 'bg-ink text-white' : 'bg-surface ring-1 ring-border'
              }`}
            >
              <p
                className={`font-heading text-sm font-bold uppercase tracking-[0.16em] ${
                  i === 0 ? 'text-accent-on-dark' : 'text-primary'
                }`}
              >
                {tier.name}
              </p>
              <p
                className={`mt-2 text-sm ${i === 0 ? 'text-white/65' : 'text-text-muted'}`}
              >
                {tier.tagline}
              </p>

              <ul className="mt-4 flex flex-wrap gap-2">
                {tier.items.map((item) => (
                  <li
                    key={item}
                    className={`rounded-full px-3 py-1.5 text-xs font-semibold ring-1 ${
                      i === 0
                        ? 'bg-white/8 text-white/85 ring-white/12'
                        : 'bg-white text-text-muted ring-border'
                    }`}
                  >
                    {item}
                  </li>
                ))}
              </ul>

              {tier.inferred && (
                <p
                  className={`mt-4 text-xs ${i === 0 ? 'text-white/45' : 'text-text-subtle'}`}
                >
                  Incluido como base: las capas siguientes se apoyan en esta.
                </p>
              )}
            </div>

            {i < path.length - 1 && (
              <div className="flex justify-center py-2" aria-hidden="true">
                <ArrowDown size={18} className="text-border-strong" />
              </div>
            )}
          </li>
        ))}
      </ol>

      <div className="mt-8 flex flex-col gap-3 sm:flex-row">
        <WhatsAppButton message={() => builderWhatsAppMessage(selection)}>
          Hablar sobre mi solución
        </WhatsAppButton>
        <Button variant="ghost" onClick={onRestart} className="sm:ml-auto">
          <RotateCcw size={16} aria-hidden="true" />
          Empezar de nuevo
        </Button>
      </div>

      <p className="mt-6 text-xs text-text-subtle">
        START, GROWTH y CUSTOM son niveles conceptuales para explicar cómo
        evoluciona una solución, no planes comerciales.
      </p>
    </div>
  )
}
