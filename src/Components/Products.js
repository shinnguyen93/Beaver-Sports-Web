import React from 'react'
import ball1 from '../assets/images/equipment/ball1.jpg'
import ball2 from '../assets/images/equipment/ball2.jpg'
import golf_mat from '../assets/images/equipment/golf_mat.JPG'
import dispenser from '../assets/images/machine/ball_dispenser.jpg'
import tup from '../assets/images/machine/t_up.JPG'
import blower from '../assets/images/machine/blow_machine.GIF'
import turf1 from '../assets/images/turf/turf1.JPG'
import turf2 from '../assets/images/turf/turf2.JPG'
import turf3 from '../assets/images/turf/turf3.JPG'


function Products() {
    return (
        <section id="portfolio" className="portfolio wow fadeInUp">
            <div className="container">
                <div className="section-header">
                    <h2>Our Products</h2>
                </div>

                <div className="row">
                    <div className="col-lg-12 d-flex justify-content-center">
                        <ul id="portfolio-flters">
                            <li data-filter="*" className="filter-active">All</li>
                            <li data-filter=".filter-app">Golf Equipment</li>
                            <li data-filter=".filter-card">Machine</li>
                            <li data-filter=".filter-web">Artificial Turf</li>
                        </ul>
                    </div>
                </div>
                <div className="row portfolio-container">
                    <div className="col-lg-4 col-md-6 portfolio-item filter-app">
                        <img src={ball1} className="img-fluid" alt="" />
                        <div className="portfolio-info">
                            <h4>Golf Ball 1</h4>
                            <p>Golf Equipment</p>
                            <a href={ball1} data-gall="portfolioGallery" className="venobox preview-link"
                                title="Golf Ball 1"><i className="bx bx-plus"></i></a>
                            <a href="portfolio-details.html" className="details-link" title="More Details"><i className="bx bx-link"></i></a>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 portfolio-item filter-web">
                        <img src={turf1} className="img-fluid" alt="" />
                        <div className="portfolio-info">
                            <h4>Artificial Turf 1</h4>
                            <p>Artificial Turf</p>
                            <a href={turf1} data-gall="portfolioGallery" className="venobox preview-link"
                                title="Artificial Turf 1"><i className="bx bx-plus"></i></a>
                            <a href="portfolio-details.html" className="details-link" title="More Details"><i className="bx bx-link"></i></a>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 portfolio-item filter-app">
                        <img src={ball2} className="img-fluid" alt="" />
                        <div className="portfolio-info">
                            <h4>Golf Ball 2</h4>
                            <p>Golf Equipment</p>
                            <a href={ball2} data-gall="portfolioGallery" className="venobox preview-link"
                                title="Golf Ball 2"><i className="bx bx-plus"></i></a>
                            <a href="portfolio-details.html" className="details-link" title="More Details"><i className="bx bx-link"></i></a>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 portfolio-item filter-card">
                        <img src={dispenser} className="img-fluid" alt="" />
                        <div className="portfolio-info">
                            <h4>Ball Dispenser</h4>
                            <p>Machine</p>
                            <a href={dispenser} data-gall="portfolioGallery" className="venobox preview-link"
                                title="Ball Dispenser"><i className="bx bx-plus"></i></a>
                            <a href="portfolio-details.html" className="details-link" title="More Details"><i className="bx bx-link"></i></a>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 portfolio-item filter-web">
                        <img src={turf2} className="img-fluid" alt="" />
                        <div className="portfolio-info">
                            <h4>Artificial Turf 2</h4>
                            <p>Artificial Turf</p>
                            <a href={turf2} data-gall="portfolioGallery" className="venobox preview-link"
                                title="Artificial Turf 2"><i className="bx bx-plus"></i></a>
                            <a href="portfolio-details.html" className="details-link" title="More Details"><i className="bx bx-link"></i></a>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 portfolio-item filter-app">
                        <img src={golf_mat} className="img-fluid" alt="" />
                        <div className="portfolio-info">
                            <h4>Golf Stance Mat</h4>
                            <p>Golf Equipment</p>
                            <a href={golf_mat} data-gall="portfolioGallery" className="venobox preview-link"
                                title="Golf Stance Mat"><i className="bx bx-plus"></i></a>
                            <a href="portfolio-details.html" className="details-link" title="More Details"><i className="bx bx-link"></i></a>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 portfolio-item filter-card">
                        <img src={tup} className="img-fluid" alt="" />
                        <div className="portfolio-info">
                            <h4>Tee Up Machine</h4>
                            <p>Machine</p>
                            <a href={tup} data-gall="portfolioGallery" className="venobox preview-link"
                                title="Tee Up Machine"><i className="bx bx-plus"></i></a>
                            <a href="portfolio-details.html" className="details-link" title="More Details"><i className="bx bx-link"></i></a>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 portfolio-item filter-card">
                        <img src={blower} className="img-fluid" alt="" />
                        <div className="portfolio-info">
                            <h4>Blowing Machine</h4>
                            <p>Machine</p>
                            <a href={blower} data-gall="portfolioGallery" className="venobox preview-link"
                                title="Blowing Machine"><i className="bx bx-plus"></i></a>
                            <a href="portfolio-details.html" className="details-link" title="More Details"><i className="bx bx-link"></i></a>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 portfolio-item filter-web">
                        <img src={turf3} className="img-fluid" alt="" />
                        <div className="portfolio-info">
                            <h4>Artificial Turf 3</h4>
                            <p>Artificial Turf</p>
                            <a href={turf3} data-gall="portfolioGallery" className="venobox preview-link"
                                title="Artificial Turf 3"><i className="bx bx-plus"></i></a>
                            <a href="portfolio-details.html" className="details-link" title="More Details"><i className="bx bx-link"></i></a>
                        </div>
                    </div>

                </div>

            </div>
        </section>
    )
}

export default Products
