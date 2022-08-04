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
                <div className="row">
                    <img src={htmlLogo} className="skill-card"/>
                    <img src={cssLogo} className="skill-card"/>
                    <img src={javascriptLogo} className="skill-card"/>
                </div>
                <h5>Languages</h5>
                <p>Using these langauges I form the foundations of my websites and applications. They allow me to create the form and function of the webpage setting each project up for success from the start.</p>
            </div>);
            break;
        case "frameworks":
            cardToShow = (
                <div className="skill-collage">
                    <img src={reactLogo} className="skill-card"/>
                    <h5>Frameworks</h5>
                    <p>React allows me to quickly and easily make javascript applications and websites by providing tools that take away the tiresome use of vanilla javascript.</p>
                </div>);
            break;
        case "database":
            cardToShow = (
                <div className="skill-collage">
                    <img src={firebaseLogo} className="skill-card"/>
                    <h5>Database</h5>
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