import { useContext } from "react"
import Input from "../input/Input"
import { BoardContext } from "../boardContext/BoardContext"
import './Aside.css'
import Task from "../../components/task/Task"
import { SortableContext, verticalListSortingStrategy } from "@dnd-kit/sortable"

const Aside = () => {

    const { array } = useContext(BoardContext);

    return (
        <aside className="gap-4 flex flex-col flex-nowrap rounded-[20px] border-gray-300 w-77 [grid-area:aside] overflow-hidden bg-sky-100">
            <Input />
            <div className={`flex tareas-container ${array.length === 0 ? "h-[50vh] items-center justify-center" : "flex-col gap-3 pb-3 pl-2 pr-2"}`}>
                <SortableContext items={array} strategy={verticalListSortingStrategy}>
                    {
                        array.length === 0 ? <h3>Consolida tus tareas por hacer</h3> : array.map((el) => (<Task key={el.id} id={el.id} tarea={el.tarea} />))
                    }
                </SortableContext>
            </div>
        </aside>
    )
}

export default Aside