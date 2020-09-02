import React from 'react';

import Logo from '../../assets/logo.png'
import Home from '../../assets/home.png'
import Celular from '../../assets/cll.png'
import AppleStore from '../../assets/apple.png'
import GooglePlay from '../../assets/playstore.png'

import emailjs from 'emailjs-com';

import './styles.css'

// import styled, { keyframes } from 'styled-components';
/*import { fadeInLeft } from 'react-animations';

 const bounceAnimation = keyframes`${fadeInLeft}`;

const BouncyDiv = styled.div`
  animation: 1s ${bounceAnimation};
`; */

function Landing() {
    function sendEmail(e) {
        e.preventDefault();

        emailjs.sendForm('gmail', 'tennisprocontato', e.target, 'user_HMNJzhe5Zd0Ce1xfREMPx')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    }
    return (
        <>
            <header>
                <img className="logo" src={Logo} alt="tennis pro" />
            </header>
            <section>

                <h1>O <span>app</span> feito para <span>todos</span> os <span>tenistas</span></h1>

                <p>Participe de rankings e veja os resultados das rodadas</p>
                <div className="container-btn-store-apps">
                    <a
                    >
                        <img className="btn-store-apps" src={AppleStore} alt="baixar na apple store" />
                    </a>
                    <a
                        href="https://play.google.com/store/apps/details?id=com.tennispro.tennispro"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <img className="btn-store-apps" src={GooglePlay} alt="Baixar na play store" />
                    </a>
                </div>

                <img className="img-home" src={Home} alt="tela de apresentação do app" />
                <p><span className="oblique">Diferentes</span> contas para diferentes <span className="oblique">necessidades</span></p>
                <nav className="container-categories">
                    <div >
                        <a className="btn-categories" href="#tennis-player"> </a>
                    </div>
                    <a className="text-categories" href="#tennis-player">Tenistas</a>
                    <div>
                        <a className="btn-categories" href="#teacher"></a>
                    </div>
                    <a className="text-categories" href="#teacher">Professores</a>
                    <div>
                        <a className="btn-categories" href="#club"></a>
                    </div>
                    <a className="text-categories" href="#club">Clubes</a>
                </nav>

                <div id="tennis-player">
                    <h2>Tenistas</h2>
                    <p>Visualização das estastíticas e clubes pertencentes</p>
                    <img className="cll" src={Celular} alt="tela do tenista" />
                </div>

                <div id="teacher">
                    <h2>Professores</h2>
                    <p>Visualização das estastíticas e clubes pertencentes</p>
                    <img className="cll" src={Celular} alt="tela do professor" />
                </div>

                <div id="club">
                    <h2>Clubes</h2>
                    <p>Visualização das estastíticas e clubes pertencentes</p>
                    <img className="cll" src={Celular} alt="tela do clube" />
                </div>
                <br />
                <div>
                    <h1>Gostou? <span>Baixe</span> o app <span>agora</span> mesmo</h1>
                    <div className="container-btn-store-apps">
                        <a
                        >
                            <img className="btn-store-apps" src={AppleStore} alt="baixar na apple store" />
                        </a>                        <a
                            href="https://play.google.com/store/apps/details?id=com.tennispro.tennispro"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <img className="btn-store-apps" src={GooglePlay} alt="Baixar na play store" />
                        </a>
                    </div>
                </div>
                <br />

                <div className="container-comentarios">
                    <div className="perfil">
                        Christopher Brendo
                    </div>
                    <div className="comentario">
                        <p>comentario comentario comentario comentario comentario comentario comentario
                        comentario comentario comentario comentario comentario comentario comentario
                        comentario comentario comentario comentario comentario comentario comentario comentario
                        comentario comentario comentario comentario comentario comentario comentario comentario
                        </p>
                    </div>
                </div>
                <br />
                <form className="contact-form" onSubmit={sendEmail}>
                    <p>Ainda ficou alguma <span>dúvida?</span></p>
                    <label>Nome</label>
                    <input type="text" name="name" required="required" />
                    <br />
                    <label>Email</label>
                    <input type="email" name="email" required="required" />
                    <br />
                    <label>Assunto</label>
                    <textarea name="assunto" required="required" />
                    <br />
                    <button type="submit">Enviar</button>
                </form>
                <div>
                    <a
                        href="https://api.whatsapp.com/send?phone=5569993420000"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <img className="whatsapp" src="https://images.tcdn.com.br/static_inst/integracao/imagens/whatsapp.png" alt="whatsapp" />
                    </a>
                </div>
            </section>
            <footer>
                <strong>Tennis Pro</strong>
                <p>
                    <strong>Contato: </strong>
                        tennisproapp2020@gmail.com
                    </p>
                <p>
                    <strong>Endereço: </strong>
                        Av doutor armando panunzio, numero 1893. AP.403 B-13
                    </p>
                <p>Todos os direitos reservados</p>
            </footer>
        </>
    );
}

export default Landing;
