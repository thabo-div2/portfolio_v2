import { ArrowUpRight} from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import profileImage from '../assets/images/profile.jpg';
import './Hero.css';

function Hero() {
    return (
        <section className='hero' id="home">
            <div className='hero-container'>

                <div className='hero-content'>
                    <div className='hero-status'>
                        <span className='status-dot'></span>
                        SOFTWARE DEVELOPER
                    </div>

                    <h1>
                        Hi, I'm <span>Thabo.</span>
                        <br />
                        I build digital 
                        <br />
                        experiences.
                        </h1>
                    
                    <p className='hero-description'>
                        I am an aspiring software developer. 
                        I'm passionate about creating modern web applications,
                        cloud-based solutions and scalable software systems.
                    </p>

                    <div className='hero-buttons'>
                        <a href="#projects" className='hero-primary'>
                            View My Work
                            <ArrowUpRight size={18}/>
                        </a>

                        <a href="#contact" className='hero-secondary'>Let's connect</a>
                    </div>

                    <div className='hero-socials'>
                        <a href="https://github.com/thabo-div2"
                            target='_blank'
                            rel='noopener noreferrer'
                            aria-label='Github'>
                                <FaGithub size={22}/>
                            </a>

                        <a href="https://www.linkedin.com/in/thabo-setsubi-40b3a9219/"
                            target='_blank'
                            rel='noopener noreferrer'
                            aria-label='Linkedin'>
                                <FaLinkedin size={22}/>
                            </a>
                    </div>
                </div>
                
                <div className='hero-image-wrapper'>
                    <div className='hero-image-glow'></div>

                    <div className='hero-image-container'>
                        <img src={profileImage}
                            alt='Thabo Setsubi'/>
                    </div>

                    <div className='hero-floating-card'>
                        <span>FOCUS AREAS</span>
                        <h3>Full Stack</h3>
                        <p>Web . Cloud . Software</p>
                    </div>
                </div>
            </div>
            
        </section>
    );
}

export default Hero;

// --------------------------- End Of File ------------------------------ //