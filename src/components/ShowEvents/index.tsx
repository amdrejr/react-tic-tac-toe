import './styles.css';

interface Props {
    getEvent: boolean;
    setEvent: (v:boolean) => void;
}

const ShowEvents: React.FC<Props> = ({getEvent, setEvent}) => {
    const handleShowEvents = () => {
        setEvent(!getEvent);
    }

    return (
        <div className='showEvents'>
            <input onClick={handleShowEvents} type="checkbox" name="check" id="checkShow" value={getEvent.toString()}/>
            <label htmlFor="checkShow">Show Events</label>
        </div>

    )
}

export default ShowEvents;