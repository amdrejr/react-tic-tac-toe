import './styles.css';
import gif from '../../assets/imgs/amdrejr-grafite.gif';

const Logo = () => {

    return (
        <div className="logo">
            <img src={gif} alt="amdrejr" />
        </div>
    );
}

export default Logo;