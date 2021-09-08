import React from 'react'
import profile from "../../../../utils/p1.jpg"
import Button from "../../../../components/Button/Button"

import s from "./style.module.scss"

const MeSection = () => {
    return (
        <div className={s.me__section}>
            <div className={s.me__container} >
                <div className={s.me__imgcontainer}>
                    <img src={profile} alt="Ivan Cardoso" />
                </div>

                <div className={s.me__content__container} >
                    <h2 className={s.content__title}>IVAN CARDOSO</h2>
                    <h3 className={s.content__subtitle} >FULLSTACK DEVELOPER</h3>
                    <p className={s.content__text}>
                        Me considero un programador flexible,
                        ordenado y entusiasta del trabajo en
                    equipo. <br /><br />
                    Realicé un <b> Coding Bootcamp </b>
                    donde me formé como desarrollador
                    fullstack. <br /><br />
                    Un programa de más 800
                    horas en 15 semanas, donde pude poner
                    a prueba y fortalecer habilidades como
                    el trabajo en equipo, el rápido
                    aprendizaje, la escucha activa y la
                    adaptación a constantes cambios.
                </p>
                </div>
            </div>
            <div className={s.btn__container}>
                <Button text={"Technologies"} />
                <Button text={"Projects"} />
            </div>
        </div>
    )
}

export default MeSection

