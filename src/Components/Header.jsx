import React from "react";
import Navbar from "./Navbar/Navbar";

function Header() {
  return (
    <div className="main">
      <Navbar />
      <div className="name">
        <h1>
          {" "}
          I am <span>Shankar </span> Bhatia
        </h1>
        <p className="details">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt veniam
          consequatur eius cupiditate soluta. Eligendi dolor eius beatae unde
          aliquid quia, eos, repudiandae, fugiat libero omnis optio blanditiis
          expedita quo!
        </p>
        <div className="header-btns">
          <a href="#" className="cv-btn">
            Hire me
          </a>
          <a href="#" className="cv-btn1">
            Download CV
          </a>
        </div>
       
      </div>
      <div className="arrow"></div>
    </div>
  );
}

export default Header;
