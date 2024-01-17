import './styles.css'

import Logo from "../../objects/Logo";
import Links from '../../objects/Links';

interface HeaderProps {
    closeIcon?: boolean;
    iconColor?: '--light' | '--dark';
    toLink: string;
}


const Header = ({closeIcon, iconColor, toLink}:HeaderProps) => {
    return (
        <header className="header">
            <Logo />
            <Links toLink={toLink} closeIcon={closeIcon} iconColor={iconColor}/>
        </header>
    );
}

export default Header;