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
        const id = event.currentTarget.id;
        setMemeArray(prevMemeArray => prevMemeArray.filter(memeObject => memeObject.id !== id));
    }

    const inputElements = memeArray.map(memeObject => {
        return (
            <div key={memeObject.id} className="row mb-4 mb-md-2 align-items-end justify-content-between">
                <div className="col-md-7">
                    <label htmlFor={memeObject.id} className="form-label"><strong>Your text</strong></label>
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

                <div className="mt-3 col-6 col-sm-5 col-md-2">
                    <label htmlFor={memeObject.id} className="form-label">Position X</label>
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

                <div className="mt-3 col-6 col-sm-5 col-md-2">
                    <label htmlFor={memeObject.id} className="form-label">Position Y</label>
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

                <div className="mt-3 col-sm-1 col-md-1">
                    <button 
                        className="btn btn-secondary"
                        id={memeObject.id}
                        onClick={removeMemeText}>
                        <svg 
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            className="bi bi-trash"
                            viewBox="0 0 16 16"
                        >
                            <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
                            <path fillRule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
                        </svg>
                    </button>
                </div>
        </div>
        )
    })

    const textElements = memeArray.map(memeObject => {
        return (
            <h2 key={memeObject.id}
                style={{transform: `translate(${memeObject.textPositionX}px, ${100 + Number(memeObject.textPositionY)}px`}}
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

            <div>
                {inputElements}
                <button
                    className="btn btn-secondary mt-3"
                    onClick={addMemeText}>
                    Add text
                </button>
            </div>
        </main>
    )
}
