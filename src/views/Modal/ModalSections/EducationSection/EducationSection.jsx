import React, { useEffect, useState } from 'react'
import p from "../../../Projects/style.module.scss"
import s from "./style.module.scss"
import me from ".././MeSection/style.module.scss"

const EducarionSection = () => {

    const [data, setData] = useState([])

    useEffect(()=>{
        fetch("sections/education.json")
        .then(res=> res.json())
        .then(dat => setData(dat))
        .catch(err => console.log(err))
    }, [])

        return (
            <div>
                <div className={me.me__section}>
                    <h1 className={s.modal__title}>My Education</h1>

                    {data ? 

                        data.map((e)=>{
                            return(
                                <div className={s.education__container} >
                                    <div className={s.title__background} >
                                        <h2>{e.title}</h2>
                                    </div>
                                    <h3  className={s.title__h3} >{e.place}</h3>
                                    <h5 className={s.title__h5}>{e.duration}</h5>

                                    <div className={s.modal__text__container__bg} >
                                        {e.description && 
                                            <ul>
                                                {e.description.map((text)=>{
                                                    return (
                                                        <li>
                                                            <p className={s.modal__text} >{text}</p>
                                                        </li>
                                                        )
                                                    })}
                                            </ul>
                                        }
                                    </div>
                                    {e.technologies &&
                                        <>
                                        <h3 className={s.title__h3}>TECNOLOGÍAS APRENDIDAS</h3>
                                        <ul>
                                            {e.technologies.map((tech)=>{
                                                return(
                                                    <li>
                                                        <p className={s.modal__text}>{tech}</p>
                                                    </li>
                                                )
                                            })}
                                        </ul>
                                        </>
                                    }
                                </div>
                            )
                        })
                        
                        : <>Cargando...</>
                    }

                </div>
                {console.log(data)}
            </div>
        )
    }

export default EducarionSection

