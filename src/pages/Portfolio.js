import React from "react";
import Navigation from '../components/navigation';
import StandardPage from "../components/DefaultPage";
import Projects from "../components/ProjectsSection";
import './Portfolio.css';


export default function Portfolio() {

    // const [whichProject, setWhichProject] = useState("current");

    function changeButton(toProject) {
        // setWhichProject(toProject);
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
            <div className="testingDiv">
            <div className="projectMoreInfo">
                This is some info for a project that I am doing. We are doing some great things here.
            </div>
            </div>
            <div className="">
                <div className="portfolioMain">
                    <h1>Ahh the projects page, where it all begins</h1>
                    <div className="portfolioButtons">
                        <button className="portfolioButton" onClick={() => changeButton("current")}>Current Projects</button>
                        <button className="portfolioButton" onClick={() => changeButton("past")}>Past Projects</button>
                    </div>
                    <Projects project = "URCA"/>
                    <Projects project = "HCI"/>
                    <Projects project = "234"/>
                    <Projects project = "Portfolio"/>
                </div>
            </div>
        </StandardPage>
    );
};