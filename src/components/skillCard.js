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
        case "1":
            imageToUse = <img src={reactLogo} className="topContent skillPic"/>
            break;
        case "2":
            imageToUse = <img src={htmlLogo} className="topContent skillPic"/>
            break;
        case "3":
            imageToUse = <img src={cssLogo} className="topContent skillPic"/>
            break;
        case "4":
            imageToUse = <img src={firebaseLogo} className="topContent skillPic"/>
            break;
        case "5":
            imageToUse = <img src={githubLogo} className="topContent skillPic"/>
            break;
        case "6":
            imageToUse = <img src={gitLogo} className="topContent skillPic"/>
            break;
        case "7":
            imageToUse = <img src={javaLogo} className="topContent skillPic"/>
            break;
        case "8":
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
                <p className="hoverDescript">{numExperience} {time} of Experience <br></br> Used on {numProjects} {pluralProjects} <br></br> Comfortability: {comfort}%</p>
            </div>
        </div>
    )
}