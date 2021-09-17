import React from 'react'
import IconHome from '../../components/IconHome/IconHome'
import s from "./style.module.scss"

import Modal from "../Modal/Modal"

import { ReactComponent as ivanExplorer } from "../../utils/ivanExplorer.svg"
import { VscFilePdf, VscFolderOpened } from "react-icons/vsc"
import { HiOutlineDesktopComputer } from "react-icons/hi"
import { FaReact } from "react-icons/fa";
import { GoLightBulb } from "react-icons/go"
import { RiChatSmile3Line } from "react-icons/ri"

import Alert from "../../components/Navbar/Alert"

import useModal from "../../hooks/useModal"

const Home = () => {

    const {
        show,
        modalTitle,
        handleShowDesktop,
        handleShowMobile,
        handleClose,
        handleLink,
        handleLinkMobile,
        handlePdf,
        handlePdfMobile,
        welcomeModal,
        handleCloseWelcome,
        welcomeAlert,
        handleAlert
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
                        handleShowDesktop={() => handleLink("projects")}
                        handleShowMobile={() => handleLinkMobile("projects")}
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
                    <IconHome Icon={VscFilePdf} title={"Download_Cv"}
                        handleShowDesktop={handlePdf}
                        handleShowMobile={handlePdfMobile}
                    />
                </div>
                <div className={s.double__icon__row}>
                    <IconHome Icon={GoLightBulb} title={"My_Goals"}
                        handleShowDesktop={handleShowDesktop}
                        handleShowMobile={handleShowMobile}
                    />
                    <IconHome Icon={RiChatSmile3Line} title={"Contact_Me"}
                        handleShowDesktop={() => handleLink("contact")}
                        handleShowMobile={() => handleLinkMobile("contact")}
                    />
                </div>
                {show && <Modal handleClose={handleClose} modalTitle={modalTitle} />}

                {welcomeModal === "true" ? <Modal handleClose={handleCloseWelcome} modalTitle={"welcome"} /> : <></>}
                <div className={s.home__alert__container} >
                    {welcomeModal === "false" && welcomeAlert === "true" ? <Alert handleAlert={handleAlert} /> : <></>}
                </div>
            </div>
        </div>

    )
}

export default Home
