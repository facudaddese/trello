const AddBoard = ({ label }) => {

    return (
        <div className="flex items-center shrink-0 justify-start p-2 gap-4 rounded-[10px] border min-w-57 cursor-pointer">
            <span className="material-symbols-outlined text-(--color-blanco)">add</span>
            <strong className='text-(--color-blanco)'>{label}</strong>

        </div>
    )
}

export default AddBoard