import React from 'react'
import s from "./style.module.scss"
import useModal from "../../hooks/useModal"

const Modal = ({handleClose, modalTitle}) => {

    // const {show, handleShow, handleClose} = useModal()

    return (
        <div className={s.modal__section}>
            <div className={s.modal__container}>
                <div className={s.modal__header}>
                    <div className={s.modal__header__controls}>
                        <button onClick={handleClose} >X</button>
                        <button>Y</button>
                    </div>
                    <h4>{modalTitle}</h4>
                </div>
                <div className={s.modal__body}>
                    This is a Modal Body
                </div>
            </div>
        </div>
    )
}

export default Modal
