import React from "react";
import reactLogo from "../Images/reactLogo.png";
import htmlLogo from "../Images/htmlLogo.png";
import cssLogo from "../Images/cssLogo.png";
import firebaseLogo from "../Images/firebaseLogo.png";
import githubLogo from "../Images/githubLogo.png";
import gitLogo from "../Images/gitLogo.png";
import javaLogo from "../Images/javaLogo.png";
import javascriptLogo from "../Images/javascriptLogo.png";
import allLogos from "../Images/html-css-js-logos.png";
import "./skillCard.css";

export default function AddSkillCard(props) {
    console.log(props.style);
    var numExperience = props.experience;
    var skill = props.whichSkill;
    var imageToUse;
    var time;
    var comfort = props.howComfort;
    var style = "top content " + props.style;
    var numProjects = props.projects;
    var pluralProjects;
    console.log(style);


    switch(skill) {
        case "React":
            imageToUse = <img src={reactLogo} className={style}/>
            break;
        case "HTML":
            imageToUse = <img src={htmlLogo} className={style}/>
            break;
        case "CSS":
            imageToUse = <img src={cssLogo} className={style}/>
            break;
        case "Firebase":
            imageToUse = <img src={firebaseLogo} className={style}/>
            break;
        case "Github Pages":
            imageToUse = <img src={githubLogo} className={style}/>
            break;
        case "Git":
            imageToUse = <img src={gitLogo} className={style}/>
            break;
        case "Java":
            imageToUse = <img src={javaLogo} className={style}/>
            break;
        case "Javascript":
            imageToUse = <img src={javascriptLogo} className={style}/>
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