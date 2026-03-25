import { useState } from "react"

export const useColumns = () => {

    const [arrayColumns, setArrayColumns] = useState([{ id: `col:${crypto.randomUUID()}`, label: "Este mes", tareas: [] },{ id: `col:${crypto.randomUUID()}`, label: "Este año", tareas: [] }]);

    const handleArrayColumns = (label) => {
        setArrayColumns([...arrayColumns, { id: `col:${crypto.randomUUID()}`, label, tareas: [] }]);
    }

    return { arrayColumns, setArrayColumns, handleArrayColumns }
}
