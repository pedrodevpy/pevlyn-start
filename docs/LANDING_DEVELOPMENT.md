# PEVLYN — Landing Development Specification v0.1

> **Proyecto:** PEVLYN
> **Producto:** Landing Page oficial
> **Versión:** 0.1
> **Estado:** Desarrollo inicial
> **Objetivo:** Crear la primera presencia web profesional de PEVLYN.

---

# 1. Objetivo

Construir la landing page oficial de **PEVLYN**, una marca de Business Technology enfocada inicialmente en ayudar a pequeños negocios y profesionales independientes a digitalizar su operación.

La landing debe tener dos objetivos:

1. Presentar PEVLYN como una empresa tecnológica profesional.
2. Conseguir potenciales clientes interesados en digitalizar su negocio.

La landing **no debe intentar vender un SaaS que todavía no existe**.

El primer producto que se comercializará es:

> **PEVLYN Web**

Una solución de presencia digital para pequeños negocios que incluye landing, WhatsApp, formularios, información de servicios y funcionalidades relacionadas con citas.

---

# 2. Concepto de marca

## Nombre

**PEVLYN**

## Categoría

**Business Technology**

## Slogan

> **Simplifica. Automatiza. Crece.**

## Propuesta de valor

> Tecnología sencilla para que los pequeños negocios puedan gestionar clientes, citas y procesos sin complicaciones.

---

# 3. Público objetivo

La landing está dirigida principalmente a:

* Barberías.
* Peluquerías.
* Salones de belleza.
* Psicólogos.
* Fisioterapeutas.
* Odontólogos.
* Veterinarias.
* Gimnasios.
* Entrenadores.
* Fotógrafos.
* Profesores particulares.
* Emprendimientos.
* Profesionales independientes.
* Negocios locales.

### Perfil

Negocios que normalmente utilizan:

* WhatsApp.
* Instagram.
* Excel.
* Agendas físicas.
* Mensajes manuales.

Y que necesitan una solución digital sencilla.

---

# 4. Mensaje principal

La landing debe comunicar rápidamente:

> **Tu negocio puede funcionar de forma más simple.**

PEVLYN ayuda a digitalizar tareas relacionadas con:

* Clientes.
* Citas.
* Contacto.
* Presencia digital.
* Procesos repetitivos.

---

# 5. Dirección visual

## Estilo

La landing debe sentirse:

* Moderna.
* Tecnológica.
* Profesional.
* Minimalista.
* Premium pero accesible.
* Cercana.
* Limpia.
* Escalable.

Evitar:

* Diseño excesivamente corporativo.
* Exceso de gradientes.
* Exceso de animaciones.
* Stock photos genéricas.
* Diseño recargado.
* Elementos que parezcan una plantilla genérica.

---

# 6. Colores

Utilizar como punto de partida:

```text
Primary:
Purple / Violet

Secondary:
Deep Black

Background:
White / Off-white

Accent:
Electric Violet
```

Los colores definitivos deben centralizarse en variables o tokens para poder modificarlos posteriormente.

Ejemplo:

```css
:root {
  --color-primary: ...;
  --color-primary-dark: ...;
  --color-background: ...;
  --color-surface: ...;
  --color-text: ...;
  --color-text-muted: ...;
  --color-border: ...;
}
```

No dispersar colores directamente por todos los componentes.

---

# 7. Tipografía

## Headings

**Sora**

## Body

**Inter**

La tipografía debe transmitir:

* Tecnología.
* Claridad.
* Modernidad.

Los headings deben tener una jerarquía visual fuerte.

---

# 8. Logo

Mientras no exista un logo definitivo, utilizar una representación tipográfica limpia:

> PEVLYN

No inventar un logo complejo.

El sistema debe estar preparado para reemplazarlo posteriormente por:

```text
[ISOTIPO] PEVLYN
```

El isotipo futuro estará inspirado conceptualmente en la conexión entre **P + E**.

---

# 9. Stack tecnológico

## Obligatorio

* React
* Vite
* Tailwind CSS

## Recomendado

* JavaScript o TypeScript
* Lucide React para iconografía

No agregar librerías innecesarias.

No utilizar Bootstrap.

