import React, {useState} from "react";
import Navigation from '../components/navigation';
import StandardPage from "../components/DefaultPage";
import '../components/navigation.css';
import NavButton from "../components/NavButton";
import './homepage.css';
import logo from '../Images/Logoforwebsite.png';
import cameronPic from '../Images/cameronwoodard.jpg';

export default function Homepage() {

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

    return (
        <StandardPage>
            <Navigation />
            <div className="homeMain">
                <div className="column">
                    <div className="homepageNav2">
                        <h2 className="title">Greetings...</h2>
                        <img src={logo} />
                        <div className="navText">
                            <h2>I'm Cameron</h2>
                        </div>
                    </div>
                    <h3>Computer Science // Psychology // Aspiring Web Developer</h3>
                </div>
                <div className="otherPages">
                <div className="homepageNav">
                    <h2 className="cardTitle">Projects</h2>
                    <h3>This is probably the thing you're really looking for. </h3>
                    <img src="https://th.bing.com/th/id/R.92a596eab06d400686cd541e68145b3b?rik=k%2fT4IkWsia2ALA&riu=http%3a%2f%2fwww.usnews.com%2fcmsmedia%2f46%2f19%2f5c6c54fb4c6f812dc85c20fc656a%2f141106-portfolio-stock.jpg&ehk=pEOp6RPzMxLzFRliU7hWCEGZlsbFJ%2fkgrdh%2fpBH6Du4%3d&risl=&pid=ImgRaw&r=0"/>
                    <NavButton page="Portfolio" thisPage="Learn More" thisStyle="navButtonHome" />
                </div>
                <div className="homepageNav">
                    <h2 className="cardTitle">About Me</h2>
                    <h3>Learn a little more about the guy who made this portfolio. Includes my resume, philsophy, and interests</h3>
                    <img src={cameronPic}/>
                    <NavButton page="/AboutMe" thisPage="Learn More" thisStyle="navButtonHome" />
                </div>
                <div className="homepageNav">
                    <h2 className="cardTitle">Playground</h2>
                    <h3>Or maybe you just want  mess around with some random things. Don't worry, The Playground has you covered.</h3>
                    <img src="https://th.bing.com/th/id/R.92a596eab06d400686cd541e68145b3b?rik=k%2fT4IkWsia2ALA&riu=http%3a%2f%2fwww.usnews.com%2fcmsmedia%2f46%2f19%2f5c6c54fb4c6f812dc85c20fc656a%2f141106-portfolio-stock.jpg&ehk=pEOp6RPzMxLzFRliU7hWCEGZlsbFJ%2fkgrdh%2fpBH6Du4%3d&risl=&pid=ImgRaw&r=0"/>
                    <NavButton page="Playground" thisPage="Learn More" thisStyle="navButtonHome" />
                </div>
                </div>
            </div>                                                                                             
        </StandardPage>
    );
};