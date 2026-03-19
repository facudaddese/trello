import { useState } from "react";

export const useTitulo = () => {

    const [titulo, setTitulo] = useState();

    const handleTitulo = () => {
        setTitulo
    }

    return { titulo, handleTitulo }
}
