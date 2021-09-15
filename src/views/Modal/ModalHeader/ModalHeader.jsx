import React from 'react'
import {ReactComponent as  Xicon} from "../../../utils/x.svg"
import s from ".././style.module.scss"

const ModalHeader = ({handleClose, modalTitle}) => {
    return (
        <div className={s.modal__header}>
            <div className={s.modal__header__controls}>
                <button className={s.modal__header__btn} onClick={handleClose} >
                    <Xicon className={s.modal__header__svg} />
                </button>
                <button className={s.modal__header__btn} ></button>
            </div>
            <div className={s.modal__header__title}>
                <h4  >{modalTitle}</h4>
            </div>
            <div className={s.modal__header__controls}>
            </div>
        </div>
    )
}

export default ModalHeader
