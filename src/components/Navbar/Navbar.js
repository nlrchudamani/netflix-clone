import React, { useState ,useEffect } from 'react'

import './Navbar.css'
function Navbar() {
    const [show,handleShow] = useState(false)

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 100) {
                handleShow(true)
            } else {
                handleShow(false)
            }
        });
        return () => {
            window.removeEventListener("scroll")
        }
    },[])
    return (
        <div className={`nav ${show && "nav__black"}`}>
            <img
                className="nav__logo"
                src="https://upload.wikimedia.org/wikipedia/commons/6/69/Netflix_logo.svg"
                alt="netflix logo"
            />
            <img
                className="nav__avatar"
                src="pngtree-user-vector-avatar-png-image_4830521.jpg"
                alt="app avatar"
            />
        </div>
    )
}

export default Navbar