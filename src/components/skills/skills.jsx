import React from 'react'
import './skills.css'
import { SkillsData, SchoolDetails } from '../../data/skills';
const skills = () => {
  return (
    <div className='skills container' id='skills'>
      <div className="title">
        <h1>Skills <span>& </span>
          Achievements</h1>
      </div>
      <div className="skills__items">
        <div className="skill__left">
          {SkillsData.map((skill, i) => (
            <div className="skill__details" key={i}>
              <img src={skill.image} alt="" />
              <span className='skill__about'>{skill.about}</span>
            </div>
          ))}
        </div>
        <div className="skill__right">
          <div className="achievement">
            <div className="year">
              <h2>2023</h2>
            </div>
            <div>
              <div className="school">
                <span>Freelancer Developer</span>
                <small>Upwork.</small>
                <div className="school__about">
                  <p>{SchoolDetails[0]}</p>
                </div>
              </div>
              <div className='school'>
                <span>React Development</span>
                <small>Scrimba.</small>
                <div className="school__about">
                  <p>{SchoolDetails[1]}</p>
                </div>
              </div>
              <div className='school'>
                <span>Web Development</span>
                <small>ALX Africa.</small>
                <div className="school__about">
                  <p>{SchoolDetails[2]}</p>
                </div>
              </div>
            </div>
          </div>
          <div className="achievement">
            <div className="year">
              <h2>2022</h2>
            </div>
            <div>
              <div className='school'>
                <span>Advanced Javascript</span>
                <small>Cisco Netcad School.</small>
                <div className="school__about">
                  <p>{SchoolDetails[3]}</p>
                </div>
              </div>
            </div>
          </div>
          <div className="achievement">
            <div className="year">
              <h2>2021</h2>
            </div>
            <div>
              <div className="school">
                <span>Computer Science</span>
                <small>Maseno University.</small>
                <div className="school__about">
                  <p>{SchoolDetails[4]}</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default skills