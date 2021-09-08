import React from 'react'
import s from "./style.module.scss"
import useModal from "../../hooks/useModal"
import {ReactComponent as  Xicon} from "../../utils/x.svg"
import ModalBody from './ModalBody/ModalBody'
import ModalHeader from "./ModalHeader"


const Modal = ({handleClose, modalTitle}) => {

    // const {show, handleShow, handleClose} = useModal()

    return (
        <div className={s.modal__section}>
            <div className={s.modal__container}>
                <ModalHeader handleClose={handleClose} modalTitle={modalTitle}  />
                <div className={s.modal__body}>
                    <ModalBody section={modalTitle} />
                </div>
            </div>
        </div>
    )
}

export default Modal
