import React from "react";
import skillData from "../ProjectDescriptions/SkillPics";
import Skills from "./Skills";
import "./focusSection.css";

export default function FocusSection(props) {
  return (
    <div className="focusSection" style={{textAlign: "center"}}>
        <img src={props.headImg} />
      <h3 className="focusTitle">{props.title}</h3>
      <p>{props.description}</p>
      <p>{props.skill}</p>
      <div className="row gap">
        {skillData.map((skill, i) => {
          return <Skills image={skill.image} skill={skill.skill} />;
        })}
      </div>
      <p>Tools I Use</p>
    </div>
  );
}
