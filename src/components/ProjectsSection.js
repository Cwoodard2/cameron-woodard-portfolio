import React from "react";
import "./ProjectsSection.css";
import AddSkillCard from "./skillCard";

export default function Projects(props) {
  function base64ToImage() {
    var img = new Image();
    img.src = props["imageTwo"]["o-RDS"]["projectPic"];
    return img.src;
  }

  return (
    <div className="project-div">
      <div className="persepctive-item">
        <div className="additionalItems">
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <div className="picture-div">
              <img
                src={props.imageTwo}
                style={{
                  width: "100%",
                  borderRadius: "6px",
                  border: "2px black solid",
                  objectFit: "cover",
                }}
              />
            </div>
            <br></br>
            <h3 className="project-name" style={{ textAlign: "center" }}>
              {props.title} <br></br>
              {props.duration}
            </h3>
            <div
              className=""
              style={{
                textAlign: "center",
                color: "#08aeea",
                border: "2px #08aeea solid",
                borderRadius: "1000px",
                padding: "5px",
                paddingLeft: "10px",
                paddingRight: "10px",
                // fontWeight: "bold",
              }}
            >
              {props.type}
            </div>
            <br></br>
            <div className="project-description">
              {props.description}
              <ul className="skills-used" style={{ paddingLeft: "0" }}>
                {props.skills.map((skill, i) => {
                  return (
                    <li key={i} className="row" style={{ listStyle: "none" }}>
                      <AddSkillCard whichSkill={skill} style="skill-pic" />
                    </li>
                  );
                })}
              </ul>
              <div className="skills-used">
                {props.liveSite && (
                  <a
                    href={props.liveSite}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <button className="live-site-button liveButton">
                      Live Site
                    </button>
                  </a>
                )}
                {props.sourceCode && (
                  <a
                    href={props.sourceCode}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <button className="live-site-button source-code-button">
                      Source Code
                    </button>
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
        <div></div>
      </div>
    </div>
  );
}
