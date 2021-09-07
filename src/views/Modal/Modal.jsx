import React from 'react'
import s from "./style.module.scss"
import useModal from "../../hooks/useModal"
import {ReactComponent as  Xicon} from "../../utils/x.svg"
import ModalBody from './ModalBody/ModalBody'

const Modal = ({handleClose, modalTitle}) => {

    // const {show, handleShow, handleClose} = useModal()

    return (
        <div className={s.modal__section}>
            <div className={s.modal__container}>
                <div className={s.modal__header}>
                    <div className={s.modal__header__controls}>
                        <button className={s.modal__header__btn} onClick={handleClose} >
                            <Xicon className={s.modal__header__svg} />
                        </button>
                        <button className={s.modal__header__btn} ></button>
                    </div>
                    <h4 className={s.modal__header__title} >{modalTitle}</h4>
                </div>
                <div className={s.modal__body}>
                    <ModalBody section={modalTitle} />
                </div>
            </div>
        </div>
    )
}

export default Modal
