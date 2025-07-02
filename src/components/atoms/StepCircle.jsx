import React from 'react';

const StepCircle = ({ number }) => (
  <div style={{
    width: 64,
    height: 64,
    borderRadius: '50%',
    background: '#e6f4ff',
    color: '#1677ff',
    fontSize: 24,
    fontWeight: 'bold',
    lineHeight: '64px',
    margin: '0 auto',
  }}>
    {number}
  </div>
);

export default StepCircle;

// üç tane yan yana adımları göstermek için daire olacak