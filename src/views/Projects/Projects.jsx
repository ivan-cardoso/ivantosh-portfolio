import React from 'react'
import s from "./style.module.scss"

import { ReactComponent as Xicon } from "../../utils/x.svg"
import { ReactComponent as Computer } from "../../utils/computer.svg"
import { ReactComponent as ListDecoration } from "../../utils/list-style.svg"
import IconHome from '../../components/IconHome/IconHome'

import Modal from '../Modal/Modal'
import useModal from "../../hooks/useModal"


const Projects = ({ windowTitle }) => {

    const {show, modalTitle, handleShow, handleShowDesktop, handleShowMobile, handleClose} = useModal()

    return (
        <>
            <div className={s.window__container} >
                <div className={s.window__header__container}>

                    <div className={s.window__header}>
                        <div className={s.window__header__controls}>
                            <button className={s.window__header__btn}>
                                <Xicon className={s.window__header__svg} />
                            </button>
                            <button className={s.window__header__btn} ></button>
                        </div>
                        <h4 className={s.window__header__title} >Projects_txt</h4>
                    </div>

                    <div className={s.window__header__icons}  >
                        <div className={s.window__header__controls}>
                            <button className={s.window__header__icon__controls} >v</button>
                            <button className={s.window__header__icon__controls} >v</button>
                        </div>

                        <input className={s.window__header__input}

                            type="text"
                            value="I://IvanTosh/PC/Ivan/Desktop/My_projects"
                        />

                        <div className={s.window__header__controls}>
                            <button className={s.window__header__icon__controls} >...</button>
                            <button className={s.window__header__icon__controls} >...</button>
                        </div>
                    </div>
                </div>

                <div className={s.window__body__container}>
                    <div className={s.window__body__sidebar} >
                        <ul className={s.window__sidebar__list} >
                            <li><ListDecoration/><p>Me</p></li>

                            <li>
                                <ListDecoration/>
                                <p className={s.window__sidebar__active}>Projects</p>
                                <ul className={s.window__sidebar__projects} >
                                    <li><ListDecoration/> <p>Weather</p></li>
                                    <li><ListDecoration/> <p>Branch&Gamer</p></li>
                                    <li><ListDecoration/> <p>Vintage Vibes</p></li>
                                    <li><ListDecoration/> <p>Quentin IMDB</p></li>
                                    <li><ListDecoration/> <p>Bumeran Selecta</p></li>
                                </ul>
                            </li>
                            <li><ListDecoration/><p>Education</p></li>
                            <li><ListDecoration/><p>Technologies</p></li>
                            <li><ListDecoration/><p>Goals</p></li>
                        </ul>
                    </div>

                    <div className={s.window__body__files}>
                        <div className={s.window__icon__files__container} >
                            <IconHome Icon={Computer} 
                                title={"Weather"} 
                                handleShowDesktop={handleShowDesktop}
                                handleShowMobile={handleShowMobile}/>
                        </div>

                        <div className={s.window__icon__files__container}>
                            <IconHome 
                                Icon={Computer} 
                                title={"Ecommerce"}
                                handleShowDesktop={handleShowDesktop}
                                handleShowMobile={handleShowMobile}
                            />
                        </div>
                        <div className={s.window__icon__files__container}>
                            <IconHome 
                                Icon={Computer}
                                title={"Vintage Vibes"}
                                handleShowDesktop={handleShowDesktop}
                                handleShowMobile={handleShowMobile}
                            />
                        </div>
                        <div className={s.window__icon__files__container}>
                            <IconHome 
                                Icon={Computer} 
                                title={"Quentin IMDB"}
                                handleShowDesktop={handleShowDesktop}
                                handleShowMobile={handleShowMobile}
                            />
                        </div>
                        <div className={s.window__icon__files__container}>
                            <IconHome 
                                Icon={Computer} 
                                title={"Bumeran Selecta"}
                                handleShowDesktop={handleShowDesktop}
                                handleShowMobile={handleShowMobile}
                            />
                        </div>
                    </div>
                </div>
                {show && <Modal handleClose={handleClose}  modalTitle={modalTitle} />}

            </div>
        </>
    )
}

export default Projects