No utilizar jQuery.

No introducir un backend en esta primera versión salvo que sea necesario para una funcionalidad concreta.

---

# 10. Arquitectura del frontend

Utilizar componentes reutilizables.

Propuesta:

```text
src/
│
├── components/
│   ├── Navbar.jsx
│   ├── Button.jsx
│   ├── SectionHeading.jsx
│   ├── ServiceCard.jsx
│   ├── PricingCard.jsx
│   ├── FAQItem.jsx
│   └── ...
│
├── sections/
│   ├── Hero.jsx
│   ├── SocialProof.jsx
│   ├── Problem.jsx
│   ├── Solution.jsx
│   ├── Services.jsx
│   ├── HowItWorks.jsx
│   ├── Benefits.jsx
│   ├── Product.jsx
│   ├── Pricing.jsx
│   ├── FAQ.jsx
│   └── FinalCTA.jsx
│
├── data/
│   ├── services.js
│   ├── pricing.js
│   └── faq.js
│
├── assets/
│
├── App.jsx
└── main.jsx
```

La estructura puede modificarse si existe una mejor solución arquitectónica, pero debe mantenerse la separación entre:

* Componentes.
* Secciones.
* Datos.
* Assets.

---

# 11. Estructura general

La página debe seguir este orden:

```text
Navbar
    ↓
Hero
    ↓
Social Proof / Trust
    ↓
Problem
    ↓
Solution
    ↓
Services
    ↓
How It Works
    ↓
Benefits
    ↓
PEVLYN Web
    ↓
Pricing
    ↓
FAQ
    ↓
Final CTA
    ↓
Footer
```

---

# 12. NAVBAR

## Logo

```text
PEVLYN
```

## Links

* Soluciones
* Cómo funciona
* Precios
* FAQ

Los links deben hacer scroll hacia las secciones correspondientes.

## CTA

```text
Digitaliza tu negocio
```

El botón debe llevar al formulario/CTA final.

## Responsive

En móvil:

* Ocultar navegación.
* Mostrar botón hamburger.
* Abrir menú móvil.
* Mantener CTA accesible.

---

# 13. HERO

Esta es la sección principal.

## Headline

```text
Simplifica.
Automatiza.
Crece.
```

## Subheadline

```text
Tecnología sencilla para que tu negocio gestione
clientes, citas y procesos sin complicaciones.
```

## Primary CTA

```text
Digitaliza tu negocio
```

## Secondary CTA

```text
Conoce PEVLYN
```

El segundo botón debe llevar al usuario a la sección de soluciones.

---

# 14. HERO VISUAL

No utilizar una fotografía de stock como elemento principal.

Crear una representación visual de una interfaz de PEVLYN.

Puede incluir:

```text
PEVLYN
────────────────────

Citas de hoy

09:00  Juan Pérez
10:30  María Gómez
12:00  Carlos Ruiz

Clientes
248

Citas
12

Crecimiento
+18%
```

La interfaz debe ser ficticia y utilizarse únicamente como mockup visual.

No presentar estos números como estadísticas reales de PEVLYN.

Agregar pequeñas animaciones únicamente si aportan valor.

---

# 15. SOCIAL PROOF

PEVLYN todavía está en fase inicial.

Por lo tanto:

## NO inventar:

* Clientes.
* Logos.
* Testimonios.
* Número de usuarios.
* Porcentajes de crecimiento.
* Resultados.
* Casos de éxito.

Utilizar en su lugar:

```text
Diseñado para negocios que quieren
dar el siguiente paso.
```

Mostrar categorías:

```text
Servicios profesionales
Belleza
Salud
Bienestar
Emprendimientos
```

Cuando existan clientes reales, esta sección podrá convertirse en una sección de testimonios.

---

# 16. PROBLEM SECTION

## Heading

```text
Tu negocio no debería depender
de 20 conversaciones de WhatsApp.
```

## Problemas

### Demasiados mensajes

Los clientes preguntan constantemente:

* Horarios.
* Precios.
* Disponibilidad.
* Ubicación.

### Gestión manual

Las citas y clientes se gestionan mediante:

* Libretas.
* Excel.
* Chats.
* Notas.

### Tiempo perdido

