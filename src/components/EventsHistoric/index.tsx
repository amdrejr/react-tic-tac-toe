import './styles.css';

import cross from '../../assets/imgs/xis.png';
import circle from '../../assets/imgs/circulo.png';


interface EventsHistoricProps {
    events: ({casa:number, ico:'x' | 'o'})[];
}

const EventsHistoric = ({events}:EventsHistoricProps) => (
    <article className='events-historic'>
        <h3>Events Historic</h3>
        {
            events.map((v) => (
                <div className='event'>
                    {v.ico === 'x' ? <img src={cross} alt="X" /> : <img src={circle} alt="O" />}
                    <p>Added in the {v.casa+1}rd place</p>
                </div>
            ))
        }
    </article>

)

export default EventsHistoric;