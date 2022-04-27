import React from "react";
import Navigation from '../components/navigation';
import StandardPage from "../components/DefaultPage";
import '../components/navigation.css';
import NavButton from "../components/NavButton";
import './homepage.css';
import logo from '../Images/Logoforwebsite.png';

export default function Homepage() {

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

    return (
        <StandardPage>
            <Navigation />
            <div className="homeMain">
                <div className="homepageNav2">
                    <h2 className="title">Greetings...</h2>
                    <img src={logo} />
                    <div className="navText">
                       <h2>I'm Cameron</h2>
                    </div>
                </div>
                <div className="otherPages">
                <div className="homepageNav">
                    <h2 className="cardTitle">Projects</h2>
                    <h3>You can find the projects I've worked on here!</h3>
                    <h3>Picture Here</h3>
                    <NavButton page="Portfolio" thisPage="Learn More" thisStyle="navButtonHome" />
                </div>
                <div className="homepageNav">
                    <h2>Resume</h2>
                    <h3>The onestop shop for all your resume needs!</h3>
                    <h3>Picture Here</h3>
                    <NavButton page="Resume" thisPage="Learn More" thisStyle="navButtonHome" />
                </div>
                <div className="homepageNav">
                    <h2>Playground</h2>
                    <h3>Channel your inner kid and mess around in The Playground</h3>
                    <h3>Picture Here</h3>
                    <NavButton page="Playground" thisPage="Learn More" thisStyle="navButtonHome" />
                </div>
                </div>
            </div>                                                                                             
        </StandardPage>
    );
};