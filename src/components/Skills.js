import React from "react";
// import htmlLogo from "../Images/htmlLogo.png";
// import cssLogo from "../Images/cssLogo.png";
// import javascriptLogo from "../Images/javascriptLogo.png";
// import reactLogo from "../Images/reactLogo.png";
// import firebaseLogo from "../Images/firebaseLogo.png";
import "./skillCard.css";

export default function Skills(props) {
  var cardToShow;
  console.log(props.image);

  //   switch (props.skill) {
  //     case "languages":
  //       cardToShow = (
  //         <div className="skill-collage">
  //           <h3>Languages</h3>
  //           <div className="row gap">
  //             <div className="skill-card-column">
  //               <img src={htmlLogo} className="skill-card" />
  //               <p style={{ textAlign: "center" }}>HTML</p>
  //             </div>
  //             <div className="skill-card-column">
  //               <img src={cssLogo} className="skill-card" />
  //               <p style={{ textAlign: "center" }}>CSS</p>
  //             </div>
  //             <div className="skill-card-column">
  //               <img src={javascriptLogo} className="skill-card" />
  //               <p style={{ textAlign: "center" }}>Javascript</p>
  //             </div>
  //           </div>
  //           <p>
  //             I use HTML, CSS/SCSS, and javascript to create attractive and
  //             functional websites and apps.
  //           </p>
  //         </div>
  //       );
  //       break;
  //     case "frameworks":
  //       cardToShow = (
  //         <div className="skill-collage">
  //           <h3>Frameworks</h3>
  //           <div className="skill-card-column">
  //             <img src={reactLogo} className="skill-card react-img" />
  //             <p style={{ textAlign: "center" }}>React</p>
  //           </div>
  //           <p>
  //             I use frameworks to speed up development of projects and increase
  //             the amount of clean code produced.
  //           </p>
  //         </div>
  //       );
  //       break;
  //     case "database":
  //       cardToShow = (
  //         <div className="skill-collage">
  //           <h3>Backend</h3>
  //           <div className="skill-card-column">
  //             <img src={firebaseLogo} className="skill-card" />
  //             <p style={{ textAlign: "center" }}>Firebase</p>
  //           </div>
  //           <p>
  //             My use of databases provide simple and clean database setup and easy
  //             interfacing. While focused on front-end, I am flexible and able to
  //             provide backend services as needed.
  //           </p>
  //         </div>
  //       );
  //       break;
  //     default:
  //       break;
  //   }

  return (
    <div className="skill-card-column">
      <img src={props.image} className="skill-card" />
      <p style={{ textAlign: "center" }}>{props.skill}</p>
    </div>
  );
}
