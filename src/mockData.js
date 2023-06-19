import { v4 as uuidv4 } from "uuid";
import messageimg from "./assets/message.png";
import folderimg from "./assets/folder-2.png";
import avt1 from "./assets/Ellipse 15.png";
import avt2 from "./assets/Ellipse 13.png";
import avt3 from "./assets/Ellipse 12.png";
import avt5 from "./assets/Ellipse 14.png";
import onBoarding from "./assets/onBoarding.png";
import mood1 from "./assets/mood1.png";
import mobiledesign from "./assets/mobiledesign.png";
import mood2 from "./assets/mood2.png";
import bluedot from "./assets/bluedot.png";
import ellipse1 from "./assets/Ellipse 8.png";
import ellipse2 from "./assets/Ellipse 9.png";
import square from "./assets/add-square2.png";
import dotdotdot from "./assets/dotdotdot.png";

setInterval(() => {
  const kanbanTags = document.getElementsByClassName(
    "kanban__section__content"
  );

  if (kanbanTags[2].children.length > 0) {
    for (let i of kanbanTags[2].children) {
      if (i.children.length > 0) {
        for (let j of i.children) {
          if (j.children.length > 0) {
            for (let k of j.children) {
              if (k.children.length > 0) {
                for (let l of k.children) {
                  if (l.children.length > 0) {
                    if (l.children[0].classList.contains("card1-title-left")) {
                      l.children[0].classList.add("done");
                      l.children[0].innerHTML = "Completed";
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}, 500);

let mockData = [
  {
    id: uuidv4(),
    title: (
      <div className="kanban-heading-main headingblue">
        <div>
          <img src={bluedot} alt="" />
          <div className="kanban-heading-main-title">To Do </div>
          <div className="num-tags">3</div>
        </div>
        <div>
          <img src={square} alt="" />
        </div>
      </div>
    ),
    tasks: [
      {
        id: uuidv4(),
        title: "Learn JavaScript",
        data: (
          <div className="card1">
            <div className="card1-imp">
              <div className="card1-title-left low">Low</div>
              <div className="card1-title-right">
                <img src={dotdotdot} alt="" />
              </div>
            </div>
            <div className="card1-title">Brainstorming</div>
            <div className="card1-note">
              Brainstorming brings team members' diverse experience into play.{" "}
            </div>
            <div className="card1-share">
              <div className="avatars card-avatars">
                <span className="avatar card-avatar">
                  <img src={avt3} alt="" />
                </span>
                <span className="avatar card-avatar">
                  <img src={avt1} alt="" />
                </span>

                <span className="avatar card-avatar">
                  <img src={avt5} alt="" />
                </span>
              </div>
              <div className="card1-share-right">
                <div>
                  <span>
                    <img src={messageimg} alt="" />
                  </span>
                  <span>12 comments</span>
                </div>
                <div>
                  <span>
                    <img src={folderimg} alt="" />
                  </span>
                  <span>0 files</span>
                </div>
              </div>
            </div>
          </div>
        ),
      },
      {
        id: uuidv4(),
        title: "Learn Git",
        data: (
          <div className="card1">
            <div className="card1-imp">
              <div className="card1-title-left high">High</div>
              <div className="card1-title-right">
                <img src={dotdotdot} alt="" />
              </div>
            </div>
            <div className="card1-title">Research</div>
            <div className="card1-note">
              User research helps you to create an optimal product for users.
            </div>
            <div className="card1-share">
              <div className="avatars card-avatars">
                <span className="avatar card-avatar">
                  <img src={avt3} alt="" />
                </span>
                <span className="avatar card-avatar">
                  <img src={avt1} alt="" />
                </span>
              </div>
              <div className="card1-share-right">
                <div>
                  <span>
                    <img src={messageimg} alt="" />
                  </span>
                  <span>10 comments</span>
                </div>
                <div>
                  <span>
                    <img src={folderimg} alt="" />
                  </span>
                  <span>3 files</span>
                </div>
              </div>
            </div>
          </div>
        ),
      },
      {
        id: uuidv4(),
        title: "Learn Python",
        data: (
          <div className="card1">
            <div className="card1-imp">
              <div className="card1-title-left high">Low</div>
              <div className="card1-title-right">
                <img src={dotdotdot} alt="" />
              </div>
            </div>
            <div className="card1-title">Wireframes</div>
            <div className="card1-note">
              Low fidelity wireframes include the most basic content and
              visuals.{" "}
            </div>
            <div className="card1-share">
              <div className="avatars card-avatars">
                <span className="avatar card-avatar">
                  <img src={avt2} alt="" />
                </span>
                <span className="avatar card-avatar">
                  <img src={avt1} alt="" />
                </span>

                <span className="avatar card-avatar">
                  <img src={avt5} alt="" />
                </span>
              </div>
              <div className="card1-share-right">
                <div>
                  <span>
                    <img src={messageimg} alt="" />
                  </span>
                  <span>12 comments</span>
                </div>
                <div>
                  <span>
                    <img src={folderimg} alt="" />
                  </span>
                  <span>4 files</span>
                </div>
              </div>
            </div>
          </div>
        ),
      },
    ],
  },
  {
    id: uuidv4(),
    title: (
      <div className="kanban-heading-main headingorange">
        <div>
          <img src={ellipse2} alt="" />
          <div className="kanban-heading-main-title">On Progress </div>
          <div className="num-tags">{2}</div>
        </div>
        <div>
          <img src={square} alt="" />
        </div>
      </div>
    ),
    tasks: [
      {
        id: uuidv4(),
        title: "Learn CSS",
        data: (
          <div className="card1 card2">
            <div className="card1-imp">
              <div className="card1-title-left high">Low</div>
              <div className="card1-title-right">
                <img src={dotdotdot} alt="" />
              </div>
            </div>
            <div className="card1-title">Onboarding Illustrations</div>
            <div className="card1-note card1-note-img">
              <img src={onBoarding} alt="" />
            </div>
            <div className="card1-share">
              <div className="avatars card-avatars">
                <span className="avatar card-avatar">
                  <img src={avt2} alt="" />
                </span>
                <span className="avatar card-avatar">
                  <img src={avt1} alt="" />
                </span>

                <span className="avatar card-avatar">
                  <img src={avt5} alt="" />
                </span>
              </div>
              <div className="card1-share-right">
                <div>
                  <span>
                    <img src={messageimg} alt="" />
                  </span>
                  <span>14 comments</span>
                </div>
                <div>
                  <span>
                    <img src={folderimg} alt="" />
                  </span>
                  <span>15 files</span>
                </div>
              </div>
            </div>
          </div>
        ),
      },
      {
        id: uuidv4(),
        title: "Learn Golang",
        data: (
          <div className="card1 card2 card-227">
            <div className="card1-imp">
              <div className="card1-title-left low">Low</div>
              <div className="card1-title-right">
                <img src={dotdotdot} alt="" />
              </div>
            </div>
            <div className="card1-title">Moodboard</div>
            <div className="card1-note card-note-img">
              <img src={mood1} alt="" />
              <img src={mood2} alt="" />
            </div>
            <div className="card1-share">
              <div className="avatars card-avatars">
                <span className="avatar card-avatar">
                  <img src={avt2} alt="" />
                </span>
              </div>
              <div className="card1-share-right">
                <div>
                  <span>
                    <img src={messageimg} alt="" />
                  </span>
                  <span>9 comments</span>
                </div>
                <div>
                  <span>
                    <img src={folderimg} alt="" />
                  </span>
                  <span>10 files</span>
                </div>
              </div>
            </div>
          </div>
        ),
      },
    ],
  },
  {
    id: uuidv4(),
    title: (
      <div className="kanban-heading-main headinggreen">
        <div>
          <img src={ellipse1} alt="" />
          <div className="kanban-heading-main-title">Done </div>
          <div className="num-tags">{2}</div>
        </div>
      </div>
    ),
    tasks: [
      {
        id: uuidv4(),
        title: "Learn HTML",
        data: (
          <div className="card1 card2 card-328">
            <div className="card1-imp">
              <div className="card1-title-left high">High</div>
              <div className="card1-title-right">
                <img src={dotdotdot} alt="" />
              </div>
            </div>
            <div className="card1-title">Mobile App Design</div>
            <div className="card1-note card-note-img">
              <img src={mobiledesign} alt="" />
            </div>
            <div className="card1-share">
              <div className="avatars card-avatars">
                <span className="avatar card-avatar">
                  <img src={avt2} alt="" />
                </span>
                <span className="avatar card-avatar">
                  <img src={avt5} alt="" />
                </span>
              </div>
              <div className="card1-share-right">
                <div>
                  <span>
                    <img src={messageimg} alt="" />
                  </span>
                  <span>12 comments</span>
                </div>
                <div>
                  <span>
                    <img src={folderimg} alt="" />
                  </span>
                  <span>15 files</span>
                </div>
              </div>
            </div>
          </div>
        ),
      },
      {
        id: uuidv4(),
        title: "Learn HTML",
        data: (
          <div className="card1">
            <div className="card1-imp">
              <div className="card1-title-left low">Low</div>
              <div className="card1-title-right">
                <img src={dotdotdot} alt="" />
              </div>
            </div>
            <div className="card1-title">Design System</div>
            <div className="card1-note">
              It just needs to adapt the UI from what you did before{" "}
            </div>
            <div className="card1-share">
              <div className="avatars card-avatars">
                <span className="avatar card-avatar">
                  <img src={avt3} alt="" />
                </span>
                <span className="avatar card-avatar">
                  <img src={avt1} alt="" />
                </span>

                <span className="avatar card-avatar">
                  <img src={avt5} alt="" />
                </span>
              </div>
              <div className="card1-share-right">
                <div>
                  <span>
                    <img src={messageimg} alt="" />
                  </span>
                  <span>12 comments</span>
                </div>
                <div>
                  <span>
                    <img src={folderimg} alt="" />
                  </span>
                  <span>15 files</span>
                </div>
              </div>
            </div>
          </div>
        ),
      },
    ],
  },
];

export default mockData;
