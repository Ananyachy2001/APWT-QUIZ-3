import React from "react"
import { Link } from "react-router-dom";
const Head = () => {
    return(
        <div>
            <meta content="" name="description"></meta>
            <meta content="" name="keywords"></meta>
            <Link to="/">Home</Link>
            <Link to="/profile">Profile</Link>
            <Link to="/contact">Contact</Link>
        </div>

    )
}

export default Head;