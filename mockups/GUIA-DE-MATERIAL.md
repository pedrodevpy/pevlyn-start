# Material para vídeo y folleto — PEVLYN Agenda

Capturas tomadas del producto funcionando, con el negocio de demostración
**Barbería Nórdica**. Para regenerarlo antes de grabar:

```bash
cd backend && uv run python manage.py seed_demo --reset
```

> **Antes de publicar nada:** todo lo que se ve es un negocio inventado con
> datos inventados. No hay clientes reales todavía. No presentes ninguna cifra
> —de negocios, de reservas, de ahorro de tiempo— como si fuera medida: no lo
> es. Habla de lo que el producto hace, no de resultados que aún no existen.

---

## 1 · El recorrido del cliente final

Es la parte que más vende, porque es la que ve el cliente de tu cliente. Está
pensada para el móvil: así es como se abre un enlace que llega por WhatsApp.

| Captura | Qué enseña | El mensaje |
|---|---|---|
| `cliente-movil/01-pagina-del-negocio.jpg` | Página pública con servicios y precios | **El negocio tiene su propia dirección.** `pevlyn.com/barberia-nordica`, sin instalar nada |
| `cliente-movil/02-elegir-hora.jpg` | Horas libres reales | **Solo se ofrece lo que está libre de verdad.** Salen de los horarios del profesional menos lo ya reservado |
| `cliente-movil/03-datos-y-habeas-data.jpg` | Nombre, teléfono y autorización | **Habeas Data desde el primer día.** Ley 1581, no un añadido posterior |
| `cliente-movil/04-cita-confirmada.jpg` | Confirmación inmediata | **Sin cuenta, sin contraseña, sin app.** Cuatro pasos |
| `cliente-movil/05-gestionar-o-cancelar.jpg` | Consultar y cancelar | **El cliente se gestiona solo.** Menos llamadas al negocio |
| `cliente-movil/06-correo-de-confirmacion.txt` | El correo que recibe | Lleva el enlace que es su única llave |

**Para el vídeo:** grabar este recorrido entero en una sola toma, en móvil,
sin cortes. Dura menos de treinta segundos y es el argumento más fuerte que
hay: se entiende sin explicar nada.

---

## 2 · El panel del negocio

| Captura | Qué enseña | El mensaje |
|---|---|---|
| `negocio/01-resumen-del-dia.jpg` | Citas de hoy y de la semana | Lo primero al entrar: cuántas citas tienes hoy |
| `negocio/02-agenda-dia.jpg` | Agenda con cabecera | La pantalla donde se vive el día |
| `negocio/03-agenda-dia-completo.jpg` | Día entero, de 6:00 a 20:00 | **Dos citas a la misma hora se ponen lado a lado**, no una encima de otra |
| `negocio/04-agenda-semana.jpg` | Vista semanal | Toda la semana de un vistazo |
| `negocio/05-clientes-e-importacion.jpg` | Directorio e importación CSV | **Te traes tus clientes de la hoja de cálculo.** El freno número uno para cambiarse |
| `negocio/06-historial-de-cliente.jpg` | Historial por persona | **Esto es lo que un cuaderno no hace:** qué se hizo, cuándo, con quién y cuánto pagó |
| `negocio/07-catalogo-de-servicios.jpg` | Servicios con duración y precio | Cada servicio con sus márgenes y quién lo presta |
| `negocio/08-equipo-y-horarios.jpg` | Equipo y horario semanal | **Un profesional no necesita cuenta para recibir citas** |
| `negocio/09-configuracion-de-agenda.jpg` | Reglas de la agenda | El negocio decide cómo se le reserva, no nosotros |
| `negocio/10-seguridad-y-color.jpg` | Segundo factor y color propio | **Segundo factor** y la agenda con el color de su marca |
| `negocio/11-planes-y-consumo.jpg` | Plan actual y consumo | Qué incluye su plan y cuánto lleva usado |

---

## 3 · La consola de PEVLYN

No es para el folleto del cliente. Sirve para hablar con inversores o socios:
enseña que hay una plataforma detrás, no una aplicación suelta.

| Captura | Qué enseña |
|---|---|
| `consola/01-consola-interna.jpg` | Administración de todos los negocios |
| `consola/02-suscripciones.jpg` | Quién tiene qué plan y en qué estado |

---

## Lo que NO conviene prometer todavía

Decirlo ahora evita quedar mal después:

- **Recordatorios por WhatsApp o SMS.** El plan Pro ya los **incluye como
  derecho**, y así aparece en el panel, pero la funcionalidad no está
  construida: necesita empresa constituida para darse de alta con los
  proveedores. En el folleto se pueden anunciar como parte de Pro siempre que
  diga **«próximamente»**, igual que lo dice el producto. Sin esa palabra,
  sería vender algo que hoy no se entrega.
- **Pago en línea de la suscripción.** El modelo de planes existe; la pasarela
  no. Hoy los planes los asigna PEVLYN a mano.
- **Varias sedes.** Un negocio, una agenda.
- **Aplicación móvil.** Es una página web, y funciona bien en el móvil — pero
  no hay nada que descargar. Mejor presentarlo como ventaja que esconderlo.

## Lo que sí se puede afirmar sin exagerar

- Dos personas no pueden reservar la misma hora. No es una comprobación en el
  código: lo impide la base de datos.
- Las horas se muestran siempre en la zona del negocio, nunca en la de quien
  mira.
- Los precios están en pesos, en enteros. Nada de redondeos raros.
- El cliente no necesita cuenta, ni contraseña, ni instalar nada.
- La autorización de datos se pide de entrada, como exige la Ley 1581.
