import React from "react";
import portfolioPic from "../Images/portfoliohome.png";
import ultraLogo from "../Images/ultranotelogo.jpg";
import urcaDash from "../Images/urca.png";
import "./ProjectsSection.css";

export default function Projects(props) {

    var projectToShow = props.project;
    var projectDecription;
    var projectImage;
    var projectTime;

    switch(projectToShow) {
        case "URCA":
            projectDecription  = (
                <p className="textTestDiv">This project was built by three students, including me. It was constructed to provide a way to collect data regarding ethnic and racial microaggressions. It utilizes React to build the website and provide functionality. Most design was done by me.</p>
            );

            projectTime = (
                <h3>January 2022 - May 2022</h3>
            );

            projectImage = (
                <div className="flipCard">
                    <div className="flipCardInner">
                        <div className="flipCardFront">
                            <img src={urcaDash} className="portfolioPic"/>
                        </div>
                        <div className="flipCardBack">
                            <h3>Relevant Skills</h3>
                            <p>
                                JSX
                                <br></br>
                                React
                                <br></br>
                                CSS
                                <br></br>
                                Github Pages
                                <br></br>
                                Git
                                <br></br>
                                Firebase
                                <br></br>
                                Group Collaboration
                                <br></br>
                                Scientific Journal Analysis
                            </p>
                            <a href="https://mattaurca-s22.github.io/MicrAgg-WebApp/"><button className="outsideWebButton">Visit The App</button></a>
                        </div>
                    </div>
                </div>
            );
            break;
        case "HCI":
            projectDecription  = (
                <p className="textTestDiv">As an aspect of a Human Computer Interaction class, 3 classmates and I were tasked with creating a product we felt the product was missing. Our idea was Ultra Note, a notetaking app meant to simplfy note taking. In this project we learned about design research, prototyping, and testing in order to produce a design that enables our vison for Ultra Note</p>
            );

            projectTime = (
                <h3>January 2022 - May 2022</h3>
            );

            projectImage = (
                <div className="flipCard">
                    <div className="flipCardInner">
                        <div className="flipCardFront">
                            <img src={ultraLogo} className="portfolioPic"/>
                        </div>
                        <div className="flipCardBack">
                            <h3>Relevant Skills</h3>
                            <p>
                                Writing
                                <br></br>
                                Drawing
                                <br></br>
                                Data Collection
                                <br></br>
                                Presentation Skills
                                <br></br>
                                Group Collaboration
                                <br></br>
                                Figma
                                <br></br>
                                Data Analysis
                            </p>
                            <a href="https://ultranotes.weebly.com/"><button className="outsideWebButton">View Our Website</button></a>
                        </div>
                    </div>
                </div>
            );
            break;
        case "234":
            projectDecription  = (
                <p className="textTestDiv">As part of web development, students were tasked with creating a database driven website. The database used was mySQL in combination with PHP. Front-end development was done with HTML, JQuery, and CSS. While not the most visually or programmaticly impressive website, it represents the humble beginnings for me in web design. Unfortunately, due to it not being hosted I am only able to provide screenshots.</p>
            );

            projectTime = (
                <h3>August 2020 - December 2020</h3>
            );

            projectImage = (
                <div className="flipCard">
                    <div className="flipCardInner">
                        <div className="flipCardFront">
                            <img src="https://th.bing.com/th/id/R.92a596eab06d400686cd541e68145b3b?rik=k%2fT4IkWsia2ALA&riu=http%3a%2f%2fwww.usnews.com%2fcmsmedia%2f46%2f19%2f5c6c54fb4c6f812dc85c20fc656a%2f141106-portfolio-stock.jpg&ehk=pEOp6RPzMxLzFRliU7hWCEGZlsbFJ%2fkgrdh%2fpBH6Du4%3d&risl=&pid=ImgRaw&r=0" className="portfolioPic"/>
                        </div>
                        <div className="flipCardBack">
                            <h3>Relevant Skills</h3>
                            <p>
                                HTML
                                <br></br>
                                CSS
                                <br></br>
                                PHP
                                <br></br>
                                MySql
                            </p>
                        </div>
                    </div>
                </div>
            );
            break;
        case "Portfolio":
            projectDecription  = (
                <p className="textTestDiv">This is meta isn't it. You can find the source code to my protfolio here!</p>
            );

            projectTime = (
                <h3>May 2022 - Current</h3>
            );
    
            projectImage = (
                <div className="flipCard">
                    <div className="flipCardInner">
                        <div className="flipCardFront">
                            <img src={portfolioPic} className="portfolioPic"/>
                        </div>
                        <div className="flipCardBack">
                            <h3>Relevant Skills</h3>
                                <p>JSX
                                    <br></br>
                                    React
                                    <br></br>
                                    CSS
                                    <br></br>
                                    Github Pages
                                    <br></br>
                                    Git
                                </p>
                            <a href="https://github.com/Cwoodard2/Cwoodard2.github.io"><button className="outsideWebButton">Visit My Repository</button></a>
                        </div>
                    </div>
                </div>
            );
            break;
        case "Placeholder": 
            projectDecription  = (
                <p className="textTestDiv">This item is here for a potential project that will be revealed at a later date.</p>
            );

            projectTime = (
                <h3>To be here in the future!</h3>
            );

            projectImage = (
                <div className="flipCard">
                    <div className="flipCardInner">
                        <div className="flipCardFront">
                            <img src={portfolioPic} className="portfolioPic"/>
                        </div>
                        <div className="flipCardBack">
                            <h3>Relevant Skills</h3>
                               <p>To come Soon!</p>
                            <a href="https://github.com/Cwoodard2/Cwoodard2.github.io"><button className="outsideWebButton">Visit My Repository</button></a>
                        </div>
                    </div>
                </div>
            );
        default:

            break;
    }
    return (
                <div className="projectDiv">
                    <div className="persepctiveItem">
                        <div>
                            <div className="additionalInfo">
                                <h3 className="textTestDiv">{projectToShow}{projectTime}</h3>
                                <div className="infoText">
                                    <hr></hr>
                                    {projectDecription}
                                </div>
                            </div>
                        </div>
                        {projectImage}
                    </div>
                </div>
    );
};