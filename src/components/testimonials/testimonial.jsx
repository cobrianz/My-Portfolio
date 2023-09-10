import React, { useState } from 'react';
import './testimonials.css';
import { motion, AnimatePresence } from 'framer-motion';
import left from '../../assets/chevron-left.png';
import right from '../../assets/chevron-right.png';
import { testimonialsData } from '../../data/testimonials';

const testimonial = () => {
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
        <AnimatePresence exitBeforeEnter initial={false}>
          <motion.div
            key={currentIndex}
            className="testimonial__details"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
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

export default testimonial;
