import Player from '../../objects/Player';
import './styles.css'

const Board = () => {
    return (
        <div className="board">
            <Player player='x' />
            <Player player='x'/>
            <Player player='x'/>
            <Player player='o'/>
        </div>
    )
}

export default Board;