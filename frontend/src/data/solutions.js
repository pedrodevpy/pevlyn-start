import { Globe, LayoutGrid, Zap, Code2 } from 'lucide-react'

/**
 * Los cuatro pilares de PEVLYN. No son servicios sueltos de agencia: cada uno
 * es una capa del mismo ecosistema, y se corresponden con las etapas de la
 * ruta de crecimiento (ver growthStages.js).
 */
export const solutionPillars = [
  {
    id: 'presencia',
    number: '01',
    title: 'Presencia digital',
    tagline: 'Tu negocio empieza a existir online.',
    items: ['Landing pages', 'Sitios web', 'Formularios', 'WhatsApp'],
    icon: Globe,
  },
  {
    id: 'organizacion',
    number: '02',
    title: 'Organización',
    tagline: 'Pon orden donde hoy hay procesos manuales.',
    items: ['Clientes', 'Citas', 'Servicios', 'Información'],
    icon: LayoutGrid,
  },
  {
    id: 'automatizacion',
    number: '03',
    title: 'Automatización',
    tagline: 'Deja que la tecnología haga el trabajo repetitivo.',
    items: ['Recordatorios', 'Notificaciones', 'Seguimientos', 'Flujos automáticos'],
    icon: Zap,
  },
  {
    id: 'software',
    number: '04',
    title: 'Software',
    tagline: 'Cuando tu negocio necesita algo propio.',
    items: ['Sistemas personalizados', 'Dashboards', 'Integraciones', 'Herramientas internas'],
    icon: Code2,
  },
]
