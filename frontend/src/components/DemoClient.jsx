import Modal from './Modal.jsx'

/** Panel de detalle de un cliente de la demo. */
export default function DemoClient({ client, onClose }) {
  if (!client) return null

  const rows = [
    { label: 'Teléfono', value: client.phone },
    { label: 'Correo', value: client.email || '—' },
    { label: 'Último servicio', value: client.lastService || client.service || 'Corte clásico' },
    { label: 'Visitas totales', value: `${client.visits} citas` },
  ]

  return (
    <Modal open onClose={onClose} title={client.name} subtitle="Barbería Nórdica — Cliente">
      <dl className="flex flex-col divide-y divide-border">
        {rows.map((row) => (
          <div key={row.label} className="flex items-center justify-between gap-4 py-3">
            <dt className="text-sm text-text-muted">{row.label}</dt>
            <dd className="text-sm font-semibold text-ink">{row.value}</dd>
          </div>
        ))}
      </dl>
    </Modal>
  )
}
