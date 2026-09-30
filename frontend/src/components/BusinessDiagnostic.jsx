import { useMemo, useState } from 'react'
import { ArrowLeft, ArrowRight, Sparkles } from 'lucide-react'
import Button from './Button.jsx'
import DiagnosticQuestion from './DiagnosticQuestion.jsx'
import DiagnosticResult from './DiagnosticResult.jsx'
import { questions, scoreDiagnostic } from '../data/diagnostic.js'

/**
 * Herramienta 01 — Diagnóstico.
 *
 * Una pregunta por pantalla con barra de progreso, para que se sienta una
 * aplicación y no un formulario largo. Todo el estado es local: no se envía
 * ni se guarda nada.
 */
export default function BusinessDiagnostic() {
  const [step, setStep] = useState(0)
  const [answers, setAnswers] = useState({})
  const [done, setDone] = useState(false)

  const question = questions[step]
  const answer = answers[question?.id]
  const answered = question?.multi ? (answer ?? []).length > 0 : Boolean(answer)
  const isLast = step === questions.length - 1
  const progress = done ? 100 : Math.round((step / questions.length) * 100)

  const result = useMemo(() => scoreDiagnostic(answers), [answers])

  const setAnswer = (value) => setAnswers((prev) => ({ ...prev, [question.id]: value }))

  const next = () => {
    if (isLast) setDone(true)
    else setStep((s) => s + 1)
  }

  const restart = () => {
    setAnswers({})
    setStep(0)
    setDone(false)
  }

  if (done) return <DiagnosticResult result={result} onRestart={restart} />

  return (
    <div className="rounded-xl2 bg-white p-6 shadow-soft ring-1 ring-border sm:p-8">
      {/* Progreso */}
      <div className="flex items-center gap-4">
        <span className="font-heading text-[0.7rem] font-bold uppercase tracking-[0.16em] text-primary">
          Paso {step + 1} de {questions.length}
        </span>
        <div
          role="progressbar"
          aria-valuenow={progress}
          aria-valuemin={0}
          aria-valuemax={100}
          aria-label="Progreso del diagnóstico"
          className="h-1.5 flex-1 overflow-hidden rounded-full bg-surface-strong"
        >
          <span
            className="block h-full rounded-full bg-gradient-brand transition-[width] duration-500 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      {/* `key` fuerza el remontado: cada pregunta entra con su propia animación */}
      <div key={question.id} className="mt-8 motion-safe:animate-reveal">
        <DiagnosticQuestion question={question} value={answer} onChange={setAnswer} />
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

        <Button onClick={next} disabled={!answered}>
          {isLast ? (
            <>
              <Sparkles size={17} aria-hidden="true" />
              Ver mi diagnóstico
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
