import edit from "../assets/arrow-square-up.png";
import link from "../assets/link.png";
import square from "../assets/add-square2.png";
import avt1 from "../assets/Ellipse 15.png";
import avt2 from "../assets/Ellipse 13.png";
import avt3 from "../assets/Ellipse 12.png";
import avt4 from "../assets/Ellipse 17.jpeg";
import avt5 from "../assets/Ellipse 14.png";
import filter from "../assets/filter.png";
import downarrow from "../assets/downarrow.png";
import calendar from "../assets/calendar.png";
import memberimg from "../assets/profile-2user.png";
import stack from "../assets/Group 612.png";
import menu from "../assets/menu.png";
import vl from "../assets/Vector 10.png";
import Kanban from "./kanban";
import mockData from "../mockData";

function MainComponent() {
  const handleSideBarClose = () => {
    const el = document.getElementsByClassName("sidebar-main");
    const backgroundBlur = document.getElementsByClassName("main-main");

    if (el.length > 0 && el[0].classList.contains("viewSideBar")) {
      console.log("a");
      el[0].classList.remove("viewSideBar");
      backgroundBlur[0].classList.remove("background-blur");
    }
  };

  return (
    <div className="main-main" onClick={handleSideBarClose}>
      <div className="main-title">
        <div className="main-title-left">
          <h1>Mobile App</h1>
          <div>
            <img src={edit} alt="" />
          </div>
          <div>
            <img src={link} alt="" />
          </div>
        </div>
        <div className="main-title-right">
          <div>
            <img src={square} alt="" />
            <span>Invite</span>
          </div>
          <div className="avatars">
            <span className="avatar">
              <img src={avt3} alt="" />
            </span>
            <span className="avatar">
              <img src={avt2} alt="" />
            </span>
            <span className="avatar">
              <img src={avt1} alt="" />
            </span>
            <span className="avatar">
              <img src={avt5} alt="" />
            </span>
            <span className="avatar">
              <img src={avt4} alt="" />
            </span>
          </div>
        </div>
      </div>
      <div className="main-filter">
        <div>
          <div className="filter-main">
            <img src={filter} alt="" />
            <div>Filter</div>
            <img src={downarrow} alt="" />
          </div>
          <div className="date-main">
            <img src={calendar} alt="" />
            <div>Today</div>
            <img src={downarrow} alt="" />
          </div>
        </div>
        <div className="share-main">
          <div className="filter-main share-btn">
            <img src={memberimg} alt="" />
            <div>Today</div>
          </div>
          <div>
            <img src={vl} alt="" />
          </div>
          <div className="hover-pointer">
            <img src={stack} alt="" />
          </div>
          <div className="hover-pointer">
            <img src={menu} alt="" />
          </div>
        </div>
      </div>
      <div className="main-kanban">
        <Kanban mockData={mockData} />
      </div>
    </div>
  );
}

export default MainComponent;
