import React, { useState } from 'react'
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

const Home = () => {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <div>
            <div className="">
                <div className={s.home__container}>
                    <div>
                        <IconHome Icon={Computer} title={"Me"} handleShow={handleShow} />
                    </div>
                    <div>
                        <IconHome Icon={FileInfolder} title={"My_Projects"} />
                    </div>
                    <div>
                        <IconHome Icon={ivanExplorer} title={"Education"} />
                    </div>
                    <div className={s.double__icon__row} >
                        <IconHome Icon={FileInfolder} title={"Technologies"} />
                        <IconHome Icon={Computer} title={"Download_Cv"} />
                    </div>
                    <div className={s.double__icon__row}>
                        <IconHome Icon={FileInfolder} title={"My_Goals"} />
                        <IconHome Icon={Computer} title={"Contact_Me"} />
                    </div>
                    {show && <Modal/>}
                </div>
            </div>
        </div>

    )
}

export default Home
