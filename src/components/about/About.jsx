import React from 'react'
import './About.css'
import { aboutData } from '../../data/about'
const About = () => {
    return (
        <div className='about'>
            <div className="title">
                <h1>I Know That <span>Good Design</span><br />
                    Means <span>Good Business</span></h1>
            </div>
            <div className="abouts">
            {aboutData.map((data, i) => (
                <div className="about__1" key={i}>
                    <img src={data.image} alt="" />
                    <span className='sub__title'>{data.title}</span>
                    <span className='review'>{data.about}</span>
                </div>
            ))}
            </div>
    </div>
            )
}

            export default About