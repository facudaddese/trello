import { useSortable } from "@dnd-kit/sortable"
import { CSS } from "@dnd-kit/utilities";
import { useState } from "react";

const Task = ({ id, tarea, onUpdate, onDelete }) => {

    const { attributes, listeners, setNodeRef, transition, transform } = useSortable({ id });
    const [edit, setEdit] = useState(false);
    const [input, setInput] = useState(tarea);

    const style = {
        transform: CSS.Transform.toString(transform),
        transition
    }

    const handleInput = ({ target }) => { setInput(target.value); }

    const handleConfirm = (e) => {
        if (e.key !== "Enter") return;

        onUpdate(id, input);

        setEdit(false);
    }

    return (
        <div key={id} className="flex justify-between shadow-xl p-2 border rounded-[10px] border-gray-400 cursor-pointer">
            <div {...attributes} {...listeners} ref={setNodeRef} style={style} className="flex flex-1 wrap-break-word tarea">
                {
                    edit ?
                        <input autoFocus type="text" value={input} onBlur={() => { onUpdate(id, input); setEdit(false); }} onChange={handleInput} onPointerDown={(e) => e.stopPropagation()} onKeyDown={(e) => { e.stopPropagation(); handleConfirm(e); }} /> : tarea
                }
            </div>
            <div className="flex gap-2">
                <span onClick={() => setEdit(!edit)} className="material-symbols-outlined">edit</span>
                <span onClick={() => onDelete(id)} className="material-symbols-outlined">delete</span>
            </div>
        </div>
    )
}

export default Task