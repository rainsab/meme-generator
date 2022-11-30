import React from "react"
import {nanoid} from "nanoid"
import MemeImg from "./MemeImg"

export default function Meme() {

    const [memeArray, setMemeArray] = React.useState([{
        id: nanoid(),
        text: "",
        textPositionX: 0,
        textPositionY: 0,
    }])

    const addMemeText = () => {
        const newText = {
            id: nanoid(),
            text: "",
            textPositionX: 0,
            textPositionY: 0
        }
        setMemeArray(prevMemeArray => [...prevMemeArray, newText]);
    }

    const handleChange = (event) => {
        const {name, value, id} = event.target;
        const change = memeArray.map(memeObject => {
            if (memeObject.id === id) {
                return {...memeObject, [name]: value};
            } else {
                return memeObject;
            }
        })
        setMemeArray(change);
    }

    const removeMemeText = (event) => {
        const id = event.target.id;
        setMemeArray(prevMemeArray => prevMemeArray.filter(memeObject => memeObject.id !== id));
    }

    console.log(memeArray)

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
                <button 
                    className="form-input"
                    id={memeObject.id}
                    onClick={removeMemeText}>
                    x
                </button>
        </div>
        )
    })

    const textElements = memeArray.map(memeObject => {
        return (
            <h2 key={memeObject.id}
                style={{transform: `translate(${memeObject.textPositionX}px, ${450 + Number(memeObject.textPositionY)}px`}}
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
                <MemeImg />
                {textElements}
            </div>
        </main>
    )
}
