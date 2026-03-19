import { useState } from "react"

export const useInput = () => {

    const [input, setInput] = useState("");

    const handleInput = ({ target }) => { setInput(target.value); }

    return { input, setInput, handleInput }
}
