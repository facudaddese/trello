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

        // Reordeno las columnas
        if (isActiveColumn) {
            setArrayColumns(arrayMove(arrayColumns, arrayColumns.findIndex((col) => col.id === active.id), arrayColumns.findIndex((col) => col.id === over.id)));
        } else
            //Arrastro las tareas del aside hacia las columnas (vacias)
            if (tarea && isOverColumn) {
                setArray(array.filter((el) => el.id !== active.id));
                setArrayColumns(arrayColumns =>
                    arrayColumns.map((col) => {
                        if (col.id !== over.id) return col;
                        return { ...col, tareas: [...col.tareas, tarea] }
                    })
                )
            } else
                //Arrastro las tareas del aside hacia las columnas
                if (tarea && columna) {
                    setArray(array.filter((el) => el.id !== active.id));
                    setArrayColumns(arrayColumns =>
                        arrayColumns.map((col) => {
                            if (col.id !== columna.id) return col;
                            return { ...col, tareas: [...col.tareas, tarea] }
                        })
                    )
                } else
                    //Arrastro las tareas de columna en columna
                    if (!tarea && columna) {
                        const columnaOrigen = arrayColumns.find((col) => col.tareas.some((t) => t.id === active.id));

                        if (!columnaOrigen) return;

                        const tareaEnColumna = columnaOrigen.tareas.find((t) => t.id === active.id);

                        setArrayColumns(arrayColumns =>
                            arrayColumns.map((col) => {
                                if (col.id === columnaOrigen.id && col.id === columna.id) {
                                    return { ...col, tareas: arrayMove(col.tareas, col.tareas.findIndex((t) => t.id === active.id), col.tareas.findIndex((t) => t.id === over.id)) }
                                }
                                if (col.id === columnaOrigen.id) {
                                    return { ...col, tareas: col.tareas.filter((t) => t.id !== active.id) }
                                }
                                if (col.id === columna.id) {
                                    return { ...col, tareas: [...col.tareas, tareaEnColumna] }
                                }
                                return col;
                            })
                        )
                    } else
                        //Arrastro las tareas de columna en columna (vacias)
                        if (!tarea && isOverColumn) {
                            const columnaOrigen = arrayColumns.find((col) => col.tareas.some((t) => t.id === active.id));

                            if (!columnaOrigen) return;

                            const tareaEnColumna = columnaOrigen.tareas.find((t) => t.id === active.id);

                            setArrayColumns(arrayColumns =>
                                arrayColumns.map((col) => {
                                    if (col.id === columnaOrigen.id) {
                                        return { ...col, tareas: col.tareas.filter((t) => t.id !== active.id) }
                                    }

                                    if (col.id === over.id) {
                                        return { ...col, tareas: [...col.tareas, tareaEnColumna] }
                                    }

                                    return col;
                                })
                            )
                        } else
                            // Arrastrar tareas desde las columnas al aside
                            if (!tarea && !columna) {
                                const columnaOrigen = arrayColumns.find((col) => col.tareas.some((t) => t.id === active.id));
                                if (!columnaOrigen) return;
                                const tareaEnAside = columnaOrigen.tareas.find((t) => t.id === active.id);
                                setArrayColumns(arrayColumns =>
                                    arrayColumns.map((col) => (
                                        { ...col, tareas: col.tareas.filter((t) => t.id !== active.id) }
                                    ))
                                );
                                setArray(array => [...array, tareaEnAside]);
                            }
                            else
                                //Reordeno las tareas del aside
                                if (tarea && !columna && !isOverColumn) {
                                    setArray(arrayMove(array, array.findIndex((el) => el.id === active.id), array.findIndex((el) => el.id === over.id)));
                                }
    }

    return { handleDragEnd }
}