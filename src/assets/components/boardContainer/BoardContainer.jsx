import ItemBoard from "../ItemBoard/ItemBoard"
import AddBoard from "../addBoard/AddBoard"
import './BoardContainer.css'
import { horizontalListSortingStrategy, SortableContext } from "@dnd-kit/sortable"
import { useContext } from "react"
import { BoardContext } from "../boardContext/BoardContext"

const BoardContainer = () => {

    const { arrayColumns } = useContext(BoardContext);

    return (
        <div className="flex items-start flex-nowrap h-[85%] p-4 gap-x-6 overflow-x-auto tareas-en-board">
            <SortableContext items={arrayColumns} strategy={horizontalListSortingStrategy}>
                {
                    arrayColumns.map((el) => (<ItemBoard key={el.id} id={el.id} label={el.label} tareas={el.tareas} />))
                }
            </SortableContext>
            <AddBoard label="Añade otra lista" />
        </div>
    )
}

export default BoardContainer