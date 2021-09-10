import React, {useState, useEffect} from 'react'
import s from "./style.module.scss"
// import data from "./vintage.json"

import Button from "../../../components/Button/Button"
import {Link} from "react-router-dom"

const VintageVibes = ({section}) => {

    const [data, setData] = useState({})

    const project = section.split(" ").join("_").toLowerCase()

    useEffect(() => {
        fetch(`/projects/${project}.json`, {
            headers : { 
              'Content-Type': 'application/json',
              'Accept': 'application/json'
             }
          })
        .then((res)=>res.json())
        .then((pro)=>{setData(pro)}) 
        .catch((err)=>console.log("ERROR", err) )
    }, [])

    return (
        <>
            {data ? 
            <div className={s.single__project__container}>

                <header className={s.single__project__header} >
                    <h1>{data.title}</h1>
                </header>
                
                <div className={s.single__project__section}>
                    <h3 className={s.single__project__subtitle}>ACERCA DEL PROYECTO</h3>

                    {data.about ?
                        data.about.map((e)=>{
                        return (
                            <p className={s.single__project__text}>{e}</p>
                        )
                    })
                    : <></>
                    }

                </div>

                <article className={s.single__project__container__img}>
                    <img className={s.single__project__img} src={data.portrait} alt={data.title} />
                </article>

                <div className={s.single__project__section}>
                    <h3 className={s.single__project__subtitle} >LA APLICACIÓN PERMITE</h3>
                    <ul>
                    {data.features ? 
                        data.features.map((e)=>{
                            return(
                                <li>
                                    <p className={s.single__project__text}>{e}</p>
                                </li>
                                )
                            }) 
                            : <></>
                        }
                    </ul>
                </div>

                <div className={s.single__project__section}>
                    <h3 className={s.single__project__subtitle} >TECNOLOGÍAS</h3>
                    {data.frontend ?
                        <>
                        <h4>FRONTEND</h4>                    
                        <ul>
                        {data.frontend.map((e)=>{
                            return(
                                <li>
                                    <p className={s.single__project__text}>{e}</p>
                                </li>
                                )
                            })} 
                        </ul>
                        </> 
                    : <></>
                    }

                    {data.backend ?
                        <>
                        <h4>BACKEND</h4>                    
                        <ul>
                        {data.backend.map((e)=>{
                            return(
                                <li>
                                    <p className={s.single__project__text}>{e}</p>
                                </li>
                                )
                            })} 
                        </ul>
                        </> 
                    : <></>
                    }
                    
                </div>
                
                <div className={s.single__project__container__img}>
                    { data.images ? 
                        data.images.map((e)=>{
                            return(
                                <img className={s.single__project__img} src={e}/>
                            )
                        })    
                        : <></>
                    }
                </div>

                <div className={s.single__project__btn}>
                    {data.demo && 
                        <a href={data.demo} target="_blank">
                            <Button text={"DEMO"} />
                        </a>
                    }
                    {data.github && 
                        <a href={data.github} target="_blank">
                            <Button text={"GITHUB"} />
                        </a>
                    }

                </div>
            </div>  
            : <p>Cargando...</p>
            }
        </>
    )
}

export default VintageVibes
