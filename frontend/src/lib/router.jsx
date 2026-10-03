import { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react'

/**
 * Router mínimo sobre la History API.
 *
 * Para tres rutas estáticas y un query param, una librería de routing añadiría
 * ~20 kB y una capa de abstracción que no necesitamos. Esto cubre lo que el
 * sitio usa: navegación interna sin recarga, enlaces con ancla que funcionan
 * desde cualquier ruta, botones atrás/adelante del navegador y query params.
 *
 * Importante para producción: las rutas se sirven con un rewrite a index.html
 * (ver vercel.json). Sin él, entrar directamente a /demo daría 404.
 */
const RouterContext = createContext(null)

const readLocation = () => ({
  pathname: window.location.pathname,
  search: window.location.search,
  hash: window.location.hash,
})

export function RouterProvider({ children }) {
  const [location, setLocation] = useState(readLocation)

  useEffect(() => {
    const onPopState = () => setLocation(readLocation())
    window.addEventListener('popstate', onPopState)
    return () => window.removeEventListener('popstate', onPopState)
  }, [])

  const navigate = useCallback((to, { replace = false } = {}) => {
    const url = new URL(to, window.location.origin)
    const samePage =
      url.pathname === window.location.pathname && url.search === window.location.search

    if (!samePage || url.hash !== window.location.hash) {
      window.history[replace ? 'replaceState' : 'pushState']({}, '', url)
      setLocation(readLocation())
    }

    // Un ancla manda sobre el scroll al inicio: si el destino la lleva, vamos
    // a ella; si no, cada ruta nueva empieza arriba.
    if (url.hash) {
      requestAnimationFrame(() => {
        document.querySelector(url.hash)?.scrollIntoView({ block: 'start' })
      })
    } else if (!samePage) {
      window.scrollTo(0, 0)
    }
  }, [])

  const value = useMemo(() => ({ ...location, navigate }), [location, navigate])

  return <RouterContext.Provider value={value}>{children}</RouterContext.Provider>
}

export function useRouter() {
  const ctx = useContext(RouterContext)
  if (!ctx) throw new Error('useRouter debe usarse dentro de <RouterProvider>')
  return ctx
}

/** Lee un parámetro de la query actual (por ejemplo `?tool=agenda`). */
export function useQueryParam(key) {
  const { search } = useRouter()
  return useMemo(() => new URLSearchParams(search).get(key), [search, key])
}

/**
 * Enlace interno. Renderiza un <a> real —con su href, su menú contextual y su
 * "abrir en pestaña nueva"— pero intercepta el clic simple para navegar sin
 * recargar. Los modificadores (Ctrl, Cmd, Shift, clic central) se dejan pasar
 * al navegador, que es lo que la gente espera.
 */
export function Link({ to, onClick, children, ...rest }) {
  const { navigate } = useRouter()

  const handleClick = (event) => {
    onClick?.(event)
    if (
      event.defaultPrevented ||
      event.button !== 0 ||
      event.metaKey ||
      event.ctrlKey ||
      event.shiftKey ||
      event.altKey ||
      rest.target === '_blank'
    ) {
      return
    }
    event.preventDefault()
    navigate(to)
  }

  return (
    <a href={to} onClick={handleClick} {...rest}>
      {children}
    </a>
  )
}
