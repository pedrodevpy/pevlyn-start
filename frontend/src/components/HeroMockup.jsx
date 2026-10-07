import { CalendarDays, Users, CircleDot } from 'lucide-react'
import isotipo from '../assets/pevlyn-isotipo.webp'

/**
 * Mockup de producto del Hero.
 *
 * ⚠️ Los datos son FICTICIOS: ilustran cómo se ve una interfaz de PEVLYN, no
 * son métricas de la empresa ni de ningún cliente. Por eso la tarjeta lleva
 * un rótulo visible y no se anima ninguna cifra (animar números sugeriría
 * que son reales).
 */

const stats = [
  { icon: CalendarDays, label: 'Citas', value: '24' },
  { icon: Users, label: 'Clientes', value: '18' },
  { icon: CircleDot, label: 'Pendientes', value: '7' },
]

const appointments = [
  { time: '09:00', name: 'María', service: 'Corte y peinado', initials: 'M' },
  { time: '10:30', name: 'Laura', service: 'Coloración', initials: 'L' },
  { time: '12:00', name: 'Carlos', service: 'Corte', initials: 'C' },
]

export default function HeroMockup() {
  return (
    <figure className="relative m-0 w-full">
      {/* Halo detrás del panel */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -inset-8 -z-10 rounded-[3rem] bg-primary/20 blur-3xl"
      />

      <div className="overflow-hidden rounded-xl2 bg-ink-raised shadow-glow ring-1 ring-white/10">
        {/* Cabecera de la app */}
        <div className="flex items-center justify-between gap-3 border-b border-white/8 px-5 py-4">
          <span className="flex items-center gap-2.5">
            <img src={isotipo} alt="" aria-hidden="true" className="h-5 w-auto" />
            <span className="font-heading text-sm font-bold tracking-tight text-white">
              PEVLYN
            </span>
          </span>
          <span className="rounded-full bg-white/8 px-2.5 py-1 text-[0.65rem] font-semibold text-white/60">
            Hoy
          </span>
        </div>

        <div className="p-5">
          {/* Indicadores del día */}
          <dl className="grid grid-cols-3 gap-2.5">
            {stats.map((s) => (
              <div
                key={s.label}
                className="rounded-xl bg-white/[0.04] px-3 py-3.5 ring-1 ring-white/8"
              >
                <s.icon
                  size={15}
                  strokeWidth={2}
                  aria-hidden="true"
                  className="mb-2 text-accent-on-dark"
                />
                <dd className="font-heading text-xl font-bold tracking-tight text-white">
                  {s.value}
                </dd>
                <dt className="mt-0.5 text-[0.68rem] font-medium text-white/50">{s.label}</dt>
              </div>
            ))}
          </dl>

          {/* Próximas citas */}
          <p className="mt-6 flex items-center justify-between">
            <span className="font-heading text-xs font-semibold uppercase tracking-[0.14em] text-white/50">
              Próximas citas
            </span>
          </p>

          <ul className="mt-3 flex flex-col gap-2">
            {appointments.map((a, i) => (
              <li
                key={a.time}
                className="flex items-center gap-3 rounded-xl bg-white/[0.04] px-3 py-2.5 ring-1 ring-white/8 motion-safe:animate-reveal"
                style={{ animationDelay: `${420 + i * 130}ms` }}
              >
                <span
                  aria-hidden="true"
                  className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gradient-brand text-xs font-bold text-white"
                >
                  {a.initials}
                </span>
                <span className="min-w-0 flex-1">
                  <span className="block truncate text-sm font-semibold text-white">
                    {a.name}
                  </span>
                  <span className="block truncate text-[0.7rem] text-white/50">{a.service}</span>
                </span>
                <span className="shrink-0 font-sans text-xs font-semibold tabular-nums text-white/70">
                  {a.time}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <figcaption className="mt-3 text-center text-xs text-fog">
        Interfaz de ejemplo. Los datos mostrados son ilustrativos.
      </figcaption>
    </figure>
  )
}
