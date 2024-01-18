import './styles.css';

import cross from '../../assets/imgs/xis.png';
import circle from '../../assets/imgs/circulo.png';
import trofeu from '../../assets/imgs/trofeu.png';

interface WinnerProps {
  winner: 'o' | 'x' | 'draw';
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
        {
            winner !== 'draw' ? 
            <>
                <img className='trofeu' src={trofeu} alt="troféu" />
                <p>The winner is:</p>
                <img className='img-winner' src={actualWinner} alt={`Winner is ${winner}`} />
            </>
            :
            <>
                <p className='draw'>Draw!</p>
                <span className='text-winner'>No winners..</span>
                <div className="draw-img-box">
                    <img src={cross} alt="cross" />
                    <img src={circle} alt="circle" />
                </div>

            </>


        }
        <button onClick={resetGame}>Reset Game</button>
    </section>
}


export default Winner;