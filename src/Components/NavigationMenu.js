import React from 'react'
import { Link } from "react-router-dom"

function NavigationMenu(props) {
    return (
        <div>
            {/* <!--Navigation bar--> */}
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div id="logo-container">
                    <Link className="navbar-brand" exact to="/"><img src="images/logo.jpg" /></Link>
                </div>
                <div id="nav-container" className="container-fluid">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link exact
                                    to="/"
                                    className="nav-link active"
                                    aria-current="page"
                                >Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link
                                    to="/about"
                                    className="nav-link"
                                >About Us</Link>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown"
                                    aria-expanded="false">
                                    What We Supply
              </a>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li><a className="dropdown-item" href="/golf_system">Golf Range Systems</a></li>
                                    <li><a className="dropdown-item" href="/equipment_accessories">Golf Range Equipment & Accessories</a></li>
                                    <li><a className="dropdown-item" href="/soccer_pitch">Soccer Pitch</a></li>
                                </ul>
                            </li>
                            <li className="nav-item">
                                <Link
                                    to="/contacts"
                                    className="nav-link"
                                >Contact Us</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            {/* <!--End of Navigation--> */}
        </div>
    )
}

export default NavigationMenu