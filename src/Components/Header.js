import React from 'react'
import Navigation from './Navigation'


function Header() {
    return (
        <header id="header">
            <div className="container">
                <div id="logo" className="pull-left">
                    <a href="/"><img src='./images/logo.jpg' alt="Beaver Sports" /></a>
                </div>
                <Navigation />
            </div>
        </header>
    )
}

export default Header