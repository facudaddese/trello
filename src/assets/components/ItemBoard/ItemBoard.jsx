import { useSortable } from "@dnd-kit/sortable"
import { CSS } from "@dnd-kit/utilities";

const ItemBoard = ({ id, label, tareas }) => {

    const { attributes, listeners, setNodeRef, transition, transform } = useSortable({ id });

    const style = {
        transform: CSS.Transform.toString(transform),
        transition
    }

    return (
        <div {...attributes} {...listeners} ref={setNodeRef} style={style} className="p-2 gap-4 bg-(--color-blanco) rounded-[10px] border min-w-57 hover:cursor-pointer" >
            <div className="flex items-center justify-between">
                <h2>{label}</h2>
                <div className='flex gap-x-2 items-center'>
                    <span className="material-symbols-outlined">edit</span>
                    <span className="material-symbols-outlined cursor-pointer">delete</span>
                </div>
            </div>
            <div className="flex flex-col p-2 gap-3">
                {
                    tareas.map((el) => (
                        <div key={el.id} className="border border-gray-300 p-2 rounded-[10px] wrap-break-word">{el.tarea}</div>
                    ))
                }
            </div>
        </div>
    )
}

export default ItemBoard