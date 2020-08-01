import React from "react"
import { Link } from "gatsby"
import "../css/header.css"
import logo from "../logo/CSAWlogo2.png"

function Header(props) {
  return (
    <header>
      <div className="header_container">
        <button onClick={props.click} className="hamburger">
          <div className="line" />
          <div className="line" />
          <div className="line" />
        </button>
        <div className="spacer" />
        <Link to="/">
          <img
            className="logo"
            src={logo}
            alt="logo"
            width="100"
            height="100"
          ></img>
        </Link>
        <h1 className="title">The Computer Science Academy of Westhill</h1>
      </div>
    </header>
  )
}

export default Header
