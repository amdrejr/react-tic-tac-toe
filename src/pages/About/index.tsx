import './styles.css';

interface AboutProps {
    children?: React.ReactNode;
}

const About = ({children}:AboutProps) => (
    <article id='about'>
        {children}
    </article>
)

export default About;