const useFullScreen = () =>{
    const root = document.getElementById("root")
    return root.requestFullscreen()
}

export default useFullScreen