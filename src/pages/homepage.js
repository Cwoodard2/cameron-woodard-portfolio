import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { useForm, ValidationError } from "@formspree/react";
import Navigation from "../components/navigation";
import StandardPage from "../components/DefaultPage";
import "../components/navigation.css";
import "./homepage.css";
import Skills from "../components/Skills";
import {devProjects, designProjects} from "../ProjectDescriptions/Projects";
import cameronImage from "../Images/cameronwoodard.jpg";
import Projects from "../components/ProjectsSection";
import resume from "./ResumeWoodard-Professional.pdf";
import linkedIn from "../Images/linkedinImage.png";
import githubLogo from "../Images/githubLogo.png";
import skillData from "../ProjectDescriptions/SkillPics";
import FocusSection from "../components/focusSection";
import codePic from "../Images/code.png";
import designPic from "../Images/design.png";

export default function Homepage() {
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
              <h1 className="title" style={{position: "relative", zIndex: "2"}}>Hi, I'm Cameron Woodard.</h1>
              <h2 className="subtitle" style={{position: "relative", zIndex: "2", textAlign: "center"}}>
                I develop beautiful and functional full stack applications.
              </h2>
              <div className="row gap2" style={{ gap: "10vw" }}></div>
              <br></br>
              <br></br>
              <br></br>
              <div className="row floatingBubblesContainer" style={{justifyContent: "space-between", width: "80dvw"}}>
                <div className="floatingBubbles"></div>
                <div className="floatingBubbles"></div>
                <div className="floatingBubbles"></div>
                <div className="floatingBubbles"></div>
              </div>
            </div>
          </div>
        </div>
        <div className="about-me-section" id="aboutme-section">
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
            <p id="about-me-text" style={{fontWeight: "bold"}}>
              I am a passionate web developer specializing in full stack applications and UI/UX. My expertise lies in developing bespoke solutions to complex problems. This includes not only developing feature complete solutions but ones that also result in a great user experience.
            </p>
            <br></br>
            <div className="row" style={{color: "black", justifyContent: "space-evenly", width: "100%", gap: "10vw"}}>
              <FocusSection title="Full Stack Developer" description="I enjoy writing simple and elegant solutions to interesting problems." skill="Languages I Write With" headImg={codePic} skills={["HTML, CSS, Typescript, Java, Python"]} tools={["React, Tailwind CSS, Git, Github, Firebase, Express JS"]}/>
              <FocusSection title="Designer" description="I believe in crafting intuitive, interesting, and thoughtful UI." skill="What I Design" headImg={designPic} skills={["UI/UX, Web, Logos"]} tools={["Squarespace, Wix, Pen & Paper, Adobe Creative Cloud, Figma, Canva"]}/>
            </div>
          </div>
        </div>
        <div style={{backgroundColor: "#08aeea", display: "flex", flexDirection: "column", alignItems: "center"}}>
          <div id="adventures" className="section-title-description-wrapper">
            <h2 className="titles" style={{color: "white"}}>My Work</h2>
            <p id="about-me-text" style={{fontWeight: "bold"}}>
              Here are a mix of projects that demonstrate a wide variety of
              skills. All projects have helped me develop as a well rounded
              programmer adn learn to apply concepts across different environments.
            </p>
          </div>
          <div className="row" style={{ justifyContent: "center" }}>
            {Object.values(devProjects).map((project, i) => {
              console.log(project);
              return (
                <li key={i} style={{listStyle: "none"}}>
                  <Projects
                    title={project.title}
                    description={project.description}
                    image={project.projectPic}
                    duration={project.duration}
                    imageTwo={project.projectPic}
                    skills={project.skills}
                    sourceCode={project.sourceCode}
                    liveSite={project.liveSite}
                    type={project.type}
                  />
                </li>
              );
            })}
          </div>
          <div className="section-title-description-wrapper">
          <h3 className="titles" style={{color: "white", textAlign: "center"}}>Design Projects</h3>
          </div>
          <div className="row" style={{ justifyContent: "center" }}>
            {Object.values(designProjects).map((project, i) => {
              console.log(project);
              return (
                <li key={i} style={{listStyle: "none"}}>
                  <Projects
                    title={project.title}
                    description={project.description}
                    image={project.projectPic}
                    duration={project.duration}
                    imageTwo={project.projectPic}
                    skills={project.skills}
                    sourceCode={project.sourceCode}
                    liveSite={project.liveSite}
                    type={project.type}
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
    </StandardPage>
  );
}
