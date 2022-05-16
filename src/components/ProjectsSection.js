import React from "react";
import FlipCard from "./flipCard";
import "./ProjectsSection.css";

export default function Projects(props) {

    var projectToShow = props.project;
    var projectDecription = props.description;
    var projectImage = props.image;
    var projectTime = props.duration;


    return (
        <div className="projectDiv">
            <div className="persepctiveItem">
                <div>
                    <div className="additionalInfo">
                        <h3 className="textTestDiv">{projectToShow} <br></br><br></br>{projectTime}</h3>
                        <div className="infoText">
                            <hr></hr>
                            {projectDecription}
                        </div>
                    </div>
                </div>
                {/* {projectImage} */}
                <FlipCard image={props.image} />
            </div>
        </div>
    );
};