import React, { Component } from "react"
import { Link } from "gatsby"
import "../css/sidebar.css"

function sideBar(props) {
  return (
    <nav className="sidebar">
      <ul>
        <li>Menu</li>
        <li>
          <Link to="/About">About CSAW</Link>
        </li>
        <li>
          <a href="/">Courses</a>
        </li>
        <li>
          <a href="https://sites.google.com/view/codinggames/home">Games</a>
        </li>
        <li>
          <a href="/">People</a>
        </li>
        <li>
          <a href="/">Competitions/Club</a>
        </li>
        <li>
          <a href="/">Miscellaneous</a>
        </li>
      </ul>
    </nav>
  )
}

export default sideBar
