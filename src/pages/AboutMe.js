import React from "react";
import Navigation from '../components/navigation';
import StandardPage from "../components/DefaultPage";


export default function AboutMe() {

    return (
        <StandardPage>
            <Navigation />
            <h3>Greetings, my name is Cameron! I've created this portfolio to show off the projects I've worked on and highlight skills I possess. If you'd like to learn a little more about me this is the place to start.</h3>
            <h1>Meet the face behind the screen</h1>
            <h1>Background</h1>
            <p>I am a junior computer science student at SIUE also studying psychology. A core idea in my life is to provide for others. I believe in technology as a medium to enhance others lives, while not being a detriment. A focus on simple to use, appealing, and interesting technology is where I plan to focus my efforts. My experince as a leader in athletics and across various other groups (fill this in later) has put me in a positionto lead others in this focus. </p>
            <h1>Career Goals</h1>
            <p>To start out my career I'd like to be a web developer, preferably front end with a focus on design. Eventually, I'd like to start my own business specializing in creating apps that are specialized in providing care to persons with mental disorders in order to hepl them live better lives.</p>
            <h1>Hobbies</h1>
            <p>I enjoy making music, drawing, hanging out with friends, cooking, running</p>
            <h1>Interests</h1>
            <p>I'm interested in the intersection of psychology and the technology, specifically the effects that technology has had on the human and ways to battle addiction. Additionally, I find design interesting fun though I am still learning about how to make effective designs! </p>
        </StandardPage>
    );
};