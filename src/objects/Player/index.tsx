import './styles.css';   

import Cross from  '../../assets/imgs/xis.png';
import Circle from  '../../assets/imgs/circulo.png';

interface PlayerProps {
  player: 'x' | 'o'; // Uma forma de garantir que player só pode ser 'x' ou 'o'
}

const Player: React.FC<PlayerProps> = ({ player }) => (
  <button className="player">
    <img src={player === 'x' ? Cross : Circle} alt={`Player ${player.toUpperCase()}`} />
  </button>
);

export default Player;