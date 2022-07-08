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
    var descriptionArray = [<p>This project was built by three students, including me. It was constructed to provide a way to collect data regarding ethnic and racial microaggressions. It utilizes React to build the website and provide functionality.</p>, <p>As an aspect of a Human Computer Interaction class, 3 classmates and I were tasked with creating a product we felt the product was missing. Our idea was Ultra Note, a notetaking app meant to simplfy note taking. In this project we learned about design research, prototyping, and testing in order to produce a design that enables our vison for Ultra Note</p>, <p>As part of web development, students were tasked with creating a database driven website. The database used was mySQL in combination with PHP. Front-end development was done with HTML, JQuery, and CSS. While not the most visually or programmaticly impressive website, it represents the humble beginnings for me in web design. Unfortunately, due to it not being hosted I am only able to provide screenshots.</p>, <p>This is meta isn't it. You can find the source code to my protfolio here!</p>, <p>For this project I was tasked with creating a simple website for a local therapy provider. This website was built using Squarespace as the client had already begun work with it. As a result I had to learn Squarespace to quickly develop the website. Unique to the therapy world, it uses a rustic theme with a darker color palette meant to provide calming sensations as you move throughout the site.</p>, <p>This item is here for a potential project that will be revealed at a later date.</p>];

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
                            <h2 id="welcome" className="title">Hello there, I'm Cameron!<br></br></h2>
                            {/* <p className="subtitle">Thanks for vising my portfolio. I'm a computer science major at Southern Illinois University Edwardsville. I also plan to obtain a degree in psychology and become a web developer. Take a look around, I hope you enjoy!</p> */}
                            <p className="subtitle">I am a computer science student at SIUE and a freelance web developer. I have an interest in simple but effective UI/UX design. I believe every website should a tell story.</p>
                            {/* <p className="subtitle">Let me tell you a story.</p> */}
                            <div className="row gap">
                                <NavButton page="skills" thisPage="About Me" thisStyle="navButtonLearnMore" />
                                <NavButton page="adventures" thisPage="Portfolio" thisStyle="navButtonLearnMore" />
                                {/* <NavButton page="/Playground" thisPage="Playground" thisStyle="navButtonLearnMore" /> */}
                            </div>
                        </div>
                        {/* <h2 className="title">Hello there, I'm Cameron! <br></br><p>Thanks for vising my portfolio. I'm a computer science major at Southern Illinois University Edwardsville. I also plan to obtain a degree in psychology and become a web developer. Take a look around, I hope you enjoy!</p></h2> */}
                        <img src={logo} className="logo"/>
                        {/* <div className="navText">
                            <h2 className="otherTitle">I'm Cameron</h2>
                        </div> */}
                        
                    </div>
                    <h1 id="adventures" className="title">Adventures</h1>
                    <p className="subtitle">Each hero goes through many adventures, here are some of mine.</p>
                </div>
                <div className="row2">
                    <Projects project = "MindWorks Mental Health" description = {descriptionArray[4]} image="5" duration="May 2022 - July 2022, Providing updates as needed"/>
                    <Projects project = "Portfolio" description = {descriptionArray[3]} image="4" duration="May 2022 - Current"/>
                    <Projects project = "URCA" description = {descriptionArray[0]} image="1" duration="January 2022 - May 2022"/>
                    <Projects project = "HCI" description = {descriptionArray[1]} image="2" duration="January 2022 - May 2022"/>
                    {/* <ProjectsCopy project = "Portfolio" description = {descriptionArray[3]} image="4" duration="May 2022 - Current"/>
                    <ProjectsCopy project = "MindWorks Mental Health" description = {descriptionArray[4]} image="5" duration="May 2022 - July 2022, Providing updates as needed"/>
                    <ProjectsCopy project = "URCA" description = {descriptionArray[0]} image="1" duration="January 2022 - May 2022"/>
                    <ProjectsCopy project = "HCI" description = {descriptionArray[1]} image="2" duration="January 2022 - May 2022"/>
                    <ProjectsCopy project = "234" description = {descriptionArray[2]} image="3" duration="August 2020 - December 2020"/> */}
                </div>
                <div id="skills">
                    <h1>And a hero is not complete without their tools</h1>
                    <p>Here are some of the tools I used in my adventures.</p>
                </div>
                <div className="row allSkillsWrapper">
                    <div className="skillsWrapper">
                        <div className="skillsContent">
                            <h2 className="testNewIdea">Skills</h2>
                            <div className="moreSkillContent">
                                <AddSkillCardCopy experience="6" whichSkill="React" howComfort="40" length="months" projects="2" />
                                <AddSkillCardCopy experience="1" whichSkill="HTML" howComfort="50" length="years" projects="4" />
                                <AddSkillCardCopy experience="6" whichSkill="CSS" howComfort="30" length="months" projects="2" />
                                <AddSkillCardCopy experience="3" whichSkill="Java" howComfort="70" length="years" projects="4" />
                                <AddSkillCardCopy experience="3" whichSkill="Javascript" howComfort="70" length="years" projects="many" />
                            </div>
                        </div>
                    </div>
                    <div className="skillsWrapper">
                        <div className="skillsContent">
                            <h2 className="testNewIdea">Tools</h2>
                            <div className="moreSkillContent">
                                <AddSkillCardCopy experience="1" whichSkill="Firebase" howComfort="30" length="years" projects="2" />
                                <AddSkillCardCopy experience="6" whichSkill="Github Pages" howComfort="30" length="months" projects="1" />
                                <AddSkillCardCopy experience="1" whichSkill="Git" howComfort="60" length="years" projects="3" />
                                <AddSkillCardCopy experience="1" whichSkill="Git" howComfort="60" length="years" projects="3" />
                            </div>
                        </div>
                    </div>
                    </div>
            <div className="aboutMeMain">
            <h1 className="titles">Who is this Cameron guy?</h1>
                <div className="aboutMeSection">
                    <div className="aboutMeContent leftItem">
                        <h1 className="titles">Background</h1>
                        <img src={cameronImage} alt="picture of Cameron Woodard" className="aboutMePicture"/>
                        {/* <p>I am a junior computer science student at SIUE also studying psychology. A core idea in my life is to provide for others. I believe in technology as a medium to enhance others lives, while not being a detriment. A focus on simple to use, appealing, and interesting technology is where I plan to focus my efforts.</p> */
                        <p>You may be wondering who Cameron is. Well, I'm a senior computer science student at Southern Illinois University Edwardsville, a quant university with a blooming CS program. I also work as a freelance web developer, doing mostly full stack development. I also enjoy doing a little bit of design focusing on the psychological side of interaction with the UI. Oh, I forgot to mention, I'm also pursuing a psychology degree for use in computer science.</p>}
                    </div>
                    <div className="aboutMeContent2">
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
                <br></br>
                <br></br>
                <br></br>
                <div className="dividerLine"></div>
                <br></br>
                <br></br>
                <div>

                </div>
                    {/* <div className="aboutMeContent3 rightItem">
                        <h1 className="titles">Skills</h1>
                        <div className="skillCards">
                            <AddSkillCard experience="6" whichSkill="React" howComfort="40" length="months" projects="2" />
                            <AddSkillCard experience="1" whichSkill="HTML" howComfort="50" length="years" projects="4" />
                            <AddSkillCard experience="6" whichSkill="CSS" howComfort="30" length="months" projects="2" />
                            <AddSkillCard experience="1" whichSkill="Firebase" howComfort="30" length="years" projects="2" />
                            <AddSkillCard experience="6" whichSkill="Github Pages" howComfort="30" length="months" projects="1" />
                            <AddSkillCard experience="1" whichSkill="Git" howComfort="60" length="years" projects="3" />
                            <AddSkillCard experience="3" whichSkill="Java" howComfort="70" length="years" projects="4" />
                            <AddSkillCard experience="3" whichSkill="Javascript" howComfort="70" length="years" projects="many" />
                        </div>
                        <a href="./ResumeWoodard3.pdf" target="_tab"><button className="aboutMeButton">View Resume</button></a>
                    </div> */}
                    <h2>Skills and Tools</h2>
                    {/* <div className="row allSkillsWrapper">
                    <div className="skillsWrapper">
                        <div className="skillsContent">
                            <h2 className="testNewIdea">Skills</h2>
                            <div className="moreSkillContent">
                                <AddSkillCardCopy experience="6" whichSkill="React" howComfort="40" length="months" projects="2" />
                                <AddSkillCardCopy experience="1" whichSkill="HTML" howComfort="50" length="years" projects="4" />
                                <AddSkillCardCopy experience="6" whichSkill="CSS" howComfort="30" length="months" projects="2" />
                                <AddSkillCardCopy experience="3" whichSkill="Java" howComfort="70" length="years" projects="4" />
                                <AddSkillCardCopy experience="3" whichSkill="Javascript" howComfort="70" length="years" projects="many" />
                            </div>
                        </div>
                    </div>
                    <div className="skillsWrapper">
                        <div className="skillsContent">
                            <h2 className="testNewIdea">Tools</h2>
                            <div className="moreSkillContent">
                                <AddSkillCardCopy experience="1" whichSkill="Firebase" howComfort="30" length="years" projects="2" />
                                <AddSkillCardCopy experience="6" whichSkill="Github Pages" howComfort="30" length="months" projects="1" />
                                <AddSkillCardCopy experience="1" whichSkill="Git" howComfort="60" length="years" projects="3" />
                                <AddSkillCardCopy experience="1" whichSkill="Git" howComfort="60" length="years" projects="3" />
                            </div>
                        </div>
                    </div>
                    </div> */}
                <br></br>
                <br></br>
                <br></br>
                <div className="dividerLine"></div>
                <br></br>
                <br></br>
                <div className="aboutMeSection">
                    <div className="aboutMeContent">
                        <h1 className="titles">How I got here</h1>
                        {/* <p>I didn't always want to be in tech but after an oppurtunity to take part in a school event, I found a passion for computer science. Cultivated through many years of work I developed computer science skills. Through the early years in university, I developed a love for helping others and a passion to improve mental health services. With this in my mind I began pursuing psychology in hopes that I pursue clinical psychology and combine it with computer science to produce software meant to help persons with psychological disorders live a better life.</p> */}
                        <p>When I was younger I always had a fascination with video games and how they worked, often "making" my own games and designing the game. As I grew older I drifted away but after participating in a high school competition where I had to create a game of my own and placing in it, I found a passion for computer science. Once I started college I also fell in love with design and helping others. Over the past year or so I've worked hard to improve my web design skills to go into web development, while utilizing psychological ideas to improve user experience. And you may wonder how did I start freelance web development. Well, after being turned down for internships by several companies and finding others who needed websites but didn't want to pay for a whole team, with my MacBook in hand, I went freelance to show off my skills while getting to hone my skills. Which leads us to here. Neat origin story, right?</p>
                    </div>
                    <div className="aboutMeContent interests">
                        <h1 className="titles">Interests</h1>
                        <p>I'm interested in the intersection of psychology and the technology, specifically the effects that technology has had on the human and ways to battle addiction. Additionally, I find design interesting fun though I am still learning about how to make effective designs! </p>
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
                <div className="divTest1">
                    Nothing here
                </div>
                <div className="divTest2">
                    
                </div>
            </div>
            </div>                                                                                             
        </StandardPage>
    );
};