Tareas repetitivas consumen tiempo que podría utilizarse atendiendo clientes.

### Oportunidades perdidas

Un cliente puede escribir cuando el negocio está cerrado o cuando nadie puede responder.

---

# 17. SOLUTION SECTION

## Heading

```text
Todo puede ser más sencillo.
```

## Description

```text
PEVLYN te ayuda a digitalizar las tareas que más
tiempo consumen en tu negocio para que puedas
concentrarte en atender clientes y hacerlo crecer.
```

Mostrar cuatro soluciones:

### Agenda

Organiza citas y disponibilidad.

### Clientes

Centraliza la información de tus clientes.

### WhatsApp

Facilita la comunicación con tus clientes.

### Automatización

Reduce tareas repetitivas.

---

# 18. SERVICES SECTION

## Heading

```text
Herramientas para hacer crecer tu negocio.
```

Cards:

### Presencia digital

Una página profesional para que tus clientes conozcan tu negocio.

### Gestión de citas

Permite gestionar solicitudes y reservas de manera sencilla.

### Gestión de clientes

Mantén organizada la información de las personas que atiendes.

### WhatsApp

Conecta directamente tus canales digitales con tus clientes.

### Información del negocio

Ten una visión más clara de la operación.

### Automatización

Reduce tareas repetitivas.

---

# 19. HOW IT WORKS

## Heading

```text
Empieza en tres pasos.
```

### 01

**Cuéntanos sobre tu negocio**

Conocemos tus necesidades y procesos actuales.

### 02

**Construimos tu solución**

Adaptamos PEVLYN a las necesidades de tu negocio.

### 03

**Empieza a crecer**

Tus clientes podrán encontrarte, contactarte y gestionar sus solicitudes más fácilmente.

CTA:

```text
Quiero empezar
```

---

# 20. BENEFITS

## Heading

```text
Menos tiempo gestionando.
Más tiempo creciendo.
```

Mostrar beneficios:

* Ahorra tiempo.
* Organiza tus clientes.
* Facilita las reservas.
* Mejora tu presencia digital.
* Centraliza información.
* Reduce tareas repetitivas.
* Facilita el contacto por WhatsApp.
* Prepara tu negocio para crecer.

Usar iconos simples.

---

# 21. PEVLYN WEB

Esta sección debe presentar nuestro primer producto comercial.

## Heading

```text
Tu negocio merece estar online.
```

## Description

```text
Creamos una presencia digital profesional para que
tus clientes puedan conocer tus servicios, encontrarte
y contactarte fácilmente.
```

Mostrar mockup de una landing de un negocio ficticio.

No utilizar un negocio real sin autorización.

---

## Incluye

```text
✓ Diseño profesional
✓ Responsive
✓ WhatsApp
✓ Formulario
✓ Servicios
✓ Ubicación
✓ Galería
✓ SEO básico
```

CTA:

```text
Quiero mi página
```

---

# 22. PRICING

Mostrar tres planes.

## START

```text
$350.000 COP
```

Incluye:

* Landing profesional.
* WhatsApp.
* Servicios.
* Ubicación.
* Formulario.
* Responsive.

CTA:

```text
Empezar
```

---

## BUSINESS

```text
$550.000 COP
```

Incluye:

* Todo START.
* Agenda.
* Galería.
* Google Maps.
* SEO básico.
* Configuración de dominio.

CTA:

```text
Elegir Business
```

---

## PRO

```text
Desde $800.000 COP
```

Incluye:

* Todo BUSINESS.
* Panel administrativo.
* Clientes.
* Citas.
* Notificaciones.
* Personalización avanzada.

CTA:

```text
Hablar con PEVLYN
```

---

# 23. PRICING DESIGN

El plan BUSINESS puede tener una ligera diferenciación visual porque es el plan que queremos impulsar inicialmente.

NO utilizar frases como:

* "El mejor plan".
* "Ganador".
* "Número 1".

Se puede utilizar:

```text
Más elegido
```

únicamente cuando existan datos reales que lo justifiquen.

Mientras no existan datos, simplemente destacarlo visualmente sin afirmar que es el más vendido.

---

# 24. FAQ

