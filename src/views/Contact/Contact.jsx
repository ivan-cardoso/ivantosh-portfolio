import React from 'react'
import Button from '../../components/Button/Button'
import WindowHeader from '../Projects/WindowHeader'
import s from "./style.module.scss"

const Contact = () => {
    return (
        <div>
            <WindowHeader windowTitle={"Contact"} />
            <div className={s.contact__container} >
                <div className={s.contact__form__section}>
                    <div className={s.contact__title__container}>
                        <h2 className={s.contact__title} >Envíame un mensaje</h2>
                    </div>

                    <div className={s.contact__form__container}>
                        <form action="" className={s.contact__form} >
                            <label htmlFor="nombre">Nombre*</label> 
                            <input className={s.contact__form__input} name="Nombre" type="text" required />
                            
                            <label htmlFor="email">Email*</label> 
                            <input className={s.contact__form__input} name="Email" type="email"  required/>
                            
                            <label htmlFor="comentario">Comentario*</label> 
                            <textarea className={s.contact__form__input} rows={7} cols={"auto"}  name="Comentario" type="area" required />
                        
                            <div className={s.contact__btn__container} >
                                <Button text={"Enviar"} />
                            </div>

                        </form>


                    </div>

                </div>
            </div>
        </div>
    )
}

export default Contact
