import { Suspense, lazy } from 'react'
import Navbar from './sections/Navbar.jsx'
import Footer from './sections/Footer.jsx'
import HomePage from './pages/HomePage.jsx'
import { RouterProvider, useRouter } from './lib/router.jsx'

/**
 * Las páginas con las herramientas interactivas se cargan bajo demanda, de
 * modo que quien entra a `/` no descarga el diagnóstico, el dashboard ni el
 * constructor. Vite las separa en chunks propios automáticamente: cuesta dos
 * líneas y es justo lo que mantiene ligera la portada.
 */
const DemoPage = lazy(() => import('./pages/DemoPage.jsx'))
const AgendaPage = lazy(() => import('./pages/AgendaPage.jsx'))

const routes = {
  '/': HomePage,
  '/demo': DemoPage,
  '/agenda': AgendaPage,
}

/** Reserva el alto del viewport mientras llega el chunk: evita el salto. */
function PageFallback() {
  return <div className="min-h-screen bg-ink" aria-busy="true" />
}

function Routes() {
  const { pathname } = useRouter()
  // Una ruta desconocida muestra la portada en lugar de una pantalla en blanco.
  const Page = routes[pathname.replace(/\/+$/, '') || '/'] ?? HomePage

  return (
    <>
      <a
        href="#contenido"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-full focus:bg-primary focus:px-5 focus:py-3 focus:font-sans focus:text-sm focus:font-semibold focus:text-white"
      >
        Saltar al contenido
      </a>

      <Navbar />

      <main id="contenido">
        <Suspense fallback={<PageFallback />}>
          <Page />
        </Suspense>
      </main>

      <Footer />
    </>
  )
}

export default function App() {
  return (
    <RouterProvider>
      <Routes />
    </RouterProvider>
  )
}
