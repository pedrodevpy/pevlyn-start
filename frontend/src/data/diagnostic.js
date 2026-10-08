import { Scissors, Sparkles, Stethoscope, Dumbbell, Store, Briefcase, CircleEllipsis } from 'lucide-react'

/**
 * Diagnóstico de negocio.
 *
 * El scoring vive aquí, junto a las preguntas, para que ajustar el peso de una
 * respuesta sea editar un número y no tocar lógica de componentes.
 * Todo ocurre en el cliente: sin backend, sin IA, sin almacenar respuestas.
 *
 * `weights` mapea cada opción a las necesidades que refuerza.
 */

export const NEEDS = {
  presencia: {
    id: 'presencia',
    label: 'Presencia digital',
    short: 'presencia digital',
    description: 'Que te encuentren, sepan qué ofreces y puedan escribirte.',
    recommendations: ['Landing profesional', 'Botón de WhatsApp', 'Formulario de contacto'],
  },
  organizacion: {
    id: 'organizacion',
    label: 'Organización',
    short: 'organización',
    description: 'Centralizar la información que hoy vive repartida.',
    recommendations: ['Gestión de clientes', 'Ficha e historial', 'Información del negocio'],
  },
  agenda: {
    id: 'agenda',
    label: 'Agenda',
    short: 'gestión de citas',
    description: 'Que reservar y confirmar deje de consumir tu día.',
    recommendations: ['Agenda y disponibilidad', 'Solicitud de citas', 'Confirmación de citas'],
  },
  automatizacion: {
    id: 'automatizacion',
    label: 'Automatización',
    short: 'automatización',
    description: 'Que lo repetitivo deje de depender de que alguien se acuerde.',
    recommendations: ['Recordatorios automáticos', 'Notificaciones', 'Seguimientos'],
  },
  software: {
    id: 'software',
    label: 'Software a medida',
    short: 'un sistema propio',
    description: 'Una herramienta pensada para cómo trabajas tú.',
    recommendations: ['Panel administrativo', 'Integraciones', 'Herramientas internas'],
  },
}

