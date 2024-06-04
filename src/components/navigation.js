import React from "react";
import "./navigation.css";
import logo from "../Images/logoWithColorBrain.png";
import NavButton from "./NavButton";

export default function Navigation() {
  return (
    <div className="navbar">
      <img src={logo} className="nav-logo"></img>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          gap: "2vw",
          marginLeft: "auto",
          paddingRight: "10px",
        }}
      >
        <NavButton page="skills" thisPage="Skills" thisStyle="nav-button" />
        <NavButton
          page="adventures"
          thisPage="Projects"
          thisStyle="nav-button"
        />
      </div>
    </div>
  );
}
