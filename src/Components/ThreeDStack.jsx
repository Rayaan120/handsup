// ThreeDStack.jsx
import React from 'react';
import './ThreeDStack.css';

const ThreeDStack = () => {
  return (
    <div className="three-d-container">
      {[...Array(5)].map((_, i) => (
        <div
          key={i}
          className="cube-layer"
          style={{
            transform: `translateZ(${i * 30}px)`,
            backgroundColor: `hsla(${280 - i * 10}, 100%, 60%, 0.6)`
          }}
        />
      ))}
    </div>
  );
};

export default ThreeDStack;
