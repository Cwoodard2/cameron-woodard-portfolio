import React from "react";
import reactLogo from "../Images/reactLogo.png";
import htmlLogo from "../Images/htmlLogo2.png";
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
            imageToUse = <img src={reactLogo} className="topContent skillPic2"/>
            break;
        case "HTML":
            imageToUse = <img src={htmlLogo} className="topContent skillPic2"/>
            break;
        case "CSS":
            imageToUse = <img src={cssLogo} className="topContent skillPic2"/>
            break;
        case "Firebase":
            imageToUse = <img src={firebaseLogo} className="topContent skillPic2"/>
            break;
        case "Github Pages":
            imageToUse = <img src={githubLogo} className="topContent skillPic2"/>
            break;
        case "Git":
            imageToUse = <img src={gitLogo} className="topContent skillPic2"/>
            break;
        case "Java":
            imageToUse = <img src={javaLogo} className="topContent skillPic2"/>
            break;
        case "Javascript":
            imageToUse = <img src={javascriptLogo} className="topContent skillPic2"/>
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
        <div>
            {imageToUse}
        </div>
    )
}