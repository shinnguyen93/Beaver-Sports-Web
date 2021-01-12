import React from 'react'

function Contacts() {
    return (
        <section id="contact" className="wow fadeInUp">
            <div className="container">
                <div className="section-header">
                    <h2>Contact Us</h2>
                </div>

                <div className="row contact-info">

                    <div className="col-md-4">
                        <div className="contact-address">
                            <i className="ion-ios-location-outline"></i>
                            <h3>Address</h3>
                            <address>66 Tannery Lane, #01-05N, Sindo Building, Singapore 347805</address>
                        </div>
                    </div>

                    <div className="col-md-4">
                        <div className="contact-phone">
                            <i className="ion-ios-telephone-outline"></i>
                            <h3>Phone Number</h3>
                            <p><a href="tel:+6567470882">+65 6747 0882</a></p>
                        </div>
                    </div>

                    <div className="col-md-4">
                        <div className="contact-email">
                            <i className="ion-ios-email-outline"></i>
                            <h3>Email</h3>
                            <p><a href="mailto:info@example.com">james@beaver-sports.com</a></p>
                        </div>
                    </div>

                </div>
            </div>

            <div className="container mb-4">
                <iframe title="Location"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.748920003398!2d103.87515291549435!3d1.3266028620174115!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31da17878599fd63%3A0xe1a11c63b01b7e84!2sSindo%20Building!5e0!3m2!1sen!2sau!4v1609845139146!5m2!1sen!2sau"
                    width="100%" height="380" frameBorder="0" allowFullScreen></iframe>
            </div>
        </section>
    )
}

export default Contacts
