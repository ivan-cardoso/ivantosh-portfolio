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

import { VscFilePdf, VscFolderOpened } from "react-icons/vsc"
import { TiContacts } from "react-icons/ti"
import { MdComputer } from "react-icons/md"
import { HiOutlineDesktopComputer } from "react-icons/hi"
import { FaReact } from "react-icons/fa";
import { GoLightBulb } from "react-icons/go"
import { RiChatSmile3Line } from "react-icons/ri"

import { Link } from "react-router-dom"

import useModal from "../../hooks/useModal"

const Home = () => {

    const {
        show,
        modalTitle,
        handleShow,
        handleShowDesktop,
        handleShowMobile,
        handleClose,
        handleLink,
        handleLinkMobile,
        handlePdf,
        handlePdfMobile
    } = useModal()

    return (
        <div className={s.home__section}>
            <div className={s.home__container}>
                <div>
                    <IconHome Icon={HiOutlineDesktopComputer}
                        title={"Me"}
                        handleShowDesktop={handleShowDesktop}
                        handleShowMobile={handleShowMobile}
                    />
                </div>
                <div>
                    <IconHome Icon={VscFolderOpened} title={"My_Projects"}
                        handleShowDesktop={()=>handleLink("projects")}
                        handleShowMobile={()=>handleLinkMobile("projects")}
                    />
                </div>
                <div>
                    <IconHome Icon={ivanExplorer} title={"Education"}
                        handleShowDesktop={handleShowDesktop}
                        handleShowMobile={handleShowMobile}
                    />
                </div>
                <div className={s.double__icon__row} >
                    <IconHome Icon={FaReact} title={"Technologies"}
                        handleShowDesktop={handleShowDesktop}
                        handleShowMobile={handleShowMobile}
                    />
                    {/* <Link to="CV-Ivan Cardoso.pdf" target="_blank" download> */}
                        <IconHome Icon={VscFilePdf} title={"Download_Cv"}
                            handleShowDesktop={handlePdf}
                            handleShowMobile={handlePdfMobile}
                        />
                    {/* </Link> */}
                </div>
                <div className={s.double__icon__row}>
                    <IconHome Icon={GoLightBulb} title={"My_Goals"}
                        handleShowDesktop={handleShowDesktop}
                        handleShowMobile={handleShowMobile}
                    />
                    <IconHome Icon={RiChatSmile3Line} title={"Contact_Me"}
                        handleShowDesktop={handleShowDesktop}
                        handleShowMobile={handleShowMobile}
                    />
                </div>
                {show && <Modal handleClose={handleClose} modalTitle={modalTitle} />}
            </div>
        </div>

    )
}

export default Home
