import { closestCorners, DndContext, DragOverlay } from "@dnd-kit/core";
import Aside from "../aside/Aside";
import Board from "../board/Board";
import Footer from "../footer/Footer";
import './MainLayout.css'
import { useDragStart } from "../../hooks/useDragStart";
import { useDragEnd } from "../../hooks/useDragEnd"
import Task from "../task/Task";
import ItemBoard from "../ItemBoard/ItemBoard";

const MainLayout = () => {

    const { active, handleDragStart } = useDragStart();
    const { handleDragEnd } = useDragEnd();

    return (
        <div className="grid h-dvh p-4 gap-x-3 container">
            <DndContext collisionDetection={closestCorners} onDragStart={handleDragStart} onDragEnd={handleDragEnd}>
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
            <Footer />
        </div>
    )
}

export default MainLayout