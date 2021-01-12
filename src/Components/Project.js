import React from 'react'
import Carousel from 'react-bootstrap/Carousel'
import proj1 from '../assets/images/project/project1.jpg'
import proj2 from '../assets/images/project/project2.jpg'
import proj3 from '../assets/images/project/project3.jpg'
import proj4 from '../assets/images/project/project4.jpg'

function Project() {
    return (
        <section id="clients" className="wow fadeInUp">
            <div className="container">
                <div className="section-header">
                    <h2>Our Projects</h2>
                </div>

                <Carousel>
                    <Carousel.Item interval={2000}>
                        <img
                            className="carousel-img"
                            src={proj1}
                            alt="Toa Payoh Golf Range"
                        />
                        <Carousel.Caption>
                            <h3>Toa Payoh Golf Range</h3>
                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item interval={2000}>
                        <img
                            className="carousel-img"
                            src={proj2}
                            alt="Toa Payoh Golf Range"
                        />
                        <Carousel.Caption>
                            <h3>Toa Payoh Golf Range 2</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item interval={2000}>
                        <img
                            className="carousel-img"
                            src={proj3}
                            alt="Toa Payoh Golf Range"
                        />
                        <Carousel.Caption>
                            <h3>Toa Payoh Golf Range 3</h3>
                            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item interval={2000}>
                        <img
                            className="carousel-img"
                            src={proj4}
                            alt="Toa Payoh Golf Range"
                        />
                        <Carousel.Caption>
                            <h3>Toa Payoh Golf Range 4</h3>
                            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>

            </div>
        </section>
    )
}

export default Project
