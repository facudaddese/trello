
# Trello

Aplicación estilo Trello construida con React. Los usuarios pueden crear tareas, organizarlas en columnas personalizadas y reordenarlas mediante drag & drop, todo con persistencia en LocalStorage para que el estado se mantenga entre sesiones.[Ver sitio](https://trello-by-daddese.netlify.app/)

---

## Funcionalidades

-   **Drag & drop** para mover tareas entre columnas, reordenarlas y arrastrarlas de vuelta al aside
-   **Creación de tareas** desde el aside con input y botón o presionando Enter
-   **Edición de tareas** inline con confirmación por Enter o pérdida de foco
-   **Eliminación de tareas** desde el aside y desde cada columna
-   **Columnas dinámicas** — crear, renombrar y eliminar columnas
-   **Reordenamiento de columnas** mediante drag & drop
-   **Persistencia en LocalStorage** — tareas, columnas y título del board se mantienen al recargar
-   **Estado global** manejado con Context API

---

## Tecnologías utilizadas

-   **React** — Biblioteca principal para la construcción de la UI
-   **Vite** — Entorno de desarrollo y bundler
-   **Context API** — Manejo del estado global
-   **Custom Hooks** — Lógica reutilizable encapsulada (`useTareas`, `useColumns`, `useInput`, `useLocalStorage`, `useDragStart`, `useDragEnd`, `useDragOver`)
-   **@dnd-kit** — Librería de drag & drop (`@dnd-kit/core`, `@dnd-kit/sortable`)
-   **LocalStorage** — Persistencia del estado entre sesiones
-   **Tailwind CSS** — Estilos y diseño responsive

---

## Autor
 [Facundo D'addese](https://www.linkedin.com/in/facundodaddese/) estudiante de **Licenciatura en Sistemas** – Universidad Nacional de Lanús.

[CV](https://drive.google.com/file/d/1dplrGFP7DhLXLQCuj2sA-66sAV0yER_g/view) | facundo.daddese19@gmail.com
