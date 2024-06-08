import React from 'react';
import '../styles/ProgressBar.css';
import { useInView } from 'react-intersection-observer'
const ProgressBar = ({ percentage }) => {
  const { ref, inView } = useInView({
    triggerOnce: true, // Animation triggers only once
    threshold: 0.1,    // Trigger when 10% of the element is in view
  });
  return (
    <div>
        <span className='span-percentage' style={{ left: `${percentage/1.2}vw`}}>{percentage}%</span>
        <div className="progress-bar">
          <div ref={ref} className={`filler ${inView ? 'animate' : ''}`}style={{ width: `${percentage}%` }}></div>
        </div>
    </div>
  );
};

export default ProgressBar;
