const Input = ({ input, handleInput, handleArray }) => {

    return (
        <div className="flex gap-7 p-3 justify-center rounded-[10px] ">
            <input type="text" placeholder="Ingrese una tarea..." value={input} onChange={handleInput} onKeyDown={({ key }) => { if (key === "Enter") handleArray(); }} className="border-b border-gray-300 outline-none" />
            <button type='button' onClick={handleArray} className="hover:outline outline-blue-600 bg-(--color-azul) p-2 rounded-lg cursor-pointer text-center">Agregar</button>
        </div>
    )
}

export default Input