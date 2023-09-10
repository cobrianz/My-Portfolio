import React, { useState } from 'react';
import './testimonials.css';
import { motion, AnimatePresence } from 'framer-motion';
import left from '../../assets/chevron-left.png';
import right from '../../assets/chevron-right.png';
import { testimonialsData } from '../../data/testimonials';

const Testimonial = () => { // Updated component name to start with an uppercase letter
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? testimonialsData.length - 1 : prevIndex - 1));
  };

  const handleNextClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex === testimonialsData.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div className='testimonials'>
      <div className="title"></div>
      <div className="testimonial">
        <AnimatePresence wait initial={false}>
          <motion.div
            key={currentIndex}
            className="testimonial__details"
            initial={{ scale: 0}}
            animate={{ scale: 1 }}
            exit={{ display: 0 }}
            transition={{ duration: .1 }}
          >
            <img src={testimonialsData[currentIndex].image} alt="" className="testimonial__image" />
            <div className="testimonial__text">
              <p>{testimonialsData[currentIndex].review}</p>
              <span className='details'>
                <span>{testimonialsData[currentIndex].name}</span>
                <span>{testimonialsData[currentIndex].status}</span>
              </span>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
      <div className="chevrons">
        <img src={left} alt="" onClick={handlePrevClick} className="chevron-button" />
        <img src={right} alt="" onClick={handleNextClick} className="chevron-button" />
      </div>
    </div>
  );
};

export default Testimonial; // Updated the export name as well
