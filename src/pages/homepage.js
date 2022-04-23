import React from "react";
import Navigation from '../components/navigation';
import StandardPage from "../components/DefaultPage";
import '../components/navigation.css';
import NavButton from "../components/NavButton";
import './homepage.css';

export default function Homepage() {

    return (
        <StandardPage>
            <Navigation />
            <div className="homeMain">
                <div className="homepageNav2">
                    <h2>About Me</h2>
                    <h2></h2>
                    <div className="navText">
                        <h3>Greetings, my name is Cameron! I've created this portfolio to show off the projects I've worked on and highlight skills I possess. If you'd like to learn a little more about me this is the place to start.</h3>
                    </div>
                    <h3>Picture Here</h3>
                    <NavButton page="AboutMe" thisPage="Learn More" thisStyle="navButtonHome" />
                </div>
                <div className="homepageNav">
                    <h2>Projects</h2>
                    <h2></h2>
                    <div className="navText">
                        <h3>You can find the projects I've worked on here!</h3>
                    </div>
                    <h3>Picture Here</h3>
                    <NavButton page="Portfolio" thisPage="Learn More" thisStyle="navButtonHome" />
                </div>
                <div className="homepageNav">
                    <h2>Resume</h2>
                    <h2></h2>
                    <div className="navText">
                        <h3>The onestop shop for all your resume needs!</h3>
                    </div>
                    <h3>Picture Here</h3>
                    <NavButton page="Resume" thisPage="Learn More" thisStyle="navButtonHome" />
                </div>
                <div className="homepageNav">
                    <h2>Playground</h2>
                    <h2></h2>
                    <div className="navText">
                        <h3>Channel your inner kid and mess around in The Playground</h3>
                    </div>
                    <h3>Picture Here</h3>
                    <NavButton page="Playground" thisPage="Learn More" thisStyle="navButtonHome" />
                </div>
            </div>                                                                                             
        </StandardPage>
    );
};