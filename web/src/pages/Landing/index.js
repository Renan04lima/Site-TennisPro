import React, { useState, useEffect } from 'react';

import FormField from '../../components/FormField'
import Button from '../../components/Button'
import useForm from '../../hooks/useForm'
import Pics from '../../components/Pics'

import Logo from '../../assets/logo.png'
import Home from '../../assets/home.png'
import AppleStore from '../../assets/apple.png'
import GooglePlay from '../../assets/playstore.png'
import Perfil from '../../assets/perfil.png'
import Gostou from '../../assets/app.png'

import { ReactComponent as Ball } from '../../assets/icons/ball.svg'
import { ReactComponent as BallWhite } from '../../assets/icons/tenista.svg'
import { ReactComponent as Book } from '../../assets/icons/import_contacts-white-18dp.svg'
import { ReactComponent as Business } from '../../assets/icons/business-white-18dp.svg'
import BusinessWhite from '../../assets/icons/predios.svg'
import ArrowLeft from '../../assets/icons/keyboard_arrow_left-24px.svg'
import { ReactComponent as ArrowRightOrange } from '../../assets/icons/arrow_right-orange.svg'
import ArrowRightOrangeAAA from '../../assets/icons/arrow_right-orange.svg'

import { NameArray, CommentArray } from '../../Utils/Arrays/comments'
import { TitleArrayT, PhrasesArrayT } from '../../Utils/Arrays/tennis'
import Tennis1 from '../../assets/tenista/home.png'
import Tennis2 from '../../assets/tenista/ranking-posicoes.png'
import Tennis3 from '../../assets/tenista/ranking-rodadas.png'
import Tennis4 from '../../assets/tenista/jogos.png'
import Tennis5 from '../../assets/tenista/chat.png'
import Tennis6 from '../../assets/tenista/professores.png'
import { TitleArrayP, PhrasesArrayP } from '../../Utils/Arrays/teacher'
import Teacher1 from '../../assets/professor/home.png'
import Teacher2 from '../../assets/professor/perfil.png'
import { TitleArrayC, PhrasesArrayC } from '../../Utils/Arrays/club'
import Club1 from '../../assets/clube/home.png'
import Club2 from '../../assets/clube/detalhes.png'

import emailjs from 'emailjs-com';

import './styles.css'
import './welcome.css'
import './categories.css'
import './comments.css'
import './tennis.css'
import './teacher.css'
import './club.css'

import styled, { keyframes } from 'styled-components';
import { fadeInLeft } from 'react-animations';

const bounceAnimation = keyframes`${fadeInLeft}`;

const BouncyDiv = styled.p`
  animation: 1s ${bounceAnimation};
`;

function Phrases(props) {
    return (

        <div className="comentario">
            <BouncyDiv>
                {props.array}
            </BouncyDiv>
        </div>
    )
}


