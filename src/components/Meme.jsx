import React from "react"
import {nanoid} from "nanoid"
import MemeImg from "./MemeImg"

export default function Meme() {

    const [memeArray, setMemeArray] = React.useState([{
        id: nanoid(),
        text: "",
        textPositionX: 0,
        textPositionY: 0
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

    const inputElements = memeArray.map(memeObject => {
        return (
            <div key={memeObject.id} className="row mb-2 align-items-end">
                <div className="col-6">
                    <label for={memeObject.id} class="form-label">Your text</label>
                    <input
                        type="text"
                        className="form-control"
                        placeholder=""
                        name="text"
                        onChange={handleChange}
                        value={memeObject.text || ''}
                        id={memeObject.id}
                    />
                </div>

                <div className="col-2">
                    <label for={memeObject.id} class="form-label">Text position X</label>
                    <input
                        type="number"
                        className="form-control"
                        placeholder="0"
                        name="textPositionX"
                        onChange={handleChange}
                        value={memeObject.textPositionX || ''}
                        id={memeObject.id}
                    />
                </div>

                <div className="col-2">
                    <label for={memeObject.id} class="form-label">Text position Y</label>
                    <input
                        type="number"
                        className="form-control"
                        placeholder="0"
                        name="textPositionY"
                        onChange={handleChange}
                        value={memeObject.textPositionY || ''}
                        id={memeObject.id}
                    />
                </div>

                <div className="col-2">
                    <button 
                        className="form-control"
                        id={memeObject.id}
                        onClick={removeMemeText}>
                        Delete 
                    </button>
                </div>
        </div>
        )
    })

    const textElements = memeArray.map(memeObject => {
        return (
            <h2 key={memeObject.id}
                style={{transform: `translate(${memeObject.textPositionX}px, ${80 + Number(memeObject.textPositionY)}px`}}
                className="meme-text">{memeObject.text}
            </h2>
        )
    })

    return (
        <main>
            <div className="form">
                <MemeImg />
                {textElements}
            </div>

            <div className="form">
                {inputElements}
                <button
                    className="btn btn-secondary"
                    onClick={addMemeText}>
                    Add text
                </button>
            </div>
            
            <p className='getMeme'>Just made screenshot to get Meme!</p>
        </main>
    )
}
