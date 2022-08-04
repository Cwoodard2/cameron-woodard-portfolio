import React from "react";
import allLogos from "../Images/html-css-js-logos.png";
import htmlLogo from "../Images/htmlLogo.png";
import cssLogo from "../Images/cssLogo.png";
import javascriptLogo from "../Images/javascriptLogo.png";
import reactLogo from "../Images/reactLogo.png";
import firebaseLogo from "../Images/firebaseLogo.png";
import "./skillCard.css";


export default function Skills(props) {
    var cardToShow;

    switch(props.skill) {
        case "languages":
            cardToShow = (
            <div className="skill-collage">
                <h3>Languages</h3>
                <div className="row gap">
                    <div className="skill-card-column">
                        <img src={htmlLogo} className="skill-card"/>
                        <p style={{textAlign: "center"}}>HTML</p>
                    </div>
                    <div className="skill-card-column">
                        <img src={cssLogo} className="skill-card"/>
                        <p style={{textAlign: "center"}}>CSS</p>
                    </div>
                    <div className="skill-card-column">
                        <img src={javascriptLogo} className="skill-card"/>
                        <p style={{textAlign: "center"}}>Javascript</p>
                    </div>
                </div>
                <p>Using these langauges I form the foundations of my websites and applications. They allow me to create the form and function of the webpage setting each project up for success from the start.</p>
            </div>);
            break;
        case "frameworks":
            cardToShow = (
                <div className="skill-collage">
                    <h3>Frameworks</h3>
                    <div className="skill-card-column">
                        <img src={reactLogo} className="skill-card"/>
                        <p style={{textAlign: "center"}}>React</p>
                    </div>
                    <p>React allows me to quickly and easily make javascript applications and websites by providing tools that take away the tiresome use of vanilla javascript.</p>
                </div>);
            break;
        case "database":
            cardToShow = (
                <div className="skill-collage">
                    <h3>Database</h3>
                    <div className="skill-card-column">
                        <img src={firebaseLogo} className="skill-card"/>
                        <p style={{textAlign: "center"}}>Firebase</p>
                    </div>
                    <p>Experience with Firebase lays the groundwork to using other similar databases and provides me with experience in dealing with them should I need to interface with one.</p>
                </div>);
            break;
        default:
            break;
    }

    return (
        // <div className="skill-collage">
        //     <img src={allLogos} className="skill-card"/>
        //     <h5>Languages</h5>
        //     <p>Using these langauges I form the foundations of my websites and applications. They allow me to create the form and function of the webpage setting each project up for success from the start.</p>
        // </div>
        <>
            {cardToShow}
        </>   
    )
}