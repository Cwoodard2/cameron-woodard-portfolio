import React from "react";
import { HashRouter, Routes, Route, Link } from "react-router-dom";
import Navigation from '../components/navigation';
import StandardPage from "../components/DefaultPage";
import '../components/navigation.css';

export default function Homepage() {

    return (
        <StandardPage>
            <Navigation />
            <div className="homeMain">
                <div className="homepageNav">
                    <h3>Greetings, <br></br>if you got here I guess you're looking at my portfolio!<br></br>This portfolio is meant to showcase my projects, <br></br>a little about me, and increase my aptitude in design and web development</h3>
                    <Link to="/Resume">
                        <button className="navButtonHome">Resume</button>
                    </Link>
                </div>
            </div>
        </StandardPage>
    );
};