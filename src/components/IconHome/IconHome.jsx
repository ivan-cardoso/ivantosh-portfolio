import React from 'react'
import s from "./style.module.scss"

const IconHome = ({ title, Icon, handleShow}) => {

    return (
        <button className={s.button__container} onDoubleClick={()=>handleShow()} >
            <div className={s.icon__container}>
                <Icon className={s.icon__svg} />
            </div>
            <h3 className={s.icon__title}> {title} </h3>
        </button>
    )
}

export default IconHome
