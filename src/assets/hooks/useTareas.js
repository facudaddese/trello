import { useState } from "react";

export const useTareas = (input, setInput) => {

    const [array, setArray] = useState([]);

    const handleArray = () => {
        if (input.trim() === '') return;

        setArray(array => [...array, { id: crypto.randomUUID(), tarea: input }]);

        setInput("");
    }

    const handleUpdateTask = (id) => {
        console.log(id);

    }

    const handleDeleteTask = (id) => { setArray(array => array.filter((t) => t.id !== id)); }

    return { array, setArray, handleArray, handleUpdateTask, handleDeleteTask }
}
