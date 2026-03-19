const ItemBoard = ({ tarea }) => {
    return (
        <div className="flex items-center shrink-0 justify-between p-2 gap-4 bg-(--color-blanco) rounded-[10px] border min-w-57" >
            <h2>{tarea}</h2>
            <div className='flex gap-x-2 items-center'>
                <span className="material-symbols-outlined cursor-pointer">delete</span>
            </div>
        </div >
    )
}

export default ItemBoard