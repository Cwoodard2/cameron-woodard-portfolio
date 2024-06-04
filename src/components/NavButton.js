import React from "react";
import { Link } from "react-scroll";
import "./NavButton.css";

export default function NavButton(props) {
  var pagePointer = props.page;
  var toPage = props.thisPage;
  var style = props.thisStyle;

  return (
    <Link to={pagePointer} spy={true} smooth={true}>
      <button className={style}>{toPage}</button>
    </Link>
  );
}
