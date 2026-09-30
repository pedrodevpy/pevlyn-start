import { useState } from 'react'
import { LayoutDashboard, CalendarDays, Users, Scissors, ChevronRight } from 'lucide-react'
import isotipo from '../assets/pevlyn-isotipo.webp'
import DemoAppointment from './DemoAppointment.jsx'
import DemoClient from './DemoClient.jsx'
import {
  demoAppointments, demoClients, demoServices, demoRanges, demoSummary, statusTone,
} from '../data/agendaDemo.js'

/**
 * Dashboard interactivo de PEVLYN Agenda.
 *
 * ⚠️ DEMO: todos los datos son ficticios y la interfaz lo indica de forma
 * visible. No hay backend ni persistencia; todo es estado local.
 *
 * En escritorio la navegación es una barra lateral; en móvil pasa a pestañas
 * horizontales arriba, que es el patrón que la gente espera en una app.
 */
const views = [
  { id: 'inicio', label: 'Inicio', icon: LayoutDashboard },
  { id: 'agenda', label: 'Agenda', icon: CalendarDays },
  { id: 'clientes', label: 'Clientes', icon: Users },
  { id: 'servicios', label: 'Servicios', icon: Scissors },
]

export default function AgendaDashboard() {
  const [view, setView] = useState('inicio')
  const [range, setRange] = useState('hoy')
  const [appointment, setAppointment] = useState(null)
  const [client, setClient] = useState(null)

  const appointments = demoAppointments[range] ?? []
  const summary = demoSummary(range)

  return (
    <div className="overflow-hidden rounded-xl2 bg-ink shadow-dark ring-1 ring-white/10">
      {/* Barra de la app */}
      <div className="flex items-center gap-3 border-b border-white/8 px-4 py-3 sm:px-5">
        <span className="flex items-center gap-2">
          <img src={isotipo} alt="" aria-hidden="true" className="h-5 w-auto" />
          <span className="font-heading text-sm font-bold tracking-tight text-white">Agenda</span>
        </span>
        <span className="ml-auto rounded-full bg-white/8 px-2.5 py-1 text-[0.6rem] font-bold uppercase tracking-wider text-white/55">
          Datos de demostración
        </span>
      </div>

      {/* Navegación móvil */}
      <div className="border-b border-white/8 p-2 sm:hidden">
        <div role="tablist" aria-label="Secciones de la demo" className="grid grid-cols-4 gap-1">
          {views.map((v) => (
            <button
              key={v.id}
              type="button"
              role="tab"
              aria-selected={view === v.id}
              onClick={() => setView(v.id)}
              className={`flex flex-col items-center gap-1 rounded-lg px-1 py-2 text-[0.6rem] font-semibold transition ${
                view === v.id ? 'bg-white/10 text-white' : 'text-white/50 hover:text-white/80'
              }`}
            >
              <v.icon size={16} strokeWidth={2} aria-hidden="true" />
              {v.label}
            </button>
          ))}
        </div>
      </div>

      <div className="sm:grid sm:grid-cols-[164px_minmax(0,1fr)]">
        {/* Navegación de escritorio */}
        <nav aria-label="Secciones de la demo" className="hidden border-r border-white/8 p-3 sm:block">
          <ul className="flex flex-col gap-1">
            {views.map((v) => (
              <li key={v.id}>
                <button
                  type="button"
                  aria-current={view === v.id ? 'page' : undefined}
                  onClick={() => setView(v.id)}
                  className={`flex w-full items-center gap-2.5 rounded-lg px-3 py-2 text-xs font-medium transition ${
                    view === v.id
                      ? 'bg-white/10 text-white'
                      : 'text-white/50 hover:bg-white/5 hover:text-white/85'
                  }`}
                >
                  <v.icon size={15} strokeWidth={2} aria-hidden="true" />
                  {v.label}
                </button>
              </li>
            ))}
          </ul>
        </nav>

        {/* Panel principal */}
        <div className="min-h-[24rem] p-4 sm:p-5">
          {view === 'inicio' && (
            <div className="motion-safe:animate-reveal">
              <p className="font-heading text-lg font-bold text-white">Buenos días 👋</p>
              <p className="mt-1 text-xs text-white/50">Resumen de {rangeLabel(range)}</p>

              <RangeTabs range={range} setRange={setRange} />

              <dl className="mt-4 grid grid-cols-2 gap-2.5 lg:grid-cols-4">
                {summary.map((s) => (
                  <div
                    key={s.id}
                    className="rounded-xl bg-white/[0.04] px-3.5 py-3 ring-1 ring-white/8"
                  >
                    <dd className="font-heading text-xl font-bold tracking-tight text-white">
                      {s.value}
                    </dd>
                    <dt className="mt-0.5 text-[0.68rem] font-medium text-white/50">{s.label}</dt>
                  </div>
                ))}
              </dl>

              <p className="mt-6 font-heading text-[0.68rem] font-bold uppercase tracking-[0.14em] text-white/50">
                Próximas citas
              </p>
              <AppointmentList items={appointments.slice(0, 3)} onSelect={setAppointment} />
            </div>
          )}

          {view === 'agenda' && (
            <div className="motion-safe:animate-reveal">
              <p className="font-heading text-base font-bold text-white">Agenda</p>
              <RangeTabs range={range} setRange={setRange} />
              <AppointmentList items={appointments} onSelect={setAppointment} />
            </div>
          )}

          {view === 'clientes' && (
            <div className="motion-safe:animate-reveal">
              <p className="font-heading text-base font-bold text-white">Clientes</p>
              <p className="mt-1 text-xs text-white/50">{demoClients.length} en la demo</p>
              <ul className="mt-4 flex flex-col gap-2">
                {demoClients.map((c) => (
                  <li key={c.id}>
                    <button
                      type="button"
                      onClick={() => setClient(c)}
                      className="flex w-full items-center gap-3 rounded-xl bg-white/[0.04] px-3.5 py-2.5 text-left ring-1 ring-white/8 transition hover:bg-white/[0.08] hover:ring-white/15"
                    >
                      <span
                        aria-hidden="true"
                        className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gradient-brand text-[0.65rem] font-bold text-white"
                      >
                        {c.initials}
                      </span>
                      <span className="min-w-0 flex-1">
                        <span className="block truncate text-sm font-semibold text-white">
                          {c.name}
                        </span>
                        <span className="block truncate text-[0.7rem] text-white/50">
                          {c.service} · {c.visits} visitas
                        </span>
                      </span>
                      <ChevronRight size={16} aria-hidden="true" className="shrink-0 text-white/40" />
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {view === 'servicios' && (
            <div className="motion-safe:animate-reveal">
              <p className="font-heading text-base font-bold text-white">Servicios</p>
              <p className="mt-1 text-xs text-white/50">Lo que ofreces, con duración y precio</p>
              <ul className="mt-4 flex flex-col gap-2">
                {demoServices.map((s) => (
                  <li
                    key={s.id}
                    className="flex items-center gap-3 rounded-xl bg-white/[0.04] px-3.5 py-3 ring-1 ring-white/8"
                  >
                    <span aria-hidden="true" className={`h-8 w-1 shrink-0 rounded-full ${s.color}`} />
                    <span className="min-w-0 flex-1">
                      <span className="block truncate text-sm font-semibold text-white">
                        {s.name}
                      </span>
                      <span className="block text-[0.7rem] text-white/50">{s.duration}</span>
                    </span>
                    <span className="shrink-0 font-sans text-sm font-semibold tabular-nums text-white/70">
                      {s.price}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>

      <DemoAppointment appointment={appointment} onClose={() => setAppointment(null)} />
      <DemoClient client={client} onClose={() => setClient(null)} />
    </div>
  )
}

function rangeLabel(range) {
  return { hoy: 'hoy', semana: 'la semana', mes: 'el mes' }[range] ?? 'hoy'
}

function RangeTabs({ range, setRange }) {
  return (
    <div
      role="tablist"
      aria-label="Rango de fechas"
      className="mt-4 inline-flex rounded-full bg-white/[0.06] p-1 ring-1 ring-white/8"
    >
      {demoRanges.map((r) => (
        <button
          key={r.id}
          type="button"
          role="tab"
          aria-selected={range === r.id}
          onClick={() => setRange(r.id)}
          className={`inline-flex min-h-10 items-center rounded-full px-4 text-xs font-semibold transition ${
            range === r.id ? 'bg-white text-ink' : 'text-white/60 hover:text-white'
          }`}
        >
          {r.label}
        </button>
      ))}
    </div>
  )
}

function AppointmentList({ items, onSelect }) {
  if (items.length === 0) {
    return (
      <p className="mt-4 rounded-xl border border-dashed border-white/12 px-4 py-6 text-center text-xs text-white/45">
        No hay citas en este rango.
      </p>
    )
  }

  return (
    <ul className="mt-3 flex flex-col gap-2">
      {items.map((a, i) => {
        const client = demoClients.find((c) => c.id === a.clientId)
        const service = demoServices.find((s) => s.id === a.serviceId)
        return (
          <li key={a.id}>
            <button
              type="button"
              onClick={() => onSelect(a)}
              style={{ animationDelay: `${i * 60}ms` }}
              className="flex w-full items-center gap-3 rounded-xl bg-white/[0.04] px-3.5 py-2.5 text-left ring-1 ring-white/8 transition hover:bg-white/[0.08] hover:ring-white/15 motion-safe:animate-reveal"
            >
              <span className="w-14 shrink-0 font-sans text-[0.7rem] font-semibold tabular-nums text-white/55">
                {a.time}
              </span>
              <span className="min-w-0 flex-1">
                <span className="block truncate text-sm font-semibold text-white">
                  {client?.name}
                </span>
                <span className="block truncate text-[0.7rem] text-white/50">{service?.name}</span>
              </span>
              <span
                className={`hidden shrink-0 rounded-full px-2 py-0.5 text-[0.6rem] font-bold ring-1 sm:inline-flex ${statusTone[a.status] ?? ''}`}
              >
                {a.status}
              </span>
            </button>
          </li>
        )
      })}
    </ul>
  )
}
