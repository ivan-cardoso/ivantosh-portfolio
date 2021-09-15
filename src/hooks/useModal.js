import React, {useState, useEffect} from "react"
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

    const [welcomeModal, setWelcomeModal] = useState(()=>{
        const local = window.sessionStorage.getItem("welcome")
        console.log("LOCAL", local)
        return local === "false" ? local : "true"
        // JSON.parse(window.localStorage.getItem("cartItems")) || []
    })
    
    const handleCloseWelcome = () =>{
        setWelcomeModal("false")

        // const myStorage = window.localStorage 
        
        // myStorage.setItem("welcome", welcomeModal)
    }

    console.log("welcome", welcomeModal)
    console.log("STORAGE", window.sessionStorage.getItem("welcome"))

    useEffect(()=> {
        const myStorage = window.sessionStorage 
        myStorage.setItem("welcome", welcomeModal)
        // window.localStorage.setItem("welcome", JSON.stringify(welcomeModal))
    },[welcomeModal])

    

    return ({
        show,
        modalTitle,
        handleClose, 
        handleShowMobile,
        handleShowDesktop,
        handleLinkMobile,
        handleLink,
        handlePdf,
        handlePdfMobile,
        welcomeModal,
        handleCloseWelcome
    })
}

export default useModal