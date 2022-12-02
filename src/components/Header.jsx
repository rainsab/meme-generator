import React from "react"

export default function Header() {
    return (
        <header className="header bg-secondary">
            <img 
                src="./images/troll-face.png" 
                className="header-image"
            />
            <h2 className="header-title mb-0">Meme Generator</h2>
            <h4 className="header-project mb-0">https://github.com/rainsab</h4>
        </header>
    )
}
