import React, { useState } from "react";
import homeimg from "../assets/category.png";
import settingimg from "../assets/setting-2.png";
import taskimg from "../assets/task-square.png";
import memberimg from "../assets/profile-2user.png";
import messageImg from "../assets/message.png";
import ellipse1 from "../assets/Ellipse 8.png";
import ellipse2 from "../assets/Ellipse 9.png";
import ellipse3 from "../assets/Ellipse 10.png";
import ellipse4 from "../assets/Ellipse 11.png";
import lamp from "../assets/lamp-on.png";
import square from "../assets/add-square.png";

function SidebarComponent() {
  const [projectOpen, setProjectOpen] = useState(false);
  const handleProject = () => {
    setProjectOpen((prevState) => !prevState);
  };

  return (
    <div className="sidebar-main">
      <div className="sidebar-navigation">
        <div>
          <img src={homeimg} alt="" />
          <div>Home</div>
        </div>
        <div>
          <img src={messageImg} alt="" />
          <div>Messages</div>
        </div>
        <div>
          <img src={taskimg} alt="" />
          <div>Tasks</div>
        </div>
        <div>
          <img src={memberimg} alt="" />
          <div>Members</div>
        </div>
        <div>
          <img src={settingimg} alt="" />
          <div>Settings</div>
        </div>
      </div>
      <div className="sidebar-projects">
        <span className="sidebar-project-heading" onClick={handleProject}>
          <div>My projects</div>
          <div>
            <img src={square} alt="" />
          </div>
        </span>
        {projectOpen && (
          <>
            <div>
              <span>
                <img src={ellipse1} alt="" />
              </span>
              <span className="sidebar-project-title">Mobile App</span>
              <span style={{ fontSize: "12px" }}>●●●</span>
            </div>
            <div>
              <span>
                <img src={ellipse2} alt="" />
              </span>
              <span className="sidebar-project-title">Website Redesign</span>
              <span
                className="hidden-project-title"
                style={{ fontSize: "12px" }}
              >
                ●●●
              </span>
            </div>
            <div>
              <span>
                <img src={ellipse3} alt="" />
              </span>
              <span className="sidebar-project-title">Design System</span>
              <span
                className="hidden-project-title"
                style={{ fontSize: "12px" }}
              >
                ●●●
              </span>
            </div>
            <div>
              <span>
                <img src={ellipse4} alt="" />
              </span>
              <span className="sidebar-project-title">Wireframes</span>
              <span
                className="hidden-project-title"
                style={{ fontSize: "12px" }}
              >
                ●●●
              </span>
            </div>
          </>
        )}
      </div>
      <div className="thought-sidebar">
        <div>
          <div className="abs-thought-icon">
            <img src={lamp} alt="" />
          </div>
          <div className="thought-content">
            <div className="thought-title">Thoughts Time</div>
            <div className="thought-p">
              We don’t have any notice for you, till then you can share your
              thoughts with your peers.
            </div>
            <div>
              <button>Write a Message</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SidebarComponent;
