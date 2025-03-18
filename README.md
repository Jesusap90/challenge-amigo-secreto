# 🎁 Aplicación "Amigo Secreto"

Esta es una aplicación web simple e interactiva desarrollada con HTML, JavaScript y CSS, que permite registrar una lista de nombres de amigos y seleccionar uno al azar como "amigo secreto".

## 🧩 Funcionalidades

- ✅ **Agregar nombres**: Permite ingresar nombres de amigos a una lista (máximo 10).
- ⚠️ **Validaciones**:
  - No se permiten campos vacíos ni nombres que sean números.
  - Límite de 10 nombres por lista.
- 🎲 **Sorteo aleatorio**:
  - Una vez que haya al menos 2 nombres en la lista, se habilita el botón para sortear un nombre al azar.
- 🖥️ **Interfaz amigable**: Diseño simple e intuitivo con uso de fuentes de Google y elementos visuales.

## 🧪 ¿Cómo usar la aplicación?

1. Escribe el nombre de un amigo en el campo de texto.
2. Presiona el botón **"Añadir"** para agregarlo a la lista.
3. Repite hasta completar la lista (máximo 10 amigos).
4. Una vez agregados al menos dos nombres, presiona **"Sortear amigo"** para elegir uno al azar.

## 📁 Estructura de Archivos

- `index.html`: Estructura HTML de la aplicación, incluye el input, lista de nombres y botón de sorteo.
- `app.js`: Lógica de la aplicación en JavaScript.
- `style.css`: Estilos visuales de la interfaz.
- `assets/`: Carpeta de recursos gráficos como íconos e imágenes decorativas.

## 🧠 Lógica principal (JS)

```javascript
// Agregar nombre con validaciones
agregarAmigo()

// Actualiza visualmente la lista
actualizarLista()

// Habilita el botón de sorteo si hay mínimo 2 nombres
verificarPlayButton()

// Sortea un nombre al azar de la lista
sortearAmigo()
