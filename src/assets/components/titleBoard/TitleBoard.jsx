import { useState, useRef } from "react";

const TitleBoard = ({ titulo, input, handleInput }) => {

    const [edit, setEdit] = useState(false);
    const inputRef = useRef(null);

    return (
        <div className="flex p-4 gap-2 items-center border-[#045fa9] border-2 rounded-tl-[20px] rounded-tr-[20px]">
            <input ref={inputRef} size={input.length} className="wrap-break-word font-bold first-letter:uppercase text-(--color-blanco) hover:outline outline-gray-300 min-w-0" type="text" placeholder={titulo} value={input} onChange={handleInput} onKeyDown={(e) => { if (e.key === "Enter") inputRef.current?.blur(); }} />
            <span onClick={() => { setEdit(!edit); inputRef.current?.focus(); }} className="material-symbols-outlined cursor-pointer">edit</span>
        </div>
    )
}

export default TitleBoard