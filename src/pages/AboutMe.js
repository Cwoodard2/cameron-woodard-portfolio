import React from "react";
import Navigation from '../components/navigation';
import StandardPage from "../components/DefaultPage";
import cameronImage from "../Images/cameronwoodard.jpg";
import "./AboutMe.css";


export default function AboutMe() {

    return (
        <StandardPage>
            <Navigation />
            {/* <h3>Greetings, my name is Cameron! I've created this portfolio to show off the projects I've worked on and highlight skills I possess. If you'd like to learn a little more about me this is the place to start.</h3> */}
            <div className="aboutMeContent">
                <div className="topContent">
                    <h1>Meet the face behind the screen</h1>
                    <img src={cameronImage} alt="A picture of cameron woodard"/>
                </div>
            <br></br>
            <div className="aboutMeMain">
                <div className="leftBottomBorder">
                    <div>
                        <h1 className="title">Background</h1>
                        <p>I am a junior computer science student at SIUE also studying psychology. A core idea in my life is to provide for others. I believe in technology as a medium to enhance others lives, while not being a detriment. A focus on simple to use, appealing, and interesting technology is where I plan to focus my efforts. My experince as a leader in athletics and across various other groups (fill this in later) has put me in a position to lead others in this focus. </p>
                    </div>
                </div>
                <div>
                    <img src="https://th.bing.com/th/id/R.92a596eab06d400686cd541e68145b3b?rik=k%2fT4IkWsia2ALA&riu=http%3a%2f%2fwww.usnews.com%2fcmsmedia%2f46%2f19%2f5c6c54fb4c6f812dc85c20fc656a%2f141106-portfolio-stock.jpg&ehk=pEOp6RPzMxLzFRliU7hWCEGZlsbFJ%2fkgrdh%2fpBH6Du4%3d&risl=&pid=ImgRaw&r=0"/>
                </div>
                <div>
                    <img src="https://th.bing.com/th/id/R.92a596eab06d400686cd541e68145b3b?rik=k%2fT4IkWsia2ALA&riu=http%3a%2f%2fwww.usnews.com%2fcmsmedia%2f46%2f19%2f5c6c54fb4c6f812dc85c20fc656a%2f141106-portfolio-stock.jpg&ehk=pEOp6RPzMxLzFRliU7hWCEGZlsbFJ%2fkgrdh%2fpBH6Du4%3d&risl=&pid=ImgRaw&r=0"/>
                </div>
                <div className="bottomRightBorder">
                    <h1 className="title">Career Goals</h1>
                    <p>To start out my career I'd like to be a web developer, preferably front end with a focus on design. Eventually, I'd like to start my own business specializing in creating apps that are specialized in providing care to persons with mental disorders in order to hepl them live better lives.</p>
                </div>
                <div className="leftBottomBorder">
                    <h1 className="title">Hobbies</h1>
                    <p>I enjoy making music, drawing, hanging out with friends, cooking, running</p>
                </div>
                <img src="https://th.bing.com/th/id/R.92a596eab06d400686cd541e68145b3b?rik=k%2fT4IkWsia2ALA&riu=http%3a%2f%2fwww.usnews.com%2fcmsmedia%2f46%2f19%2f5c6c54fb4c6f812dc85c20fc656a%2f141106-portfolio-stock.jpg&ehk=pEOp6RPzMxLzFRliU7hWCEGZlsbFJ%2fkgrdh%2fpBH6Du4%3d&risl=&pid=ImgRaw&r=0"/>
                <img src="https://th.bing.com/th/id/R.92a596eab06d400686cd541e68145b3b?rik=k%2fT4IkWsia2ALA&riu=http%3a%2f%2fwww.usnews.com%2fcmsmedia%2f46%2f19%2f5c6c54fb4c6f812dc85c20fc656a%2f141106-portfolio-stock.jpg&ehk=pEOp6RPzMxLzFRliU7hWCEGZlsbFJ%2fkgrdh%2fpBH6Du4%3d&risl=&pid=ImgRaw&r=0"/>
                <div className="bottomRightBorder">
                    <h1 className="title">Interests</h1>
                    <p>I'm interested in the intersection of psychology and the technology, specifically the effects that technology has had on the human and ways to battle addiction. Additionally, I find design interesting fun though I am still learning about how to make effective designs! </p>
                </div>
            </div>
            </div>
        </StandardPage>
    );
};