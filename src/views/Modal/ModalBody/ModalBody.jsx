import React from 'react'
import MeSection from '../ModalSections/MeSection/MeSection'
import EducationSection from '../ModalSections/EducationSection/EducationSection'

import TechnologiesSection from '../ModalSections/TechnologiesSection/TechnologiesSection'
import GoalsSection from '../ModalSections/GoalsSection/GoalsSection'
import ContactSection from '../ModalSections/ContactSection/ContactSection'
import WelcomeSection from '../ModalSections/WelcomeSection/WelcomeSection'

import SingleProject from "../../Projects/SingleProjects/SingleProject"

const ModalBody = ({section, singleProject, handleClose}) => {

    const CurrentSection = () =>{
        if(section === "Me") return <MeSection/>
        if(section === "Education") return <EducationSection/>
        if(section === "Technologies") return <TechnologiesSection/>
        if(section === "My_Goals") return <GoalsSection/>
        if(section === "Contact_Me") return <ContactSection/> 
        
        if(section === "contact_message") return <ContactSection/> 

        if(section === "welcome") return <WelcomeSection handleClose={handleClose} /> 
        
        if(singleProject) return <SingleProject section={section} />

        return <EducationSection/>
        
    }

    return (
        <>
            <CurrentSection/>
        </>
    )
}

export default ModalBody
