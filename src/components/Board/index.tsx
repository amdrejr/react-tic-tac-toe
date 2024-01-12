import Player from '../../objects/Player';
import './styles.css'

const Board = () => {
    return (
        <section className='board-container'>
            <main className="board">
                <Player player='x'/>
                <Player player='x'/>
                <Player player='x'/>
                <Player player='o'/>
                <Player player='x'/>
                <Player player='x'/>
                <Player player='x'/>
                <Player player='o'/>
                <Player player='o'/>
            </main>
        </section>
    )
}

export default Board;