import React from 'react'
import profile from "../../../../utils/p1.jpg"
import s from "./style.module.scss"

const MeSection = () => {
    return (
        <div className={s.me__container}>
            <div className={s.me__imgcontainer}>
                {/* <div className={s.me__noisy__background} ></div> */}
                <img src={profile}  className={s.noisy} alt="Ivan Cardoso" />
            </div>
        </div>
    )
}

export default MeSection

