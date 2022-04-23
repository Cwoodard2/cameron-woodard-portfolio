import React from "react";
import Navigation from '../components/navigation';
import StandardPage from "../components/DefaultPage";


export default function Playground() {

    return (
        <StandardPage>
            <Navigation />
            <h1>This is the playground page</h1>
            <h1>I'll just make some fun interactive stuff here for no reason</h1>
            <h1>Actually it would be great for showing off any javascript skills</h1>
        </StandardPage>
    );
};