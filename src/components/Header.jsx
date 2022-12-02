import React from "react"

export default function Header() {
    return (
        <header className="header bg-secondary">
            <img 
                src="./images/troll-face.png" 
                className="header-image ms-lg-2"
            />
            <h2 className="header-title mb-0">Meme Generator</h2>
            <h4 className="header-project mb-0 me-lg-3 me-xxl-5">Just made screenshot to get Meme!</h4>
        </header>
    )
}
