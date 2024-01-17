import { Link } from 'react-router-dom';
import './styles.css';
import HamburguerIcon from '../HamburguerIcon';
import CloseIcon from '../CloseIcon';

interface LinksProps {
    closeIcon?: boolean;
    iconColor?: '--light' | '--dark';
    toLink: string;
}


const Links = ({closeIcon, iconColor, toLink}:LinksProps) => {
    return (
        <>
            <Link to={toLink} className={`action ${iconColor}`}>
                <span className='text'>Links</span>
                {
                closeIcon ? 
                    <CloseIcon iconColor={iconColor}/> : 
                    <HamburguerIcon iconColor={iconColor} />
                }
            </Link>
        </>
    );
}

export default Links;