import { BoardContext } from "../components/boardContext/BoardContext";
import { useContext, useState } from "react";

export const useDragStart = () => {

    const [active, setActive] = useState(null);
    const { array, arrayColumns } = useContext(BoardContext);

    const handleDragStart = ({ active }) => {
        setActive(array.find((el) => el.id === active.id) || arrayColumns.find((el) => el.id === active.id));
    }

    return { active, handleDragStart }
}
