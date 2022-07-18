import React from "react";
import './navigation.css';
import logo from '../Images/logoWithColorBrain.png';
import NavButton from "./NavButton";

export default function Navigation() {
    return (
        <div className="navbar">
                <img src={logo} className="nav-logo"></img>
                <NavButton page="welcome" thisPage="Welcome" thisStyle="nav-button" />
                <NavButton page="adventures" thisPage="Adventures" thisStyle="nav-button" />
                <NavButton page="skills" thisPage="Skills" thisStyle="nav-button" />
        </div>
    )
}