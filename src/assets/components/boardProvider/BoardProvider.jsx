import { BoardContext } from "../boardContext/BoardContext"
import MainLayout from "../mainLayout/MainLayout"
import { useInput } from "../../hooks/useInput"
import { useTareas } from "../../hooks/useTareas"

const BoardProvider = () => {

    const { input, setInput, handleInput } = useInput();
    const { array, handleArray } = useTareas(input, setInput);

    return (
        <BoardContext.Provider value={{ input, handleInput, array, handleArray }}>
            <MainLayout />
        </BoardContext.Provider>
    )
}

export default BoardProvider