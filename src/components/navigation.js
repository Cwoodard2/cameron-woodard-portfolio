import React from "react";
import './navigation.css';
import '../Images/Logoforwebsite.png';
import NavButton from "./NavButton";

export default function Navigation() {
    return (
        <div className="navbar">
            {/* <img src="/Users/cameronwoodard/Cwoodard2.github.io/src/Images/Logo for website.png"></img> */}
            <p className="logo">Sample Text</p>
            <NavButton page="/" thisPage="Homepage" thisStyle="navButton" />
            <NavButton page="/AboutMe" thisPage="About Me" thisStyle="navButton" />
            {/* <NavButton page="/Resume" thisPage="Resume" thisStyle="navButton" /> */}
            <NavButton page="/Portfolio" thisPage="Portfolio" thisStyle="navButton" />
            <NavButton page="/Playground" thisPage="Playground" thisStyle="navButton" />
        </div>
    )
}