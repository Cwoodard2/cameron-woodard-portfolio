import React from "react";
import Navigation from '../components/navigation';
import StandardPage from "../components/DefaultPage";
import cameronImage from "../Images/cameronwoodard.jpg";
import "./AboutMe.css";


export default function AboutMe() {

    return (
        <StandardPage>
            <Navigation />
            <h1 className="titles">Meet the face behind the screen!</h1>
            <div className="aboutMeMain">
                <div className="aboutMeSection">
                    <div className="aboutMeContent leftItem">
                        <h1 className="titles">Background</h1>
                        <img src={cameronImage} />
                        <p>I am a junior computer science student at SIUE also studying psychology. A core idea in my life is to provide for others. I believe in technology as a medium to enhance others lives, while not being a detriment. A focus on simple to use, appealing, and interesting technology is where I plan to focus my efforts.</p>
                    </div>
                    <div className="aboutMeContent rightItem">
                        <h1 className="titles">Skills</h1>
                        <div>
                            <p>Skill: React</p>
                        </div>
                        <p>Skill: CSS</p>
                        <p>Skill: Github Pages</p>
                        <p>Skill: Git</p>
                        <p>Skill: Visual Studio</p>
                        <p>Skill: CSS</p>
                        <p>Skill: React</p>
                        <p>Skill: CSS</p>
                        <button className="aboutMeButton">View Resume</button>
                    </div>
                </div>
                <br></br>
                <br></br>
                <br></br>
                <div className="dividerLine"></div>
                <br></br>
                <br></br>
                <div className="aboutMeSection">
                    <div className="aboutMeContent2">
                        <div className="circle"> <p>Simple UI</p></div>
                        <p>I focus on UI that is meant to be intuitive and easy to use</p>
                    </div>
                    <div className="aboutMeContent2">
                        <div className="circle"><p>Excellent User Experience</p></div>
                        <p>I want the experience of the user to be above and beyond what they've had before</p>
                    </div>
                    <div className="aboutMeContent2">
                        <div className="circle"><p>For Others, Not Me</p></div>
                        <p>Create products meant to help the world, not to abuse the people that use it</p>
                    </div>
                </div>
                <br></br>
                <br></br>
                <br></br>
                <div className="dividerLine"></div>
                <br></br>
                <br></br>
                <div className="aboutMeSection">
                    <div className="aboutMeContent">
                        <h1 className="titles">How I got here</h1>
                        <p>I didn't always want to be in tech but after an oppurtunity to take part in a school event, I found a passion for computer science. Cultivated through many years of work I developed computer science skills. Through the early years in university, I developed a love for helping others and a passion to improve mental health services. With this in my mind I began pursuing psychology in hopes that I pursue clinical psychology and combine it with computer science to produce software meant to help persons with psychological disorders live a better life.</p>
                    </div>
                    <div className="aboutMeContent interests">
                        <h1 className="titles">Interests</h1>
                        <p>I'm interested in the intersection of psychology and the technology, specifically the effects that technology has had on the human and ways to battle addiction. Additionally, I find design interesting fun though I am still learning about how to make effective designs! </p>
                    </div>
                </div>
                <div className="contactForm">
                    <h1 className="titles">Contact Me!</h1>
                    <form className="contactForm">
                        <input type="text" name="firstname" placeholder="Your name" className="inputBox"/>
                        <br></br>
                        <input type="text" name="email" placeholder="Email" className="inputBox"/>
                        <br></br>
                        <textarea name="subject" placeholder="Send me a message" className="message"/>
                        <br></br>
                        <input type="submit" value="Submit" className="aboutMeButton"></input>
                    </form>
                </div>
            </div>
        </StandardPage>
    );
};