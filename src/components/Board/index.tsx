import Player from '../../objects/Player';
import './styles.css'

interface BoardProps {
    casas: Array<'x' | 'o' | ''>;
    jogada: (casa: number) => void;
}


const Board = ({casas, jogada}:BoardProps) => {

    return (
        <section className='board-container'>
            <main className="board">
                {
                    casas.map((valor, posicao) => {
                        return <Player key={'casa-' + posicao} player={valor} click={{
                            casa: posicao,
                            callback: jogada
                        }}  />
                        
                    })
                }
            </main>
        </section>
    )
}

export default Board;