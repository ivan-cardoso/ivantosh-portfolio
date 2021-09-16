import React from 'react'

import { Link } from "react-router-dom"

import s from "./style.module.scss"

import { ReactComponent as Xicon } from "../../utils/x.svg"
import { ReactComponent as Back } from "../../utils/back.svg"
import { ReactComponent as Forward } from "../../utils/forward.svg"
import { ReactComponent as ListIcon } from "../../utils/list-icon.svg"
import { ReactComponent as ListSquare } from "../../utils/list-square.svg"

const WindowHeader = ({windowTitle}) => {
    return (
        <div className={s.window__header__container}>

            <div className={s.window__header}>
                <div className={s.window__header__controls}>
                    <Link to={"/"}>
                        <button className={s.window__header__btn}>
                            <Xicon className={s.window__header__svg} />
                        </button>
                    </Link>
                    <button className={s.window__header__btn} ></button>
                </div>
                <h4 className={s.window__header__title} >{`${windowTitle}.txt`}</h4>
            </div>

            <div className={s.window__header__icons}  >
                <div className={s.window__header__controls}>
                    <button className={s.window__header__icon__controls} ><Back /></button>
                    <button className={s.window__header__icon__controls} ><Forward /></button>
                </div>

                <input className={s.window__header__input}
                    type="text"
                    value={`I://IvanTosh/PC/Ivan/Desktop/${windowTitle}`}
                />

                <div className={s.window__header__controls}>
                    <button className={s.window__header__icon__controls} ><ListIcon /></button>
                    <button className={s.window__header__icon__controls} ><ListSquare /></button>
                </div>
            </div>
        </div>
    )
}

export default WindowHeader
