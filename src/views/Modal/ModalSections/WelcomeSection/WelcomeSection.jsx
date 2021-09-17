import React from 'react'
import Button from '../../../../components/Button/Button'

import me from "../MeSection/style.module.scss"

import { ReactComponent as IvanExplorer } from "../../../../utils/ivanExplorer.svg" 

import { GoLightBulb, GoRocket } from "react-icons/go"

import useFullScreen from "../../../../hooks/useFullScreen"


const WelcomeSection = ({handleClose}) => {

    const {handleFullScreen} = useFullScreen()
    
    return (
        <div className={me.welcome__section}>
        <div className={me.welcome__container} >
            <div className={me.welcome__svg__container}>
                <IvanExplorer/>
            </div>

            <div className={me.me__content__container} >
                <h2 className={me.content__title}>WELCOME TO IVANTOSH</h2>
                <h3 className={me.welcome__subtitle} >Yo soy IVÁN CARDOSO - FULLSTACK DEVELOPER </h3>
                <h3 className={me.welcome__subtitle} >Este es mi Sistema Operativo</h3>
                
                
                <p className={me.welcome__content__text}>
                    En este SO sabrás <b>acerca de mí</b>, las <b>tecnologías</b> que actualmente uso, 
                    <b> proyectos</b> que he realizado y los medios para <b>contactarme.</b> 
                </p>

                {/* <p className={me.welcome__content__text}>
                    <GoLightBulb/> <b>RECUERDA</b>. Si estas en Desktop, para ingresar en las secciones deberás hacer <b>doble click</b> sobre los íconos. 
                </p> */}
                <p className={me.welcome__content__text}>
                    <GoRocket/> <b>RECOMENDACIÓN</b>. Para tener una mejor experiencia entrar en <b>Pantalla Completa </b> 
                </p>
            
            </div>
        </div>
        <div className={me.btn__container}>
            <div onClick={handleFullScreen}>
                <Button text={"Pantalla Completa"}  />
            </div>
            <div onClick={handleClose}>
                <Button text={"¡Empezar!"} />
            </div>
        </div>
    </div>

    )
}

export default WelcomeSection
