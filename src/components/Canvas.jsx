import React, { useState, useRef, useEffect, useLayoutEffect } from "react"

export default function Canvas() {
    
    const [allMemes, setAllMemes] = useState([]);

    useEffect(() => {
        fetch("https://api.imgflip.com/get_memes")
            .then(res => res.json())
            .then(data => setAllMemes(data.data.memes))
        const randomMemeImage = new Image();
        randomMemeImage.src = "http://i.imgflip.com/1bij.jpg";
        randomMemeImage.onload = () => setMemeImage(randomMemeImage);
    }, [])

    const [memeImage, setMemeImage] = useState(
        null
    )

    const getMemeImage = () => {
        const randomNumber = Math.floor(Math.random() * allMemes.length);
        const randomMemeImage = new Image();
        randomMemeImage.src = allMemes[randomNumber].url;
        randomMemeImage.onload = () => setMemeImage(randomMemeImage);
    }

    const canvasRef = useRef(null);
    
    useEffect(() => {
        if (memeImage && canvasRef) {
            const canvas = canvasRef.current
            const context = canvas.getContext("2d")
            context.fillStyle = "#fff000"
            context.fillRect(0, 0, context.canvas.width, context.canvas.height)
            console.log(memeImage)
            context.drawImage(memeImage, 0, 0)
        }
  }, [memeImage, canvasRef])


    return (
        <canvas ref={canvasRef} width="800" height="400"></canvas>
    )
}
