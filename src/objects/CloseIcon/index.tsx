import './styles.css';

const CloseIcon = ({iconColor=''}:{iconColor?: string}) => (
    <span className={`close-icon ${iconColor}`}></span>
);

export default CloseIcon;