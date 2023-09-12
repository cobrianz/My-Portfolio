// Cursor.js
import React, { useState, useEffect } from 'react';
import './cursor.css';

const Cursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const onMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    document.addEventListener('mousemove', onMouseMove);

    return () => {
      document.removeEventListener('mousemove', onMouseMove);
    };
  }, []);

  const cursorClasses = `cursor ${isHovered ? 'fire' : ''}`;

  return (
    <div
      className={cursorClasses}
      style={{ left: position.x, top: position.y }}
    />
  );
};

export default Cursor;
