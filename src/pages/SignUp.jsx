import React from "react";
import MainImage from "../components/MainImage";
import "./SignUp.css";
import BackBtn from "../components/BackBtn";


const SignUp = () => {
  return (
    <div className="sign-up">
      <BackBtn/>
      <MainImage />
      <div className="login-input-block">
        <h3>Create an account</h3>
        <h3 >Lorby</h3>
        <input type="text" placeholder="Enter email" />
        <input type="text" placeholder="Create login" />
        <input type="password" placeholder="Create password" />
        <ul className="criterias">
          <li>8 to 15 characters</li>
          <li>lowercase and uppercase letters</li>
          <li>at least 1 digit</li>
          <li>at least 1 special character (!, ", #, $...)</li>
        </ul>
        <input type="password" placeholder="Enter password again" />
        <button className="login-btn">Next</button>
      </div>
    </div>
  );
};

export default SignUp;
