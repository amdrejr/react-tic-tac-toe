import './styles.css';

interface Props {
    show: boolean;
}

const ShowEvents: React.FC<Props> = ({show = false}) => {
    return (
        <div className='showEvents'>
            <input type="checkbox" name="check" id="checkShow" value={show.toString()}/>
            <label htmlFor="checkShow">Show events</label>
        </div>

    )
}

export default ShowEvents;