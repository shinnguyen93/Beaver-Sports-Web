import React, {useState} from 'react'
import carouselImg from './carousel_data.js'
import ProjectCarousel from './ProjectCarousel.js'

function Project() {
    const [carouselImages, setCarouselImages] = useState(carouselImg);
    return (
        <section id="clients" className="wow fadeInUp">
            <div className="container">
                <div className="section-header">
                    <h2>Our Projects</h2>
                </div>
                <ProjectCarousel carouselImages={carouselImages}/>
            </div>
        </section>
    )
}

export default Project
