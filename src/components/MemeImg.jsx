import React from "react"

export default function MemeImg() {
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

    return (
        <>
            <button
                className="form-button"
                onClick={getMemeImage}
            >
                Get a new meme image now!
            </button>
            <img src={memeImage} className="meme-image" />
        </>
    )
}