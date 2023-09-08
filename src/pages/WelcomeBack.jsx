import React from 'react';
import manSitting from "../assets/manSitting.png";
import { Link } from "react-router-dom";
import "./WelcomeBack.css";

const WelcomeBack = () => {
  return (
    <div className='welcome-page'>
      <h2>Welcome back!</h2>
      <h3>Lorby - your personal tutor</h3>
      <img src={manSitting} alt="man" />
      <Link className='logout-link' to="/sign-up">Log out</Link>
    </div>
  )
}

export default WelcomeBack