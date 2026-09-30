import { Check, RotateCcw, ArrowRight } from 'lucide-react'
import Button from './Button.jsx'
import WhatsAppButton from './WhatsAppButton.jsx'
import { diagnosticWhatsAppMessage } from '../data/diagnostic.js'

/**
 * Tarjeta de resultado del diagnóstico.
 *
 * ⚠️ El resultado es orientativo y se dice explícitamente. No es una
 * evaluación profesional ni promete resultados.
 */
export default function DiagnosticResult({ result, onRestart }) {
  const { top, businessLabel } = result

  // Sin necesidades dominantes (por ejemplo, ya usa software y no marcó nada
  // que mejorar) el resultado honesto es decirlo, no forzar una recomendación.
  if (top.length === 0) {
    return (
      <div className="rounded-xl2 bg-white p-7 shadow-soft ring-1 ring-border sm:p-8">
        <p className="font-heading text-[0.7rem] font-bold uppercase tracking-[0.16em] text-primary">
          Tu diagnóstico
        </p>
        <h3 className="mt-3 text-2xl text-ink">Tu operación ya está bastante encaminada.</h3>
        <p className="mt-3 text-sm leading-relaxed text-text-muted">
          Por lo que nos cuentas, no detectamos un punto de dolor claro. Si aun
          así hay algo que te gustaría mejorar, cuéntanoslo y lo miramos juntos.
        </p>
        <div className="mt-7 flex flex-col gap-3 sm:flex-row">
          <WhatsAppButton message={() => diagnosticWhatsAppMessage(result)}>
            Hablar con PEVLYN
          </WhatsAppButton>
          <Button variant="secondary" onClick={onRestart}>
            <RotateCcw size={16} aria-hidden="true" />
            Repetir diagnóstico
          </Button>
        </div>
      </div>
    )
  }

  const recommendations = [...new Set(top.flatMap((n) => n.recommendations))]

  return (
    <div className="overflow-hidden rounded-xl2 bg-white shadow-lift ring-1 ring-border">
      {/* Cabecera destacada: es el momento de mayor atención de la herramienta */}
      <div className="relative isolate overflow-hidden bg-ink px-7 py-8 sm:px-8">
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-grid opacity-50" />
          <div className="absolute left-1/2 top-0 h-56 w-[28rem] max-w-[120vw] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/30 blur-3xl" />
        </div>

        <p className="font-heading text-[0.7rem] font-bold uppercase tracking-[0.16em] text-accent-on-dark">
          Tu diagnóstico
        </p>
        <p className="mt-4 text-sm font-medium text-white/60">Principal oportunidad</p>
        <h3 className="mt-2 flex flex-wrap items-center gap-x-3 gap-y-1 font-heading text-2xl font-bold tracking-tight text-white sm:text-3xl">
          {top.map((need, i) => (
            <span key={need.id} className="flex items-center gap-3">
              {i > 0 && (
                <span aria-hidden="true" className="text-accent-on-dark">
                  +
                </span>
              )}
              {need.label}
            </span>
          ))}
        </h3>
      </div>

      <div className="px-7 py-7 sm:px-8">
        <p className="text-sm leading-relaxed text-text-muted sm:text-base">
          Por las respuestas que nos diste, parece que tu negocio
          {businessLabel ? ` de ${businessLabel.toLowerCase()}` : ''} podría
          beneficiarse de {top.map((n) => n.short).join(' y ')}.
        </p>

        <p className="mt-7 font-heading text-sm font-semibold text-ink">
          Soluciones recomendadas
        </p>
        <ul className="mt-3 grid gap-2.5 sm:grid-cols-2">
          {recommendations.map((item) => (
            <li key={item} className="flex items-start gap-2.5">
              <Check
                size={16}
                strokeWidth={2.6}
                aria-hidden="true"
                className="mt-0.5 shrink-0 text-primary"
              />
              <span className="text-sm text-text-muted">{item}</span>
            </li>
          ))}
        </ul>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <WhatsAppButton message={() => diagnosticWhatsAppMessage(result)}>
            Hablar con PEVLYN
          </WhatsAppButton>
          <Button href="#soluciones" variant="secondary">
            Explorar soluciones
            <ArrowRight size={16} aria-hidden="true" />
          </Button>
          <Button variant="ghost" onClick={onRestart} className="sm:ml-auto">
            <RotateCcw size={16} aria-hidden="true" />
            Repetir
          </Button>
        </div>

        <p className="mt-6 text-xs text-text-subtle">
          Este diagnóstico es orientativo.
        </p>
      </div>
    </div>
  )
}
