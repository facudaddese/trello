const TitleBoard = ({ titulo, onClick }) => {

    return (
        <div onClick={onClick} className="flex p-4 gap-2 items-center border-[#045fa9] border-2 rounded-tl-[20px] rounded-tr-[20px] cursor-pointer">
            <h1 className='font-bold text-(--color-blanco)'>{titulo}</h1>
            <span className="material-symbols-outlined">edit</span>
        </div>
    )
}

export default TitleBoard