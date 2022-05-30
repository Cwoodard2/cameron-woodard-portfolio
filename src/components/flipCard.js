import React from "react";
import portfolioPic from "../Images/portImage.png";
import ultraLogo from "../Images/ultranotelogo.jpg";
import urcaDash from "../Images/urca.png";
import mindworksHome from "../Images/mindworks_home.png";
import "./flipCard.css";

export default function FlipCard(props) {
    var whichImage = props.image;
    var showImage;
    var url;
    var skills = [<p className="skillText">JSX<br></br>React<br></br>CSS<br></br>Github Pages<br></br>Git<br></br>Firebase<br></br>Group Collaboration<br></br>Scientific Journal Analysis</p>, 
    <p className="skillText">
        Writing
        <br></br>
        Drawing
        <br></br>
        Data Collection
        <br></br>
        Presentation Skills
        <br></br>
        Group Collaboration
        <br></br>
        Figma
        <br></br>
        Data Analysis
    </p>, <p className="skillText">
        HTML
        <br></br>
        CSS
        <br></br>
        PHP
        <br></br>
        MySql
    </p>, <p className="skillText">JSX
        <br></br>
        React
        <br></br>
        CSS
        <br></br>
        Github Pages
        <br></br>
        Git
    </p>, 
    <p className="skillText">
        Squarespace
        <br></br>
        CSS
        <br></br>
        HTML
        <br></br>
    </p>, 
    <p className="skillText">To come Soon!</p>];

    switch (whichImage) {
        case "1":
            showImage = <img src={urcaDash} className="portfolioPic" />;
            url = "https://mattaurca-s22.github.io/MicrAgg-WebApp/";
            break;
        case "2":
            showImage = <img src={ultraLogo} className="portfolioPic" />;
            url = "https://ultranotes.weebly.com/";
            break;
        case "3":
            showImage = <img src={"https://th.bing.com/th/id/R.92a596eab06d400686cd541e68145b3b?rik=k%2fT4IkWsia2ALA&riu=http%3a%2f%2fwww.usnews.com%2fcmsmedia%2f46%2f19%2f5c6c54fb4c6f812dc85c20fc656a%2f141106-portfolio-stock.jpg&ehk=pEOp6RPzMxLzFRliU7hWCEGZlsbFJ%2fkgrdh%2fpBH6Du4%3d&risl=&pid=ImgRaw&r=0"} className="portfolioPic" />;
            url = "https://github.com/Cwoodard2/Cwoodard2.github.io";
            break;
        case "4":
            showImage = <img src={portfolioPic} className="portfolioPic" />;
            url = "https://github.com/Cwoodard2/Cwoodard2.github.io";
            break;
        case "5":
            showImage = <img src={mindworksHome} className="portfolioPic" />;
            url = "https://www.mindworksmentalhealth.net/";
            break;
        case "6":
            showImage = <img src={portfolioPic} className="portfolioPic" />;
            url = "https://github.com/Cwoodard2/Cwoodard2.github.io";
            break;
        default:
    }

    return (
        <div className="flipCard">
            <div className="flipCardInner">
                <div className="flipCardFront">
                    {showImage}
                </div>
                <div className="flipCardBack">
                    <h3>Relevant Skills</h3>
                    {skills[whichImage-1]}
                    <a href={url}><button className="outsideWebButton">Visit</button></a>
                </div>
            </div>
        </div>
    );
};