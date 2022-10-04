import React from "react";
import "./ProjectsSection.css";
import portfolioPic from "../Images/portImage.png";
import ultraLogo from "../Images/ultranotelogo.jpg";
import urcaDash from "../Images/urca2.png";
import mindworksHome from "../Images/mindworks_home.png";
import AddSkillCard from "./skillCard";

export default function Projects(props) {

    var projectToShow = "";
    var projectDecription = props.description;
    var projectImage = props.image;
    var projectTime = props.duration;
    var skillsToShow;
    var showImage;
    var sourceCode;

    var skills = [
        <AddSkillCard experience="1" whichSkill="HTML" howComfort="50"  style="skill-pic" projects="4" />,
        <AddSkillCard experience="6" whichSkill="CSS" howComfort="30"  style="skill-pic" projects="2" />,
        <AddSkillCard experience="6" whichSkill="React" howComfort="40"  style="skill-pic" projects="2" />,
        <AddSkillCard experience="3" whichSkill="Java" howComfort="70"  style="skill-pic" projects="4" />,
        <AddSkillCard experience="3" whichSkill="Javascript" howComfort="70"  style="skill-pic" projects="many" />,
        <AddSkillCard experience="3" whichSkill="Firebase" howComfort="70"  style="skill-pic" projects="many" />
    ]

    switch(props.project) {
        case "MindWorks Mental Health":
            projectToShow = props.project;
            showImage = <img src={mindworksHome} className="portfolio-pic" />;
            skillsToShow = <div className="skills-used">{skills[0]}{skills[1]}<a href="https://www.mindworksmentalhealth.net/" target="_blank" rel='noopener noreferrer'><button className="live-site-button liveButton" target="_blank" rel='noopener noreferrer'>Live Site</button></a></div>
            break;
        case "Portfolio":
            projectToShow = props.project;
            showImage = <img src={portfolioPic} className="portfolio-pic" />;
            skillsToShow = <div className="skills-used">{skills[0]}{skills[1]}{skills[2]}{skills[4]}<a href="https://github.com/Cwoodard2/Cwoodard2.github.io" target="_blank" rel='noopener noreferrer'><button className="live-site-button source-code-button" target="_blank" rel='noopener noreferrer'>Source Code</button></a></div>
            break;
        case "HCI":
            projectToShow = "Ultra Note"
            showImage = <img src={ultraLogo} className="portfolio-pic" />;
            skillsToShow = <div className="skills-used"><a href="https://ultranotes.weebly.com/" target="_blank" rel='noopener noreferrer'><button className="live-site-button liveButton">Live Site</button></a></div>
            break;
        case "URCA":
            projectToShow = "Microaggression Web App"
            showImage = <img src={urcaDash} className="portfolio-pic" />;
            skillsToShow = <div className="skills-used">{skills[0]}{skills[1]}{skills[2]}{skills[4]}{skills[5]}<a href="https://mattaurca-s22.github.io/MicrAgg-WebApp/" target="_blank" rel='noopener noreferrer'><button className="live-site-button liveButton" >Live Site</button></a><a href="https://github.com/MattaURCA-S22/MicrAgg-WebApp" target="_blank" rel='noopener noreferrer'><button className="live-site-button source-code-button" >Source Code</button></a></div>
            break;
    }


    return (
        <div className="project-div">
            <div className="persepctive-item">
                <div className="additionalItems">
                    <div>
                        <div className="picture-div">
                            {showImage}
                        </div>
                        <h3 className="project-name">{projectToShow} <br></br>{projectTime}</h3>
                        <div className="project-description">
                            <hr></hr>
                            {projectDecription}
                            {skillsToShow}
                        </div>
                    </div>
                </div>
                <div>
                </div>
            </div>
        </div>
    );
};