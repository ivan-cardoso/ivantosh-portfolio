import React from 'react'
import s from "../style.module.scss"
import me from "../MeSection/style.module.scss"
import Button from '../../../../components/Button/Button'

import {Link} from "react-router-dom"

const ContactSection = () => {
    return (
        // <div className={me.me__section}>
            <div className={s.contact__message}>
                <h1 className={s.modal__title}>¡Gracias!</h1>
                <div className={s.contact__text} >
                    <h3 className={s.title__h5}>¡¡Aprecio mucho tu mensaje!!</h3>
                    <h3 className={s.title__h5}>Enseguida me contactare contigo</h3>
                </div>

                <div className={s.btn__container} >
                    <Link to={"/"} >
                        <Button text={"Volver"} />
                    </Link>

                    <a href="CV-Ivan Cardoso.pdf" download >
                        <Button text={"CV"} />
                    </a>

                </div>
            </div>

        // </div>
    )
}

export default ContactSection
