import './styles.css';

import circle from '../../assets/imgs/circulo.png';
import cross from '../../assets/imgs/xis.png';

interface CurrentPlayerProps {
    player: 'x' | 'o';
}

const CurrentPlayer = ({player}:CurrentPlayerProps) => (
    <figure className='current-player'>
        <figcaption>Current Player:</figcaption>
        <img src={player === 'x' ? cross : circle} alt={player.toUpperCase()} />
    </figure>
)

export default CurrentPlayer;