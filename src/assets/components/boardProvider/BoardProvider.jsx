import { BoardContext } from "../boardContext/BoardContext"
import MainLayout from "../mainLayout/MainLayout"
import { useInput } from "../../hooks/useInput"
import { useTareas } from "../../hooks/useTareas"
import { useColumns } from "../../hooks/useColumns"

const BoardProvider = () => {

    const { input, setInput, handleInput } = useInput();
    const { array, setArray, handleArray } = useTareas(input, setInput);
    const { arrayColumns, setArrayColumns, handleArrayColumns } = useColumns();

    return (
        <BoardContext.Provider value={{ input, handleInput, array, setArray, handleArray, arrayColumns, setArrayColumns, handleArrayColumns }}>
            <MainLayout />
        </BoardContext.Provider>
    )
}

export default BoardProvider