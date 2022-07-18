import React from "react";
import './DefaultPage.css';

export default function StandardPage(props) {

    return (
        <div className="default-page">
            {props.children}
        </div>
    );
};