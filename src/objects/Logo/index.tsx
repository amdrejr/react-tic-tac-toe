import './styles.css';
import gif from '../../assets/imgs/amdrejr-grafite.gif';
import { Link } from 'react-router-dom';

const Logo = () => {

    return (
        <Link className="logo" to='/' >
            <img src={gif} alt="amdrejr" />
        </Link>
    );
}

export default Logo;