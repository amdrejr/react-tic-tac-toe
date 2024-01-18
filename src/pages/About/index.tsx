import './styles.css';

import Header from '../../components/Header';
import AvatarProfile from '../../objects/AvatarProfile';
import SocialMedias from '../../objects/SocialMedias';


const About = () => (
    <main className='about-main'>
        <Header toLink='/' closeIcon={true} iconColor='--dark'/>
        <article id='about'>
            <AvatarProfile />
            <h2>André Jr Mello</h2>
            <p>
                I'm a Front-end Developer and I'm currently studying to become a Full-stack Developer.
            </p>
            <p>Visit the links below to see more of my work.</p>

            <div className='links-box'>
                <a className='btn-link' href='https://amdrejr-jogo-da-memoria.netlify.app/' target='__blank'>Memory Game 🃏</a>
                <a className='btn-link' href='https://amdrejr-angular-loja.netlify.app' target='__blank'>Tech Loja 💻</a>
                <a className='btn-link --principal' href="https://amdrejr.github.io/" target='__blank'>My Portfolio Website 👨‍💻</a>
            </div>
            <SocialMedias />
        </article>
    </main>
)

export default About;