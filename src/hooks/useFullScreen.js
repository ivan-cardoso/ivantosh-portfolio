import React, { useState } from "react"

const useFullScreen = () =>{
    const [isFull, setIsFull] = useState(false)
    const root = document.getElementById("root")

    const handleFullScreen = () => {
        if(isFull){
            document.exitFullscreen()
            .then(()=>setIsFull(false))
            .catch((err)=> console.log(err))
        }else{
            root.requestFullscreen()
            .then(()=>setIsFull(true))
            .catch((err)=> console.log(err))
        }
    }

    return ({handleFullScreen})
}

export default useFullScreen