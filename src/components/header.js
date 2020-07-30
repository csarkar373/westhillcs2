import React from "react"
import "../css/header.css"
import logo from "../logo/CSAWlogo2.png"

function Header(props) {
  return (
    <header>
      <nav className="navbar">
        <button onClick={props.click} className="hamburger">
          <div className="line" />
          <div className="line" />
          <div className="line" />
        </button>
        <img
          className="logo"
          src={logo}
          alt="logo"
          width="100"
          height="100"
        ></img>
        <div className="spacer" />
        <h1 className="title">The Computer Science Academy of Westhill</h1>
      </nav>
    </header>
  )
}

export default Header
