import { useState } from "react";

export const useTareas = (input, setInput) => {

    const [array, setArray] = useState([]);

    const handleArray = () => {
        if (input.trim() === '') return;

        setArray([...array, { id: crypto.randomUUID(), tarea: input }]);
        setInput("");
    }

    return { array, setArray, handleArray }
}
