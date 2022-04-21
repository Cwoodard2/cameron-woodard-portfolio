import React from "react";
import './DefaultPage.css';

export default function StandardPage(props) {

    return (
        <div className="defaultPage">
            {props.children}
        </div>
    );
};