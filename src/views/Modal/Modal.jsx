import React, {useEffect} from 'react'
import s from "./style.module.scss"
import useModal from "../../hooks/useModal"
import {ReactComponent as  Xicon} from "../../utils/x.svg"
import ModalBody from './ModalBody/ModalBody'
import ModalHeader from "./ModalHeader/ModalHeader"


const Modal = ({handleClose, modalTitle, singleProject, height, width}) => {

    const {show, handleShow} = useModal()

    
    useEffect(() => {
        const modal = document.querySelector("#modal__container")
        if(height){
            modal.style.height = height
        }
        if(width){
            modal.style.width = width
        }
    }, [])

    return (
        <div className={s.modal__section}>
            <div className={s.modal__container} id="modal__container">
                <ModalHeader handleClose={handleClose} modalTitle={modalTitle}/>
                <div className={s.modal__body}>
                    <ModalBody section={modalTitle} singleProject={singleProject} />
                </div>
            </div>
        </div>
    )
}

export default Modal
