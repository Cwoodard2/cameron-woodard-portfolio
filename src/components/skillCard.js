import React from "react";
import reactLogo from "../Images/reactLogo.png";
import htmlLogo from "../Images/htmlLogo.jpeg";
import cssLogo from "../Images/cssLogo.jpeg";
import firebaseLogo from "../Images/firebaseLogo.png";
import githubLogo from "../Images/githubLogo.png";
import gitLogo from "../Images/gitLogo.png";
import javaLogo from "../Images/javaLogo.png";
import javascriptLogo from "../Images/javascriptLogo.png";
import "./skillCard.css";

export default function AddSkillCard(props) {
    var numExperience = props.experience;
    var skill = props.whichSkill;
    var imageToUse;
    var comfort = props.howComfort;
    var time = props.length;
    var numProjects = props.projects;
    var pluralProjects;

    switch(skill) {
        case "React":
            imageToUse = <img src={reactLogo} className="topContent skillPic"/>
            break;
        case "HTML":
            imageToUse = <img src={htmlLogo} className="topContent skillPic"/>
            break;
        case "CSS":
            imageToUse = <img src={cssLogo} className="topContent skillPic"/>
            break;
        case "Firebase":
            imageToUse = <img src={firebaseLogo} className="topContent skillPic"/>
            break;
        case "Github Pages":
            imageToUse = <img src={githubLogo} className="topContent skillPic"/>
            break;
        case "Git":
            imageToUse = <img src={gitLogo} className="topContent skillPic"/>
            break;
        case "Java":
            imageToUse = <img src={javaLogo} className="topContent skillPic"/>
            break;
        case "Javascript":
            imageToUse = <img src={javascriptLogo} className="topContent skillPic"/>
            break;
        default:
            break;
    }

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
            {/* <p className="topContent">{skill}</p> */}
            {imageToUse}
            <div className="hoverContent">
                <p className="hoverDescript">{skill} <br></br> <br></br>{numExperience} {time} of Experience <br></br> Used on {numProjects} {pluralProjects} <br></br> Comfortability: {comfort}%</p>
            </div>
        </div>
    )
}