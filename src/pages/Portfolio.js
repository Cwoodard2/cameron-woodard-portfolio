import React from "react";
import Navigation from '../components/navigation';
import StandardPage from "../components/DefaultPage";
import './Portfolio.css';


export default function Portfolio() {

    function transitionElement() {
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
    }

    return (
        <StandardPage>
            <Navigation />
            <h1>Ahh the projects page, where it all begins</h1>
            <div className="testingDiv">
            <div className="projectMoreInfo">
                This is some info for a project that I am doing. We are doing some great things here.
            </div>
            </div>
            <div className="">
            <div className="portfolioMain">
                <div className="projectDiv">
                    <div className="persepctiveItem">
                        <div>
                        <h3>We have the URCA Project</h3>
                        <div className="additionalInfo">
                                <h3 className="textTestDiv">URCA</h3>
                                <div className="infoText">
                                <hr></hr>
                                <p className="textTestDiv">This project was built by three students, including me. It was constructed to provide a way to collect data regarding ethnic and racial microaggressions. It utilizes React to build the website and provide functionality. Most design was done by me.</p>
                                </div>
                            </div>
                            </div>
                        <img src="https://th.bing.com/th/id/R.92a596eab06d400686cd541e68145b3b?rik=k%2fT4IkWsia2ALA&riu=http%3a%2f%2fwww.usnews.com%2fcmsmedia%2f46%2f19%2f5c6c54fb4c6f812dc85c20fc656a%2f141106-portfolio-stock.jpg&ehk=pEOp6RPzMxLzFRliU7hWCEGZlsbFJ%2fkgrdh%2fpBH6Du4%3d&risl=&pid=ImgRaw&r=0"/>
                    </div>
                </div>
                <div className="projectDiv">
                <div className="perspectiveDiv">
                    <div className="persepctiveItem">
                        <p>Div Item</p>
                        <img src="https://th.bing.com/th/id/R.92a596eab06d400686cd541e68145b3b?rik=k%2fT4IkWsia2ALA&riu=http%3a%2f%2fwww.usnews.com%2fcmsmedia%2f46%2f19%2f5c6c54fb4c6f812dc85c20fc656a%2f141106-portfolio-stock.jpg&ehk=pEOp6RPzMxLzFRliU7hWCEGZlsbFJ%2fkgrdh%2fpBH6Du4%3d&risl=&pid=ImgRaw&r=0"/>
                            <div className="additionalInfo">
                                <p className="projectDescription">This is my portfolio of course! This will link to my source code so that you can take a look and see if you feel I write clean code!</p>
                            </div>
                        <button className="projectButton">Press this button</button>
                    </div>
                </div>
                <h3 className="projectTitle">We have CS321 Project</h3>
                </div>
                <div className="projectDiv">
                    <div className="persepctiveItem">
                        <p>Div Item</p>
                        <img src="https://th.bing.com/th/id/R.92a596eab06d400686cd541e68145b3b?rik=k%2fT4IkWsia2ALA&riu=http%3a%2f%2fwww.usnews.com%2fcmsmedia%2f46%2f19%2f5c6c54fb4c6f812dc85c20fc656a%2f141106-portfolio-stock.jpg&ehk=pEOp6RPzMxLzFRliU7hWCEGZlsbFJ%2fkgrdh%2fpBH6Du4%3d&risl=&pid=ImgRaw&r=0"/>
                            <div className="additionalInfo">
                                <p>This is my portfolio of course! This will link to my source code so that you can take a look and see if you feel I write clean code!</p>
                            </div>
                        <button className="projectButton">Press this button</button>
                    </div>
                    <h1>We have This portfolio</h1>
                </div>
                <div className="projectDiv">
                    <div className="perspectiveDiv">
                        <div className="persepctiveItem">
                            <p>Div Item</p>
                            <img src="https://th.bing.com/th/id/R.92a596eab06d400686cd541e68145b3b?rik=k%2fT4IkWsia2ALA&riu=http%3a%2f%2fwww.usnews.com%2fcmsmedia%2f46%2f19%2f5c6c54fb4c6f812dc85c20fc656a%2f141106-portfolio-stock.jpg&ehk=pEOp6RPzMxLzFRliU7hWCEGZlsbFJ%2fkgrdh%2fpBH6Du4%3d&risl=&pid=ImgRaw&r=0"/>
                            <div className="additionalInfo">
                                <p>This is my portfolio of course! This will link to my source code so that you can take a look and see if you feel I write clean code!</p>
                            </div>
                        <button className="projectButton">Press this button</button>
                        </div>
                        <h1>We have 234 website</h1>
                    </div>
                </div>
            </div>
            </div>
        </StandardPage>
    );
};