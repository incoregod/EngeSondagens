import { BsFacebook, BsInstagram, BsTwitter, BsFillTelephonePlusFill, BsMessenger } from "react-icons/bs";

function Footer() {
    return (
        <div className="footer-container">
            <div className="footer-content">

                <div className="social">
                    <div>
                        <p>Redes Sociais <span>ENGESONDAGENS</span></p>
                        <p>Siga-nos:</p>
                    </div>
                    <div className="social-icons">
                        <BsFacebook />
                        <BsInstagram />
                        <BsTwitter />
                        <BsFillTelephonePlusFill />
                        <BsMessenger />
                    </div>
                </div>
                <div className="footer-contacts">
                    <h1>ENGESONDAGENS</h1>
                    <p className="morada">Estrada Nacional lote 3B r/c drt</p>
                    <p>6230-045 Aldeia de Joanes</p>
                    <p className="tel">Telefone / Emails:</p>
                    <ul>
                        <li>🇵🇹 +351 961111111</li>
                        <li>geral@engesondagens.pt</li>
                        <li>compras@engesondagens.pt</li>
                    </ul>

                </div>
                <form className="footer-form">
                    <label className="label-name">Nome:</label>
                    <input type="text" name="name" placeholder="Primeiro Nome"></input>
                    <label >Último Nome:</label>
                    <input type="text" name="lastname" placeholder="Último Nome"></input>
                    <label >Endereço de email:</label>
                    <input type="email" name="email" placeholder="Email"></input>
                    <label >Enviar Mensagem</label>
                    <textarea placeholder="Escrever mensagem aqui..." id="msg-text" name="contact-form" rows="10" cols="33"></textarea>
                    <button>Submeter</button>
                </form>
            </div>
        </div>
    )
}


export default Footer