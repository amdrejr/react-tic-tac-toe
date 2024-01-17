import './styles.css'

const HamburguerIcon = ({iconColor=''}:{iconColor?:string}) => {
    return (
        <span className={`hamburguer ${iconColor}`}></span>
    )
}

export default HamburguerIcon