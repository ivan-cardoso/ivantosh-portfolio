import React from 'react'
import s from "./style.module.scss"

import {FaLinkedin, FaGithub} from "react-icons/fa"

const Navbar = () => {

    const date = new Date()
    const formatDate = date.toDateString().split(" ")

    return (
        <div className={s.navbar__container} >
            <a href="https://github.com/ivan-cardoso" target="_blank" rel="noopener noreferrer">
                <div className={s.navbar__icon__container} >
                    <FaGithub color={"white"} />
                    <p className={s.navbar__text} >ivan-cardoso</p>
                </div>
            </a>
            
            <p className={s.navbar__text} >{`${formatDate[0]} ${formatDate[2]} ${formatDate[1]} `}</p>
            
            <a href="https://www.linkedin.com/in/ivan--cardoso/" target="_blank" rel="noopener noreferrer">
                <div className={s.navbar__icon__container}>
                    <FaLinkedin color={"white"} />
                    <p className={s.navbar__text} >ivan--cardoso</p>
                </div>
            </a>
        </div>
    )
}

export default Navbar
