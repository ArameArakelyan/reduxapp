import React from "react";
import { Link } from "react-router-dom";

function Header() {
    return(
        <header>
            <div className="logo">
                <h2>Pexels</h2>
            </div>
            <nav>
                <ul>
                    <Link to={`/`}>Search</Link>
                    <Link to={`/likes`}>Favorites</Link>
                </ul>
            </nav>
        </header>
    )
}

export default Header