import { useMemo, useState } from 'react'
import { ArrowLeft, ArrowRight, Wand2 } from 'lucide-react'
import Button from './Button.jsx'
import OptionCard from './OptionCard.jsx'
import SolutionResult from './SolutionResult.jsx'
import { builderGoals, builderTools, buildSolution } from '../data/builder.js'

/**
 * Herramienta 03 — Constructor de solución.
 *
 * Dos pasos de selección múltiple y un resultado calculado en el cliente.
 * Sin backend y sin precios: el objetivo es que el visitante vea cómo
 * evolucionaría su solución, no cotizarla.
 */
const steps = [
  { id: 'goals', title: '¿Qué quieres mejorar?', hint: 'Puedes elegir varias.', options: builderGoals },
  { id: 'tools', title: '¿Qué herramientas necesitas?', hint: 'Puedes elegir varias.', options: builderTools },
]

export default function SolutionBuilder() {
  const [step, setStep] = useState(0)
  const [selection, setSelection] = useState({ goals: [], tools: [] })
  const [done, setDone] = useState(false)

  const current = steps[step]
  const chosen = selection[current?.id] ?? []
  const isLast = step === steps.length - 1
  const path = useMemo(() => buildSolution(selection), [selection])

  const toggle = (optionId) => {
    setSelection((prev) => {
      const list = prev[current.id]
      return {
        ...prev,
        [current.id]: list.includes(optionId)
          ? list.filter((id) => id !== optionId)
          : [...list, optionId],
      }
    })
  }

  const restart = () => {
    setSelection({ goals: [], tools: [] })
    setStep(0)
    setDone(false)
  }

  if (done) return <SolutionResult path={path} selection={selection} onRestart={restart} />

  return (
    <div className="rounded-xl2 bg-white p-6 shadow-soft ring-1 ring-border sm:p-8">
      <div className="flex items-center gap-4">
        <span className="font-heading text-[0.7rem] font-bold uppercase tracking-[0.16em] text-primary">
          Paso {step + 1} de {steps.length}
        </span>
        <div
          role="progressbar"
          aria-valuenow={Math.round((step / steps.length) * 100)}
          aria-valuemin={0}
          aria-valuemax={100}
          aria-label="Progreso del constructor"
          className="h-1.5 flex-1 overflow-hidden rounded-full bg-surface-strong"
        >
          <span
            className="block h-full rounded-full bg-gradient-brand transition-[width] duration-500 ease-out"
            style={{ width: `${(step / steps.length) * 100}%` }}
          />
        </div>
      </div>

      <div key={current.id} className="mt-8 motion-safe:animate-reveal">
        <fieldset className="min-w-0 border-0 p-0">
          <legend className="font-heading text-xl font-bold tracking-tight text-ink sm:text-2xl">
            {current.title}
          </legend>
          <p className="mt-2 text-sm text-text-muted">{current.hint}</p>

          <div className="mt-6 grid gap-2.5 sm:grid-cols-2 lg:grid-cols-3">
            {current.options.map((option) => (
              <OptionCard
                key={option.id}
                label={option.label}
                size="sm"
                selected={chosen.includes(option.id)}
                onClick={() => toggle(option.id)}
              />
            ))}
          </div>
        </fieldset>
      </div>

      <div className="mt-8 flex items-center justify-between gap-3 border-t border-border pt-6">
        <Button
          variant="ghost"
          size="sm"
          onClick={() => setStep((s) => s - 1)}
          disabled={step === 0}
          className={step === 0 ? 'invisible' : ''}
        >
          <ArrowLeft size={16} aria-hidden="true" />
          Atrás
        </Button>

        <Button onClick={() => (isLast ? setDone(true) : setStep((s) => s + 1))} disabled={chosen.length === 0}>
          {isLast ? (
            <>
              <Wand2 size={17} aria-hidden="true" />
              Ver mi solución
            </>
          ) : (
            <>
              Siguiente
              <ArrowRight size={17} aria-hidden="true" />
            </>
          )}
        </Button>
      </div>
    </div>
  )
}
