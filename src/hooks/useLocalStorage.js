import { useState } from "react";

export const useLocalStorage = (key, initialValue = {}) => {

    const [storedValue, setStoredValue] = useState(() => localStorage.getItem(key) ? JSON.parse(localStorage.getItem(key)) : initialValue);

    const setLocalStorage = (value) => {
        try {
            setStoredValue(value);
            localStorage.setItem(key, JSON.stringify(value));
        } catch (error) {
            console.error(error);
        }
    }

    return { storedValue, setLocalStorage }
}