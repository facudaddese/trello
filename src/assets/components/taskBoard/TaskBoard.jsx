import { useSortable } from "@dnd-kit/sortable"
import { CSS } from "@dnd-kit/utilities";

const TaskBoard = ({ tarea, id }) => {

    const { attributes, listeners, setNodeRef, transform, transition } = useSortable({ id });

    const style = {
        transform: CSS.Transform.toString(transform),
        transition
    }

    return (
        <div className="flex items-center gap-3 border border-gray-300 p-2 rounded-[10px] hover:border-gray-500 cursor-pointer">
            <input type="checkbox" name="" id="" className="w-4 h-4 cursor-pointer" />
            <div {...attributes} {...listeners} ref={setNodeRef} style={style} className="wrap-break-word w-full">
                {tarea}
            </div>
        </div>
    )
}

export default TaskBoard