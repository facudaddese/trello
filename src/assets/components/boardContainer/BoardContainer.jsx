import ItemBoard from "../ItemBoard/ItemBoard"
import AddBoard from "../addBoard/AddBoard"
import './BoardContainer.css'
import { horizontalListSortingStrategy, SortableContext } from "@dnd-kit/sortable"
import { useContext } from "react"
import { BoardContext } from "../boardContext/BoardContext"

const BoardContainer = () => {

    const { arrayColumns, handleArrayColumns, handleDeleteColumns } = useContext(BoardContext);

    return (
        <div className="flex min-w-0 w-full h-[75dvh] overflow-x-auto overflow-y-hidden items-start flex-nowrap p-4 gap-x-6 tareas-board">
            <SortableContext items={arrayColumns} strategy={horizontalListSortingStrategy}>
                {
                    arrayColumns.map((el) => (<ItemBoard key={el.id} onClick={handleDeleteColumns} id={el.id} label={el.label} tareas={el.tareas} />))
                }
            </SortableContext>
            <AddBoard label="Añade una lista" onClick={handleArrayColumns} />
        </div>
    )
}

export default BoardContainer