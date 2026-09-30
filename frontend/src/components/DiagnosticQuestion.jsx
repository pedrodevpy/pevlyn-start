import OptionCard from './OptionCard.jsx'

/** Una pregunta del diagnóstico con sus opciones seleccionables. */
export default function DiagnosticQuestion({ question, value, onChange }) {
  const selected = question.multi ? (value ?? []) : value ? [value] : []

  const toggle = (optionId) => {
    if (!question.multi) {
      onChange(optionId)
      return
    }
    const next = selected.includes(optionId)
      ? selected.filter((id) => id !== optionId)
      : [...selected, optionId]
    onChange(next)
  }

  return (
    <fieldset className="min-w-0 border-0 p-0">
      <legend className="font-heading text-xl font-bold tracking-tight text-ink sm:text-2xl">
        {question.title}
      </legend>
      {question.hint && <p className="mt-2 text-sm text-text-muted">{question.hint}</p>}

      <div className="mt-6 grid gap-2.5 sm:grid-cols-2">
        {question.options.map((option) => (
          <OptionCard
            key={option.id}
            label={option.label}
            icon={option.icon}
            selected={selected.includes(option.id)}
            onClick={() => toggle(option.id)}
          />
        ))}
      </div>
    </fieldset>
  )
}
