import { useState } from 'react'
import { CheckCircle2, Loader2, Send, Info } from 'lucide-react'
import Field from './Field.jsx'
import Button from './Button.jsx'
import { submitLead } from '../lib/leads.js'
import { needOptions, businessTypeSuggestions } from '../data/formOptions.js'

const EMPTY = {
  name: '',
  businessName: '',
  whatsapp: '',
  email: '',
  businessType: '',
  need: '',
}

/** Validación mínima en cliente; los mensajes se muestran junto a cada campo. */
function validate(values) {
  const errors = {}
  if (!values.name.trim()) errors.name = 'Cuéntanos cómo te llamas.'
  if (!values.businessName.trim()) errors.businessName = 'Indica el nombre de tu negocio.'

  const digits = values.whatsapp.replace(/\D/g, '')
  if (!digits) errors.whatsapp = 'Necesitamos un WhatsApp para contactarte.'
  else if (digits.length < 7) errors.whatsapp = 'Ese número parece incompleto.'

  if (!values.email.trim()) errors.email = 'Indica un correo electrónico.'
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(values.email.trim()))
    errors.email = 'Revisa el formato del correo.'

  if (!values.businessType.trim()) errors.businessType = 'Dinos a qué se dedica tu negocio.'
  if (!values.need) errors.need = 'Selecciona qué necesitas.'

  return errors
}

/**
 * Formulario de contacto (LANDING_DEVELOPMENT.md §26).
 *
 * El envío se delega en `lib/leads.js`, que resuelve el canal disponible
 * (WhatsApp → correo → sin configurar). Cuando todavía no hay canal oficial
 * el formulario lo dice de forma explícita en lugar de simular un envío
 * correcto: no damos por recibido un lead que nadie va a recibir (§36).
 */
export default function ContactForm() {
  const [values, setValues] = useState(EMPTY)
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState('idle') // idle | sending | sent | unconfigured | error

  const update = (key) => (event) => {
    const { value } = event.target
    setValues((v) => ({ ...v, [key]: value }))
    setErrors((e) => (e[key] ? { ...e, [key]: undefined } : e))
  }

  async function handleSubmit(event) {
    event.preventDefault()
    const nextErrors = validate(values)
    setErrors(nextErrors)

    if (Object.keys(nextErrors).length > 0) {
      const first = document.querySelector('[aria-invalid="true"]')
      first?.focus()
      return
    }

    setStatus('sending')
    const { status: result } = await submitLead(values)

    if (result === 'whatsapp' || result === 'email') {
      setStatus('sent')
      setValues(EMPTY)
    } else {
      setStatus(result === 'error' ? 'error' : 'unconfigured')
    }
  }

  if (status === 'sent') {
    return (
      <div
        role="status"
        className="flex flex-col items-center gap-4 rounded-xl2 bg-white p-8 text-center shadow-soft ring-1 ring-border sm:p-10"
      >
        <CheckCircle2 size={44} strokeWidth={1.8} aria-hidden="true" className="text-primary" />
        <h3 className="text-xl text-ink">¡Gracias por escribirnos!</h3>
        <p className="max-w-sm text-sm leading-relaxed text-text-muted">
          Hemos abierto tu mensaje para que puedas enviarlo. Si no se abrió
          automáticamente, revisa tu aplicación de mensajería o correo.
        </p>
        <Button variant="secondary" size="sm" onClick={() => setStatus('idle')}>
          Enviar otra solicitud
        </Button>
      </div>
    )
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="rounded-xl2 bg-white p-6 shadow-soft ring-1 ring-border sm:p-8"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <Field
          label="Nombre"
          name="name"
          autoComplete="name"
          placeholder="Tu nombre"
          required
          value={values.name}
          onChange={update('name')}
          error={errors.name}
        />
        <Field
          label="Nombre del negocio"
          name="businessName"
          autoComplete="organization"
          placeholder="Ej. Barbería Central"
          required
          value={values.businessName}
          onChange={update('businessName')}
          error={errors.businessName}
        />
        <Field
          label="WhatsApp"
          name="whatsapp"
          type="tel"
          inputMode="tel"
          autoComplete="tel"
          placeholder="Ej. 300 123 4567"
          required
          value={values.whatsapp}
          onChange={update('whatsapp')}
          error={errors.whatsapp}
        />
        <Field
          label="Correo electrónico"
          name="email"
          type="email"
          inputMode="email"
          autoComplete="email"
          placeholder="tucorreo@ejemplo.com"
          required
          value={values.email}
          onChange={update('email')}
          error={errors.email}
        />
        <Field
          label="Tipo de negocio"
          name="businessType"
          placeholder="Ej. Barbería"
          required
          list={businessTypeSuggestions}
          value={values.businessType}
          onChange={update('businessType')}
          error={errors.businessType}
        />
        <Field
          label="¿Qué necesitas?"
          as="select"
          name="need"
          required
          value={values.need}
          onChange={update('need')}
          error={errors.need}
          options={[
            { value: '', label: 'Selecciona…', disabled: true },
            ...needOptions.map((o) => ({ value: o, label: o })),
          ]}
        />
      </div>

      <div className="mt-7 flex flex-col gap-4">
        <Button type="submit" size="lg" disabled={status === 'sending'} className="w-full sm:w-auto">
          {status === 'sending' ? (
            <>
              <Loader2 size={18} aria-hidden="true" className="animate-spin" />
              Enviando…
            </>
          ) : (
            <>
              <Send size={18} aria-hidden="true" />
              Quiero digitalizar mi negocio
            </>
          )}
        </Button>

        {status === 'unconfigured' && (
          <p
            role="status"
            className="flex items-start gap-2.5 rounded-xl bg-primary-softer p-4 text-sm leading-relaxed text-text-muted ring-1 ring-primary/15"
          >
            <Info size={18} aria-hidden="true" className="mt-0.5 shrink-0 text-primary" />
            <span>
              Los canales de contacto de PEVLYN se están configurando. Vuelve a
              intentarlo en unos momentos.
            </span>
          </p>
        )}

        {status === 'error' && (
          <p role="alert" className="text-sm font-medium text-red-600">
            No pudimos abrir tu mensaje. Inténtalo de nuevo.
          </p>
        )}
      </div>
    </form>
  )
}
