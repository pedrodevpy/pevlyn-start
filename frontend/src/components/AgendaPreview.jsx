import { CalendarDays, Users, Scissors, BellRing } from 'lucide-react'
import isotipo from '../assets/pevlyn-isotipo.webp'
import { demoAppointments, demoClients, demoServices } from '../data/agendaDemo.js'

/**
 * Vista estática de PEVLYN Agenda.
 *
 * Es la imagen del producto para la portada y la página de producto. El
 * dashboard navegable existe una sola vez, en /demo: tenerlo también aquí
 * convertiría "Probar la demo" en un botón sin sentido y duplicaría la misma
 * experiencia en tres sitios.
 *
 * ⚠️ Datos ficticios, igual que en la demo.
 */
const nav = [
  { icon: CalendarDays, label: 'Agenda', active: true },
  { icon: Users, label: 'Clientes' },
  { icon: Scissors, label: 'Servicios' },
]

export default function AgendaPreview() {
  const appointments = demoAppointments.hoy.slice(0, 3)

  return (
    <figure className="m-0 w-full">
      <div className="overflow-hidden rounded-xl2 bg-ink shadow-dark ring-1 ring-white/10">
        <div className="flex items-center gap-2 border-b border-white/8 px-4 py-3">
          <img src={isotipo} alt="" aria-hidden="true" className="h-5 w-auto" />
          <span className="font-heading text-sm font-bold tracking-tight text-white">Agenda</span>
          <span className="ml-auto rounded-full bg-white/8 px-2.5 py-1 text-[0.58rem] font-bold uppercase tracking-wider text-white/55">
            Vista previa
          </span>
        </div>

        <div className="grid sm:grid-cols-[132px_minmax(0,1fr)]">
          <div aria-hidden="true" className="hidden border-r border-white/8 p-3 sm:block">
            <ul className="flex flex-col gap-1">
              {nav.map((n) => (
                <li
                  key={n.label}
                  className={`flex items-center gap-2 rounded-lg px-2.5 py-2 text-xs font-medium ${
                    n.active ? 'bg-white/10 text-white' : 'text-white/50'
                  }`}
                >
                  <n.icon size={14} strokeWidth={2} />
                  {n.label}
                </li>
              ))}
            </ul>
          </div>

          <div className="p-4">
            <p className="font-heading text-sm font-bold text-white">Citas de hoy</p>
            <ul className="mt-3 flex flex-col gap-2">
              {appointments.map((a) => {
                const client = demoClients.find((c) => c.id === a.clientId)
                const service = demoServices.find((s) => s.id === a.serviceId)
                return (
                  <li
                    key={a.id}
                    className="flex items-center gap-3 rounded-xl bg-white/[0.04] px-3 py-2.5 ring-1 ring-white/8"
                  >
                    <span className="w-11 shrink-0 font-sans text-[0.7rem] font-semibold tabular-nums text-white/55">
                      {a.time}
                    </span>
                    <span className="min-w-0 flex-1">
                      <span className="block truncate text-sm font-semibold text-white">
                        {client?.name}
                      </span>
                      <span className="block truncate text-[0.7rem] text-white/50">
                        {service?.name}
                      </span>
                    </span>
                  </li>
                )
              })}
            </ul>

            <p className="mt-3 flex items-start gap-2.5 rounded-xl bg-primary/12 px-3 py-2.5 ring-1 ring-primary/25">
              <BellRing
                size={14}
                strokeWidth={2}
                aria-hidden="true"
                className="mt-0.5 shrink-0 text-accent-on-dark"
              />
              <span className="text-xs leading-relaxed text-white/65">
                Recordatorio enviado a las citas de mañana.
              </span>
            </p>
          </div>
        </div>
      </div>

      <figcaption className="mt-3 text-center text-xs text-text-subtle">
        Vista conceptual. El producto está en desarrollo y los datos son de ejemplo.
      </figcaption>
    </figure>
  )
}
