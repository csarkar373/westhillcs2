import React, { Component } from "react"
import { Link } from "gatsby"
import "../css/sidebar.css"
import closingx from "../img/closingx.png"
import arrow from "../img/arrow.png"

function sideBar(props) {
  return (
    <nav className="sidebar">
      <div className="sidebar_header">
        <h2>Menu</h2>
        <div className="sidebar_spacer" />
        <button className="closingx" onClick={props.click}>
          <img className="closingx" src={closingx} alt="0"></img>
        </button>
      </div>
      <div className="nav">
        <div className="multi_level">
          <div className="sidebar_link_container">
            <Link to="/">Home</Link>
          </div>
          <div className="sidebar_link_container">
            <Link to="/Summer">Summer Assignments</Link>
          </div>
          <div className="sidebar_link_container">
            <a href="https://sites.google.com/view/codinggames/home">Games</a>
          </div>
          <div className="sidebar_item">
            <input type="checkbox" id="about" />
            <img src={arrow} className="arrow" />
            <label for="about">About CSAW</label>
            <ul>
              <li>
                <a href="#">Pathways: Choosing Courses</a>
              </li>
              <li>
                <a href="#">Placement Exam</a>
              </li>
              <li>
                <a href="#">Middle School/Transfer</a>
              </li>
              <li>
                <a href="#">Senior Interships</a>
              </li>
              <li>
                <a href="#">Forms</a>
              </li>
              <li>
                <a href="#">FAQ</a>
              </li>
            </ul>
          </div>

          <div className="sidebar_item">
            <input type="checkbox" id="courses" />
            <img src={arrow} className="arrow" />
            <label for="courses">Courses</label>
            <ul>
              <li>
                <a href="#">Course Information Pages</a>
              </li>
              <li>
                <a href="#">Grade Calculation</a>
              </li>
            </ul>
          </div>
          <div className="sidebar_item">
            <input type="checkbox" id="people" />
            <img src={arrow} className="arrow" />
            <label for="people">People</label>
            <ul>
              <li>
                <a href="#">Meet Your Teachers</a>
              </li>
              <li>
                <a href="#">Students of the Year</a>
              </li>
              <li>
                <a href="#">Examples of Student Work</a>
              </li>
              <li>
                <a href="#">Suppliers and Partners</a>
              </li>
              <li>
                <a href="#">Class Photos and Videos</a>
              </li>
            </ul>
          </div>
          <div className="sidebar_item">
            <input type="checkbox" id="clubs" />
            <img src={arrow} className="arrow" />
            <label for="clubs">Clubs/Competitions</label>
            <ul>
              <li>
                <a href="#">Girls Who Code Club</a>
              </li>
              <li>
                <a href="#">Competitive Java Club</a>
              </li>
              <li>
                <a href="#">State Competitions</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default sideBar
