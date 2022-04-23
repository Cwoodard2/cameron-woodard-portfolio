import React from "react";
import Navigation from '../components/navigation';
import StandardPage from "../components/DefaultPage";


export default function AboutMe() {

    return (
        <StandardPage>
            <Navigation />
            <h1>This is the about me page</h1>
            <h1>Background</h1>
            <h1>Career Goals</h1>
            <h1>Hobbies</h1>
            <h1>Interests</h1>
        </StandardPage>
    );
};