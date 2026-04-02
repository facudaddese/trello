import { useEffect, useState } from "react"
import { useLocalStorage } from "./useLocalStorage";

export const useColumns = () => {

    const { storedValue, setLocalStorage } = useLocalStorage("arrayColumns", [{ id: `col:${crypto.randomUUID()}`, label: "Primera columna", tareas: [] }]);
    const [arrayColumns, setArrayColumns] = useState(storedValue);

    const handleArrayColumns = () => {
        const newArrayColumns = [...arrayColumns, { id: `col:${crypto.randomUUID()}`, label: "Elige un título", tareas: [] }]

        setArrayColumns(newArrayColumns);
        setLocalStorage(newArrayColumns);
    }

    const handleUpdateColumns = (id, newLabel) => {
        const newArrayColumns = arrayColumns.map((col) => col.id === id ? { ...col, label: newLabel } : col);

        setArrayColumns(newArrayColumns);
        setLocalStorage(newArrayColumns);
    }

    const handleDeleteColumns = (id) => {
        const newArrayColumns = arrayColumns.filter((c) => c.id !== id);

        setArrayColumns(newArrayColumns);
        setLocalStorage(newArrayColumns);
    }

    useEffect(() => {
        setLocalStorage(arrayColumns);
    }, [arrayColumns, setLocalStorage]);

    return { arrayColumns, setArrayColumns, handleArrayColumns, handleUpdateColumns, handleDeleteColumns }
}
