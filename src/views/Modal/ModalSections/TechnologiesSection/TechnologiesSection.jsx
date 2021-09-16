import React from 'react'
import s from "../style.module.scss"
import me from ".././MeSection/style.module.scss"

import { FaReact, FaSass, FaBootstrap, FaNodeJs, FaDatabase, FaGithub } from "react-icons/fa";
import { SiJavascript, SiRedux, SiHtml5, SiCss3, SiPostgresql, SiJsonwebtokens, SiMaterialUi } from "react-icons/si"
import { BiLoaderAlt } from "react-icons/bi"
import Button from '../../../../components/Button/Button';
import { ReactComponent as Express } from "../../../../utils/expressjs.svg"
import { Link } from 'react-router-dom';
const TechnologiesSection = () => {
    return (
        <div>
            <div className={me.me__section}>
                <h1 className={s.modal__title}>Tecnologías</h1>

                <div className={s.icon__technology__section}>
                    <div className={s.icon__technology__container}>
                        <SiJavascript className={s.icon__technology} />
                        <p className={s.text__tech}>JavaScript</p>
                    </div>
                    <div className={s.icon__technology__container}>
                        <FaReact className={s.icon__technology} />
                        <p className={s.text__tech}>React</p>
                    </div>
                    <div className={s.icon__technology__container}>
                        <SiRedux className={s.icon__technology} />
                        <p className={s.text__tech}>Redux</p>
                    </div>
                    <div className={s.icon__technology__container}>
                        <SiHtml5 className={s.icon__technology} />
                        <p className={s.text__tech}>HTML</p>
                    </div>
                    <div className={s.icon__technology__container}>
                        <SiCss3 className={s.icon__technology} />
                        <p className={s.text__tech}>CSS</p>
                    </div>
                    <div className={s.icon__technology__container}>
                        <FaSass className={s.icon__technology} />
                        <p className={s.text__tech}>Scss</p>
                    </div>
                    <div className={s.icon__technology__container}>
                        <FaBootstrap className={s.icon__technology} />
                        <p className={s.text__tech}>Bootstrap</p>
                    </div>
                    <div className={s.icon__technology__container}>
                        <FaNodeJs className={s.icon__technology} />
                        <p className={s.text__tech}>Node Js</p>
                    </div>
                    <div className={s.icon__technology__container}>
                        <Express className={s.icon__technology} />
                        <p className={s.text__tech}>Express Js</p>
                    </div>
                    <div className={s.icon__technology__container}>
                        <SiPostgresql className={s.icon__technology} />
                        <p className={s.text__tech}>PostgreSQL</p>
                    </div>
                    <div className={s.icon__technology__container}>
                        <FaDatabase className={s.icon__technology} />
                        <p className={s.text__tech}>Sequelize</p>
                    </div>
                    <div className={s.icon__technology__container}>
                        <FaGithub className={s.icon__technology} />
                        <p className={s.text__tech}>Git</p>
                    </div>
                    <div className={s.icon__technology__container}>
                        <SiJsonwebtokens className={s.icon__technology} />
                        <p className={s.text__tech}>JWT</p>
                    </div>
                    <div className={s.icon__technology__container}>
                        <SiMaterialUi className={s.icon__technology} />
                        <p className={s.text__tech}>Material UI</p>
                    </div>
                </div>

                <div className={s.learning__technology__container} >
                    <h3 className={s.title__h3} >Siempre aprendiendo...</h3>
                </div>

                <div className={s.btn__container}>
                    <Link to={"/projects"}> 
                        <Button text={"Proyectos"} />
                    </Link>
                    <Link to={"/contact"}> 
                        <Button text={"Contacto"} />
                    </Link>
                 </div>

            </div>
        </div>
    )
}

export default TechnologiesSection
