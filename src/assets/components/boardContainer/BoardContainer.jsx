import ItemBoard from "../ItemBoard/ItemBoard"
import AddBoard from "../addBoard/AddBoard"
import './BoardContainer.css'

const BoardContainer = () => {
    return (
        <div className="flex items-start flex-nowrap h-[85%] p-4 gap-x-6 overflow-x-auto tareas-en-board">
            <ItemBoard tarea="Este mes" />
            <ItemBoard tarea="Proximamente" />
            <AddBoard label="Añade otra lista" />
        </div>
    )
}

export default BoardContainer