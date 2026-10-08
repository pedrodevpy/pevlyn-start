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

/**
 * Planes de suscripción de PEVLYN Agenda (basados en 11-planes-y-consumo.jpg).
 *
 * En PEVLYN Agenda sí se muestran los valores reales y transparentes de suscripción:
 * Facturación mensual en pesos colombianos (COP), enteros, sin comisiones por cita.
 */
export const agendaSubscriptionPlans = [
  {
    id: 'gratis',
    name: 'Gratis',
    badge: 'Para empezar',
    price: 'Gratis',
    amount: '$0',
    period: 'para siempre',
    currency: 'COP',
    description: 'Para empezar y probar la agenda con tu negocio.',
    highlighted: false,
    stats: [
      { label: 'Profesionales', value: '1' },
      { label: 'Servicios', value: '3' },
      { label: 'Citas al mes', value: '50' },
    ],
    features: [
      { text: '1 profesional' },
      { text: '3 servicios en catálogo' },
      { text: '50 citas al mes' },
      { text: 'Página de reserva pública (tu-negocio)' },
      { text: 'Acceso móvil y web sin instalar nada' },
      { text: 'Sin comisiones por cita (0%)' },
      { text: 'Habeas Data (Ley 1581) integrado' },
    ],
    cta: 'Empezar gratis',
    whatsappMessage:
      '¡Hola PEVLYN! Me gustaría activar el plan Gratis de PEVLYN Agenda y comenzar a probarlo en mi negocio.',
  },
  {
    id: 'basico',
    name: 'Básico',
    badge: 'Equipo pequeño',
    price: '$39.900',
    amount: '39.900',
    period: 'al mes',
    currency: 'COP',
    description: 'Para un negocio con equipo pequeño que busca organizar su día.',
    highlighted: false,
    stats: [
      { label: 'Profesionales', value: '5' },
      { label: 'Servicios', value: '15' },
      { label: 'Citas al mes', value: '500' },
    ],
    features: [
      { text: 'Hasta 5 profesionales' },
      { text: 'Hasta 15 servicios en catálogo' },
      { text: 'Hasta 500 citas al mes' },
      { text: 'Color de agenda personalizable con tu marca' },
      { text: 'Página de reserva pública personalizada' },
      { text: 'Directorio de clientes e historial de visitas' },
      { text: 'Sin comisiones por cita (0%)' },
      { text: 'Acompañamiento en la puesta en marcha' },
    ],
    cta: 'Elegir Básico',
    whatsappMessage:
      '¡Hola PEVLYN! Me gustaría activar el plan Básico de PEVLYN Agenda ($39.900 COP al mes) para mi negocio.',
  },
  {
    id: 'pro',
    name: 'Pro',
    badge: 'Recomendado · Sin topes',
    price: '$69.900',
    amount: '69.900',
    period: 'al mes',
    currency: 'COP',
    description: 'Sin topes, para quien ya vive de su agenda y su equipo de trabajo.',
    highlighted: true,
    stats: [
      { label: 'Profesionales', value: 'Sin tope' },
      { label: 'Servicios', value: 'Sin tope' },
      { label: 'Citas al mes', value: 'Sin tope' },
    ],
    features: [
      { text: 'Profesionales sin tope (equipo completo)' },
      { text: 'Servicios sin tope en tu catálogo' },
      { text: 'Citas al mes sin tope' },
      { text: 'Color de agenda personalizable con tu marca' },
      { text: 'Página de reserva pública exclusiva' },
      { text: 'Historial completo por cliente sin límite' },
      { text: 'Recordatorios automáticos', tag: 'Próximamente' },
      { text: 'Soporte prioritario y puesta en marcha personalizada' },
    ],
    cta: 'Elegir Pro',
    whatsappMessage:
      '¡Hola PEVLYN! Quiero activar el plan Pro de PEVLYN Agenda ($69.900 COP al mes) para mi negocio.',
  },
]

/**
 * Cómo se manejan las suscripciones en PEVLYN Agenda.
 */
export const agendaSubscriptionPerks = [
  {
    title: 'Cobro mensual en pesos exactos',
    description:
      'Tarifas fijas en pesos colombianos (COP), en números enteros ($39.900 o $69.900). Facturación clara mes a mes, sin cobros sorpresa por número de transacciones.',
  },
  {
    title: 'Cero comisiones por cita agendada',
    description:
      'El 100% de lo que cobras por cada servicio es tuyo. PEVLYN cobra una suscripción mensual fija por el software, nunca un porcentaje sobre tus reservas.',
  },
  {
    title: 'Sin contratos de permanencia',
    description:
      'Tu suscripción se maneja mes a mes. Puedes pausar o cancelar cuando lo decidas. Tu base de clientes y datos son 100% de tu negocio y exportables en cualquier momento.',
  },
  {
    title: 'Te ayudamos a iniciar',
    description:
      'El sistema es muy intuitivo y fácil de usar. Te acompañamos desde el primer momento para que tú y tu equipo comiencen a agendar sin complicaciones.',
  },
]
