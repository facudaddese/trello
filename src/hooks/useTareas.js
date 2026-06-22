import { useEffect, useState } from "react";
import { useLocalStorage } from "./useLocalStorage";

export const useTareas = (input, setInput) => {

    const { storedValue, setLocalStorage } = useLocalStorage("array", []);
    const [array, setArray] = useState(storedValue);

    const handleArray = () => {
        if (input.trim() === '') return;

        const newArray = [...array, { id: crypto.randomUUID(), tarea: input }];

        setArray(newArray);
        setLocalStorage(newArray);
        setInput("");
    }

    const handleUpdateTask = (id, newValue) => {
        const newArray = array.map((t) => t.id === id ? { ...t, tarea: newValue } : t);

        setArray(newArray);
        setLocalStorage(newArray);
    }

    const handleDeleteTask = (id) => {
        const newArray = array.filter((t) => t.id !== id);

        setArray(newArray);
        setLocalStorage(newArray);
    }

    useEffect(() => {
        setLocalStorage(array);
    }, [array, setLocalStorage]);

    return { array, setArray, handleArray, handleUpdateTask, handleDeleteTask }
}
