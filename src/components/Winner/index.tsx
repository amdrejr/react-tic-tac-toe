import './styles.css';

import cross from '../../assets/imgs/xis.png';
import circle from '../../assets/imgs/circulo.png';
import trofeu from '../../assets/imgs/trofeu.png';

interface WinnerProps {
  winner: 'o' | 'x';
  resetGame: () => void;
}

const Winner = ({winner, resetGame} : WinnerProps) => {
    let actualWinner: string = '';
    
    if (winner === 'x') {
        actualWinner = cross;
    } else if (winner === 'o') {
        actualWinner = circle;
    } 

    return <section className='winner'>
        <img className='trofeu' src={trofeu} alt="troféu" />
        <p>The winner is:</p>
        <img className='img-winner' src={actualWinner} alt={`Winner is ${winner}`} />
        <button onClick={resetGame}>Reset Game</button>
    </section>
}


export default Winner;