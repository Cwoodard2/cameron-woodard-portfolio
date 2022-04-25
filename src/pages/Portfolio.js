import React from "react";
import Navigation from '../components/navigation';
import StandardPage from "../components/DefaultPage";
import './Portfolio.css';


export default function Portfolio() {

    return (
        <StandardPage>
            <Navigation />
            <h1>This is the portfolio page</h1>
            <h1>We have the URCA Project</h1>
            <h1>We have the website for 234</h1>
            <h1>We have 321 project</h1>
            {/* <div className="projectMoreInfo">
                This is some info for a project that I am doing. We are doing some great things here.
            </div> */}
            <div className="portfolioMain">
                <h1>We have the URCA Project</h1>
                <div className="perspectiveDiv">
                    <div className="persepctiveItem">
                        <p>Div Item</p>
                    </div>
                </div>
                <div className="perspectiveDiv">
                    <div className="persepctiveItem">
                        <p>Div Item</p>
                    </div>
                </div>
            </div>
        </StandardPage>
    );
};