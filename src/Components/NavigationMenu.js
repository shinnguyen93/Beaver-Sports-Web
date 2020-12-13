import React from 'react'
import { Link } from "react-router-dom"

function NavigationMenu(props) {
    return (
        <div>
            {/* <!--Navigation bar--> */}
            <div id="nav-container">
                <nav class="navbar navbar-expand-lg navbar-light bg-light">
                    <div id="logo-container">
                        <a class="navbar-brand" href="index.html"><img src="images/logo.jpg" /></a>
                    </div>
                    <div class="container-fluid">
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
                            aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                                <li class="nav-item">
                                    <Link exact
                                        to="/"
                                        className="nav-link active"
                                        aria-current="page"
                                    >Home</Link>
                                </li>
                                <li class="nav-item">
                                    <Link
                                        to="/about"
                                        className="nav-link"
                                    >About Us</Link>
                                </li>
                                <li class="nav-item dropdown">
                                    <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown"
                                        aria-expanded="false">
                                        What We Supply
              </a>
                                    <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                                        <li><a class="dropdown-item" href="#">Golf Range Systems</a></li>
                                        <li><a class="dropdown-item" href="#">Golf Range Equipment & Accessories</a></li>
                                        <li><a class="dropdown-item" href="#">Soccer Pitch</a></li>
                                    </ul>
                                </li>
                                <li class="nav-item">
                                    <Link
                                        to="/contacts"
                                        className="nav-link"
                                    >Contact Us</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
            {/* <!--End of Navigation--> */}
        </div>
    )
}

export default NavigationMenu