import './styles.css';   

import Cross from  '../../assets/imgs/xis.png';
import Circle from  '../../assets/imgs/circulo.png';
import { useState } from 'react';

interface PlayerProps {
  player: 'x' | 'o' | ''; // Uma forma de garantir que player só pode ser 'x' ou 'o'
  casaWinner: boolean;
  hasWinner: boolean;
  click: {
    casa: number,
    callback: (v:number) => void
  }
}

const Player: React.FC<PlayerProps> = ({ player = '', click, casaWinner=false, hasWinner }) => {

  const [isClicked, setIsClicked] = useState<boolean>(false); 
  let actualPlayer:string;

  const casaClicked = () => {
    setIsClicked(true);
    click.callback(click.casa);
  }

  if (player === 'x') {
    actualPlayer = Cross;
  } else if (player === 'o') {
    actualPlayer = Circle;
  } else {
    actualPlayer = '';
  }

  return (
    <button onClick={casaClicked} className={`player ${!hasWinner && 'on-game'} ${casaWinner && 'casa-winner'}`} disabled={isClicked || hasWinner}>
      {actualPlayer && <img src={actualPlayer} alt={player ? `Player ${player?.toUpperCase()}` : ''} />}
    </button>
  )
};

export default Player;