import { CalendarDays, Users, TrendingUp } from 'lucide-react'
import isotipo from '../assets/pevlyn-isotipo.webp'

/**
 * Mockup de interfaz para el Hero (LANDING_DEVELOPMENT.md §14).
 *
 * ⚠️ Los datos son FICTICIOS y solo ilustran cómo se ve una interfaz de
 * PEVLYN. No son métricas reales de la empresa ni de ningún cliente (§36).
 * Por eso la tarjeta se rotula visiblemente como "Ejemplo de interfaz".
 */

const appointments = [
  { time: '09:00', name: 'Juan Pérez', initials: 'JP' },
  { time: '10:30', name: 'María Gómez', initials: 'MG' },
  { time: '12:00', name: 'Carlos Ruiz', initials: 'CR' },
]

const stats = [
  { icon: Users, label: 'Clientes', value: '248' },
  { icon: CalendarDays, label: 'Citas', value: '12' },
  { icon: TrendingUp, label: 'Crecimiento', value: '+18%' },
]

export default function AppMockup() {
  return (
    <figure className="m-0 w-full">
      <div className="rounded-xl2 bg-white p-4 shadow-lift ring-1 ring-border sm:p-5">
        {/* Barra de la app */}
        <div className="flex items-center justify-between gap-3 border-b border-border pb-4">
          <span className="flex items-center gap-2">
            <img src={isotipo} alt="" aria-hidden="true" className="h-6 w-auto" />
            <span className="font-heading text-sm font-bold tracking-tight text-ink">PEVLYN</span>
          </span>
          <span className="flex gap-1.5" aria-hidden="true">
            <span className="h-2 w-2 rounded-full bg-border-strong" />
            <span className="h-2 w-2 rounded-full bg-border-strong" />
            <span className="h-2 w-2 rounded-full bg-primary/40" />
          </span>
        </div>

        {/* Citas de hoy */}
        <div className="pt-5">
          <p className="font-heading text-sm font-semibold text-ink">Citas de hoy</p>
          <ul className="mt-3 flex flex-col gap-2">
            {appointments.map((a, i) => (
              <li
                key={a.time}
                className="flex items-center gap-3 rounded-xl bg-surface px-3 py-2.5 ring-1 ring-border/70 motion-safe:animate-reveal"
                style={{ animationDelay: `${300 + i * 120}ms` }}
              >
                <span
                  aria-hidden="true"
                  className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gradient-brand text-[0.65rem] font-bold text-white"
                >
                  {a.initials}
                </span>
                <span className="min-w-0 flex-1 truncate text-sm font-medium text-ink">
                  {a.name}
                </span>
                <span className="shrink-0 font-sans text-xs font-semibold tabular-nums text-text-muted">
                  {a.time}
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* Indicadores */}
        <dl className="mt-4 grid grid-cols-3 gap-2">
          {stats.map((s, i) => (
            <div
              key={s.label}
              className="rounded-xl bg-surface px-2.5 py-3 text-center ring-1 ring-border/70 motion-safe:animate-reveal sm:px-3"
              style={{ animationDelay: `${640 + i * 110}ms` }}
            >
              <s.icon
                size={16}
                strokeWidth={2}
                aria-hidden="true"
                className="mx-auto mb-1.5 text-primary"
              />
              <dd className="font-heading text-base font-bold tracking-tight text-ink sm:text-lg">
                {s.value}
              </dd>
              <dt className="mt-0.5 text-[0.65rem] font-medium text-text-subtle sm:text-xs">
                {s.label}
              </dt>
            </div>
          ))}
        </dl>
      </div>

      <figcaption className="mt-3 text-center text-xs text-text-subtle">
        Ejemplo de interfaz. Los datos mostrados son ilustrativos.
      </figcaption>
    </figure>
  )
}
