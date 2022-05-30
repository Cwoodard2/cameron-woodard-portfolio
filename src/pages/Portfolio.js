import React, {useEffect, useState} from "react";
import Navigation from '../components/navigation';
import StandardPage from "../components/DefaultPage";
import Projects from "../components/ProjectsSection";
import './Portfolio.css';
import urcaDash from "../Images/urca.png";


export default function Portfolio() {

    const [whichProject, setWhichProject] = useState("current");
    const [currentButton, setCurrentButton] = useState("portfolioButton2");
    const [pastButton, setPastButton] = useState("portfolioButton");
    const [currentProjects, setCurrentProjects] = useState("currentProjects");
    const [pastProjects, setPastProjects] = useState("pastProjects2");
    var descriptionArray = [<p className="textTestDiv">This project was built by three students, including me. It was constructed to provide a way to collect data regarding ethnic and racial microaggressions. It utilizes React to build the website and provide functionality.</p>, <p className="textTestDiv">As an aspect of a Human Computer Interaction class, 3 classmates and I were tasked with creating a product we felt the product was missing. Our idea was Ultra Note, a notetaking app meant to simplfy note taking. In this project we learned about design research, prototyping, and testing in order to produce a design that enables our vison for Ultra Note</p>, <p className="textTestDiv">As part of web development, students were tasked with creating a database driven website. The database used was mySQL in combination with PHP. Front-end development was done with HTML, JQuery, and CSS. While not the most visually or programmaticly impressive website, it represents the humble beginnings for me in web design. Unfortunately, due to it not being hosted I am only able to provide screenshots.</p>, <p className="textTestDiv">This is meta isn't it. You can find the source code to my protfolio here!</p>, <p className="textTestDiv">For this project I was tasked with creating a simple website for a local therapy provider. This website was built using Squarespace as the client had already begun work with it. As a result I had to learn Squarespace to quickly develop the website. Unique to the therapy world, it uses a rustic theme with a darker color palette meant to provide calming sensations as you move throughout the site.</p>, <p className="textTestDiv">This item is here for a potential project that will be revealed at a later date.</p>];

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    function changeButton(toProject) {
        if (toProject === "current") {
            setCurrentButton("portfolioButton2");
            setPastButton("portfolioButton");
            setCurrentProjects("currentProjects");
            setPastProjects("pastProjects2");
        } else {
            setCurrentButton("portfolioButton");
            setPastButton("portfolioButton2");
            setPastProjects("pastProjects");
            setCurrentProjects("currentProjects2");
        }
        setWhichProject(toProject);
        console.log(whichProject)
    }

    function transitionElement() {
        var previousPosition = window.pageYOffset || document.documentElement.scrollTop;

        window.onscroll = function() {
        var currentPosition = window.pageYOffset || document.documentElement.scrollTop;

        if (previousPosition > currentPosition) {
            console.log('scrolling up');
        } else {
            console.log('scrolling down');
        }

  previousPosition = currentPosition;
};
    }

    return (
        <StandardPage>
            <Navigation />
            <div className="">
                <div className="portfolioMain">
                    <h1 className="pageTitle">View the projects I'm working on or see past ones!</h1>
                    <div className="portfolioButtons">
                        <button className={currentButton} onClick={() => changeButton("current")}>Current Projects</button>
                        <button className={pastButton} onClick={() => changeButton("past")}>Past Projects</button>
                    </div>
                    <div className={pastProjects}>
                        <Projects project = "URCA" description = {descriptionArray[0]} image="1" duration="January 2022 - May 2022"/>
                        <Projects project = "HCI" description = {descriptionArray[1]} image="2" duration="January 2022 - May 2022"/>
                        <Projects project = "234" description = {descriptionArray[2]} image="3" duration="August 2020 - December 2020"/>
                    </div>
                    <div className={currentProjects}>
                        <Projects project = "Portfolio" description = {descriptionArray[3]} image="4" duration="May 2022 - Current"/>
                        <Projects project = "MindWorks Mental Health" description = {descriptionArray[4]} image="5" duration="May 2022 - July 2022, Providing updates as needed"/>
                        <Projects project = "Placeholder" description = {descriptionArray[5]} image="6" duration="To be here in the future!"/>
                        <Projects project = "Placeholder" description = {descriptionArray[5]} image="6" duration="To be here in the future!"/>
                        <Projects project = "Placeholder" description = {descriptionArray[5]} image="6" duration="To be here in the future!"/>
                    </div>
                </div>
            </div>
        </StandardPage>
    );
};