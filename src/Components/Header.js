import React from 'react'
import Navigation from './Navigation'
import logo from '../assets/images/logo.jpg'


function Header() {
    return (
        <header id="header">
            <div className="container">
                <div id="logo" className="pull-left">
                    <a href="/"><img src={logo} alt="" /></a>
                </div>
                <Navigation />
            </div>
        </header>
    )
}

export default Header