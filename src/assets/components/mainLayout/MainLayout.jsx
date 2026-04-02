import { closestCorners, DndContext, DragOverlay, KeyboardSensor, PointerSensor, TouchSensor, useSensor, useSensors } from "@dnd-kit/core";
import Aside from "../aside/Aside";
import Board from "../board/Board";
import './MainLayout.css'
import { useDragStart } from "../../hooks/useDragStart";
import { useDragEnd } from "../../hooks/useDragEnd"
import Task from "../task/Task";
import ItemBoard from "../ItemBoard/ItemBoard";
import { sortableKeyboardCoordinates } from "@dnd-kit/sortable";
import { useDragOver } from "../../hooks/useDragOver";
import { useEffect, useState } from "react";

const MainLayout = () => {

    const [resize, setResize] = useState(innerWidth <= 650);

    const { active, handleDragStart } = useDragStart();
    const { handleDragEnd } = useDragEnd();
    const { handleDragOver } = useDragOver();
    const sensores = useSensors(
        useSensor(resize ? TouchSensor : PointerSensor),
        useSensor(KeyboardSensor, { coordinateGetter: sortableKeyboardCoordinates })
    );

    useEffect(() => {
        const handleResize = () => {
            setResize(innerWidth);
        }

        addEventListener("resize", handleResize);

        return () => removeEventListener("resize", handleResize);
    }, []);

    return (
        <div className="grid h-dvh w-full p-3 gap-x-3 overflow-x-hidden main-layout">
            <DndContext sensors={sensores} collisionDetection={closestCorners} onDragStart={handleDragStart} onDragEnd={handleDragEnd} onDragOver={handleDragOver}>
                <Aside />
                <Board />
                <DragOverlay style={{ opacity: 0.3, boxShadow: '0 10px 30px rgba(0,0,0,0.3)' }}>
                    {
                        active ? active.id.includes("col:") ? <ItemBoard id={active.id} label={active.label} tareas={active.tareas} />
                            : <Task id={active.id} tarea={active.tarea} />
                            : null
                    }
                </DragOverlay>
            </DndContext>
        </div>
    )
}

export default MainLayout