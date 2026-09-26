import { growthStages } from '../data/growthStages.js'
import { useReveal } from '../lib/useReveal.js'

/**
 * La ruta de crecimiento: cuatro etapas conectadas.
 *
 * En móvil la línea es vertical (a la izquierda) y en escritorio horizontal.
 * Es el mismo dato en ambas orientaciones, no dos maquetas distintas.
 */
function Stage({ stage, index, isLast }) {
  const { ref, visible } = useReveal()

  return (
    <li
      ref={ref}
      style={visible ? { animationDelay: `${index * 140}ms` } : undefined}
      className={`relative flex gap-5 lg:flex-col lg:gap-0 ${visible ? 'animate-reveal' : 'opacity-0'}`}
    >
      {/* Eje + punto */}
      <div className="flex flex-col items-center lg:w-full lg:flex-row">
        <span
          aria-hidden="true"
          className="relative z-10 flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-ink-raised font-heading text-xs font-bold text-white ring-1 ring-white/15"
        >
          <span className="absolute inset-0 rounded-full bg-primary/25 blur-md" />
          <span className="relative">{String(index + 1).padStart(2, '0')}</span>
        </span>
        {/* Conector: vertical en móvil, horizontal en escritorio.
            La última etapa no lo lleva: la línea no debe continuar hacia
            ninguna parte después del final de la ruta. */}
        {!isLast && (
          <span
            aria-hidden="true"
            className="w-px flex-1 bg-gradient-to-b from-primary/60 to-white/10 lg:h-px lg:w-full lg:bg-gradient-to-r"
          />
        )}
      </div>

      <div className={`lg:pr-8 lg:pt-7 ${isLast ? "pb-0" : "pb-10"} lg:pb-0`}>
        <p className="font-heading text-[0.7rem] font-bold uppercase tracking-[0.18em] text-accent-on-dark">
          {stage.stage}
        </p>
        <h3 className="mt-2 text-lg text-white">{stage.title}</h3>
        <p className="mt-1 font-sans text-sm font-semibold text-white/70">{stage.summary}</p>
        <p className="mt-3 max-w-xs text-sm leading-relaxed text-white/45">{stage.description}</p>
      </div>
    </li>
  )
}

export default function GrowthTimeline() {
  return (
    <ol className="mt-14 flex flex-col lg:mt-16 lg:grid lg:grid-cols-4 lg:gap-0">
      {growthStages.map((stage, i) => (
        <Stage
          key={stage.title}
          stage={stage}
          index={i}
          isLast={i === growthStages.length - 1}
        />
      ))}
    </ol>
  )
}
