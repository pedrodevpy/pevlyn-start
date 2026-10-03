import { useRef } from 'react'

/**
 * Navegación entre las herramientas de la demo.
 *
 * Patrón de tabs ARIA completo: roles `tablist`/`tab`, flechas para moverse
 * entre pestañas y `tabIndex` móvil, que es lo que distingue una navegación de
 * producto de tres botones sueltos.
 *
 * En móvil la tira hace scroll horizontal dentro de su contenedor
 * (`overflow-x-auto` + `min-w-0`), nunca empujando el ancho de la página.
 */
export default function ToolTabs({ tools, active, onChange }) {
  const refs = useRef({})

  const onKeyDown = (event) => {
    const dir = { ArrowRight: 1, ArrowLeft: -1, Home: 'first', End: 'last' }[event.key]
    if (!dir) return
    event.preventDefault()
    const i = tools.findIndex((t) => t.id === active)
    const next =
      dir === 'first' ? 0 : dir === 'last' ? tools.length - 1 : (i + dir + tools.length) % tools.length
    onChange(tools[next].id)
    refs.current[tools[next].id]?.focus()
  }

  // A sangre en móvil: la tira usa todo el ancho de la pantalla en lugar de
  // quedar recortada por el gutter del contenedor. El scroll vive aquí, nunca
  // en la página.
  return (
    <div className="-mx-5 min-w-0 overflow-x-auto px-5 pb-1 [scrollbar-width:none] sm:mx-0 sm:px-0 [&::-webkit-scrollbar]:hidden">
      <div
        role="tablist"
        aria-label="Herramientas de PEVLYN"
        onKeyDown={onKeyDown}
        className="mx-auto flex w-max gap-1 rounded-full bg-white/[0.05] p-1 ring-1 ring-white/10 sm:gap-2 sm:p-1.5"
      >
        {tools.map((tool) => {
          const selected = tool.id === active
          return (
            <button
              key={tool.id}
              ref={(el) => (refs.current[tool.id] = el)}
              type="button"
              role="tab"
              id={`tab-${tool.id}`}
              aria-selected={selected}
              aria-controls={`panel-${tool.id}`}
              tabIndex={selected ? 0 : -1}
              onClick={() => onChange(tool.id)}
              className={[
                'inline-flex min-h-11 items-center gap-1.5 rounded-full px-2.5 sm:gap-2.5 sm:px-5',
                'font-sans text-sm font-semibold transition duration-300',
                selected
                  ? 'bg-white text-ink shadow-lift'
                  : 'text-white/60 hover:bg-white/8 hover:text-white',
              ].join(' ')}
            >
              <tool.icon
                size={17}
                strokeWidth={2}
                aria-hidden="true"
                className={selected ? 'text-primary' : ''}
              />
              {/* En móvil se usa la etiqueta corta para que las tres pestañas
                  quepan sin recortarse; a partir de sm, la completa. */}
              <span className="whitespace-nowrap sm:hidden">{tool.shortLabel ?? tool.label}</span>
              <span className="hidden whitespace-nowrap sm:inline">{tool.label}</span>
            </button>
          )
        })}
      </div>
    </div>
  )
}
