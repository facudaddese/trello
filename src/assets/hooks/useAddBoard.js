import { useState } from "react";

export const useAddBoard = () => {

    const [add, setAdd] = useState(false);

    const handleAdd = () => { setAdd(!add); }

    return { add, handleAdd }
}
