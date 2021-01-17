import React from 'react'
import Carousel from 'react-bootstrap/Carousel'

function ProjectCarousel({ carouselImages }) {
    return (
        <Carousel>
            {carouselImages.map((carouselImg) => {
                const { id, title, desc, img } = carouselImg;
                return (
                    <Carousel.Item interval={1000}>
                        <img key={id}
                            className="carousel-img"
                            src={img}
                            alt={title}
                        />
                        <Carousel.Caption>
                            <h3>{title}</h3>
                            <p>{desc}</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                );
            })
            }
        </Carousel>
    )
}

export default ProjectCarousel
