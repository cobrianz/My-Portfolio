import React from 'react'
import './work.css'
import { WorkData } from '../../data/work'
import github from '../../assets/brand-github-filled.png'
import eye from '../../assets/eye.png'
const work = () => {
  return (
    <div className='work'>  
      <div className="title">
       <h1>My Creative <span>Portifolio</span><br />
        Section</h1>
     </div>
     <div className="projects">
            {WorkData.map((work, i) => (
                <div className="work__details" key={i}>
                  <div className='image__details'>
                    <img src={work.image} alt="" />
                    <div className="deploy__links">
                    <a href="#"><img src={github} alt="" /></a>
                    <a href="#"><img src={eye} alt="" /></a>
                    </div>
                  </div>
                    <span className='category'>{work.category}</span>
                    <span className='sub__title'>{work.title}</span>
                    <span className='review'>{work.about}</span>
                </div>
            ))}
    </div>
    </div>
  )
}

export default work