function Landing() {
    const [tennisState, setTennisState] = useState(0)
    const [teacherState, setTeacherState] = useState(0)
    const [clubState, setClubState] = useState(0)
    const [indexComment, setIndexComment] = useState(0)
    const valoresIniciais = {
        name: '',
        email: '',
        assunto: '',
    };

    const PicsArrayT = [
        <Pics className="img-tennis" src={Tennis1} />,
        <Pics className="img-tennis" src={Tennis2} />,
        <Pics className="img-tennis" src={Tennis3} />,
        <Pics className="img-tennis" src={Tennis4} />,
        <Pics className="img-tennis" src={Tennis5} />,
        <Pics className="img-tennis" src={Tennis6} />,
    ]

    const PicsArrayP = [
        <Pics className="img-teacher" src={Teacher1} />,
        <Pics className="img-teacher" src={Teacher2} />,
    ]

    const PicsArrayC = [
        <Pics className="img-club" src={Club1} />,
        <Pics className="img-club" src={Club2} />,
    ]

    const { handleChange, values, clearForm } = useForm(valoresIniciais);

    /* const navItems = document.querySelectorAll('a')
    navItems.forEach(item =>
        item.addEventListener('click', scrollToIdOnClick)
    )

    const navItems2 = document.querySelectorAll('a.btn-categories')
    navItems2.forEach(item =>
        item.addEventListener('click', scrollToIdOnClick)
    ) */

    function scrollToIdOnClick(e) {
        e.preventDefault()
        const to = getScrollTopByHref(e.target)

        smoothScrollTo(0, to, 800)
    }

    /* function scrollToPosition(to) {
        window.scroll({
            top: to,
            behavior: "smooth"
        })
    } */

    function getScrollTopByHref(element) {
        const id = element.getAttribute('href')
        return document.querySelector(id).offsetTop
    }

    function smoothScrollTo(endX, endY, duration) {
        const startX = window.scrollX || window.pageXOffset;
        const startY = window.scrollY || window.pageYOffset;
        const distanceX = endX - startX;
        const distanceY = endY - startY;
        const startTime = new Date().getTime();

        duration = typeof duration !== 'undefined' ? duration : 400;

        // Easing function
        const easeInOutQuart = (time, from, distance, duration) => {
            if ((time /= duration / 2) < 1) return distance / 2 * time * time * time * time + from;
            return -distance / 2 * ((time -= 2) * time * time * time - 2) + from;
        };

        const timer = setInterval(() => {
            const time = new Date().getTime() - startTime;
            const newX = easeInOutQuart(time, startX, distanceX, duration);
            const newY = easeInOutQuart(time, startY, distanceY, duration);
            if (time >= duration) {
                clearInterval(timer);
            }
            window.scroll(newX, newY);
        }, 1000 / 60); // 60 fps
    };

    useEffect(() => {
        const time = setTimeout(() => {
            setIndexComment(indexComment === 2 ? 0 : indexComment + 1)
            setTennisState(tennisState === 5 ? 0 : tennisState + 1)
            setTeacherState(teacherState === 1 ? 0 : teacherState + 1)
            setClubState(clubState === 1 ? 0 : clubState + 1)
        }, 9000)
        return () => clearTimeout(time);
    }, [tennisState, teacherState, clubState, indexComment])

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
            <div id="page-landind-content">
                <header>

                    <img className="logo" src={Logo} alt="tennis pro" />
                </header>
                <section>

                    <div id="welcome-container">
                        <div className="a-container">
                            <div className="text-conteiner">
                                <h1 className="main-text">O <span>app</span> feito para <span>todos</span> os <span>tenistas</span></h1>

                                <p className="sub-text">Participe de rankings e veja os resultados das rodadas</p>
                            </div>
                            <div className="store-container-a">
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
                        </div>

                        <div className="b-container">
                            <img className="img-home" src={Home} alt="tela de apresentação do app" />
                        </div>
                    </div>

                    <nav className="container-categories">
                        <p className="text-main"><span className="oblique">Diferentes</span> contas para diferentes <span className="oblique">necessidades</span></p>

                        <div className="btn-a">
                            <a className="btn-categories" onClick={(e) => scrollToIdOnClick(e)} href="#tennis-player">
                                <Ball href="#tennis-player" alt="tenista" />
                            </a>
                            <a className="text-categories" onClick={(e) => scrollToIdOnClick(e)} href="#tennis-player">Tenistas</a>
                        </div>

                        <div className="btn-b">
                            <a className="btn-categories" onClick={(e) => scrollToIdOnClick(e)} href="#teacher">
                                <Book href="#teacher" alt="professor" />
                            </a>
                            <a className="text-categories" onClick={(e) => scrollToIdOnClick(e)} href="#teacher">Professores</a>
                        </div>

                        <div className="btn-c">
                            <a className="btn-categories" onClick={(e) => scrollToIdOnClick(e)} href="#club">
                                <Business href="#club" alt="Club" />
                            </a>
                            <a className="text-categories" onClick={(e) => scrollToIdOnClick(e)} href="#club">Clubes</a>
                        </div>
                    </nav>

                    <div id="tennis-player">
                        <p className="tennisIcon"><BallWhite /> Tenistas</p>

                        <div className="tennis-container-a">

                            <p className="tennisIcon-mobile"><BallWhite /> Tenistas</p>

                            <h2 className="title">{TitleArrayT[tennisState]}</h2>

                            <p className="phrase">{PhrasesArrayT[tennisState]}</p>

                            <a className="btn-tennis" onClick={() => tennisState === 5 ? setTennisState(0) : setTennisState(tennisState + 1)}>
                                <ArrowRightOrange />
                            </a>
                        </div>

                        <div className="cll-tennis">
                            <div className="img-container">
                                {PicsArrayT[tennisState]}
                            </div>
                            <a className="btn" onClick={() => tennisState === 5 ? setTennisState(0) : setTennisState(tennisState + 1)}>
                                <ArrowRightOrange />
                            </a>
                        </div>


                    </div>

                    <div id="teacher">
                        <p className="teacherIcon"><Book alt="ícone do Professores" /> Professores</p>

                        <div className="teacher-container-a">

                            <p className="oblique"><Book alt="ícone do Professores" /> Professores</p>

                            <h2 className="title">{TitleArrayP[teacherState]}</h2>

                            <p className="phrase">{PhrasesArrayP[teacherState]}</p>

                            <a className="btn-teacher" onClick={() => teacherState === 1 ? setTeacherState(0) : setTeacherState(teacherState + 1)}>
                                <ArrowRightOrange />
                            </a>
                        </div>

                        <div className="cll-teacher">
                            <a className="btn" onClick={() => teacherState === 1 ? setTeacherState(0) : setTeacherState(teacherState + 1)}>
                                <ArrowRightOrange />
                            </a>
                            <div className="img-container">
                                {PicsArrayP[teacherState]}
                            </div>
                        </div>
                    </div>

                    <div id="club">
                        <p className="clubIcon"><img src={BusinessWhite} alt="ícone do club" /> Clubes</p>


                        <div className="club-container-a">

                            <p className="oblique"><img src={BusinessWhite} alt="ícone do club" /> Clubes</p>

                            <h2 className="title">{TitleArrayC[clubState]}</h2>

                            <p className="phrase">{PhrasesArrayC[clubState]}</p>

                            <a className="btn-club" onClick={() => clubState === 1 ? setClubState(0) : setClubState(clubState + 1)}>
                                <ArrowRightOrange />
                            </a>
                        </div>

                        <div className="cll-club">
                            <div className="img-container">
                                {PicsArrayC[clubState]}
                            </div>
                            <a className="btn" onClick={() => clubState === 1 ? setClubState(0) : setClubState(clubState + 1)}>
                                <ArrowRightOrange />
                            </a>
                        </div>

                    </div>
                    <div className="gostou-container">
                        <div className="a-container">
                            <div className="text-conteiner">

                                <h1 style={{ marginBottom: 40 }}>Gostou? <span>Baixe</span> o app <span>agora</span> mesmo</h1>
                            </div>
                            <div className="store-container">
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
                        <div className="b-container">
                            <img src={Gostou} alt="Tenista jogando tênis" />
                        </div>
                    </div>

                    <div className="last-container">
                        <div className="comments-container">
                            <div className="perfil">
                                <img src={Perfil} alt="imagem do perfil" />
                                {NameArray[indexComment]}
                            </div>

                            <Phrases array={CommentArray[indexComment]} />
                            <div className="btn-comentario">
                                <a onClick={() => indexComment === 0 ? setIndexComment(2) : setIndexComment(indexComment - 1)}>
                                    <img src={ArrowLeft} alt="comentário anterior" />
                                </a>

                                <a className="arrowLeft" onClick={() => indexComment === 2 ? setIndexComment(0) : setIndexComment(indexComment + 1)}>
                                    <img src={ArrowRightOrangeAAA} alt="próximo comentário" />
                                </a>
                            </div>
                        </div>
                        <form
                            className="contact-form"
                            onSubmit={sendEmail}
                        >
                            <h2 className="text-form">Ainda ficou alguma <span>dúvida?</span></h2>
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
                    </div>

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
            </div>
        </>
    );
}

export default Landing;
