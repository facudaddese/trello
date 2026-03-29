import { SortableContext, useSortable, verticalListSortingStrategy } from "@dnd-kit/sortable"
import { CSS } from "@dnd-kit/utilities";
import { useInput } from "../../hooks/useInput";
import TaskBoard from "../taskBoard/TaskBoard";
import { useDroppable } from "@dnd-kit/core";

const ItemBoard = ({ id, label, tareas, onClick }) => {

    const { attributes, listeners, setNodeRef, transition, transform } = useSortable({ id });
    const { input, handleInput } = useInput();
    const { setNodeRef: setDropRef } = useDroppable({ id: `drop:${id}` });

    const style = {
        transform: CSS.Transform.toString(transform),
        transition
    }

    return (
        <div ref={setNodeRef} style={style} className="p-2 gap-4 bg-(--color-blanco) max-w-100 rounded-[10px] border" >
            <div className="flex items-center justify-between">
                <input type="text" placeholder={`${label}`} value={input} onChange={handleInput} className="text-gray-500 wrap-break-word hover:outline outline-gray-300" />
                <div className='flex gap-x-2 items-center'>
                    <span {...attributes} {...listeners} className="material-symbols-outlined cursor-grab">drag_indicator</span>
                    <span onClick={() => onClick(id)} className="material-symbols-outlined cursor-pointer">close</span>
                </div>
            </div>
            <div ref={setDropRef} className="flex flex-col pt-4 pb-4 gap-3 overflow-y-auto max-h-120">
                <SortableContext items={tareas} strategy={verticalListSortingStrategy}>
                    {
                        tareas.length === 0 ?
                            <div className="flex items-center gap-2 text-gray-500">
                                <span className="material-symbols-outlined">add</span>
                                <span>Añade una tarea</span>
                            </div>
                            : tareas.map((el) => (<TaskBoard key={el.id} tarea={el.tarea} id={el.id} />))
                    }
                </SortableContext>
            </div>
        </div >
    )
}

export default ItemBoard