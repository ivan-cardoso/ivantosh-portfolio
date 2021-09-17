import React, {useState} from 'react'

import useFullScreen from "../../hooks/useFullScreen"
import s from "./style.module.scss"

import { FaLinkedin, FaGithub } from "react-icons/fa"
import { BsArrowsFullscreen } from "react-icons/bs"

import Alert from './Alert'

const Navbar = () => {

    const date = new Date()
    const formatDate = date.toDateString().split(" ")
    const { handleFullScreen } = useFullScreen()

    const [show, setShow] = useState(false)
    const showAlert = () =>{
        const alert = document.querySelector("#alert__container")

        if(alert && !show){
            alert.style.display = "flex"
            setShow(true)
        }else{
            alert.style.display = "none"
            setShow(false)
        }
    }

    return (
        <div className={s.navbar__container} >
            <a href="https://github.com/ivan-cardoso" target="_blank" rel="noopener noreferrer">
                <div className={s.navbar__icon__container} >
                    <FaGithub color={"white"} />
                    <p className={s.navbar__text} >ivan-cardoso</p>
                </div>
            </a>
            <div  className={s.navbar__date__container} >

                <div className={s.navbar__text__container}  onMouseOver={showAlert}  onMouseLeave={showAlert}>
                    <p  className={s.navbar__text} id="navbar__date"  >
                        {`${formatDate[0]} ${formatDate[2]} ${formatDate[1]} `}
                    </p>
                </div>
                <span id="alert__container" className={s.alert__container} >
                    <Alert/>
                </span>
                
            </div>

            <a href="https://www.linkedin.com/in/ivan--cardoso/" target="_blank" rel="noopener noreferrer">
                <div className={s.navbar__icon__container}>
                    <FaLinkedin color={"white"} />
                    <p className={s.navbar__text} >ivan--cardoso</p>
                </div>
            </a>
            <div className={s.navbar__fullscreen} onClick={handleFullScreen} >
                <BsArrowsFullscreen />
            </div>
        </div>
    )
}

export default Navbar
