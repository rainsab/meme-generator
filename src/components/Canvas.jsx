import React, { useState, useRef, useEffect } from "react"

export default function Canvas() {
    
    const [allMemes, setAllMemes] = useState([]);

    useEffect(() => {
        fetch("https://api.imgflip.com/get_memes")
            .then(res => res.json())
            .then(data => setAllMemes(data.data.memes))
        //console.log(allMemes)
    }, [])

    const [memeImage, setMemeImage] = useState(null);
    console.log(memeImage)

    const randomMemeImage = new Image();
    randomMemeImage.src = "http://i.imgflip.com/1bij.jpg";
    randomMemeImage.width = 568;
    randomMemeImage.height = 335;
    randomMemeImage.onload = () => setMemeImage(randomMemeImage);

    const getMemeImage = () => {
        const randomNumber = Math.floor(Math.random() * allMemes.length);
        const randomMemeImage = new Image();
        randomMemeImage.src = allMemes[randomNumber].url;
        randomMemeImage.onload = () => setMemeImage(randomMemeImage);
    }

    const canvasRef = useRef(null);
    
    useEffect(() => {
        if (memeImage && canvasRef) {
            const canvas = canvasRef.current;
            const context = canvas.getContext("2d");
            context.fillStyle = "#fff000";
            context.fillRect(0, 0, context.canvas.width, context.canvas.height);
            context.drawImage(memeImage, 0, 0);
            context.font = "Impact";
        }
  }, [memeImage, canvasRef])


    return (
        //<canvas ref={canvasRef} width={parseInt(memeImage.width)} height={parseInt(memeImage.height)}></canvas>
        //<canvas ref={canvasRef} width="600" height="350"></canvas>
        <>
        {
            memeImage === null 
            ? 
            <canvas ref={canvasRef}></canvas> 
            : 
            <canvas ref={canvasRef} width={parseInt(memeImage.width)} height={parseInt(memeImage.height)}></canvas>}
        </>
    )
}
