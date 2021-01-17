import React from 'react'

function Navigation() {

    return (
        <nav id="nav-menu-container">
            <ul className="nav-menu">
                <li className="menu-active"><a href="/">Home</a></li>
                <li><a href="/#about">About Us</a></li>
                <li><a href="/#clients">Projects</a></li>
                <li><a href="/#portfolio">Products</a></li>
                <li className="menu-has-children"><a href="#portfolio">More Products</a>
                    <ul>
                        <li><a href="/products/golf_equipment">Golf Equipment</a></li>
                        <li><a href="/products/golf_machine">Golf Machine</a></li>
                        <li><a href="/products/artificial_turf">Artificial Turf</a></li>
                    </ul>
                </li>
                <li><a href="#contact">Contact</a></li>
            </ul>
        </nav>
    )
}

export default Navigation