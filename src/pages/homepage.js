import React, {useState, useEffect} from "react";
import {Link} from "react-scroll";
import { useForm, ValidationError } from '@formspree/react';
import Navigation from '../components/navigation';
import StandardPage from "../components/DefaultPage";
import '../components/navigation.css';
import './homepage.css';
import logo from '../Images/logoWithColorBrain.png';
import Skills from "../components/Skills";
import cameronImage from '../Images/cameronwoodard.jpg';
import AddSkillCard from "../components/skillCard";
import Projects from "../components/ProjectsSection";
import resume from "./ResumeWoodardprofessional.pdf";
import linkedIn from "../Images/linkedinImage.png";
import githubLogo from "../Images/githubLogo.png";

export default function Homepage() {
    var descriptionArray = [<p>This project was built by three students, including me. It was constructed to provide a way to collect data regarding ethnic and racial microaggressions. It utilizes React for the front-end and uses Firebase for theback-end.</p>, <p>As an aspect of a Human Computer Interaction class, 3 classmates and I were tasked with creating a product we felt the product was missing. Our idea was Ultra Note, a notetaking app meant to simplfy note taking. In this project we learned about design research, prototyping, and testing in order to produce a design that enables our vison for Ultra Note. <i>Note: Ultra Note is not a functioning app but rather a design mockup for an app.</i></p>, <p>As part of web development, students were tasked with creating a database driven website. The database used was mySQL in combination with PHP. Front-end development was done with HTML, JQuery, and CSS. While not the most visually or programmaticly impressive website, it represents the humble beginnings for me in web design. Unfortunately, due to it not being hosted I am only able to provide screenshots.</p>, <p>This is meta isn't it. You can find the source code to my portfolio here!</p>, <p>This is a simple website created in 3 weeks for a local therapy provider. It was built using Squarespace as the client was already using it. It also features some custom CSS and HTML. The goal was to practice design ideas with most programming elements being done for me by Squarespace.</p>];

    var previousPosition = window.pageYOffset || document.documentElement.scrollTop;
    const [state, handleSubmit] = useForm("xgeqwogq");

        // window.onscroll = function() {
        //     var currentPosition = window.pageYOffset || document.documentElement.scrollTop;

        //     if (previousPosition > currentPosition) {
        //         console.log('scrolling up');
        //     } else {
        //         console.log('scrolling down');
        //     }

        //     previousPosition = currentPosition;
        // };

        useEffect(() => {
            window.scrollTo(0, 0);
        }, []);

    return (
        <StandardPage>
            <Navigation />
            <div id="welcome" className="home-main">
                <div className="column">
                    <div className="homepage-nav">
                        <div className="intro-wrapper">
                            <p>Making stories on the web since it was cool... which was always.</p>
                            <h1 className="title">Hello there, I'm Cameron.</h1>
                            <h2 className="subtitle">I'm a rocking front-end developer.</h2>
                            <div className="row gap2" style={{gap: "10vw"}}>
                                <div className="row gap">
                                    <a href="https://github.com/Cwoodard2" target="_blank" rel='noopener noreferrer'><img src={githubLogo} className="skill-pic"/></a>
                                    <a href="https://www.linkedin.com/in/cameron-woodard-4565661a3/" target="_blank" rel='noopener noreferrer'><img src={linkedIn} className="skill-pic"/></a>
                                </div>
                            </div>
                            <br></br>
                            <br></br>
                            <br></br>
                            <Link to="adventures" spy={true} smooth={true}>
                                <div className="row" style={{justifyContent: "center"}}>
                                    <button className="down-button">&#8595;</button>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
                <div id="adventures" className="divider-line"></div>
                <div className="about-me-section">
                    <div><img src={cameronImage} className="aboutMePicture"/></div>
                    <div className="about-me-main">
                        <h2 className="titles">About Me</h2>
                        <div style={{backgroundColor: "white", width: "2vw", height: "0.25vw", alignSelf: "flex-start", borderRadius: "3px"}}></div>
                            <p>I am a software developer looking to make your vision come true. With ideas, images, designs, and solutions constantly floating in my head, I am always ready to offer you something, whether it be completely original or just a quick fix. I've been developing personal items for several years and it's time I make your vision come to fruition.</p>
                            {/* Providing beautiful and functional websites is a core pillar of my philosophy. Each product should be unique and with its own flair. Bringing a psychological background to the table, I keep the human brain happy with my work. */}
                            <a href={resume} target="_blank" rel='noopener noreferrer'><button className="about-me-button">View Resume</button></a>
                    </div>
                </div>
                <div className="column" style={{justifyContent: "center", alignItems: "center"}}>
                    <h4>Skills I Specialize In</h4>
                    <div className="row gap">
                            <Skills skill="languages"/>
                            <Skills skill="frameworks"/>
                            <Skills skill="database"/>
                    </div>
                </div>
                <div>
                    <div className="section-title-description-wrapper">
                        <h2 style={{color: "#77DD66"}}><u>Projects</u></h2>
                        <p style={{color: "white"}}>Explore each of my projects of which some focus on design, others on full-stack, and all on excellent programming. All in all each tells it's own story.</p>
                    </div>
                    <div className="row" style={{justifyContent: "center"}}>
                        <Projects project = "MindWorks Mental Health" description = {descriptionArray[4]} image="5" duration="May 2022 - July 2022, Providing updates as needed"/>
                        <Projects project = "Portfolio" description = {descriptionArray[3]} image="4" duration="May 2022 - Current"/>
                        <Projects project = "URCA" description = {descriptionArray[0]} image="1" duration="January 2022 - May 2022"/>
                        <Projects project = "HCI" description = {descriptionArray[1]} image="2" duration="January 2022 - May 2022"/>
                    </div>
                </div>
                <div className="contactForm">
                    <h1 className="titles">Contact Me!</h1>
                    <form onSubmit={handleSubmit} className="contactForm" method="POST">
                        <input type="text" name="firstname" placeholder="Your name" className="input-box"/>
                        <br></br>
                        <input type="text" name="email" placeholder="Email" className="input-box"/>
                        <br></br>
                        <textarea name="subject" placeholder="Send me a message" className="message"/>
                        <br></br>
                        <input type="submit" disabled={state.submitting} className="submit-button"></input>
                    </form>
                </div> 
                </div>                                                                                     
        </StandardPage>
    );
};