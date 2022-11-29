import React from "react"

export default function Meme() {
    React.useEffect(() => {
        fetch("https://api.imgflip.com/get_memes")
            .then(res => res.json())
            .then(data => setAllMemes(data.data.memes))
    }, [])

    const [allMemes, setAllMemes] = React.useState([]);

    const [memeImage, setMemeImage] = React.useState("http://i.imgflip.com/1bij.jpg")

    const getMemeImage = () => {
        const randomNumber = Math.floor(Math.random() * allMemes.length);
        const url = allMemes[randomNumber].url;
        setMemeImage(url)
    }

    const [memeArray, setMemeArray] = React.useState([{
        id: 1,
        text: "",
        textPositionX: 0,
        textPositionY: 0,
    }])

    const addMemeText = () => {
        const newText = {
            id: memeArray.length + 1,
            text: "",
            textPositionX: 0,
            textPositionY: 0
        }
        setMemeArray(prevMemeArray => [...prevMemeArray, newText]);
    }

    const handleChange = (event) => {
        const {name, value, id} = event.target
        const change = memeArray.map(memeObject => {
            if (memeObject.id === Number(id)) {
                return {...memeObject, [name]: value};
            } else {
                return memeObject;
            }
        })
        setMemeArray(change);
    }

    //console.log(memeArray)

    const inputElements = memeArray.map(memeObject => {
        return (
            <div key={memeObject.id}>
                <input
                    type="text"
                    placeholder="your text"
                    className="form-input"
                    name="text"
                    onChange={handleChange}
                    value={memeObject.text || ''}
                    id={memeObject.id}
                />
                <input
                    type="number"
                    placeholder="text position X"
                    className="form-input"
                    name="textPositionX"
                    onChange={handleChange}
                    value={memeObject.textPositionX || ''}
                    id={memeObject.id}
                />
                <input
                    type="number"
                    placeholder="text position Y"
                    className="form-input"
                    name="textPositionY"
                    onChange={handleChange}
                    value={memeObject.textPositionY || ''}
                    id={memeObject.id}
                />
        </div>
        )
    })

    const textElements = memeArray.map(memeObject => {
        return (
            <h2 key={memeObject.id}
                style={{transform: `translate(${memeObject.textPositionX}px, ${memeObject.textPositionY}px`}}
                className="meme-text">{memeObject.text}
            </h2>
        )
    })

    return (
        <main>
            <p className='getMeme'>Just made screenshot to get Meme!</p>
            <div className="form">
                {inputElements}
                <button
                    onClick={addMemeText}>
                    Add text
                </button>
            </div>
            <div className="form">
                <button
                    className="form-button"
                    onClick={getMemeImage}
                >
                    Get a new meme image now!
                </button>
                <img src={memeImage} className="meme-image" />
                {textElements}
            </div>
        </main>
    )
}
