import React from "react";
import "./skillCard.css";

export default function AddSkillCard(props) {
  var style = "top content " + props.style;

  return (
    <div>
      <img src={props.whichSkill} className={style} />
    </div>
  );
}
