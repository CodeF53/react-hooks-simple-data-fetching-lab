// create your App component here
import React, { useEffect, useState } from "react";

function App() {
    const [imgSrc, setImgSrc] = useState("")

    useEffect(() => {
        fetch("https://dog.ceo/api/breeds/image/random").then((resp)=>resp.json()).then((data)=>{
            setImgSrc(data["message"])
        })
    }, [])
    
    if (imgSrc === ""){
        return (
            <p>Loading...</p>
        )
    }

    return (
        <img alt="A Random Dog" src={imgSrc}></img>
    )
}

export default App