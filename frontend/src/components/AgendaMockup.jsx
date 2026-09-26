import { Users, CalendarDays, Scissors, Clock, BellRing, History, Search } from 'lucide-react'
import isotipo from '../assets/pevlyn-isotipo.webp'

/**
 * Dashboard conceptual de PEVLYN Agenda.
 *
 * ⚠️ El producto está EN DESARROLLO y esta maqueta es conceptual: muestra los
 * módulos ya definidos (clientes, citas, servicios, agenda, recordatorios e
 * historial) con datos ficticios de ejemplo. No representa una versión
 * disponible ni promete funcionalidades que no hemos definido.
 */

const nav = [
  { icon: CalendarDays, label: 'Agenda', active: true },
  { icon: Users, label: 'Clientes' },
  { icon: Scissors, label: 'Servicios' },
  { icon: BellRing, label: 'Recordatorios' },
  { icon: History, label: 'Historial' },
]

const schedule = [
  { time: '09:00', name: 'María Restrepo', service: 'Corte y peinado', len: 'h-14', tone: 'bg-primary' },
  { time: '10:30', name: 'Laura Jiménez', service: 'Coloración', len: 'h-20', tone: 'bg-accent' },
  { time: '12:00', name: 'Carlos Mejía', service: 'Corte', len: 'h-12', tone: 'bg-primary' },
]

export default function AgendaMockup() {
  return (
    <figure className="m-0 w-full">
      <div className="overflow-hidden rounded-xl2 bg-ink shadow-dark ring-1 ring-white/10">
        {/* Barra superior */}
        <div className="flex items-center gap-3 border-b border-white/8 px-4 py-3 sm:px-5">
          <span className="flex items-center gap-2">
            <img src={isotipo} alt="" aria-hidden="true" className="h-5 w-auto" />
            <span className="font-heading text-sm font-bold tracking-tight text-white">
              Agenda
            </span>
          </span>
          <span
            aria-hidden="true"
            className="ml-auto hidden items-center gap-2 rounded-lg bg-white/[0.04] px-3 py-1.5 text-xs text-white/45 ring-1 ring-white/8 sm:flex"
          >
            <Search size={13} strokeWidth={2} />
            Buscar cliente
          </span>
          <span
            aria-hidden="true"
            className="flex h-7 w-7 items-center justify-center rounded-full bg-gradient-brand text-[0.6rem] font-bold text-white"
          >
            PE
          </span>
        </div>

        <div className="grid sm:grid-cols-[168px_minmax(0,1fr)]">
          {/* Navegación lateral (solo en pantallas anchas) */}
          <nav aria-hidden="true" className="hidden border-r border-white/8 p-3 sm:block">
            <ul className="flex flex-col gap-1">
              {nav.map((n) => (
                <li key={n.label}>
                  <span
                    className={`flex items-center gap-2.5 rounded-lg px-3 py-2 text-xs font-medium ${
                      n.active ? 'bg-white/8 text-white' : 'text-white/50'
                    }`}
                  >
                    <n.icon size={15} strokeWidth={2} />
                    {n.label}
                  </span>
                </li>
              ))}
            </ul>
          </nav>

          {/* Panel principal */}
          <div className="p-4 sm:p-5">
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <p className="font-heading text-base font-bold text-white">Martes, 14</p>
              <p className="text-xs text-white/50">3 citas · 1 hueco libre</p>
            </div>

            {/* Franja horaria */}
            <ul className="mt-4 flex flex-col gap-2.5">
              {schedule.map((s, i) => (
                <li
                  key={s.time}
                  className="flex items-stretch gap-3 motion-safe:animate-reveal"
                  style={{ animationDelay: `${200 + i * 140}ms` }}
                >
                  <span className="w-11 shrink-0 pt-1 text-right font-sans text-[0.7rem] font-semibold tabular-nums text-white/45">
                    {s.time}
                  </span>
                  <span
                    aria-hidden="true"
                    className={`w-1 shrink-0 rounded-full ${s.tone} ${s.len}`}
                  />
                  <span className="min-w-0 flex-1 rounded-xl bg-white/[0.04] px-3.5 py-2.5 ring-1 ring-white/8">
                    <span className="block truncate text-sm font-semibold text-white">
                      {s.name}
                    </span>
                    <span className="mt-0.5 block truncate text-xs text-white/45">
                      {s.service}
                    </span>
                  </span>
                </li>
              ))}

              {/* Hueco libre */}
              <li className="flex items-stretch gap-3">
                <span className="w-11 shrink-0 pt-1 text-right font-sans text-[0.7rem] font-semibold tabular-nums text-white/45">
                  13:30
                </span>
                <span aria-hidden="true" className="w-1 shrink-0" />
                <span className="flex h-10 min-w-0 flex-1 items-center rounded-xl border border-dashed border-white/12 px-3.5 text-xs text-white/45">
                  Disponible
                </span>
              </li>
            </ul>

            {/* Recordatorio automático */}
            <p className="mt-4 flex items-start gap-2.5 rounded-xl bg-primary/12 px-3.5 py-3 ring-1 ring-primary/25">
              <BellRing
                size={15}
                strokeWidth={2}
                aria-hidden="true"
                className="mt-0.5 shrink-0 text-accent-on-dark"
              />
              <span className="text-xs leading-relaxed text-white/65">
                Recordatorio enviado a las 3 citas de mañana.
              </span>
            </p>
          </div>
        </div>
      </div>

      <figcaption className="mt-4 text-center text-xs text-text-subtle">
        Maqueta conceptual de PEVLYN Agenda. El producto está en desarrollo y los datos son de ejemplo.
      </figcaption>
    </figure>
  )
}
