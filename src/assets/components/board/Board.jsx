import { useTitulo } from '../../hooks/useTitulo'
import BoardContainer from '../boardContainer/BoardContainer'
import TitleBoard from '../titleBoard/TitleBoard'

const Board = () => {

    const { handleTitle } = useTitulo();

    return (
        <section className="overflow-hidden [grid-area:board] rounded-[20px] bg-[linear-gradient(150deg,rgba(9,9,121,1)_0%,rgba(5,95,178,1)_0%,rgba(3,137,205,1)_41%,rgba(0,212,255,1)_100%)]">
            <TitleBoard titulo="Titulo board" onClick={handleTitle} />
            <BoardContainer />
        </section>
    )
}

export default Board