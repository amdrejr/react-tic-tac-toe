import Board from '../../components/Board';
import Header from '../../components/Header';
import ShowEvents from '../../components/ShowEvents';
import './styles.css';

const Game = () => (
    <>
        <Header toLink='/about' />
        <main id='game'>
            <Board />
            <ShowEvents show={true} />
        </main>
    </>
)

export default Game;