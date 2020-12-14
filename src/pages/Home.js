import React from 'react'
import FormExampleForm from '../Components/Form.js'
import Carousel from '../Components/Carousel.js'
import 'semantic-ui-css/semantic.min.css'

function Home() {
    return (
        <div id="container">
            <div class="row pad-top-30">
                <Carousel />

                <FormExampleForm />
            </div>
        </div>
    )
}

export default Home
