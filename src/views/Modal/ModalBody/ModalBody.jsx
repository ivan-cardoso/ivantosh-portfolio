import React from 'react'
import MeSection from '../ModalSections/MeSection'
import EducationSection from '../ModalSections/EducationSection'
import TechnologiesSection from '../ModalSections/TechnologiesSection'
import DownloadSection from '../ModalSections/DownloadSection'
import GoalsSection from '../ModalSections/GoalsSection'
import ContactSection from '../ModalSections/ContactSection'

const ModalBody = ({section}) => {

    console.log(section)
    const CurrentSection = () =>{
        if(section === "Me") return <MeSection/>
        // if(section === "My_Projects") return <ProjectsSection/>
        if(section === "Education") return <EducationSection/>
        if(section === "Technologies") return <TechnologiesSection/>
        if(section === "Download_Cv") return <DownloadSection/>
        if(section === "My_Goals") return <GoalsSection/>
        if(section === "Contact_Me") return <ContactSection/>
    }

    return (
        <div>
            <CurrentSection/>
        </div>
    )
}

export default ModalBody
