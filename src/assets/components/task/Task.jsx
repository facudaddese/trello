import { useSortable } from "@dnd-kit/sortable"
import { CSS } from "@dnd-kit/utilities";

const Task = ({ id, tarea }) => {

    const { attributes, listeners, setNodeRef, transition, transform } = useSortable({ id });

    const style = {
        transform: CSS.Transform.toString(transform),
        transition
    }

    return (
        <div {...attributes} {...listeners} ref={setNodeRef} style={style} key={id} className="shadow-xl tarea wrap-break-word p-2 border rounded-[10px] border-gray-400 cursor-pointer">{tarea}</div>
    )
}

export default Task