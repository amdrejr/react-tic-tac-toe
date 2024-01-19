import Player from '../../objects/Player';
import './styles.css'

interface BoardProps {
    casas: Array<'x' | 'o' | ''>;
    jogada: (casa: number) => void;
    casasWinner: number[];
}


const Board = ({casas, jogada, casasWinner}:BoardProps) => {

    const hasWinner: boolean = casasWinner.length > 0;

    return (
        <section className='board-container'>
            <main className="board">
                {
                    casas.map((valor, posicao) => {
                        return (
                        <Player 
                            key={'casa-' + posicao} 
                            player={valor} 
                            click={{
                                casa: posicao,
                                callback: jogada
                            }}  
                            casaWinner={casasWinner.includes(posicao)}
                            hasWinner={hasWinner}
                        />
                        )
                        
                    })
                }
            </main>
        </section>
    )
}

export default Board;