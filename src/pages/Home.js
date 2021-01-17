import React from 'react'
import Intro from '../Components/Intro.js'
import About from '../Components/About.js'
import Contacts from '../Components/Contacts.js'
import Products from '../Components/Products.js'
import Project from '../Components/Project.js'

/*Vendor CSS Files*/
import '../asset/vendor/font-awesome/css/font-awesome.min.css'
import '../asset/vendor/bootstrap/css/bootstrap.min.css'
import '../asset/vendor/ionicons/css/ionicons.min.css'
import '../asset/vendor/animate.css/animate.min.css'
import '../asset/vendor/venobox/venobox.css'
import '../asset/vendor/owl.carousel/assets/owl.carousel.min.css'
import '../asset/vendor/boxicons/css/boxicons.min.css'


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
