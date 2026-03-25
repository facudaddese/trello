import { arrayMove } from "@dnd-kit/sortable";
import { useContext } from "react";
import { BoardContext } from "../components/boardContext/BoardContext";

export const useDragEnd = () => {

    const { array, setArray, arrayColumns, setArrayColumns } = useContext(BoardContext);

    const handleDragEnd = ({ active, over }) => {
        if (!over) return;

        const isActiveColumn = active.id.includes("col:");
        const isOverColumn = over.id.includes("col:");

        if (isActiveColumn && isOverColumn) {
            setArrayColumns(arrayMove(arrayColumns, arrayColumns.findIndex((el) => el.id === active.id), arrayColumns.findIndex((el) => el.id === over.id)));
        } else if (!isActiveColumn && isOverColumn) {
            const tarea = array.find((col) => col.id === active.id);

            setArray(array.filter((el) => el.id !== active.id));

            setArrayColumns(arrayColumns.map((col) => {
                if (col.id !== over.id) return col;
                return { ...col, tareas: [...col.tareas, tarea] }
            }))
        } else if (!isActiveColumn && !isOverColumn) {
            setArray(arrayMove(array, array.findIndex((el) => el.id === active.id), array.findIndex((el) => el.id === over.id)));
        }
    }

    return { handleDragEnd }
}
