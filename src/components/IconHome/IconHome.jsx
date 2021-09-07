import React from 'react'
import s from "./style.module.scss"
import useModal from "../../hooks/useModal"

const IconHome = ({ title, Icon, handleShowMobile, handleShowDesktop}) => {

    return (
        <button className={s.button__container} 
            onDoubleClick={()=>handleShowDesktop(title)} 
            onClick={()=>handleShowMobile(title)}
            onKeyDown={(e)=> handleShowDesktop(e)}
        >
            <div className={s.icon__container}>
                <Icon className={s.icon__svg} />
            </div>
            <h3 className={s.icon__title}> {title} </h3>
        </button>
    )
}

export default IconHome
