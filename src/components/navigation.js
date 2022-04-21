import React from "react";
import { HashRouter, Routes, Route, Link } from "react-router-dom";
import './navigation.css';
import '../Images/Logo for website.png';

export default function Navigation() {
    return (
        <div className="navbar">
            <img src="/Users/cameronwoodard/Cwoodard2.github.io/src/Images/Logo for website.png"></img>
            <Link to="/">
                <button className="navButton">Homepage</button>
            </Link>
            <Link to="/Resume">
                <button className="navButton">Resume</button>
            </Link>
        </div>
    )
}