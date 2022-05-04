import React from "react";
import Navigation from '../components/navigation';
import StandardPage from "../components/DefaultPage";
import cameronImage from "../Images/cameronwoodard.jpg";
import "./AboutMe.css";


export default function AboutMe() {

    return (
        <StandardPage>
            <Navigation />
            <h3>Meet the face behind the screen!</h3>
            <div className="aboutMeMain">
                <div className="aboutMeSection">
                    <div className="aboutMeContent leftItem">
                        <h1>Background</h1>
                        <img src={cameronImage} />
                        <p>This is placeholder text</p>
                    </div>
                    <div className="aboutMeContent rightItem">
                        <h1>Skills</h1>
                        <p>Skill one: React</p>
                        <p>Skill two: JSX</p>
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
                        <div className="circle"> <p>Simple UI</p></div>
                        <p>I focus on UI that is meant to be intuitive and easy to use</p>
                    </div>
                    <div className="aboutMeContent">
                        <div className="circle"><p>Excellent User Experience</p></div>
                        <p>I want the experience of the user to be above and beyond what they've had before</p>
                    </div>
                    <div className="aboutMeContent">
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
                        <h1>How I got here</h1>
                        <p>This is how I got here</p>
                        <br></br>
                        <h1>Interests</h1>
                        <p>These are the interests</p>
                    </div>
                </div>
                <div className="contactForm">
                    <h1 className="titles">Contact Me!</h1>
                    <form className="contactForm">
                        <input type="text" name="firstname" placeholder="Your name" className="inputBox"/>
                        <input type="text" name="email" placeholder="Email" className="inputBox"/>
                        <textarea name="subject" placeholder="Send me a message" className="message"/>
                        <input type="submit" value="Submit"></input>
                    </form>
                </div>
                <div className="footer">
                    
                </div>
            </div>
        </StandardPage>
    );
};