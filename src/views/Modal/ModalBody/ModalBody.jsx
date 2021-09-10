import React from 'react'
import MeSection from '../ModalSections/MeSection/MeSection'
import EducationSection from '../ModalSections/EducationSection'
import TechnologiesSection from '../ModalSections/TechnologiesSection'
import DownloadSection from '../ModalSections/DownloadSection'
import GoalsSection from '../ModalSections/GoalsSection'
import ContactSection from '../ModalSections/ContactSection'

import Bumeran from "../../Projects/SingleProjects/Bumeran"
import Ecommerce from "../../Projects/SingleProjects/Ecommerce"
import Imdb from "../../Projects/SingleProjects/Imdb"
import SingleProject from "../../Projects/SingleProjects/SingleProject"
import Weather from "../../Projects/SingleProjects/Weather"

const ModalBody = ({section, singleProject}) => {

    console.log(section)
    const CurrentSection = () =>{
        if(section === "Me") return <MeSection/>
        // if(section === "My_Projects") return <ProjectsSection/>

        if(section === "Education") return <EducationSection/>
        if(section === "Technologies") return <TechnologiesSection/>
        if(section === "Download_Cv") return <DownloadSection/>
        if(section === "My_Goals") return <GoalsSection/>
        if(section === "Contact_Me") return <ContactSection/> 
        
        if(singleProject) return <SingleProject section={section} />
    }

    return (
        <>
            <CurrentSection/>
        </>
    )
}

export default ModalBody
