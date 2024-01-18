import './styles.css';

import Error from '../../assets/imgs/error.png';
import { Link } from 'react-router-dom';

const NotFound = () => (
    <section className="not-found">
        <h1>404!</h1>
        <p>Page not found, sorry...</p>
        <img src={Error} alt="sad file" />
        <Link to='/'>Back</Link>
    </section>
    
)

export default NotFound