import { SortableContext, useSortable, verticalListSortingStrategy } from "@dnd-kit/sortable"
import { CSS } from "@dnd-kit/utilities";
import { useInput } from "../../hooks/useInput";
import TaskBoard from "../taskBoard/TaskBoard";
import { useDroppable } from "@dnd-kit/core";
import { useContext, useRef, useState } from "react";
import { BoardContext } from "../boardContext/BoardContext";

const ItemBoard = ({ id, label, tareas, onClick, onUpdate }) => {

    const { handleTaskToColumn } = useContext(BoardContext);
    const { attributes, listeners, setNodeRef, transition, transform } = useSortable({ id });
    const { input, handleInput } = useInput(label);
    const { setNodeRef: setDropRef } = useDroppable({ id: `drop:${id}` });
    const inputRef = useRef(null);
    const [newInput, setNewInput] = useState("");
    const [addingTask, setAddingTask] = useState(false);

    const style = {
        transform: CSS.Transform.toString(transform),
        transition
    }

    const handleConfirmTask = () => {
        if (newInput.trim() === "") {
            setAddingTask(!addingTask);
            return;
        }

        handleTaskToColumn(id, newInput);
        setNewInput("");
        setAddingTask(!addingTask);
    }

    return (
        <div ref={setNodeRef} style={style} className="p-2 gap-4 bg-(--color-blanco) max-w-100 rounded-[10px] border" >
            <div className="flex items-center justify-between">
                <input ref={inputRef} type="text" placeholder={`${label}`} onBlur={() => onUpdate(id, input)} value={input} onChange={handleInput} onKeyDown={({ key }) => { if (key === "Enter") inputRef.current?.blur(); }} onClick={() => { inputRef.current?.focus(); }} className="text-gray-500 wrap-break-word hover:outline outline-gray-300" />
                <div className='flex gap-x-2 items-center'>
                    <span {...attributes} {...listeners} className="material-symbols-outlined cursor-grab">drag_indicator</span>
                    <span onClick={() => onClick(id)} className="material-symbols-outlined cursor-pointer">close</span>
                </div>
            </div>
            <div ref={setDropRef} className="flex flex-col pt-4 pb-4 gap-3 overflow-y-auto max-h-120">
                <SortableContext items={tareas} strategy={verticalListSortingStrategy}>
                    {
                        tareas.map((el) => (<TaskBoard key={el.id} tarea={el.tarea} id={el.id} />))
                    }
                    {
                        addingTask &&
                        <div className="flex items-center gap-3 border border-gray-300 p-2 rounded-[10px]">
                            <input type="checkbox" className="w-4 h-4 cursor-pointer" />
                            <input autoFocus type="text" placeholder="Añade una tarea" value={newInput} onChange={({ target }) => setNewInput(target.value)} onKeyDown={({ key }) => { if (key === "Enter") handleConfirmTask(); }} onBlur={handleConfirmTask} className="wrap-break-word hover:outline outline-gray-300" />
                        </div>
                    }
                    <div onClick={() => setAddingTask(!addingTask)} className="flex items-center ml-2 mr-2 gap-2 text-gray-500 cursor-pointer">
                        <span className="material-symbols-outlined">add</span>
                        <span>Añade una tarea</span>
                    </div>

                </SortableContext>
            </div>
        </div >
    )
}

export default ItemBoard