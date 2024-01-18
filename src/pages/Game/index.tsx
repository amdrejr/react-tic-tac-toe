import { useState } from 'react';
import Board from '../../components/Board';
import CurrentPlayer from '../../components/CurrentPlayer';
import Header from '../../components/Header';
import ShowEvents from '../../components/ShowEvents';
import './styles.css';
import Winner from '../../components/Winner';

const Game = () => {
    const [casas, setCasas] = useState<('x' | 'o' | '')[]>(['', '', '', '', '', '', '', '', '']);
    const [currentPlayer, setCurrentPlayer] = useState<'x' | 'o'>('x');
    const [winner, setWinner] = useState<'x' | 'o' | ''>('');

    const jogada = (casaIndex: number) => {
        // atualizar o board
        const newCasas = [...casas];
        newCasas[casaIndex] = currentPlayer;
        setCasas(newCasas);
        // atualizar o jogador
        setCurrentPlayer(currentPlayer === 'x' ? 'o' : 'x');
        // verificar se alguém ganhou
        checkWinner(newCasas);
    }

    // 0 1 2
    // 3 4 5
    // 6 7 8
    const checkWinner = (casas:('x' | 'o' | '')[]) => {
        switch (true) {
            case casas[0] === 'x' && casas[1] === 'x' && casas[2] === 'x':
            case casas[3] === 'x' && casas[4] === 'x' && casas[5] === 'x':
            case casas[6] === 'x' && casas[7] === 'x' && casas[8] === 'x':
            case casas[0] === 'x' && casas[3] === 'x' && casas[6] === 'x':
            case casas[1] === 'x' && casas[4] === 'x' && casas[7] === 'x':
            case casas[2] === 'x' && casas[5] === 'x' && casas[8] === 'x':
            case casas[0] === 'x' && casas[4] === 'x' && casas[8] === 'x':
            case casas[2] === 'x' && casas[4] === 'x' && casas[6] === 'x':
                setWinner('x');
                console.log('X ganhou');
                break;
            case casas[0] === 'o' && casas[1] === 'o' && casas[2] === 'o':
            case casas[3] === 'o' && casas[4] === 'o' && casas[5] === 'o':
            case casas[6] === 'o' && casas[7] === 'o' && casas[8] === 'o':
            case casas[0] === 'o' && casas[3] === 'o' && casas[6] === 'o':
            case casas[1] === 'o' && casas[4] === 'o' && casas[7] === 'o':
            case casas[2] === 'o' && casas[5] === 'o' && casas[8] === 'o':
            case casas[0] === 'o' && casas[4] === 'o' && casas[8] === 'o':
            case casas[2] === 'o' && casas[4] === 'o' && casas[6] === 'o':
                setWinner('o');
                console.log('O ganhou');
                break;
        }               
    }

    const resetGame = () => {
        setCasas(['', '', '', '', '', '', '', '', '']);
        setCurrentPlayer('x');
        setWinner('');
    }

    return (
        <>
            <Header toLink='/about' />
            <main id='game'>
                {
                    winner ? <Winner winner={winner} resetGame={resetGame} /> :
                    <>
                        <CurrentPlayer player={currentPlayer} />
                        <Board casas={casas} jogada={jogada}/>
                    </>
                }
                <ShowEvents show={true} />
            </main>
        </>
    )
}

export default Game;