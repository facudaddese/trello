import { useState } from "react"

export const useColumns = () => {

    const [arrayColumns, setArrayColumns] = useState([{ id: `col:${crypto.randomUUID()}`, label: "Titulo por defecto", tareas: [] }]);

    const handleArrayColumns = () => { setArrayColumns(arrayColumns => [...arrayColumns, { id: `col:${crypto.randomUUID()}`, label: "Titulo por defecto", tareas: [] }]); }

    const handleDeleteColumns = (id) => { setArrayColumns(arrayColumns => arrayColumns.filter((c) => c.id !== id)); }

    return { arrayColumns, setArrayColumns, handleArrayColumns, handleDeleteColumns }
}
