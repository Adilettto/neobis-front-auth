import React from 'react';
import manSitting from "../assets/manSitting.png";
import "./MainImage.css";

const MainImage = () => {
  return (
    <div className='main-image'>
        <img className='man-sitting' src={manSitting} alt="man" />
        <h1>Lorby</h1>
        <p>Your personal tutor</p>
    </div>
  )
}

export default MainImage