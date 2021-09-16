import React from 'react'
import Button from '../../components/Button/Button'
import WindowHeader from '../Projects/WindowHeader'
import s from "./style.module.scss"

import emailjs from "emailjs-com"
import Modal from '../Modal/Modal'
import useModal from '../../hooks/useModal'

const Contact = () => {

    const {
        show,
        modalTitle,
        handleClose,
        handleShowMobile,
        handleShowDesktop
    } = useModal()

    const handleSubmit = (e) =>{
        e.preventDefault();

        emailjs.sendForm('service_8206uhh', 'template_9fb6hjr', e.target, 'user_LSXAZlkY6UMrUVlt7MdyN')
        .then((result) => {
            console.log(result.text);
            handleShowMobile("contact_message")
            handleShowDesktop()
            e.target.reset()
        })
        .catch((error) => {
            console.log(error.text);
        })
    }


    return (
        <div>
            <WindowHeader windowTitle={"Contact"} />
            <div className={s.contact__container} >
                <div className={s.contact__form__section}>
                    <div className={s.contact__title__container}>
                        <h2 className={s.contact__title} >Envíame un mensaje</h2>
                    </div>

                    <div className={s.contact__form__container}>
                        <form action="" className={s.contact__form} 
                            onSubmit={handleSubmit} 
                        >
                            <label htmlFor="nombre">Nombre*</label> 
                            <input className={s.contact__form__input} name="name" type="text" required />
                            
                            <label htmlFor="email">Email*</label> 
                            <input className={s.contact__form__input} name="email" type="email"  required/>
                            
                            <label htmlFor="comentario">Comentario*</label> 
                            <textarea className={s.contact__form__input} rows={7} cols={"auto"}  name="comment" type="area" required />
                        
                            <div className={s.contact__btn__container}>
                                <Button text={"Enviar"} />
                            </div>

                        </form>

                    </div>

                </div>
            </div>

            {show && <Modal handleClose={handleClose} modalTitle={modalTitle} height={"50%"}/>}
            
        </div>
    )
}

export default Contact
