import React from "react";
import FlipCard from "./flipCard";
import "./ProjectsSection copy.css";
import mindworksHome from "../Images/mindworks_home.png";
import portfolioPic from "../Images/portImage.png";
import ultraLogo from "../Images/ultranotelogo.jpg";
import urcaDash from "../Images/urca.png";

export default function ProjectsCopy(props) {

    var projectToShow = props.project;
    var projectDecription = props.description;
    var projectImage = props.image;
    var projectTime = props.duration;
    var showImage;
    var url;

    switch (props.image) {
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
        <div className="projectDiv">
                <div className="projectScript">
                    <div>
                        {showImage}
                        <h3 className="titleColor">{projectToShow}</h3>
                    </div>
                    <div className="hiddenContent">
                        <h3 className="titleColor2">{projectToShow}</h3>
                        <p className="otherTextColor">{projectTime}<br></br>{projectDecription}</p>
                    </div>
                </div>
        </div>
    );
};