const TitleBoard = ({ titulo, input, handleInput }) => {

    return (
        <div className="flex p-4 gap-2 items-center border-[#045fa9] border-2 rounded-tl-[20px] rounded-tr-[20px]">
            <input size={input.length} className="wrap-break-word font-bold first-letter:uppercase text-(--color-blanco) hover:outline outline-gray-300 min-w-0" type="text" placeholder={titulo} value={input} onChange={handleInput} />
        </div>
    )
}

export default TitleBoard