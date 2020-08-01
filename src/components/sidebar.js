import React, { Component } from "react"
import { Link } from "gatsby"
import "../css/sidebar.css"
import closingx from "../img/closingx.png"
import arrow from "../img/arrow.png"
import rajkumar from "../img/rajkumar.jpg"
import tennent from "../img/tennent.jpg"
import kolb from "../img/kolb.jpg"
import temelini from "../img/temelini.jpg"
import sarkar from "../img/sarkar2.jpg"
import sun from "../logo/sun.png"

function sideBar(props) {
  return (
    <nav className="sidebar">
      <div className="sidebar_header">
        <h3 className="sidebar_title">Menu</h3>
        <div className="sidebar_spacer" />
        <button className="closingx" onClick={props.click}>
          <img className="closingx" src={closingx} alt="0"></img>
        </button>
      </div>
      <div className="nav">
        <div className="multi_level">
          <div className="sidebar_tab">Academy Info</div>
          <div className="sidebar_link_container">
            <Link to="/">Home</Link>
          </div>
          <div className="sidebar_link_container">
            <Link to="/Construction">
              Summer Assignments
              <img src={sun} height="25" width="25" alt="sun" />
            </Link>
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
                <Link to="/FAQ">FAQ</Link>
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
      <div className="sidebar_tab">Teachers</div>
      <div className="teacher_box">
        <div>
          <img src={tennent} alt="" className="teacher" />
          <h5>Ms. Tennent</h5>
        </div>
        <div>
          <img src={kolb} alt="" className="teacher" />
          <h5>Mr. Kolb</h5>
        </div>
        <div>
          <img src={temelini} alt="" className="teacher" />
          <h5>Mr. Temelini</h5>
        </div>
        <div>
          <img src={rajkumar} alt="" className="teacher" />
          <h5>Mr. Rajkumar</h5>
        </div>
        <div>
          <img src={sarkar} alt="" className="teacher" />
          <h5>Mr. Sarkar</h5>
        </div>
      </div>
    </nav>
  )
}

export default sideBar