export const questions = [
  {
    id: 'tipo',
    title: '¿Qué tipo de negocio tienes?',
    hint: 'Elige el que más se parezca.',
    multi: false,
    options: [
      { id: 'barberia', label: 'Barbería', icon: Scissors, weights: { agenda: 1 } },
      { id: 'belleza', label: 'Belleza / estética', icon: Sparkles, weights: { agenda: 1 } },
      { id: 'consultorio', label: 'Consultorio', icon: Stethoscope, weights: { agenda: 1, organizacion: 1 } },
      { id: 'gimnasio', label: 'Gimnasio / fitness', icon: Dumbbell, weights: { organizacion: 1 } },
      { id: 'comercio', label: 'Restaurante / comercio', icon: Store, weights: { presencia: 1 } },
      { id: 'servicios', label: 'Servicios profesionales', icon: Briefcase, weights: { organizacion: 1 } },
      { id: 'otro', label: 'Otro', icon: CircleEllipsis, weights: {} },
    ],
  },
  {
    id: 'clientes',
    title: '¿Cómo gestionas actualmente tus clientes?',
    multi: false,
    options: [
      { id: 'whatsapp', label: 'WhatsApp', weights: { organizacion: 3 } },
      { id: 'excel', label: 'Excel / Google Sheets', weights: { organizacion: 2, automatizacion: 1 } },
      { id: 'fisica', label: 'Agenda física', weights: { organizacion: 3 } },
      { id: 'software', label: 'Software', weights: { software: 1 } },
      { id: 'varias', label: 'Varias herramientas', weights: { organizacion: 3, automatizacion: 1 } },
    ],
  },
  {
    id: 'citas',
    title: '¿Cómo gestionas tus citas o reservas?',
    multi: false,
    options: [
      { id: 'whatsapp', label: 'WhatsApp', weights: { agenda: 3 } },
      { id: 'llamadas', label: 'Llamadas', weights: { agenda: 3 } },
      { id: 'fisica', label: 'Agenda física', weights: { agenda: 3 } },
      { id: 'excel', label: 'Excel', weights: { agenda: 2, organizacion: 1 } },
      { id: 'software', label: 'Software', weights: { software: 1 } },
      { id: 'ninguna', label: 'No manejo citas', weights: {} },
    ],
  },
  {
    id: 'mejorar',
    title: '¿Qué quieres mejorar principalmente?',
    hint: 'Puedes elegir varias.',
    multi: true,
    options: [
      { id: 'mas-clientes', label: 'Conseguir más clientes', weights: { presencia: 3 } },
      { id: 'organizar-clientes', label: 'Organizar clientes', weights: { organizacion: 3 } },
      { id: 'gestionar-citas', label: 'Gestionar citas', weights: { agenda: 3 } },
      { id: 'automatizar', label: 'Automatizar tareas', weights: { automatizacion: 3 } },
      { id: 'web', label: 'Tener una página web', weights: { presencia: 3 } },
      { id: 'sistema', label: 'Tener un sistema propio', weights: { software: 3 } },
      { id: 'informacion', label: 'Organizar información', weights: { organizacion: 2, software: 1 } },
    ],
  },
  {
    id: 'equipo',
    title: '¿Cuántas personas trabajan en tu negocio?',
    multi: false,
    options: [
      { id: 'solo', label: 'Solo yo', weights: { automatizacion: 2 } },
      { id: '2-5', label: '2–5', weights: { organizacion: 1, automatizacion: 1 } },
      { id: '6-10', label: '6–10', weights: { organizacion: 2, software: 1 } },
      { id: '11-25', label: '11–25', weights: { software: 2, organizacion: 1 } },
      { id: '25+', label: 'Más de 25', weights: { software: 3 } },
    ],
  },
]

/**
 * Suma los pesos de las respuestas y devuelve las necesidades dominantes.
 *
 * @param {Record<string, string|string[]>} answers respuestas por id de pregunta
 * @returns {{ top: object[], scores: Record<string, number>, businessLabel: string }}
 */
export function scoreDiagnostic(answers) {
  const scores = Object.fromEntries(Object.keys(NEEDS).map((k) => [k, 0]))

  questions.forEach((q) => {
    const answer = answers[q.id]
    if (!answer) return
    const chosen = Array.isArray(answer) ? answer : [answer]
    chosen.forEach((optionId) => {
      const option = q.options.find((o) => o.id === optionId)
      if (!option) return
      Object.entries(option.weights).forEach(([need, points]) => {
        scores[need] += points
      })
    })
  })

  const ranked = Object.entries(scores)
    .filter(([, v]) => v > 0)
    .sort((a, b) => b[1] - a[1])

  // Se muestran una o dos necesidades: la segunda solo si es comparable a la
  // primera (al menos el 60 %). Si no, señalar dos diluye el mensaje.
  const top = []
  if (ranked.length > 0) {
    top.push(NEEDS[ranked[0][0]])
    if (ranked[1] && ranked[1][1] >= ranked[0][1] * 0.6) top.push(NEEDS[ranked[1][0]])
  }

  const businessOption = questions[0].options.find((o) => o.id === answers.tipo)

  return { top, scores, businessLabel: businessOption?.label ?? '' }
}

/** Redacta el mensaje de WhatsApp con el resultado real del diagnóstico. */
export function diagnosticWhatsAppMessage({ top, businessLabel }) {
  const needs = top.map((n) => n.short).join(' y ')
  const business = businessLabel ? ` Tengo un negocio de ${businessLabel.toLowerCase()}` : ''
  return (
    `Hola PEVLYN 💜 Hice el diagnóstico en su página.${business} y mi principal ` +
    `necesidad es ${needs || 'mejorar la operación'}. Me gustaría conocer sus soluciones.`
  )
}
