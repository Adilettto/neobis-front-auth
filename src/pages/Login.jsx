import React from "react";
import MainImage from "../components/MainImage";
import "./Login.css";

const Login = () => {
  return (
    <div className="login-page">
      <MainImage />
      <div className="login-input-block">
        <h2>Welcome back!</h2>
        <input type="text" placeholder="Enter login" />
        <input type="password" placeholder="Enter password"/>
        <button className="login-btn">Login</button>
        <a className="no-account" href="/">I don't have an account</a>
      </div>
    </div>
  );
};

export default Login;
