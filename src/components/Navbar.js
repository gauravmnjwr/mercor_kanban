import React, { useEffect, useState } from "react";
import leftarrow from "../assets/leftarrow.png";
import mercorimg from "../assets/Group 7.png";
import search from "../assets/search.png";
import userImg from "../assets/image 1.png";
import downarrow from "../assets/downarrow.png";
import msg from "../assets/message-question.png";
import calender from "../assets/calendar-2.png";
import notification from "../assets/notification.png";

function getCurrentDimension() {
  return {
    width: window.innerWidth,
    height: window.innerHeight,
  };
}
function Navbar() {
  const [screenSize, setScreenSize] = useState(getCurrentDimension());
  const el = document.getElementsByClassName("sidebar-main");
  const backgroundBlur = document.getElementsByClassName("main-main");

  const handleSearch = (e) => {
    const el = document.getElementById("searchBar");

    if (el.classList.contains("inline-search")) {
      el.classList.remove("inline-search");
    } else {
      el.classList.add("inline-search");
    }
  };

  const handlebartoggle = () => {
    console.log(el);
    if (el[0].classList.contains("viewSideBar")) {
      el[0].classList.remove("viewSideBar");
      backgroundBlur[0].classList.remove("background-blur");
    } else {
      el[0].classList.add("viewSideBar");
      backgroundBlur[0].classList.add("background-blur");
    }
  };
  useEffect(() => {
    const updateDimension = () => {
      setScreenSize(getCurrentDimension());
    };
    window.addEventListener("resize", updateDimension);
    return () => {
      window.removeEventListener("resize", updateDimension);
    };
  }, [screenSize]);

  if (screenSize.width > 1000) {
    if (el.length > 0) {
      el && el[0].classList.remove("viewSideBar");
      backgroundBlur && backgroundBlur[0].classList.remove("background-blur");
    }
  }

  return (
    <div className="navbar-main">
      <div className="left-nav">
        <div className="proj-name">
          <div>
            <img src={mercorimg} alt="" />
            <h4>Project M.</h4>
          </div>
          <div className="toggle-sidebar" onClick={handlebartoggle}>
            <img src={leftarrow} alt="" />
          </div>
        </div>
        <div className="inp-search-nav">
          <div>
            <button onClick={handleSearch}>
              <img src={search} alt="" />
            </button>
            <input
              type="text"
              name=""
              placeholder="Search for anything..."
              id="searchBar"
            />
          </div>
        </div>
      </div>
      <div className="right-nav">
        <div className="nav-icon">
          <img src={calender} alt="" />
          <img src={msg} alt="" />
          <img src={notification} alt="" />
        </div>
        <div className="nav-name">
          <div>Anima Agrawal</div>
          <span>U.P, India</span>
        </div>
        <div className="nav-img">
          <div>
            <img src={userImg} alt="" />
          </div>
          <div>
            <img src={downarrow} alt="" className="dropdownarrow" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
