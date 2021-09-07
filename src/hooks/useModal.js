import React, {useState} from "react"

const useModal = () =>{
    const [show, setShow] = useState(false);
    const [modalTitle, setModalTitle] = useState("");

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
    
    return ({
        show,
        modalTitle,
        handleClose, 
        handleShowMobile,
        handleShowDesktop
    })
}

export default useModal