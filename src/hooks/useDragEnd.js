import { arrayMove } from "@dnd-kit/sortable";
import { useContext } from "react";
import { BoardContext } from "../components/boardContext/BoardContext";

export const useDragEnd = () => {

    const { array, setArray, arrayColumns, setArrayColumns } = useContext(BoardContext);

    const handleDragEnd = ({ active, over }) => {
        if (!over) return;

        const isActiveColumn = active.id.includes("col");
        const isOverColumn = over.id.includes("col");

        const tarea = array.find((el) => el.id === active.id);
        const columna = arrayColumns.find((col) => col.tareas.some((t) => t.id === over.id));

        const columnaOrigen = arrayColumns.find((col) => col.tareas.some((t) => t.id === active.id));
        const columnaDestino = arrayColumns.find((col) => col.tareas.some((t) => t.id === over.id));

        //Reordeno las tareas del aside
        if (tarea && !columna && !isOverColumn) {
            setArray(arrayMove(array, array.findIndex((el) => el.id === active.id), array.findIndex((el) => el.id === over.id)));
        }

        // Reordeno las columnas
        if (isActiveColumn) {
            setArrayColumns(arrayMove(arrayColumns, arrayColumns.findIndex((col) => col.id === active.id), arrayColumns.findIndex((col) => col.id === over.id)));
        }

        // Reordeno las tareas dentro de la misma columna
        if (columnaOrigen && columnaDestino && columnaOrigen.id === columnaDestino.id) {
            setArrayColumns(arrayColumns =>
                arrayColumns.map((col) => {
                    if (col.id !== columnaOrigen.id) return col;
                    return { ...col, tareas: arrayMove(col.tareas, col.tareas.findIndex((t) => t.id === active.id), col.tareas.findIndex((t) => t.id === over.id)) };
                }));
        }
    }

    return { handleDragEnd }
}