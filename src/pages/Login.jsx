import React from "react";
import MainImage from "../components/MainImage";
import "./Login.css";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="login-page">
      <MainImage />
      <div className="login-input-block">
        <h2>Welcome back!</h2>
        <input type="text" placeholder="Enter login" />
        <input type="password" placeholder="Enter password"/>
        <button className="login-btn">Login</button>
        <Link className="no-account" to="/sign-up">I don't have an account</Link>
      </div>
    </div>
  );
};

export default Login;
