import React from "react";
import { Link } from "react-router-dom";
import backIcon from "../assets/back-icon.png";
import "./BackBtn.css";

const BackBtn = () => {
  return (
    <Link className="back-btn" to="/">
      <img className="back-icon" src={backIcon} alt="backIcon" />
      <p className="back-link">Back</p>
    </Link>
  );
};

export default BackBtn;
