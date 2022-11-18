import React from "react"
import {nanoid} from "nanoid"

export default function Meme() {
    React.useEffect(() => {
        fetch("https://api.imgflip.com/get_memes")
            .then(res => res.json())
            .then(data => setAllMemes(data.data.memes))
    }, [])

    const [allMemes, setAllMemes] = React.useState([]);

    const [memeImage, setMemeImage] = React.useState({
        randomImage: "http://i.imgflip.com/1bij.jpg"
    })

    const getMemeImage = () => {
        const randomNumber = Math.floor(Math.random() * allMemes.length);
        const url = allMemes[randomNumber].url;
        setMemeImage(prevMeme => ({
            ...prevMeme,
            randomImage: url
        }))
    }

    //Work here

    const [meme, setMeme] = React.useState([{
        id: nanoid(),
        text: "",
        textPositionX: "0",
        textPositionY: "0",
    }])

    const addMemeText = () => {
        const newText = {
            id: nanoid(),
            text: "",
            textPositionX: "0",
            textPositionY: "0"
        }
        setMeme(prevMeme => [newText, ...prevMeme])
    }

    console.log(meme)

    const handleChange = (event) => {
        const {name, value} = event.target
        setMeme(prevMeme => ({
            ...prevMeme,
            [name]: value
        }))
    }

    return (
        <main>
            <p className='getMeme'>Just made screenshot to get Meme!</p>
            <div className="form">
                <input
                    type="text"
                    placeholder="first text"
                    className="form-input"
                    name="text"
                    onChange={handleChange}
                    value={meme.text}
                />
                <input
                    type="number"
                    placeholder="first text position X"
                    className="form-input"
                    name="textPositionX"
                    onChange={handleChange}
                    value={meme.textPositionX}
                />
                <input
                    type="number"
                    placeholder="first text position Y"
                    className="form-input"
                    name="textPositionY"
                    onChange={handleChange}
                    value={meme.textPositionY}
                />
                <button
                    onClick={addMemeText}>
                    plus
                </button>
                <button
                    className="form-button"
                    onClick={getMemeImage}
                >
                    Get a new meme image now!
                </button>
            </div>
            <div className="meme">
                <img src={memeImage.randomImage} className="meme-image" />
                <h2 
                    style={{transform: `translate(${meme.textPositionX}px, ${meme.textPositionY}px`}}
                    className="meme-text">{meme.text}
                </h2>
            </div>
        </main>
    )
}
