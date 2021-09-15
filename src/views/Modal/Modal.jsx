import React, { useEffect } from 'react'
import s from "./style.module.scss"
import useModal from "../../hooks/useModal"
import { ReactComponent as Xicon } from "../../utils/x.svg"
import ModalBody from './ModalBody/ModalBody'
import ModalHeader from "./ModalHeader/ModalHeader"


const Modal = ({ handleClose, modalTitle, singleProject, height, width }) => {

    const { show, handleShow } = useModal()


    useEffect(() => {
        const modal = document.querySelector("#modal__container")
        if (height) {
            modal.style.height = height
        }
        if (width) {
            modal.style.width = width
        }
    }, [])

    const section = document.querySelector("#modal__section");
    document.addEventListener('click', function (event) {
        console.log(event.target.id)
        if(event.target.id === "modal__section"){
            document.querySelector("#modal__container").animate([
                // keyframes
                { transform: 'translateX(2.5px)' },
                // { transform: 'translateX(-5px)' }
              ], {
                // timing options
                delay: 0,
                easing : "ease",
                duration: 150,
                iterations: 3
              });
        }
    });

    return (
        <div className={s.modal__section} id="modal__section" >
            <div className={s.modal__container} id="modal__container">
                <ModalHeader handleClose={handleClose} modalTitle={modalTitle} />
                <div className={s.modal__body}>
                    <ModalBody section={modalTitle} singleProject={singleProject} />
                </div>
            </div>
        </div>
    )
}

export default Modal
