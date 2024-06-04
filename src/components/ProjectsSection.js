import React from "react";
import "./ProjectsSection.css";
import AddSkillCard from "./skillCard";

export default function Projects(props) {
  var showImage;
  var sourceCode;

  function base64ToImage() {
    var img = new Image();
    console.log(props["imageTwo"]["o-RDS"]["projectPic"]);
    img.src = props["imageTwo"]["o-RDS"]["projectPic"];
    return img.src;
  }

  return (
    <div className="project-div">
      <div className="persepctive-item">
        <div className="additionalItems">
          <div>
            <div className="picture-div">
              <img src={base64ToImage()} />
            </div>
            <h3 className="project-name">
              {props.title} <br></br>
              {props.duration}
            </h3>
            <div className="project-description">
              <hr></hr>
              {props.description}
              <ul className="skills-used">
                {props.skills.map((skill, i) => {
                  return (
                    <li key={i} className="row">
                      <AddSkillCard whichSkill={skill} style="skill-pic" />
                    </li>
                  );
                })}
                {props.liveSite && <a
                  href={props.liveSite}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="live-site-button liveButton">
                    Live Site
                  </button>
                </a>}
                {props.sourceCode && <a
                  href={props.sourceCode}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="live-site-button source-code-button">
                    Source Code
                  </button>
                </a>}
              </ul>
            </div>
          </div>
        </div>
        <div></div>
      </div>
    </div>
  );
}
