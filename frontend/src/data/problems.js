import { MessageSquareMore, NotebookPen, Clock, TrendingDown } from 'lucide-react'

/** Problemas reales del público objetivo (LANDING_DEVELOPMENT.md §16). */
export const problems = [
  {
    icon: MessageSquareMore,
    title: 'Demasiados mensajes',
    description: 'Los clientes preguntan constantemente:',
    items: ['Horarios', 'Precios', 'Disponibilidad', 'Ubicación'],
  },
  {
    icon: NotebookPen,
    title: 'Gestión manual',
    description: 'Las citas y clientes se gestionan mediante:',
    items: ['Libretas', 'Excel', 'Chats', 'Notas'],
  },
  {
    icon: Clock,
    title: 'Tiempo perdido',
    description:
      'Tareas repetitivas consumen tiempo que podría utilizarse atendiendo clientes.',
  },
  {
    icon: TrendingDown,
    title: 'Oportunidades perdidas',
    description:
      'Un cliente puede escribir cuando el negocio está cerrado o cuando nadie puede responder.',
  },
]
