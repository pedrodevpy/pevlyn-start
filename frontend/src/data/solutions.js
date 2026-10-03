import { Globe, LayoutGrid, Zap, Code2 } from 'lucide-react'

/**
 * Los cuatro pilares de PEVLYN.
 *
 * Son a la vez QUÉ hacemos y EN QUÉ ORDEN: cada pilar es una capa que se
 * apoya en la anterior. Antes esto vivía en dos secciones distintas
 * ("Soluciones" y "Evolución") que nombraban los mismos cuatro conceptos con
 * palabras casi idénticas; ahora se cuenta una sola vez, con la progresión
 * incorporada.
 */
export const solutionPillars = [
  {
    id: 'presencia',
    number: '01',
    title: 'Presencia digital',
    tagline: 'Tu negocio empieza a existir online.',
    summary: 'Landing + WhatsApp',
    items: ['Landing pages', 'Sitios web', 'Formularios', 'WhatsApp'],
    icon: Globe,
  },
  {
    id: 'organizacion',
    number: '02',
    title: 'Organización',
    tagline: 'Pon orden donde hoy hay procesos manuales.',
    summary: 'Clientes + Citas',
    items: ['Clientes', 'Citas', 'Servicios', 'Información'],
    icon: LayoutGrid,
  },
  {
    id: 'automatizacion',
    number: '03',
    title: 'Automatización',
    tagline: 'Deja que la tecnología haga el trabajo repetitivo.',
    summary: 'Procesos + Recordatorios',
    items: ['Recordatorios', 'Notificaciones', 'Seguimientos', 'Flujos automáticos'],
    icon: Zap,
  },
  {
    id: 'software',
    number: '04',
    title: 'Software',
    tagline: 'Cuando tu negocio necesita algo propio.',
    summary: 'Sistemas + Datos + Integraciones',
    items: ['Sistemas personalizados', 'Dashboards', 'Integraciones', 'Herramientas internas'],
    icon: Code2,
  },
]
