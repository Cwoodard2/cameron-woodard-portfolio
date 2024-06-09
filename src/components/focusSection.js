import React from "react";
import skillData from "../ProjectDescriptions/SkillPics";
import Skills from "./Skills";
import "./focusSection.css";

export default function FocusSection(props) {
  return (
    <div className="focusSection" style={{ textAlign: "center" }}>
      <img src={props.headImg} className="headImg"/>
      <h3 className="focusTitle">{props.title}</h3>
      <p style={{ margin: "10px", lineHeight: "1.5rem" }}>{props.description}</p>
      <br></br>
      <p
        style={{
          color: "#08aeea",
          fontWeight: "bold",
          fontSize: "20px",
          marginBottom: "10px",
          textAlign: "center",
        }}
      >
        {props.skill}
      </p>
      <div className="row gap">
        {props.skills.map((skill, i) => {
          return (
            <p style={{ marginBottom: "10px", marginTop: "5px" }}>{skill}</p>
          );
        })}
      </div>
      <p
        style={{
          color: "#08aeea",
          fontWeight: "bold",
          fontSize: "20px",
          marginBottom: "10px",
        }}
      >
        Tools I Use
      </p>
      <div
        style={{ dsiplay: "flex", flexDirection: "column", marginTop: "5px" }}
      >
        {props.tools.map((tool, i) => {
          return <p>{tool}</p>;
        })}
      </div>
    </div>
  );
}
