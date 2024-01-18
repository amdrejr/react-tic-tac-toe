import { useState } from 'react';
import Board from '../../components/Board';
import CurrentPlayer from '../../components/CurrentPlayer';
import Header from '../../components/Header';
import ShowEvents from '../../components/ShowEvents';
import './styles.css';

const Game = () => {
    // const casas:('x' | 'o' | '')[] = ['x', 'o', '', '', 'x', '', '', 'o', ''];

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
        console.log(casas);

        switch (true) {
            case casas[0] === 'x' && casas[1] === 'x' && casas[2] === 'x':
                setWinner('x');
                console.log('X ganhou');
                break;
            case casas[0] === 'o' && casas[1] === 'o' && casas[2] === 'o':
                setWinner('o');
                console.log('O ganhou');
                break;
        }               
    }

    return (
        <>
            <Header toLink='/about' />
            <main id='game'>
                <CurrentPlayer player={currentPlayer} />
                {!winner && <Board casas={casas} jogada={jogada}/>}
                <ShowEvents show={true} />
            </main>
        </>
    )
}

export default Game;