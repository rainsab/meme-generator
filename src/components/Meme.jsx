import React from "react"

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
        id: 1,
        text: "",
        textPositionX: 0,
        textPositionY: 0,
    }])

    const addMemeText = () => {
        const newText = {
            id: meme.length + 1,
            text: "",
            textPositionX: 0,
            textPositionY: 0
        }
        setMeme(prevMeme => [...prevMeme, newText])
    }

    console.log(meme)

    /*const handleChange = (event) => {
        const {name, value} = event.target
        //console.log(event.target)
        setMeme(prevMeme => ({
            ...prevMeme,
            [name]: value
        }))
    }*/

    const handleChange = (event) => {
        const {name, value} = event.target
        const newState = meme.map(meme => {
            if (meme.id === meme.key) {
                return {...meme, [name]: value};
            } else {
                return meme;
            }
        })

        setMeme(newState);
    }

    return (
        <main>
            <p className='getMeme'>Just made screenshot to get Meme!</p>
            <div className="form">
                {meme.map((meme, index) => {
                    return (
                        <div key={index}>
                            <input
                                type="text"
                                placeholder="your text"
                                className="form-input"
                                name="text"
                                onChange={handleChange}
                                value={meme.text || ''}
                            />
                            <input
                                type="number"
                                placeholder="text position X"
                                className="form-input"
                                name="textPositionX"
                                onChange={handleChange}
                                value={meme.textPositionX || ''}
                            />
                            <input
                                type="number"
                                placeholder="text position Y"
                                className="form-input"
                                name="textPositionY"
                                onChange={handleChange}
                                value={meme.textPositionY || ''}
                            />
                    </div>
                    )
                })}
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

    /*return (
        <main>
            <p className='getMeme'>Just made screenshot to get Meme!</p>
            <div className="form">
                <div key={meme.id}>
                    <input
                        type="text"
                        placeholder="your text"
                        className="form-input"
                        name="text"
                        onChange={handleChange}
                        value={meme.text || ''}
                    />
                    <input
                        type="number"
                        placeholder="text position X"
                        className="form-input"
                        name="textPositionX"
                        onChange={handleChange}
                        value={meme.textPositionX || ''}
                    />
                    <input
                        type="number"
                        placeholder="text position Y"
                        className="form-input"
                        name="textPositionY"
                        onChange={handleChange}
                        value={meme.textPositionY || ''}
                    />
                </div>
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
    )*/
}
