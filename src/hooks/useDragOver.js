import { useContext } from "react";
import { BoardContext } from "../components/boardContext/BoardContext";

export const useDragOver = () => {

    const { array, setArray, arrayColumns, setArrayColumns } = useContext(BoardContext);

    const handleDragOver = ({ active, over }) => {
        if (!over) return;
        if (active.id === over.id) return;

        const tarea = array.find((t) => t.id === active.id);
        const columnaOrigen = arrayColumns.find((col) => col.tareas.some((t) => t.id === active.id));
        const columnaDestino = arrayColumns.find((col) => col.id === over.id || over.id === `drop:${col.id}` || col.tareas.some((t) => t.id === over.id));

        // Arrastrar tareas desde el aside
        if (tarea && columnaDestino) {
            const yaEstaEnColumna = columnaDestino.tareas.some((t) => t.id === active.id);

            if (yaEstaEnColumna) return;

            //Elimino la tarea del aside
            setArray(array => array.filter((el) => el.id !== active.id));

            //Agrego la tarea a la columna
            setArrayColumns(arrayColumns => arrayColumns.map((col) => {
                if (col.id !== columnaDestino.id) return col;
                return { ...col, tareas: [...col.tareas, tarea] };
            }));
        }

        // Arrastrar tareas de columna en columna
        if (!tarea && columnaOrigen && columnaDestino && columnaOrigen.id !== columnaDestino.id) {
            const tareaMovida = columnaOrigen.tareas.find((t) => t.id === active.id);

            if (!tareaMovida) return;

            setArrayColumns(arrayColumns => arrayColumns.map((col) => {
                //Elimino la tarea de la columna origen
                if (col.id === columnaOrigen.id) return { ...col, tareas: col.tareas.filter((t) => t.id !== active.id) };

                //Agrego la tarea en columna destino
                if (col.id === columnaDestino.id) return { ...col, tareas: [...col.tareas, tareaMovida] };

                return col;
            }));
        }

        // Arrastrar tareas desde las columnas al aside
        if (!tarea && columnaOrigen && !columnaDestino) {
            //Busco la columna que contenga tareas
            const columnaOrigen = arrayColumns.find((col) => col.tareas.some((t) => t.id === active.id));

            if (!columnaOrigen) return;

            //Dentro de la columna, busco la tarea 
            const tareaEnAside = columnaOrigen.tareas.find((t) => t.id === active.id);
            if (!tareaEnAside) return;

            //Verifico que el destino sea el aside o una tarea dentro                                
            const isOverAside = over.id === "aside" || array.some((el) => el.id === over.id);
            if (!isOverAside) return;

            //Elimino la tarea de la columna
            setArrayColumns(arrayColumns =>
                arrayColumns.map((col) => (
                    { ...col, tareas: col.tareas.filter((t) => t.id !== active.id) }
                ))
            );

            //Agrego la tarea nuevamente al aside
            setArray(array => [...array, tareaEnAside]);
        }
    }

    return { handleDragOver };
};