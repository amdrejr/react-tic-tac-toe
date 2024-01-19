import { useState } from 'react';
import Board from '../../components/Board';
import CurrentPlayer from '../../components/CurrentPlayer';
import Header from '../../components/Header';
import ShowEvents from '../../components/ShowEvents';
import './styles.css';
import Winner from '../../components/Winner';
import EventsHistoric from '../../components/EventsHistoric';

const Game = () => {
    const [casas, setCasas] = useState<('x' | 'o' | '')[]>(['', '', '', '', '', '', '', '', '']);
    const [currentPlayer, setCurrentPlayer] = useState<'x' | 'o'>('x');
    const [winner, setWinner] = useState<'x' | 'o' | '' | 'draw'>('');
    const [events, setEvents] = useState<({casa:number, ico:'x' | 'o'})[]>([]);
    const [showEvents, setShowEvents] = useState<boolean>(false);
    const [turn, setTurn] = useState<number>(1);
    const [casasWinner, setCasasWinner] = useState<number[]>([]);

    const jogada = (casaIndex: number) => {
        // add evento
        addEvent(casaIndex);

        // atualizar o board
        const newCasas = [...casas];
        newCasas[casaIndex] = currentPlayer;
        setCasas(newCasas);
        
        // atualizar o jogador
        setCurrentPlayer(currentPlayer === 'x' ? 'o' : 'x');
        
        // verificar se alguém ganhou
        checkWinner(newCasas);
        
        // atualizar o turno
        setTurn(turn + 1);
        if (turn === 9) {
            endGame('draw');
        }
    }

    const checkWinner = (casas:('x' | 'o' | '')[]) => {
        // 0 1 2
        // 3 4 5
        // 6 7 8
        const winConditions: number[][] = [
            [0, 1, 2], [3, 4, 5], [6, 7, 8],    // linhas
            [0, 3, 6], [1, 4, 7], [2, 5, 8],    // colunas
            [0, 4, 8], [2, 4, 6]                // diagonais
        ];

          for(const condition of winConditions) {
            // a,b,c será respectivamente as casas 0,1,2... 3,4,5... 6,7,8... etc...
            const [a, b, c] = condition;
            if (casas[a] === 'x' && casas[b] === 'x' && casas[c] === 'x') {
                endGame('x', condition);
                return;
            } else if (casas[a] === 'o' && casas[b] === 'o' && casas[c] === 'o') {
                endGame('o', condition);
                return;
            }
        }
    }

    const endGame = (winner:'o'|'x'|'draw', casas:number[]=[]) => {      
        setCasasWinner(casas);
        setTimeout(() => {
            setWinner(winner);
        }, 2000);
    }

    const resetGame = () => {
        setCasas(['', '', '', '', '', '', '', '', '']);
        setCurrentPlayer('x');
        setCasasWinner([]);
        setWinner('');
        setEvents([]);
        setTurn(1);
    }

    const addEvent = (casa:number) => {
        const newEvents = [...events];
        newEvents.push({casa, ico: currentPlayer});
        setEvents(newEvents);
    }

    return (
        <>
            <Header toLink='/about' />
            <main id='game'>
                { !winner && <CurrentPlayer player={currentPlayer} />}
                <div className='board-and-historic'>
                    { winner && <Winner winner={winner} resetGame={resetGame} /> }
                    { !winner && <Board casas={casas} jogada={jogada} casasWinner={casasWinner}/>}
                    { showEvents && <EventsHistoric events={events} /> }
                </div>
                <ShowEvents getEvent={showEvents} setEvent={setShowEvents} />
            </main>
        </>
    )
}

export default Game;