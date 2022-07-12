import React, {useState, useEffect} from "react";
import Navigation from '../components/navigation';
import StandardPage from "../components/DefaultPage";
import '../components/navigation.css';
import NavButton from "../components/NavButton";
import './homepage.css';
import logo from '../Images/logoWithColorBrain.png';
import cameronImage from '../Images/cameronwoodard.jpg';
import ProjectsCopy from "../components/ProjectsSection copy";
import AddSkillCard from "../components/skillCard";
import AddSkillCardCopy from "../components/skillCard copy";
import Projects from "../components/ProjectsSection";

export default function Homepage() {
    var descriptionArray = [<p>This project was built by three students, including me. It was constructed to provide a way to collect data regarding ethnic and racial microaggressions. It utilizes React for the front-end and uses Firebase for theback-end.</p>, <p>As an aspect of a Human Computer Interaction class, 3 classmates and I were tasked with creating a product we felt the product was missing. Our idea was Ultra Note, a notetaking app meant to simplfy note taking. In this project we learned about design research, prototyping, and testing in order to produce a design that enables our vison for Ultra Note. <i>Note: Ultra Note is not a functioning app but rather a design mockup for an app.</i></p>, <p>As part of web development, students were tasked with creating a database driven website. The database used was mySQL in combination with PHP. Front-end development was done with HTML, JQuery, and CSS. While not the most visually or programmaticly impressive website, it represents the humble beginnings for me in web design. Unfortunately, due to it not being hosted I am only able to provide screenshots.</p>, <p>This is meta isn't it. You can find the source code to my protfolio here!</p>, <p>This is a simple website created in 3 weeks for a local therapy provider. It was built using Squarespace as the client was already using it. It also features some custom CSS and HTML. The goal was to practice design ideas with most programming elements being done for me by Squarespace.</p>];

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

        useEffect(() => {
            window.scrollTo(0, 0);
        }, []);

    return (
        <StandardPage>
            <Navigation />
            <div className="homeMain">
                <div className="column">
                    <div className="homepageNav2">
                        <div className="titleText">
                            <h1 id="welcome" className="title">Hello there, I'm Cameron!<br></br></h1>
                            {/* <p className="subtitle">Thanks for vising my portfolio. I'm a computer science major at Southern Illinois University Edwardsville. I also plan to obtain a degree in psychology and become a web developer. Take a look around, I hope you enjoy!</p> */}
                            <p className="subtitle">I am a computer science student at SIUE and a freelance web developer. I have an interest in simple but effective UI/UX design. I believe every website should a tell story.</p>
                            <div className="row gap">
                                <NavButton page="adventures" thisPage="Adventures" thisStyle="navButtonLearnMore" />
                                <NavButton page="skills" thisPage="Skills" thisStyle="navButtonLearnMore" />
                                <NavButton page="aboutme" thisPage="About Me" thisStyle="navButtonLearnMore" />
                            </div>
                        </div>
                        {/* <h2 className="title">Hello there, I'm Cameron! <br></br><p>Thanks for vising my portfolio. I'm a computer science major at Southern Illinois University Edwardsville. I also plan to obtain a degree in psychology and become a web developer. Take a look around, I hope you enjoy!</p></h2> */}
                        <img src={logo} className="logo"/>                       
                    </div>
                </div>
                <div id="adventures" className="dividerLine"></div>
                <div className="divTest1">
                    <h1 style={{color: "#77DD66"}}><u>Adventures</u></h1>
                    <p style={{color: "white", width: "35vw"}}>Each hero goes through many adventures, here are some of mine. They showcase different challenges I've faced. All in all each tells it's own story.</p>
                </div>
                <div className="row2">
                    <Projects project = "MindWorks Mental Health" description = {descriptionArray[4]} image="5" duration="May 2022 - July 2022, Providing updates as needed"/>
                    <Projects project = "Portfolio" description = {descriptionArray[3]} image="4" duration="May 2022 - Current"/>
                    <Projects project = "URCA" description = {descriptionArray[0]} image="1" duration="January 2022 - May 2022"/>
                    <Projects project = "HCI" description = {descriptionArray[1]} image="2" duration="January 2022 - May 2022"/>
                </div>
                <div id="skills" className="dividerLine"></div>
                <div className="divTest1">
                    <h1 style={{color: "#77DD66"}}>And a hero is not complete without their tools</h1>
                    <p style={{color: "white", width: "35vw"}}>Without the skills and tools i learned and took on each adventure I never would have completed them. They are the key to future endeavors and they only continue to grow.</p>
                </div>
                <div className="row allSkillsWrapper">
                    <div className="skillsWrapper">
                        <div className="skillsContent">
                            <h2 className="testNewIdea">Skills and Tools</h2>
                            <div className="moreSkillContent">
                                <AddSkillCardCopy experience="6" whichSkill="React" howComfort="40" style="skillCard" projects="2" />
                                <AddSkillCardCopy experience="1" whichSkill="HTML" howComfort="50"  style="skillCard" projects="4" />
                                <AddSkillCardCopy experience="6" whichSkill="CSS" howComfort="30"  style="skillCard" projects="2" />
                                <AddSkillCardCopy experience="3" whichSkill="Java" howComfort="70"  style="skillCard" projects="4" />
                                <AddSkillCardCopy experience="3" whichSkill="Javascript" howComfort="70"  style="skillCard" projects="many" />
                            </div>
                        </div>
                    </div>
                    <div className="skillsWrapper">
                        <div className="skillsContent">
                            <h2 className="testNewIdea">Skills and Tools</h2>
                            <div className="moreSkillContent">
                                <AddSkillCardCopy experience="1" whichSkill="Firebase" howComfort="30"  style="skillCard" projects="2" />
                                <AddSkillCardCopy experience="6" whichSkill="Github Pages" howComfort="30"  style="skillCard" projects="1" />
                                <AddSkillCardCopy experience="1" whichSkill="Git" howComfort="60"  style="skillCard" projects="3" />
                            </div>
                        </div>
                    </div>
                </div>
                <div id="aboutme" className="dividerLine"></div>
            <div className="aboutMeMain">
            <h1 className="titles">Who is this Cameron guy?</h1>
                <div className="aboutMeSection">
                    {/* <div className="aboutMeContent leftItem">
                        <h1 className="titles">Background</h1>
                       <p>I am a junior computer science student at SIUE also studying psychology. A core idea in my life is to provide for others. I believe in technology as a medium to enhance others lives, while not being a detriment. A focus on simple to use, appealing, and interesting technology is where I plan to focus my efforts.</p>
                        <p>You may be wondering who Cameron is. Well, I'm a senior computer science student at Southern Illinois University Edwardsville, a quant university with a blooming CS program. I also work as a freelance web developer, doing mostly full stack development. I also enjoy doing a little bit of design focusing on the psychological side of interaction with the UI. Oh, I forgot to mention, I'm also pursuing a psychology degree for use in computer science.</p>
                    </div> */}
                    <div className="aboutMeContent">
                    <p>I am a computer science student and freelance web developer bent on conquering the world... if I were a supervillain. But the reality is I prefer a philosophy that goes for the opposite. My philosohy to developing applications can be summed up in three parts:</p>
                    <div className="aboutMeContent3">
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
                </div>
                </div>
                <div className="aboutMeSection">
                    <div className="aboutMeContent">
                        {/* <h1 className="titles">How I got here</h1> */}
                        {/* <p>I didn't always want to be in tech but after an oppurtunity to take part in a school event, I found a passion for computer science. Cultivated through many years of work I developed computer science skills. Through the early years in university, I developed a love for helping others and a passion to improve mental health services. With this in my mind I began pursuing psychology in hopes that I pursue clinical psychology and combine it with computer science to produce software meant to help persons with psychological disorders live a better life.</p> */}
                        {/* <p>When I was younger I always had a fascination with video games and how they worked, often "making" my own games and designing the game. As I grew older I drifted away but after participating in a high school competition where I had to create a game of my own and placing in it, I found a passion for computer science. Once I started college I also fell in love with design and helping others. Over the past year or so I've worked hard to improve my web design skills to go into web development, while utilizing psychological ideas to improve user experience. And you may wonder how did I start freelance web development. Well, after being turned down for internships by several companies and finding others who needed websites but didn't want to pay for a whole team, with my MacBook in hand, I went freelance to show off my skills while getting to hone my skills. Which leads us to here. Neat origin story, right?</p> */}
                    </div>
                    <div className="aboutMeContent interests">
                        {/* <h1 className="titles">Interests</h1>
                        <p>I'm interested in the intersection of psychology and the technology, specifically the effects that technology has had on the human and ways to battle addiction. Additionally, I find design interesting fun though I am still learning about how to make effective designs! </p> */}
                    </div>
                </div>
                <div className="contactForm">
                    <h1 className="titles">Contact Me!</h1>
                    <form action="http://formspree.io/hanolbuddy1@gmail.com" className="contactForm" method="POST">
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
            </div>                                                                                             
        </StandardPage>
    );
};