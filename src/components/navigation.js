import React from "react";
import { HashRouter, Routes, Route, Link } from "react-router-dom";
import './navigation.css';

export default function Navigation() {
    return (
        <div className="defaultPage">
        <div className="navbar">
            <Link to="/">
                <button className="">Homepage</button>
            </Link>
            <Link to="/Resume">
                <button className="">Resume</button>
            </Link>
        </div>
        </div>
    )
}