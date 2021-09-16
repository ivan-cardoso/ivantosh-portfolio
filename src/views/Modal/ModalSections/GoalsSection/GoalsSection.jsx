import React from 'react'
import Button from '../../../../components/Button/Button'
import { Link } from "react-router-dom"
import s from "../style.module.scss"

const GoalsSection = () => {
    return (
            <div className={s.goals__section}>
                <h1 className={s.modal__title}>Mis Objetivos</h1>
                <div>
                    <h3  className={s.title__h3} >De aquí hacia adelante...</h3>        
                    <p className={s.modal__text}>
                        Me motiva crear proyectos que realmente <b>ayuden</b> y tengan <b>impacto en las personas.</b>
                        <br/><br/> 
                        <b></b>
                        Mi deseo es formar parte de un <b> equipo innovador</b> donde
                        reine el <b>optimismo</b>, el <b>respeto</b> y el <b>compañerismo.</b> 
                        <br/><br/>
                        Un equipo en el que todos los días pueda <b>aprender, agregar valor, </b> 
                        y que nuestros usuarios puedan crecer a partir de nuestras soluciones.
                    </p>
                </div>
                <div className={s.btn__container} >
                    <Link to={"/contact"} >
                        <Button text={"Contacto"} />
                    </Link>
                    <a href="CV-Ivan Cardoso.pdf" download >
                        <Button text={"CV"} />
                    </a>
                </div>
        </div>
    )
}

export default GoalsSection
