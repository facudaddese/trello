import { useState } from "react";

export const useTareas = (input, setInput) => {

    const [array, setArray] = useState([]);

    const handleArray = () => {
        if (input.trim() === '') return;
        setArray([...array, input]);
        setInput("");
    }

    return { array, handleArray }
}
