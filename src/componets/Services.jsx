import React from 'react'
import {Carousel} from "react-responsive-carousel"
import "react-responsive-carousel/lib/styles/carousel.min.css"
import img1 from "../assets/3.jpg"
import img2 from "../assets/4.jpg"
function Services() {
  return (
    <div className='services'>
<Carousel>

<div>
    <img src={img1} alt="" />
    <p className='legend'>Full Stack</p>
</div>

<div>
    <img src={img2} alt="" />
    <p className='legend'>Hosting</p>
</div>

</Carousel>
    </div>
  )
}

export default Services