import React, {useState} from "react"
import { useHistory } from "react-router";

const useModal = () =>{
    const [show, setShow] = useState(false);
    const [modalTitle, setModalTitle] = useState("");
    const history = useHistory()

    const handleClose = () => {
        setShow(false);
    }

    const handleShowMobile = (title) => {
        if(window.matchMedia("(max-width : 500px)").matches){
            setShow(true);
        }
        setModalTitle(title)
    }

    const handleShowDesktop = (e) => {
        setShow(true)
    }

    const handleProjectsMobile = () =>{
        if(window.matchMedia("(max-width : 500px)").matches){
            history.push("/projects")
        }
    }

    const handleProjects = () =>{
        history.push("/projects")
    }

    return ({
        show,
        modalTitle,
        handleClose, 
        handleShowMobile,
        handleShowDesktop,
        handleProjectsMobile,
        handleProjects
    })
}

export default useModal