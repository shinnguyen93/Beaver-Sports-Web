import React from 'react'

function Navigation() {

    return (
        <nav id="nav-menu-container">
            <ul className="nav-menu">
                <li className="menu-active"><a href="/">Home</a></li>
                <li><a href="/#about">About Us</a></li>
                <li><a href="/#clients">Projects</a></li>
                <li><a href="/#portfolio">Products</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
        </nav>
    )
}

export default Navigation