import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { useForm, ValidationError } from "@formspree/react";
import Navigation from "../components/navigation";
import StandardPage from "../components/DefaultPage";
import "../components/navigation.css";
import "./homepage.css";
import Skills from "../components/Skills";
import projects from "../ProjectDescriptions/Projects";
import cameronImage from "../Images/cameronwoodard.jpg";
import Projects from "../components/ProjectsSection";
import resume from "./ResumeWoodard-Professional.pdf";
import linkedIn from "../Images/linkedinImage.png";
import githubLogo from "../Images/githubLogo.png";

export default function Homepage() {
  var previousPosition =
    window.pageYOffset || document.documentElement.scrollTop;
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
              <h1 className="title">Hi, I'm Cameron Woodard.</h1>
              <h2 className="subtitle">
                I develop beautiful and functional full stack applications.
              </h2>
              <div className="row gap2" style={{ gap: "10vw" }}></div>
              <br></br>
              <br></br>
              <br></br>
              {/* <Link to="adventures" spy={true} smooth={true}>
                <div className="row" style={{ justifyContent: "center" }}>
                  <button className="down-button">&#8595;</button>
                </div>
              </Link> */}
            </div>
          </div>
        </div>
        <div className="divider-line"></div>
        <div className="about-me-section">
          {/* <div style={{ display: "flex", justifyContent: "center" }}>
            <img src={cameronImage} className="aboutMePicture" />
          </div> */}
          <div className="about-me-main">
            <h2 className="titles">About Me</h2>
            <div
              style={{
                backgroundColor: "white",
                width: "2vw",
                height: "0.25vw",
                alignSelf: "flex-start",
                borderRadius: "3px",
              }}
            ></div>
            <p id="about-me-text" style={{ color: "black" }}>
              I am a software developer with 3 years of experience building
              applications. From a person or company's initial vision, I create
              something unique and useful bringing their ideas to life. Being
              able to quickly and accurately translate a concept, allows me to
              iterate faster and deliver sooner. It's time your vision came to
              fruition, with me.
            </p>
            <div className="row" style={{ gap: "2vw" }}>
              <a href={resume} target="_blank" rel="noopener noreferrer">
                <button className="about-me-button resume">View Resume</button>
              </a>
              <div className="row gap">
                <a
                  href="https://github.com/Cwoodard2"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={githubLogo} className="skill-pic" />
                </a>
                <a
                  href="https://www.linkedin.com/in/cameron-woodard-4565661a3/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={linkedIn} className="skill-pic" />
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* <div
          id="skills"
          className="column"
          style={{ justifyContent: "center", alignItems: "center" }}
        >
          <h2 style={{ alignSelf: "flex-start" }} className="titles">
            My Skills
          </h2>
          <p style={{ color: "white", alignSelf: "flex-start" }}>
            Over the course of my 6 years in development, I have cultivated many
            skills necessary to perform effectively and effiecently. They mainly
            consist of Full Stack Skills such as React and Express JS but I have
            also dabbled in others such as C and Flutter.
          </p>
          <div className="row gap">
            <Skills skill="languages" />
            <Skills skill="frameworks" />
            <Skills skill="database" />
          </div>
        </div> */}
        <div>
          <div id="adventures" className="section-title-description-wrapper">
            <h2 style={{ color: "#77DD66" }}>My Work</h2>
            <p style={{ color: "white" }}>
              Here are a mix of projects that demonstrate a wide variety of
              skills. They are meant to help me develop as a well rounded
              developer.
            </p>
          </div>
          <div className="row" style={{ justifyContent: "center" }}>
            {Object.values(projects).map((project, i) => {
              console.log(project);
              return (
                <li key={i}>
                  <Projects
                    title={project.title}
                    description={project.description}
                    image={project.projectPic}
                    duration={project.duration}
                    imageTwo={projects}
                    skills={project.skills}
                    sourceCode={project.sourceCode}
                    liveSite={project.liveSite}
                  />
                </li>
              );
            })}
          </div>
        </div>
        <div className="contactForm" style={{backgroundColor: "orangeRed"}}>
          <h2 className="titles" style={{ alignSelf: "center", color: "white" }}>
            Contact Me
          </h2>
          {state.succeeded && (
            <p>Thanks for contacting me! I'll be in touch with you soon!</p>
          )}
          <p style={{ textAlign: "center" }}>
            Looking to hire me or just want to send a message? Use the form
            below to contact me.
          </p>
          <form onSubmit={handleSubmit} className="contactForm" method="POST">
            <input
              type="text"
              name="firstname"
              placeholder="Your name"
              className="input-box"
            />
            <br></br>
            <input
              type="text"
              name="email"
              placeholder="Email"
              className="input-box"
            />
            <br></br>
            <textarea
              name="subject"
              placeholder="Send me a message"
              className="message"
            />
            <br></br>
            <input
              type="submit"
              disabled={state.submitting}
              className="submit-button"
            ></input>
          </form>
        </div>
      </div>
    </StandardPage>
  );
}
