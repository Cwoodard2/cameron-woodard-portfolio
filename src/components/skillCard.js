import React from "react";

export default function AddSkillCard(props) {
    var numExperience = props.experience;
    var skill = props.whichSkill;
    var comfort = props.howComfort;
    var time = props.length;
    var numProjects = props.projects;
    var pluralProjects;

    if (time === "years") {
        if (numExperience === "1") {
            time = "year";
        }
    }

    if (numProjects === "1") {
        pluralProjects = "project";
    } else {
        pluralProjects = "projects";
    }
 
    return (
        <div className="skillCard">
            <p className="topContent">{skill}</p>
            <div className="hoverContent">
                <p className="hoverDescript">{numExperience} {time} of Experience <br></br> Used on {numProjects} {pluralProjects} <br></br> Comfortability: {comfort}%</p>
            </div>
        </div>
    )
}