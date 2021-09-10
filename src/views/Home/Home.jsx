import React, { useState, useEffect } from 'react'
import IconHome from '../../components/IconHome/IconHome'
import s from "./style.module.scss"

import Modal from "../Modal/Modal"

import iconUrl from "../../utils/iconHome.svg"
import computer from "../../utils/computer.svg"
import { ReactComponent as ivanExplorer } from "../../utils/ivanExplorer.svg"
import { ReactComponent as Computer } from "../../utils/computer.svg"
import { ReactComponent as FileInfolder } from "../../utils/file-in-folder.svg"
import { ReactComponent as PaperClip } from "../../utils/paperclip.svg"
import { ReactComponent as File } from "../../utils/file.svg"
import { ReactComponent as Context } from "../../utils/context.svg"
import useModal from "../../hooks/useModal"

const Home = () => {

    const {
        show,
        modalTitle,
        handleShow,
        handleShowDesktop,
        handleShowMobile,
        handleClose,
        handleProjectsMobile,
        handleProjects
    } = useModal()

    return (
        <div>
            <div className="">
                <div className={s.home__container}>
                    <div>
                        <IconHome Icon={Computer}
                            title={"Me"}
                            handleShowDesktop={handleShowDesktop}
                            handleShowMobile={handleShowMobile}
                        />
                    </div>
                    <div>
                        <IconHome Icon={FileInfolder} title={"My_Projects"}
                            handleShowDesktop={handleProjects}
                            handleShowMobile={handleProjectsMobile}
                        />
                    </div>
                    <div>
                        <IconHome Icon={ivanExplorer} title={"Education"}
                            handleShowDesktop={handleShowDesktop}
                            handleShowMobile={handleShowMobile}
                        />
                    </div>
                    <div className={s.double__icon__row} >
                        <IconHome Icon={FileInfolder} title={"Technologies"}
                            handleShowDesktop={handleShowDesktop}
                            handleShowMobile={handleShowMobile}
                        />
                        <IconHome Icon={Computer} title={"Download_Cv"}
                            handleShowDesktop={handleShowDesktop}
                            handleShowMobile={handleShowMobile}
                        />
                    </div>
                    <div className={s.double__icon__row}>
                        <IconHome Icon={FileInfolder} title={"My_Goals"}
                            handleShowDesktop={handleShowDesktop}
                            handleShowMobile={handleShowMobile}
                        />
                        <IconHome Icon={Computer} title={"Contact_Me"}
                            handleShowDesktop={handleShowDesktop}
                            handleShowMobile={handleShowMobile}
                        />
                    </div>
                    {show && <Modal handleClose={handleClose} modalTitle={modalTitle} />}
                </div>
            </div>
        </div>

    )
}

export default Home
