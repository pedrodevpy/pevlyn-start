import { useId, useState } from 'react'
import { Plus } from 'lucide-react'

/** Ítem de acordeón accesible (aria-expanded + aria-controls, §24 y §31). */
export default function FAQItem({ question, answer }) {
  const [open, setOpen] = useState(false)
  const panelId = useId()
  const buttonId = useId()

  return (
    <div className="border-b border-border last:border-b-0">
      <h3>
        <button
          type="button"
          id={buttonId}
          aria-expanded={open}
          aria-controls={panelId}
          onClick={() => setOpen((v) => !v)}
          className="flex w-full items-center justify-between gap-4 py-5 text-left transition-colors hover:text-primary"
        >
          <span className="font-heading text-base font-semibold text-ink sm:text-lg">
            {question}
          </span>
          <Plus
            size={20}
            strokeWidth={2.2}
            aria-hidden="true"
            className={`shrink-0 text-primary transition-transform duration-300 ${open ? 'rotate-45' : ''}`}
          />
        </button>
      </h3>
      <div
        id={panelId}
        role="region"
        aria-labelledby={buttonId}
        hidden={!open}
        className="pb-6 pr-8"
      >
        <p className="text-sm leading-relaxed text-text-muted sm:text-base">{answer}</p>
      </div>
    </div>
  )
}
