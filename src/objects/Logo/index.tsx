import './styles.css';
import gif from '../../assets/imgs/amdrejr-grafite.gif';

const Logo = () => {

    return (
        <a className="logo" href='https://github.com/amdrejr' target='__blank' title='Visit my GitHub!'>
            <img src={gif} alt="amdrejr" />
        </a>
    );
}

export default Logo;