Implementar FAQ acordeón.

Preguntas:

### ¿PEVLYN sirve para cualquier negocio?

PEVLYN está diseñado inicialmente para pequeños negocios y profesionales que quieren digitalizar su operación.

### ¿Necesito saber de tecnología?

No. Las soluciones de PEVLYN están pensadas para ser sencillas.

### ¿Puedo recibir clientes por WhatsApp?

Sí. Las soluciones pueden incluir integración y botones orientados a WhatsApp.

### ¿Puedo gestionar citas?

Sí. Dependiendo de la solución contratada se pueden incluir funcionalidades de solicitud y gestión de citas.

### ¿Puedo personalizar mi solución?

Sí. Las soluciones pueden adaptarse a las necesidades del negocio.

### ¿PEVLYN es solo una página web?

No. PEVLYN Web es nuestro primer producto. La visión es evolucionar hacia una plataforma SaaS para negocios.

---

# 25. FINAL CTA

## Heading

```text
Tu negocio está listo para crecer.
```

## Text

```text
Empieza a digitalizar las tareas que más
tiempo te quitan.
```

Primary CTA:

```text
Digitaliza tu negocio
```

Secondary CTA:

```text
Hablar con PEVLYN
```

---

# 26. CONTACT FORM

La primera versión debe incluir un formulario funcional visualmente.

Campos:

```text
Nombre
Nombre del negocio
WhatsApp
Correo electrónico
Tipo de negocio
¿Qué necesitas?
```

Opciones de "¿Qué necesitas?":

```text
Landing web
Agenda de citas
WhatsApp
Digitalización
Otra solución
```

CTA:

```text
Quiero digitalizar mi negocio
```

Por ahora puede manejarse mediante:

* mailto;
* WhatsApp;
* endpoint temporal;

pero debe estar preparado para conectar posteriormente con un backend.

---

# 27. WHATSAPP

La landing debe tener CTA orientados a WhatsApp.

El número NO debe inventarse.

Utilizar una variable:

```javascript
const WHATSAPP_NUMBER = "REPLACE_WITH_OFFICIAL_NUMBER";
```

Construir mensajes dinámicos cuando corresponda.

Ejemplo:

```text
Hola, estoy interesado en digitalizar mi negocio con PEVLYN.
```

No dejar números falsos en producción.

---

# 28. FOOTER

Mostrar:

```text
PEVLYN
Business Technology

Simplifica. Automatiza. Crece.
```

Links:

```text
Soluciones
Precios
FAQ
Contacto
```

Legal:

```text
Política de privacidad
Términos y condiciones
```

Copyright:

```text
© 2026 PEVLYN. Todos los derechos reservados.
```

No agregar información legal ficticia.

---

# 29. ANIMACIONES

Utilizar animaciones sutiles.

Permitido:

* Fade-in.
* Slide-up.
* Hover.
* Scale ligero.
* Transiciones de botones.
* Aparición progresiva de cards.

Evitar:

* Animaciones constantes.
* Parallax excesivo.
* Elementos flotando sin propósito.
* Animaciones que afecten la lectura.
* Efectos que parezcan una plantilla genérica.

Respetar:

```css
prefers-reduced-motion
```

---

# 30. RESPONSIVE

La landing debe funcionar correctamente en:

### Mobile

320px+

### Tablet

768px+

### Desktop

1024px+

### Large Desktop

1440px+

Verificar especialmente:

* Navbar.
* Hero.
* Pricing.
* Cards.
* Formularios.
* Mockups.
* Footer.

No debe existir:

* Overflow horizontal.
* Texto cortado.
* Botones fuera de pantalla.
* Imágenes deformadas.
* Cards excesivamente pequeñas.

---

# 31. ACCESSIBILITY

Implementar:

* HTML semántico.
* `alt` en imágenes.
* Labels en formularios.
* Focus states.
* Keyboard navigation.
* Contraste adecuado.
* Botones reales para acciones.
* Links reales para navegación.
* `aria-expanded` en FAQ y menú móvil cuando sea necesario.

---

# 32. SEO

Implementar:

## Title

```text
PEVLYN — Tecnología para hacer crecer tu negocio
```

## Description

