import React from 'react'
import "../styles/ProgressBalls.css"
import { useInView } from 'react-intersection-observer'
const ProgressBalls = ({ total, filled }) => {
  const {ref, inView}= useInView({
    triggerOnce: true,
    threshold:0.1,
  })
  return (
    <div className='balls_container'>
      {Array.from({ length: total }).map((_, index) => (
        <div 
          ref={ref}
          key={index}  // Note: 'key' should be lowercase
          className={`ball_${index < filled ? `filled ${inView ? 'animate' : ''}` : ''}`}
        >
        </div>
      ))}
    </div>
  )
}

export default ProgressBalls
