import './styles.css';

import linkedin from '../../assets/imgs/linkedin-ico.png';
import github from '../../assets/imgs/github-ico.png';

const SocialMedias = () => (
    <div className="social-medias">
        <a href="https://www.linkedin.com/in/andre-junior/" target='__blank'>
            <img src={linkedin} alt="linkedin" />
        </a>
        <a href="https://github.com/amdrejr" target='__blank'>
            <img src={github} alt="github" />
        </a>
    </div>
)

export default SocialMedias;