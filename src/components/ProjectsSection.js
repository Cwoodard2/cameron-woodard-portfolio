import React from "react";

export default function Projects(props) {

    var projectToShow = props.project;
    var projectDecription;
    var projectImage;

    switch(projectToShow) {
        case "URCA":
            projectDecription  = (
                <p className="textTestDiv">This project was built by three students, including me. It was constructed to provide a way to collect data regarding ethnic and racial microaggressions. It utilizes React to build the website and provide functionality. Most design was done by me.</p>
            );

            projectImage = (
                <img src="https://th.bing.com/th/id/R.92a596eab06d400686cd541e68145b3b?rik=k%2fT4IkWsia2ALA&riu=http%3a%2f%2fwww.usnews.com%2fcmsmedia%2f46%2f19%2f5c6c54fb4c6f812dc85c20fc656a%2f141106-portfolio-stock.jpg&ehk=pEOp6RPzMxLzFRliU7hWCEGZlsbFJ%2fkgrdh%2fpBH6Du4%3d&risl=&pid=ImgRaw&r=0"/>
            );
            break;
        case "HCI":
            projectDecription  = (
                <p className="textTestDiv">This project was built by three students, including me. It was constructed to provide a way to collect data regarding ethnic and racial microaggressions. It utilizes React to build the website and provide functionality. Most design was done by me.</p>
            );

            projectImage = (
                <img src="https://th.bing.com/th/id/R.92a596eab06d400686cd541e68145b3b?rik=k%2fT4IkWsia2ALA&riu=http%3a%2f%2fwww.usnews.com%2fcmsmedia%2f46%2f19%2f5c6c54fb4c6f812dc85c20fc656a%2f141106-portfolio-stock.jpg&ehk=pEOp6RPzMxLzFRliU7hWCEGZlsbFJ%2fkgrdh%2fpBH6Du4%3d&risl=&pid=ImgRaw&r=0"/>
            );
            break;
        case "234":
            projectDecription  = (
                <p className="textTestDiv">This project was built by three students, including me. It was constructed to provide a way to collect data regarding ethnic and racial microaggressions. It utilizes React to build the website and provide functionality. Most design was done by me.</p>
            );

            projectImage = (
                <img src="https://th.bing.com/th/id/R.92a596eab06d400686cd541e68145b3b?rik=k%2fT4IkWsia2ALA&riu=http%3a%2f%2fwww.usnews.com%2fcmsmedia%2f46%2f19%2f5c6c54fb4c6f812dc85c20fc656a%2f141106-portfolio-stock.jpg&ehk=pEOp6RPzMxLzFRliU7hWCEGZlsbFJ%2fkgrdh%2fpBH6Du4%3d&risl=&pid=ImgRaw&r=0"/>
            );
            break;
        case "Portfolio":
            projectDecription  = (
                <p className="textTestDiv">This project was built by three students, including me. It was constructed to provide a way to collect data regarding ethnic and racial microaggressions. It utilizes React to build the website and provide functionality. Most design was done by me.</p>
            );
    
            projectImage = (
                <img src="https://th.bing.com/th/id/R.92a596eab06d400686cd541e68145b3b?rik=k%2fT4IkWsia2ALA&riu=http%3a%2f%2fwww.usnews.com%2fcmsmedia%2f46%2f19%2f5c6c54fb4c6f812dc85c20fc656a%2f141106-portfolio-stock.jpg&ehk=pEOp6RPzMxLzFRliU7hWCEGZlsbFJ%2fkgrdh%2fpBH6Du4%3d&risl=&pid=ImgRaw&r=0"/>
            );
            break;
        default:

            break;
    }
    return (
                <div className="projectDiv">
                    <div className="persepctiveItem">
                        <div>
                            <div className="additionalInfo">
                                <h3 className="textTestDiv">{projectToShow}</h3>
                                <div className="infoText">
                                    <hr></hr>
                                    {projectDecription}
                                </div>
                            </div>
                        </div>
                        {projectImage}
                    </div>
                </div>
    );
};