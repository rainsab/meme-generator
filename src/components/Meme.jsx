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

    //Work here

    const [meme, setMeme] = React.useState([{
        id: 1,
        text: "",
        textPositionX: 0,
        textPositionY: 0,
    }])

    const [currentId, setCurrentId] = React.useState(1);

    const addMemeText = () => {
        const newText = {
            id: meme.length + 1,
            text: "",
            textPositionX: 0,
            textPositionY: 0
        }
        setMeme(prevMeme => [...prevMeme, newText]);
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
        //console.log(event.target.id)
        //console.log(currentId)
        console.log(event.target.value)
        const {name, value, id} = event.target
        const newStateAfterChange = meme.map(meme => {
            if (meme.id === Number(id)) {
                return {...meme, [name]: value};
            } else {
                return meme;
            }
        })
        setMeme(newStateAfterChange);
        console.log(newStateAfterChange);
    }

    const inputElements = meme.map(meme => {
        return (
            <div key={meme.id}>
                <input
                    type="text"
                    placeholder="your text"
                    className="form-input"
                    name="text"
                    onChange={handleChange}
                    value={meme.text || ''}
                    id={meme.id}
                />
                <input
                    type="number"
                    placeholder="text position X"
                    className="form-input"
                    name="textPositionX"
                    onChange={handleChange}
                    value={meme.textPositionX || ''}
                    id={meme.id}
                />
                <input
                    type="number"
                    placeholder="text position Y"
                    className="form-input"
                    name="textPositionY"
                    onChange={handleChange}
                    value={meme.textPositionY || ''}
                    id={meme.id}
                />
        </div>
        )
    })

    const textElements = meme.map(meme => {
        return (
            <h2 key={meme.id}
                style={{transform: `translate(${meme.textPositionX}px, ${meme.textPositionY}px`}}
                className="meme-text">{meme.text}
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
                <img src={memeImage} className="meme-image" />
                {textElements}
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
