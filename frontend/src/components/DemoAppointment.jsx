import Modal from './Modal.jsx'
import { demoClients, demoServices } from '../data/agendaDemo.js'

/* Los tonos de `agendaDemo.js` están pensados para el dashboard oscuro; este
   panel es blanco y necesita su propia escala. */
const tone = {
  Confirmada: 'bg-emerald-50 text-emerald-700 ring-emerald-600/20',
  Pendiente: 'bg-amber-50 text-amber-700 ring-amber-600/25',
  Cancelada: 'bg-rose-50 text-rose-700 ring-rose-600/20',
}

/** Panel de detalle de una cita de la demo. */
export default function DemoAppointment({ appointment, onClose }) {
  if (!appointment) return null
  const client = demoClients.find((c) => c.id === appointment.clientId)
  const service = demoServices.find((s) => s.id === appointment.serviceId)

  const rows = [
    { label: 'Cliente', value: client?.name },
    { label: 'Servicio', value: service?.name },
    { label: 'Duración', value: service?.duration },
    { label: 'Hora', value: appointment.time },
  ]

  return (
    <Modal open onClose={onClose} title="Detalle de la cita" subtitle="Datos de demostración">
      <dl className="flex flex-col divide-y divide-border">
        {rows.map((row) => (
          <div key={row.label} className="flex items-center justify-between gap-4 py-3">
            <dt className="text-sm text-text-muted">{row.label}</dt>
            <dd className="text-sm font-semibold text-ink">{row.value}</dd>
          </div>
        ))}
        <div className="flex items-center justify-between gap-4 py-3">
          <dt className="text-sm text-text-muted">Estado</dt>
          <dd>
            <span
              className={`inline-flex rounded-full px-2.5 py-1 text-xs font-bold ring-1 ${
                tone[appointment.status] ?? 'bg-surface text-ink ring-border'
              }`}
            >
              {appointment.status}
            </span>
          </dd>
        </div>
      </dl>
    </Modal>
  )
}
