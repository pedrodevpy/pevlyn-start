/**
 * Datos de la demo de PEVLYN Agenda.
 *
 * ⚠️ TODO ES FICTICIO. Nombres, teléfonos y precios son inventados a propósito
 * para ilustrar la interfaz. No son clientes reales ni tarifas oficiales, y la
 * UI lo indica de forma visible ("Datos de demostración").
 */

export const demoServices = [
  { id: 'corte', name: 'Corte', duration: '30 min', price: '$25.000', color: 'bg-primary' },
  { id: 'corte-barba', name: 'Corte y barba', duration: '45 min', price: '$35.000', color: 'bg-accent' },
  { id: 'color', name: 'Coloración', duration: '90 min', price: '$80.000', color: 'bg-primary-dark' },
  { id: 'peinado', name: 'Peinado', duration: '40 min', price: '$30.000', color: 'bg-accent' },
]

export const demoClients = [
  { id: 'c1', name: 'María Restrepo', initials: 'MR', phone: '+57 300 000 0001', service: 'Coloración', lastVisit: '12 sep 2026', visits: 8 },
  { id: 'c2', name: 'Laura Jiménez', initials: 'LJ', phone: '+57 300 000 0002', service: 'Corte y barba', lastVisit: '28 sep 2026', visits: 3 },
  { id: 'c3', name: 'Carlos Mejía', initials: 'CM', phone: '+57 300 000 0003', service: 'Corte', lastVisit: '25 sep 2026', visits: 12 },
  { id: 'c4', name: 'Ana Villalba', initials: 'AV', phone: '+57 300 000 0004', service: 'Peinado', lastVisit: '19 sep 2026', visits: 5 },
  { id: 'c5', name: 'Diego Sarmiento', initials: 'DS', phone: '+57 300 000 0005', service: 'Corte', lastVisit: '02 sep 2026', visits: 2 },
]

/** Citas por rango. Cada cita referencia un cliente y un servicio de arriba. */
export const demoAppointments = {
  hoy: [
    { id: 'a1', time: '09:00', clientId: 'c1', serviceId: 'color', status: 'Confirmada' },
    { id: 'a2', time: '10:30', clientId: 'c2', serviceId: 'corte-barba', status: 'Confirmada' },
    { id: 'a3', time: '12:00', clientId: 'c3', serviceId: 'corte', status: 'Pendiente' },
    { id: 'a4', time: '15:30', clientId: 'c4', serviceId: 'peinado', status: 'Confirmada' },
  ],
  semana: [
    { id: 'b1', time: 'Lun 09:00', clientId: 'c1', serviceId: 'color', status: 'Confirmada' },
    { id: 'b2', time: 'Mar 11:00', clientId: 'c5', serviceId: 'corte', status: 'Confirmada' },
    { id: 'b3', time: 'Mié 16:00', clientId: 'c3', serviceId: 'corte', status: 'Pendiente' },
    { id: 'b4', time: 'Jue 10:30', clientId: 'c2', serviceId: 'corte-barba', status: 'Confirmada' },
    { id: 'b5', time: 'Vie 14:00', clientId: 'c4', serviceId: 'peinado', status: 'Cancelada' },
  ],
  mes: [
    { id: 'm1', time: 'Sem 1', clientId: 'c1', serviceId: 'color', status: 'Confirmada' },
    { id: 'm2', time: 'Sem 2', clientId: 'c3', serviceId: 'corte', status: 'Confirmada' },
    { id: 'm3', time: 'Sem 3', clientId: 'c2', serviceId: 'corte-barba', status: 'Confirmada' },
    { id: 'm4', time: 'Sem 4', clientId: 'c4', serviceId: 'peinado', status: 'Pendiente' },
  ],
}

export const demoRanges = [
  { id: 'hoy', label: 'Hoy' },
  { id: 'semana', label: 'Semana' },
  { id: 'mes', label: 'Mes' },
]

/** Resumen calculado a partir de las citas del rango: nunca cifras sueltas. */
export function demoSummary(rangeId) {
  const list = demoAppointments[rangeId] ?? []
  const pendientes = list.filter((a) => a.status === 'Pendiente').length
  const clientes = new Set(list.map((a) => a.clientId)).size
  const servicios = new Set(list.map((a) => a.serviceId)).size
  return [
    { id: 'citas', label: 'Citas', value: list.length },
    { id: 'clientes', label: 'Clientes', value: clientes },
    { id: 'servicios', label: 'Servicios', value: servicios },
    { id: 'pendientes', label: 'Pendientes', value: pendientes },
  ]
}

export const statusTone = {
  Confirmada: 'bg-emerald-500/15 text-emerald-300 ring-emerald-400/25',
  Pendiente: 'bg-amber-500/15 text-amber-300 ring-amber-400/25',
  Cancelada: 'bg-rose-500/15 text-rose-300 ring-rose-400/25',
}
