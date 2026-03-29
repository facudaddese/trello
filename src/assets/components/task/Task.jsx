import { useSortable } from "@dnd-kit/sortable"
import { CSS } from "@dnd-kit/utilities";

const Task = ({ id, tarea, onUpdate, onDelete }) => {

    const { attributes, listeners, setNodeRef, transition, transform } = useSortable({ id });

    const style = {
        transform: CSS.Transform.toString(transform),
        transition
    }

    return (
        <div key={id} className="flex justify-between shadow-xl p-2 border rounded-[10px] border-gray-400 cursor-pointer">
            <div {...attributes} {...listeners} ref={setNodeRef} style={style} className="flex flex-1 wrap-break-word tarea">
                {tarea}
            </div>
            <div className="flex gap-2">
                <span onClick={() => onUpdate(id)} className="material-symbols-outlined">edit</span>
                <span onClick={() => onDelete(id)} className="material-symbols-outlined">delete</span>
            </div>
        </div>
    )
}

export default Task