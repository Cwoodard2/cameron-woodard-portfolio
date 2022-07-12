import React from "react";
import FlipCard from "./flipCard";
import "./ProjectsSection.css";
import portfolioPic from "../Images/portImage.png";
import ultraLogo from "../Images/ultranotelogo.jpg";
import urcaDash from "../Images/urca.png";
import mindworksHome from "../Images/mindworks_home.png";
import AddSkillCardCopy from "./skillCard copy";

export default function Projects(props) {

    var projectToShow = props.project;
    var projectDecription = props.description;
    var projectImage = props.image;
    var projectTime = props.duration;
    var skillsToShow;
    var showImage;
    var sourceCode;

    var skills = [
        <AddSkillCardCopy experience="1" whichSkill="HTML" howComfort="50"  style="skillPic2" projects="4" />,
        <AddSkillCardCopy experience="6" whichSkill="CSS" howComfort="30"  style="skillPic2" projects="2" />,
        <AddSkillCardCopy experience="6" whichSkill="React" howComfort="40"  style="skillPic2" projects="2" />,
        <AddSkillCardCopy experience="3" whichSkill="Java" howComfort="70"  style="skillPic2" projects="4" />,
        <AddSkillCardCopy experience="3" whichSkill="Javascript" howComfort="70"  style="skillPic2" projects="many" />,
        <AddSkillCardCopy experience="3" whichSkill="Firebase" howComfort="70"  style="skillPic2" projects="many" />
    ]

    switch(projectToShow) {
        case "MindWorks Mental Health":
            showImage = <img src={mindworksHome} className="portfolioPic" />;
            skillsToShow = <div className="skillsUsed">{skills[0]}{skills[1]}<a href="https://www.mindworksmentalhealth.net/"><button className="liveSiteButton liveButton">Live Site</button></a></div>
            break;
        case "Portfolio":
            showImage = <img src={portfolioPic} className="portfolioPic" />;
            skillsToShow = <div className="skillsUsed">{skills[0]}{skills[1]}{skills[2]}{skills[4]}<a href="https://github.com/Cwoodard2/Cwoodard2.github.io"><button className="liveSiteButton sourceCodeButton">Source Code</button></a></div>
            break;
        case "HCI":
            showImage = <img src={ultraLogo} className="portfolioPic" />;
            skillsToShow = <div className="skillsUsed"><a href="https://ultranotes.weebly.com/"><button className="liveSiteButton liveButton">Live Site</button></a></div>
            break;
        case "URCA":
            showImage = <img src={urcaDash} className="portfolioPic" />;
            skillsToShow = <div className="skillsUsed">{skills[0]}{skills[1]}{skills[2]}{skills[4]}{skills[5]}<a href="https://mattaurca-s22.github.io/MicrAgg-WebApp/"><button className="liveSiteButton liveButton">Live Site</button></a><a href="https://github.com/MattaURCA-S22/MicrAgg-WebApp"><button className="liveSiteButton sourceCodeButton" >Source Code</button></a></div>
            break;
    }


    return (
        <div className="projectDiv">
            <div className="persepctiveItem">
                <div className="additionalItems">
                    <div>
                        <div className="pictureDiv">
                            {showImage}
                        </div>
                        <h3 className="textTestDiv">{projectToShow} <br></br>{projectTime}</h3>
                        <div className="infoText">
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