import React from "react"

export default function Meme() {

    const [meme, setMeme] = React.useState({
        topText: "",
        topTextPositionX: "0",
        topTextPositionY: "0",
        bottomText: "",
        randomImage: "http://i.imgflip.com/1bij.jpg"
    })

    const [allMemes, setAllMemes] = React.useState([]);

    React.useEffect(() => {
        fetch("https://api.imgflip.com/get_memes")
            .then(res => res.json())
            .then(data => setAllMemes(data.data.memes))
    }, [])

    const getMemeImage = () => {
        const randomNumber = Math.floor(Math.random() * allMemes.length);
        const url = allMemes[randomNumber].url;
        setMeme(prevMeme => ({
            ...prevMeme,
            randomImage: url
        }))
    }

    const handleChange = (event) => {
        console.log(event.target.value)
        const {name, value} = event.target
        setMeme(prevMeme => ({
            ...prevMeme,
            [name]: value
        }))
    }

    //const styles = {
    //    transform: "translateX(50%)"
    //}

    return (
        <main>
            <p className='getMeme'>Just made screenshot to get Meme!</p>
            <div className="form">
                <input
                    type="text"
                    placeholder="Top text"
                    className="form-input"
                    name="topText"
                    onChange={handleChange}
                    value={meme.topText}
                />
                <input
                    type="number"
                    placeholder="Top text position X"
                    className="form-input"
                    name="topTextPositionX"
                    onChange={handleChange}
                    value={meme.topTextPositionX}
                />
                <input
                    type="number"
                    placeholder="Top text position Y"
                    className="form-input"
                    name="topTextPositionY"
                    onChange={handleChange}
                    value={meme.topTextPositionY}
                />
                <input
                    type="text"
                    placeholder="Bottom text"
                    className="form-input"
                    name="bottomText"
                    onChange={handleChange}
                    value={meme.bottomText}
                />
                <button
                    className="form-button"
                    onClick={getMemeImage}
                >
                    Get a new meme image now!
                </button>
            </div>
            <div className="meme">
                <img src={meme.randomImage} className="meme-image" />
                <h2 
                    style={{transform: `translate(${meme.topTextPositionX}%, ${meme.topTextPositionY}%`}}
                    className="meme-text top">{meme.topText}
                </h2>
                <h2 className="meme-text bottom">{meme.bottomText}</h2>
            </div>
        </main>
    )
}
