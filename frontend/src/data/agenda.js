import { Users, CalendarDays, Scissors, Clock, BellRing, History } from 'lucide-react'

/**
 * PEVLYN Agenda — primer producto SaaS del ecosistema.
 *
 * ⚠️ El producto está EN DESARROLLO. Esta es una presentación conceptual:
 * solo se nombran los módulos que ya están definidos en la visión del
 * producto. No se describen funcionalidades avanzadas que no hemos definido,
 * ni se presenta como algo disponible hoy.
 */
export const agendaModules = [
  { icon: Users, title: 'Clientes', description: 'Quién es quién y qué ha contratado.' },
  { icon: CalendarDays, title: 'Citas', description: 'Qué hay hoy, qué viene después.' },
  { icon: Scissors, title: 'Servicios', description: 'Lo que ofreces, con su duración y precio.' },
  { icon: Clock, title: 'Agenda', description: 'Tu disponibilidad, siempre actualizada.' },
  { icon: BellRing, title: 'Recordatorios', description: 'Avisos que no dependen de tu memoria.' },
  { icon: History, title: 'Historial', description: 'El recorrido de cada cliente contigo.' },
]

export const agendaStatus = 'Próximamente'
