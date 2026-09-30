import { Check } from 'lucide-react'

/**
 * Opción seleccionable del diagnóstico y del constructor.
 *
 * Es un <button> real con `aria-pressed`, no un div con onClick: así funciona
 * con teclado y los lectores de pantalla anuncian el estado.
 */
export default function OptionCard({ label, icon: Icon, selected, onClick, size = 'md' }) {
  const compact = size === 'sm'

  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={selected}
      className={[
        'group relative flex w-full items-center gap-3 rounded-xl text-left transition duration-200',
        compact ? 'px-4 py-3' : 'px-4 py-3.5',
        'ring-1 motion-safe:active:scale-[0.99]',
        selected
          ? 'bg-primary-softer text-ink ring-2 ring-primary'
          : 'bg-white text-text-muted ring-border hover:bg-surface hover:text-ink hover:ring-border-strong',
      ].join(' ')}
    >
      {Icon && (
        <Icon
          size={18}
          strokeWidth={1.9}
          aria-hidden="true"
          className={`shrink-0 transition-colors ${selected ? 'text-primary' : 'text-text-subtle group-hover:text-primary'}`}
        />
      )}
      <span className={`min-w-0 flex-1 text-sm ${selected ? 'font-semibold' : 'font-medium'}`}>
        {label}
      </span>
      <span
        aria-hidden="true"
        className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-full transition ${
          selected ? 'bg-primary text-white' : 'ring-1 ring-border-strong'
        }`}
      >
        {selected && <Check size={12} strokeWidth={3.2} />}
      </span>
    </button>
  )
}
