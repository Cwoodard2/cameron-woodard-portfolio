import React from "react";
import './navigation.css';
import '../Images/Logoforwebsite.png';
import NavButton from "./NavButton";

export default function Navigation() {
    return (
        <div className="navbar">
            {/* <img src="/Users/cameronwoodard/Cwoodard2.github.io/src/Images/Logo for website.png"></img> */}
            <NavButton page="welcome" thisPage="Welcome" thisStyle="navButton" />
            <NavButton page="adventures" thisPage="Adventures" thisStyle="navButton" />
            <NavButton page="skills" thisPage="Skills" thisStyle="navButton" />
            {/* <NavButton page="/Resume" thisPage="Resume" thisStyle="navButton" /> */}
            {/* <NavButton page="/Playground" thisPage="Playground" thisStyle="navButton" /> */}
        </div>
    )
}