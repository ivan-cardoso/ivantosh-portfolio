import React from 'react'
import s from "./style.module.scss"

const Button = ({text}) => {
    return (
        <>
            <button className={s.button} >{text}</button>
        </>
    )
}

export default Button
