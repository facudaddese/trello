import Aside from "../aside/Aside";
import Board from "../board/Board";
import Footer from "../footer/Footer";
import './MainLayout.css'

const MainLayout = () => {
    return (
        <div className="grid h-dvh p-4 gap-x-3 container">
            <Aside />
            <Board />
            <Footer />
        </div>
    )
}

export default MainLayout