import React from 'react'
import './testimonials.css'
import { testimonialsData } from '../../data/testimonials'
const testimonial = () => {
  return (
    <div className='testmonials'>
      <div className="title">
       <h1>Happy <span>Clients</span></h1>
     </div>
      <div className="testimonial">
      {testimonialsData.map((testimonial, i) => (
                <div className="testimonial__details" key={i}>
                 <img src={testimonial.image} alt="" className="testimonial__image"/>
                 <div className="testimonial__text">
                  <p>{testimonial.review}</p>
                  <span className='Details'>
                    <span>{testimonial.name}</span>
                    <span>{testimonial.status}</span>
                  </span>
                 </div>
                </div>
                
            ))}
      </div>
    </div>
  )
}

export default testimonial