```text
PEVLYN ayuda a pequeños negocios a digitalizar clientes,
citas y procesos mediante soluciones tecnológicas simples.
```

También:

* H1 único.
* H2/H3 semánticos.
* Open Graph.
* Favicon.
* Meta viewport.
* URLs limpias.

---

# 33. PERFORMANCE

Objetivo:

* Carga rápida.
* Bundle razonable.
* Imágenes optimizadas.
* Lazy loading cuando corresponda.
* Evitar dependencias innecesarias.

No utilizar una librería únicamente para resolver algo que puede hacerse con CSS o React.

---

# 34. COMPONENTES REUTILIZABLES

Evitar código duplicado.

Por ejemplo, los precios deben venir de datos:

```javascript
const pricingPlans = [
  {
    name: "START",
    price: "$350.000",
    ...
  },
  ...
];
```

Las preguntas FAQ:

```javascript
const faqItems = [
  {
    question: "...",
    answer: "..."
  }
];
```

Los servicios:

```javascript
const services = [
  {
    title: "...",
    description: "...",
    icon: ...
  }
];
```

---

# 35. FUTURA ESCALABILIDAD

Aunque esta landing no necesita backend, el código debe quedar preparado para que posteriormente podamos agregar:

```text
PEVLYN
│
├── Marketing Website
│
├── Authentication
│
├── Dashboard
│
├── Customers
│
├── Services
│
├── Appointments
│
└── Notifications
```

No implementar esas funcionalidades ahora.

---

# 36. NO INVENTAR INFORMACIÓN

Regla crítica.

No inventar:

* Clientes.
* Testimonios.
* Métricas.
* Número de usuarios.
* Casos de éxito.
* Direcciones.
* Teléfonos.
* Correos.
* Redes sociales.
* Premios.
* Certificaciones.

Si una información todavía no existe, utilizar placeholder o dejarla fuera.

---

# 37. CRITERIOS DE ACEPTACIÓN

La landing estará lista cuando:

* [ ] React funcionando.
* [ ] Tailwind funcionando.
* [ ] Navbar responsive.
* [ ] Hero implementado.
* [ ] CTA funcionales.
* [ ] Problem section.
* [ ] Solution section.
* [ ] Services section.
* [ ] How It Works.
* [ ] Benefits.
* [ ] PEVLYN Web.
* [ ] Pricing.
* [ ] FAQ funcional.
* [ ] Contact form.
* [ ] Final CTA.
* [ ] Footer.
* [ ] Mobile responsive.
* [ ] Tablet responsive.
* [ ] Desktop responsive.
* [ ] SEO básico.
* [ ] Accesibilidad básica.
* [ ] Sin información ficticia presentada como real.
* [ ] Código organizado.
* [ ] Componentes reutilizables.
* [ ] Sin errores de consola.
* [ ] Sin overflow horizontal.
* [ ] Build de producción funcionando.

---

# 38. DEFINICIÓN DE DONE

La primera versión se considera terminada cuando podamos:

1. Ejecutarla localmente.
2. Abrirla en desktop.
3. Abrirla en móvil.
4. Navegar todas las secciones.
5. Utilizar el formulario.
6. Accionar los CTA.
7. Ver correctamente los planes.
8. Presentársela a un negocio real.
9. Utilizarla como herramienta comercial de PEVLYN.

---

# 39. PRÓXIMO PASO

Después de completar esta landing:

```text
LANDING v0.1
     ↓
Deploy
     ↓
Dominio
     ↓
WhatsApp Business
     ↓
Primeros prospectos
     ↓
Primer cliente
     ↓
Feedback
     ↓
PEVLYN Web v0.2
     ↓
Identificación de funcionalidades repetidas
     ↓
PEVLYN Agenda MVP
```

---

# 40. PRINCIPIO FUNDAMENTAL

> **No construir por construir.**

Cada funcionalidad debe responder a una necesidad real del negocio o a una necesidad comercial de PEVLYN.

El objetivo de esta landing no es demostrar cuánto código podemos escribir.

El objetivo es:

> **Conseguir nuestro primer cliente.**

---

## PEVLYN

**Business Technology**

**Simplifica. Automatiza. Crece.**
