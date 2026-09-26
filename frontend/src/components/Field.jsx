import { useId } from 'react'

/** Campo de formulario con label real, error accesible y estilos comunes. */
export default function Field({
  label,
  type = 'text',
  as = 'input',
  error,
  hint,
  options,
  list,
  className = '',
  ...rest
}) {
  const id = useId()
  const errorId = `${id}-error`
  const hintId = `${id}-hint`

  const describedBy = [error ? errorId : null, hint ? hintId : null].filter(Boolean).join(' ')

  const control =
    `w-full rounded-xl border bg-white px-4 text-[0.95rem] text-ink transition-colors ` +
    `placeholder:text-text-subtle hover:border-border-strong ` +
    `focus:border-primary focus:outline-none focus:ring-3 focus:ring-primary/30 ` +
    (as === 'textarea' ? 'min-h-28 resize-y py-3 ' : 'h-12 ') +
    // Un <select> sin elegir debe leerse como placeholder, no como valor.
    (as === 'select' && !rest.value ? 'text-text-subtle ' : '') +
    (error ? 'border-red-500' : 'border-border')

  const controlProps = {
    id,
    className: control,
    'aria-invalid': error ? 'true' : undefined,
    'aria-describedby': describedBy || undefined,
    ...(list ? { list: `${id}-list` } : {}),
    ...rest,
  }

  return (
    <div className={`flex flex-col gap-1.5 ${className}`}>
      <label htmlFor={id} className="font-sans text-sm font-medium text-ink">
        {label}
        {rest.required && (
          <span className="ml-0.5 text-primary" aria-hidden="true">
            *
          </span>
        )}
      </label>

      {/* <input> es un elemento void: nunca debe recibir children. */}
      {as === 'select' ? (
        <select {...controlProps}>
          {options?.map((o) => (
            <option key={o.value} value={o.value} disabled={o.disabled}>
              {o.label}
            </option>
          ))}
        </select>
      ) : as === 'textarea' ? (
        <textarea {...controlProps} />
      ) : (
        <input type={type} {...controlProps} />
      )}

      {list && (
        <datalist id={`${id}-list`}>
          {list.map((o) => (
            <option key={o} value={o} />
          ))}
        </datalist>
      )}

      {hint && !error && (
        <p id={hintId} className="text-xs text-text-subtle">
          {hint}
        </p>
      )}
      {error && (
        <p id={errorId} role="alert" className="text-xs font-medium text-red-600">
          {error}
        </p>
      )}
    </div>
  )
}
