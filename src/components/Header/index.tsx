import './styles.css'

import HamburguerIcon from "../../objects/HamburguerIcon";
import Links from "../../objects/Links";
import Logo from "../../objects/Logo";

const Header = () => {
    return (
        <header className="header">
            <Logo />
            <Links />
            <HamburguerIcon />
        </header>
    );
}

export default Header;