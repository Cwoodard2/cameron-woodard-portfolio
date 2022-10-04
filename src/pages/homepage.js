import React, {useState, useEffect} from "react";
import {Link} from "react-scroll";
import { useForm, ValidationError } from '@formspree/react';
import Navigation from '../components/navigation';
import StandardPage from "../components/DefaultPage";
import '../components/navigation.css';
import './homepage.css';
import Skills from "../components/Skills";
import cameronImage from '../Images/cameronwoodard.jpg';
import Projects from "../components/ProjectsSection";
import resume from "./ResumeWoodard-Professional.pdf";
import linkedIn from "../Images/linkedinImage.png";
import githubLogo from "../Images/githubLogo.png";

export default function Homepage() {
    var descriptionArray = [<p>This project was built by three students, including me. It was constructed to provide a way to collect data regarding ethnic and racial microaggressions. It utilizes React for the front-end and uses Firebase for the backend.</p>, <p>As an aspect of a Human Computer Interaction class, 3 classmates and I were tasked with creating a product we felt was missing in the market. Our idea was Ultra Note, a notetaking app meant to simplfy note taking. In this project we learned about design research, prototyping, and testing in order to produce a design that enables our vison for Ultra Note. <i>Note: Ultra Note is not a functioning app but rather a design mockup for an app.</i></p>, <p>As part of web development, students were tasked with creating a database driven website. The database used was mySQL in combination with PHP. Front-end development was done with HTML, JQuery, and CSS. While not the most visually or programmaticly impressive website, it represents the humble beginnings for me in web design. Unfortunately, due to it not being hosted I am only able to provide screenshots.</p>, <p>Find the source code that powers this site here!</p>, <p>Using design principles learned in Human Computer Interaction and a bit of psychology, I built a Squarespace website for a client in just 3 weeks. It also features custom CSS and HTML, as well as SEO.</p>];

    var previousPosition = window.pageYOffset || document.documentElement.scrollTop;
    const [state, handleSubmit] = useForm("xgeqwogq");
    if (state.succeeded) {
       
    }

    return (
        <StandardPage>
            <Navigation />
            <div id="welcome" className="home-main">
                <div className="column">
                    <div className="homepage-nav">
                        <div className="intro-wrapper">
                            <h1 className="title">Hello there, I'm Cameron.</h1>
                            <h2 className="subtitle">I'm a rocking full-stack developer.</h2>
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
                <div className="divider-line"></div>
                <div className="about-me-section">
                    <div style={{display: "flex", justifyContent: "center"}}><img src={cameronImage} className="aboutMePicture"/></div>
                    <div className="about-me-main">
                        <h2 className="titles">About Me</h2>
                        <div style={{backgroundColor: "white", width: "2vw", height: "0.25vw", alignSelf: "flex-start", borderRadius: "3px"}}></div>
                            <p id="about-me-text">I am a software developer with 3 years of experience building applications. From a person or company's initial vision, I create something unique and useful bringing their ideas to life. Being able to quickly and accurately translate a concept, allows me to iterate faster and deliver sooner. It's time your vision came to fruition, with me.</p>
                            <div className="row" style={{gap: "2vw"}}>
                                <a href={resume} target="_blank" rel='noopener noreferrer'><button className="about-me-button resume">View Resume</button></a>
                                <Link to="adventures" spy={true} smooth={true}>
                                    <div className="row" style={{justifyContent: "center"}}>
                                        <button className="about-me-button">My Work</button>
                                    </div>
                                </Link>
                            </div>
                    </div>
                </div>
                <div id="skills" className="column" style={{justifyContent: "center", alignItems: "center"}}>
                    <h2 style={{alignSelf: "flex-start"}} className="titles">My Skills</h2>
                    <p style={{color: "white", alignSelf: "flex-start"}}>Learn more about the skills that I bring to the table.</p>
                    <div className="row gap">
                            <Skills skill="languages"/>
                            <Skills skill="frameworks"/>
                            <Skills skill="database"/>
                    </div>
                </div>
                <div>
                    <div id="adventures" className="section-title-description-wrapper">
                        <h2 style={{color: "#77DD66"}}>My Work</h2>
                        <p style={{color: "white"}}>Explore my projects, each with their own story.</p>
                    </div>
                    <div className="row" style={{justifyContent: "center"}}>
                        <Projects project = "MindWorks Mental Health" description = {descriptionArray[4]} image="5" duration="May 2022 - July 2022, Providing updates as needed"/>
                        <Projects project = "URCA" description = {descriptionArray[0]} image="1" duration="January 2022 - May 2022"/>
                        <Projects project = "Portfolio" description = {descriptionArray[3]} image="4" duration="May 2022 - Current"/>
                        <Projects project = "HCI" description = {descriptionArray[1]} image="2" duration="January 2022 - May 2022"/>
                    </div>
                </div>
                <div className="contactForm color">
                    <h2 className="titles" style={{alignSelf: "center"}}>Contact Me</h2>
                    {state.succeeded && <p>Thanks for contacting me! I'll be in touch with you soon!</p>}
                    <p style={{textAlign: "center"}}>Looking to hire me or just want to send a message? Use the form below to contact me.</p>
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