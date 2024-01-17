import './styles.css';

import Header from '../../components/Header';

import photo from '../../assets/imgs/photo.png';

const About = () => (
    <main className='about-main'>
        <Header toLink='/' closeIcon={true} iconColor='--dark'/>
        <article id='about'>
            <img src={photo} alt="amdrejr photo" />
        </article>
    </main>
)

export default About;