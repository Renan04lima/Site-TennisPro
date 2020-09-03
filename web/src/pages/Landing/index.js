import React, { useState, useEffect } from 'react';

import FormField from '../../components/FormField'
import Button from '../../components/Button'
import useForm from '../../hooks/useForm'

import Logo from '../../assets/logo.png'
import Home from '../../assets/home.png'
import Celular from '../../assets/cll.png'
import AppleStore from '../../assets/apple.png'
import GooglePlay from '../../assets/playstore.png'
import Perfil from '../../assets/perfil.png'

import Ball from '../../assets/icons/ball.svg'
import BallWhite from '../../assets/icons/tenista.svg'
import Book from '../../assets/icons/import_contacts-white-18dp.svg'
import Business from '../../assets/icons/business-white-18dp.svg'
import BusinessWhite from '../../assets/icons/predios.svg'
import ArrowRight from '../../assets/icons/keyboard_arrow_right-24px.svg'
import ArrowLeft from '../../assets/icons/keyboard_arrow_left-24px.svg'
import ArrowRightOrange from '../../assets/icons/arrow_right-orange.svg'

import emailjs from 'emailjs-com';

import './styles.css'

// import styled, { keyframes } from 'styled-components';
/*import { fadeInLeft } from 'react-animations';

 const bounceAnimation = keyframes`${fadeInLeft}`;

const BouncyDiv = styled.div`
  animation: 1s ${bounceAnimation};
`; */

function Landing() {
    const valoresIniciais = {
        name: '',
        email: '',
        assunto: '',
    };

    const { handleChange, values, clearForm } = useForm(valoresIniciais);


    /* useEffect(() => {
        const URL = window.location.href.includes('localhost')
            ? 'http://localhost:8080/categorias'
            : 'https://binarioflix.herokuapp.com/categorias';
        fetch(URL)
            .then(async (respostaDoServer) => {
                if (respostaDoServer.ok) {
                    const resposta = await respostaDoServer.json();
                    setCategorias(resposta);
                    return;
                }
                throw new Error('Não foi possível pegar os dados');
            });
    }, []); */

    function sendEmail(e) {
        e.preventDefault();

        emailjs.sendForm('gmail', 'tennisprocontato', e.target, 'user_HMNJzhe5Zd0Ce1xfREMPx')
            .then((result) => {
                alert('Dúvida enviada com sucesso! Por favor, aguarde a resposta no e-mail informado.')
                console.log(result.text);
            }, (error) => {
                alert('Ocorreu algum problema, verifique sua conexão com a internet.')
                console.log(error.text);
            });
        clearForm();
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
                        href="https://play.google.com/store/apps/details?id=com.tennispro.tennispro"
                        target="_blank"
                        rel="noopener noreferrer"
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
                <nav className="container-categories">
                    <h2><span className="oblique">Diferentes</span> contas para diferentes <span className="oblique">necessidades</span></h2>
                    <div >
                        <a className="btn-categories" href="#tennis-player">
                            <img src={Ball} alt="tenista" />
                        </a>
                        <a className="text-categories" href="#tennis-player">Tenistas</a>
                    </div>
                    <div>
                        <a className="btn-categories" href="#teacher">
                            <img src={Book} alt="professor" />
                        </a>
                        <a className="text-categories" href="#teacher">Professores</a>
                    </div>
                    <div>
                        <a className="btn-categories" href="#club">
                            <img src={Business} alt="Club" />
                        </a>
                    </div>
                    <a className="text-categories" href="#club">Clubes</a>
                </nav>

                <div id="tennis-player">
                    <h2 className="oblique"><img src={BallWhite} alt="tenista" /> Tenistas</h2>

                    <h2>Home</h2>

                    <p>Visualize suas estatísticas e participe de rankings</p>
                    {/* 
                        Ranking(Posições) - Visualize sua posições e a dos seus adversários
                        Ranking(Rodadas) - Ganhe rodadas para subir de colocação e visualize os resultados dos jogos
                        Jogos - Marque partidas e encontre pessoas do seu nível
                        Chat - Converse com seus amigos
                        Professores - Contrate professores experientes para treina-lo 
                    */}
                    <img className="cll" src={Celular} alt="tela do tenista" />
                </div>

                <div id="teacher">
                    <h2 className="oblique"><img src={Book} alt="tenista" /> Professores</h2>


                    <h2>Home</h2>

                    {/* 
                        Perfil - Atualize seus dados e veja suas informações
                    */}

                    <p>Visualize suas negociações</p>
                    <img className="cll" src={Celular} alt="tela do professor" />
                </div>

                <div id="club">
                    <h2 className="oblique"><img src={BusinessWhite} alt="tenista" /> Clubes</h2>

                    <h2>Home</h2>
                    {/* 
                        Campeonatos - Crie novos campeonatos e visualize suas informações
                    */}

                    <p>Visualização das estastíticas e clubes pertencentes</p>
                    <img className="cll" src={Celular} alt="tela do clube" />
                </div>
                <br />
                <div>
                    <h1>Gostou? <span>Baixe</span> o app <span>agora</span> mesmo</h1>
                    <div className="container-btn-store-apps">
                        <a
                            href="https://play.google.com/store/apps/details?id=com.tennispro.tennispro"
                            target="_blank"
                            rel="noopener noreferrer"
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
                        <img src={Perfil} alt="imagem do perfil" />
                        Christopher Brendo
                    </div>
                    <div className="comentario">
                        <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua.
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco
                        laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                        in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur..
                        </p>
                    </div>
                    <div className="btn-comentario">
                        <button>
                            <img src={ArrowLeft} alt="comentário anterior" />
                        </button>

                        <button className="arrowLeft">
                            <img src={ArrowRightOrange} alt="próximo comentário" />
                        </button>
                    </div>
                </div>
                <br />
                <form
                    className="contact-form"
                    onSubmit={sendEmail}
                >
                    <h2>Ainda ficou alguma <span>dúvida?</span></h2>
                    <FormField
                        type="text"
                        name="name"
                        label="Nome"
                        required="required"
                        value={values.name}
                        onChange={handleChange}
                    />
                    <FormField
                        type="text"
                        name="email"
                        label="E-mail"
                        required="required"
                        value={values.email}
                        onChange={handleChange}
                    />
                    <FormField
                        type="textarea"
                        name="assunto"
                        label="Assunto"
                        required="required"
                        value={values.assunto}
                        onChange={handleChange}
                    />
                    <Button type="submit">Enviar</Button>
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
