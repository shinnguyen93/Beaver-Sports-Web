import React from 'react'
/*Vendor CSS Files*/
import '../assets/vendor/font-awesome/css/font-awesome.min.css'
import '../assets/vendor/bootstrap/css/bootstrap.min.css'
import '../assets/vendor/ionicons/css/ionicons.min.css'
import '../assets/vendor/animate.css/animate.min.css'
import '../assets/vendor/venobox/venobox.css'
import '../assets/vendor/owl.carousel/assets/owl.carousel.min.css'
import '../assets/vendor/boxicons/css/boxicons.min.css'

function Intro() {
    return (
        <section id="intro">
            <div className="intro-content">
                <h2>Beaver Sports <br /> Bring the <span>Golf World</span> closer to you!</h2>
                <div>
                    <a href="#about" className="btn-get-started scrollto">Get Started</a>
                    <a href="#clients" className="btn-projects scrollto">Our Projects</a>
                </div>
            </div>
            
            <div id="intro-carousel" className="owl-carousel">
                <div className="item" style={{ backgroundImage: `url(${require('../assets/images/intro-carousel/1.jpg')})`}}></div>
                {/*
                <div className="item" style={{ backgroundImage: `url(${require('../assets/images/intro-carousel/2.jpg')})` }}></div>
                <div className="item" style={{ backgroundImage: `url(${require('../assets/images/intro-carousel/3.jpg')})` }}></div>
                <div className="item" style={{ backgroundImage: `url(${require('../assets/images/intro-carousel/4.jpg')})` }}></div>
                <div className="item" style={{ backgroundImage: `url(${require('../assets/images/intro-carousel/5.jpg')})` }}></div>
                */}
            </div>
            
        </section>
    )
}

export default Intro
