import React from 'react';
import img4 from '../../Asset/img4.png';
import './Header.css';   

export const Header = () => {
  return (
    <div className="Header-Wrapper">
      <div className="image-container">
        <img src={img4} alt="icon" />
      
      </div>
    </div>
  );
};
