import React from 'react';

import Logo from '../../assets/logo.png'
import TennisPlayerImg from '../../assets/teste.png'
import TeacherImg from '../../assets/teste.png'
import ClubImg from '../../assets/teste.png'
import AppleStore from '../../assets/appleStore.png'
import GooglePlay from '../../assets/googleplay.png'

import emailjs from 'emailjs-com';

import './styles.css'

// import styled, { keyframes } from 'styled-components';
/*import { fadeInLeft } from 'react-animations';

 const bounceAnimation = keyframes`${fadeInLeft}`;

const BouncyDiv = styled.div`
  animation: 1s ${bounceAnimation};
`; */

function LandingPage() {
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
                <img src={Logo} alt="tennis pro" />
            </header>
            <main>

                <section>

                    <h1>O app feito para todos os tenistas</h1>

                    <p>Participe de rankings e veja os resultados das rodadas</p>
                    <div className="container-btn-store-apps">
                        <img className="btn-store-apps" src={AppleStore} alt="baixar na apple store" />
                        <a
                            href="https://play.google.com/store/apps/details?id=com.tennispro.tennispro"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <img className="btn-store-apps" src={GooglePlay} alt="Baixar na play store" />
                        </a>
                    </div>

                    <img src={TennisPlayerImg} alt="tela de apresentação do app" />
                    <p>Diferentes contas para diferentes necessidades</p>
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
                        <img src={TennisPlayerImg} alt="tela do tenista" />
                    </div>

                    <div id="teacher">
                        <h2>Professores</h2>
                        <p>Visualização das estastíticas e clubes pertencentes</p>
                        <img src={TeacherImg} alt="tela do professor" />
                    </div>

                    <div id="club">
                        <h2>Clubes</h2>
                        <p>Visualização das estastíticas e clubes pertencentes</p>
                        <img src={ClubImg} alt="tela do clube" />
                    </div>
                    <form className="contact-form" onSubmit={sendEmail}>
                        <p>Ainda ficou alguma <span>dúvida?</span></p>
                        <label>Nome</label>
                        <input type="text" name="name" required="required" />
                        <label>Email</label>
                        <input type="email" name="email" required="required" />
                        <label>Assunto</label>
                        <textarea name="assunto" required="required" />
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
            </main>
        </>
    );
}

export default LandingPage;
