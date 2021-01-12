import React from 'react'
import Intro from '../Components/Intro.js'
import About from '../Components/About.js'
import Contacts from '../Components/Contacts.js'
import Products from '../Components/Products.js'
import Project from '../Components/Project.js'

/*Vendor CSS Files*/
import '../assets/vendor/font-awesome/css/font-awesome.min.css'
import '../assets/vendor/bootstrap/css/bootstrap.min.css'
import '../assets/vendor/ionicons/css/ionicons.min.css'
import '../assets/vendor/animate.css/animate.min.css'
import '../assets/vendor/venobox/venobox.css'
import '../assets/vendor/owl.carousel/assets/owl.carousel.min.css'
import '../assets/vendor/boxicons/css/boxicons.min.css'


function Home() {
    return (
        <div>
            <Intro />
            <About />
            <Project />
            <Products />
            <Contacts />
        </div>
    )
}

export default Home
