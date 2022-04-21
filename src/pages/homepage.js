import React from "react";
import { HashRouter, Routes, Route, Link } from "react-router-dom";
import Navigation from '../components/navigation';
import '../components/navigation.css';

export default function Homepage() {

    return (
        <div className="defaultPage">
            <Navigation />
            <h1>This is the first homepage!</h1>
        </div>
    );
};