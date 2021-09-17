import React from 'react'
import s from "./style.module.scss"

import { FcIdea } from "react-icons/fc"
import { GoLightBulb, GoRocket } from "react-icons/go"
import {RiCloseCircleLine} from "react-icons/ri"

const Alert = ({handleAlert}) => {
    return (
        <div className={s.navbar__alert}>
            <div className={s.alert__square} ></div>
            <div className={s.alert__body} >
                <div className={s.alert__body__close} onClick={handleAlert}>
                    <RiCloseCircleLine/>
                </div>
                <div className={s.alert__body__icon}>
                    <GoLightBulb/>
                </div>
                <div className={s.alert__body__content}>
                    <h3><b>¡RECUERDA!</b></h3>
                    <p>Si estas en Desktop, para ingresar en las secciones deberás hacer <b>DOBLE CLICK</b> sobre los <b>íconos.</b></p>
                </div>
            </div>
        </div>
    )
}

export default Alert
