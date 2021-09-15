import React, {useState, useEffect, createContext, useContext} from 'react'
import { useHistory } from "react-router";


export const ModalContext  = createContext()

export default function ModalProvider ({children}){
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

    const handleLinkMobile = (link) =>{
        if(window.matchMedia("(max-width : 500px)").matches){
            handleLink(link)
        }
    }

    const handleLink = (link) =>{
        return history.push(`/${link}`)
    }

    const handlePdf = () =>{
        const link = document.createElement("a")
        link.href = "CV-Ivan Cardoso.pdf"
        link.setAttribute(
            'download',
            `CV-Ivan Cardoso.pdf`,
          );
        document.body.appendChild(link)
        link.click();
        document.body.removeChild(link);
    }

    const handlePdfMobile = () =>{
        if(window.matchMedia("(max-width : 500px)").matches){
            handlePdf()
        }
    }


    return <ModalContext.Provider value={{
        show,
        modalTitle,
        handleClose, 
        handleShowMobile,
        handleShowDesktop,
        handleLinkMobile,
        handleLink,
        handlePdf,
        handlePdfMobile
    }}>{children}</ModalContext.Provider>
}

export const useModalContext = () => useContext(ModalContext)