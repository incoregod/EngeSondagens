function LandingMenu(props) {
    return (
        <div className="landing-menu">
            <div className='side-bar'>
                <img className="landing-logo" src="/assets/red.png"></img>
                <p>Gestão Imobiliária</p>
            </div>
            <div className='side-bar'>
                <img className="landing-logo" src="/assets/verde.png"></img>
                <p>Serviços Engenharia</p>
            </div>
            <div className='side-bar'>
                <img className="landing-logo" src="/assets/azul.png"></img>
                <p>Captação de Água</p>
            </div>
            <div className="btn-flex">
                <button onClick={props.loadAnim} className='landing-btn'>ENTRAR</button>
                <button onClick={props.loadAnim} className='landing-btn'>Contactos</button> 
            </div>
        </div>
    )
}

export default LandingMenu