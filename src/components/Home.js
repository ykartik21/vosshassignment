import React, { useRef } from "react";
import "./Home.css";

const Home = (props) => {
  return (
    <div className="home">
      <nav className="top">
        <div className="logo"></div>
      </nav>
      <div className="bottom">
        <div className="left">
          <div className="left-one">
            <h1 className="left-heading-one">
              Consolidate your restaurants' insights in one place. Unlock
              growth.
            </h1>
            <h3 className="left-heading-two">
              Your one stop solution to view mission-critical data and insights
              from all your locations in one place.
            </h3>
            <button className="scrollbtn" onClick={props.handleScroll}>
              {" "}
              Book Demo
            </button>
          </div>
        </div>
        <div className="right">
          <img
            src="https://voosh.in/static/media/my_profile.61da110e7e1e80c97356.webp"
            alt=""
            className="right-img"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
