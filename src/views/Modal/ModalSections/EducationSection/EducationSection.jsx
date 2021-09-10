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
                                <div>
                                    <h2>{e.title}</h2>
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

