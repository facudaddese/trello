const TitleBoard = ({ titulo, input, handleInput }) => {

    return (
        <div className="flex p-4 gap-2 items-center border-[#045fa9] border-2 rounded-tl-[20px] rounded-tr-[20px]">
            <input size={input.length} className="font-bold first-letter:uppercase text-(--color-blanco) hover:outline outline-gray-300" type="text" placeholder={titulo} value={input} onChange={handleInput} />
            <span className="material-symbols-outlined">edit</span>
        </div>
    )
}

export default TitleBoard