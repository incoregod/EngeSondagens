import Typewriter from 'typewriter-effect';
import LandingMenu from './LandingMenu'

function LandingPage(props) {
    new Typewriter('#typewriter', {
        strings: ['Hello', 'World'],
        autoStart: true,
    });

    return (
        <div className={props.pageLoaded ? 'landing-anim' : ''}>
            <div className='landing-page'>
                <img className="landing-img" src="/assets/wp.jpeg"></img>
                <div className="landing-text">
                    <h1>ENGESONDAGENS</h1>
                    <div className='landing-header-text'>
                        <Typewriter
                            options={{
                                strings: ['Serviços à sua Medida', 'Encontre já o seu Espaço', 'Mais de 40Anos de experiência'],
                                autoStart: true,
                                loop: true,
                                pauseFor: 1000,
                                cursor: '',
                            }}
                        />
                    </div>
                </div>
                <LandingMenu loadAnim={props.loadAnim} />
            </div>
        </div>
    )
}



export default LandingPage