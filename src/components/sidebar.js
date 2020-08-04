import React, { Component } from "react"
import { Link } from "gatsby"
import "../css/sidebar.css"
import closingx from "../img/closingx.png"
import arrow from "../img/arrow.png"
import rajkumar from "../img/rajkumar.jpg"
import tennent from "../img/tennent.jpg"
import kolb from "../img/kolb.jpg"
import temelini from "../img/temelini.jpg"
import sarkar from "../img/sarkar3.jpg"
import kurtz from "../img/kurtz.jpg"
import sun from "../logo/sun.png"

function sideBar(props) {
  return (
    <nav className="sidebar">
      <div className="nav">
        <div className="multi_level">
          <div className="sidebar_header">
            <div className="sidebar_tab">Academy Info</div>
            <button className="closingx" onClick={props.click}>
              <img className="closingx" src={closingx} alt="0"></img>
            </button>
          </div>
          <div className="sidebar_link_container">
            <Link to="/">Home</Link>
          </div>
          <div className="sidebar_link_container">
            <Link to="/SummerAssignments">
              Summer Assignments
              <img className="sun" src={sun} height="25" width="25" alt="sun" />
            </Link>
          </div>
          <div className="sidebar_link_container">
            <Link to="/Incoming">For Incoming Students</Link>
          </div>
          <div className="sidebar_link_container">
            <Link to="/ContactUs">Contact Us/Teacher Info</Link>
          </div>
          <div className="sidebar_link_container">
            <a href="https://sites.google.com/view/codinggames/home">Games</a>
          </div>
          <div className="sidebar_item">
            <input type="checkbox" id="about" />
            <img src={arrow} className="arrow" />
            <label htmlFor="about">About CSAW</label>

            <ul>
              <li>
                <a href="/Summary">CSAW Summary</a>
              </li>
              <li>
                <a href="/Exam">Placement Exam</a>
              </li>
              <li>
                <a href="/Internships">Senior Interships</a>
              </li>
              <li>
                <a href="/Forms">Forms</a>
              </li>
              <li>
                <Link to="/FAQ">FAQ</Link>
              </li>
              <li>
                <a href="/ClassPhotos">Class Photos and Videos</a>
              </li>
            </ul>
          </div>

          <div className="sidebar_item">
            <input type="checkbox" id="courses" />
            <img src={arrow} className="arrow" />
            <label htmlFor="courses">Courses</label>
            <ul>
              <li>
                <a href="/Pathways">Pathways: Choosing Courses</a>
              </li>
              <li>
                <a href="/CoursePages">Course Information Pages</a>
              </li>
              <li>
                <a href="/CoursePages">Course Prerequisites</a>
              </li>
              <li>
                <a href="/GradeCalc">Grade Calculation</a>
              </li>
            </ul>
          </div>
          <div className="sidebar_item">
            <input type="checkbox" id="people" />
            <img src={arrow} className="arrow" />
            <label htmlFor="people">People</label>
            <ul>
              <li>
                <a href="/StudentWinners">Students of the Year</a>
              </li>
              <li>
                <a href="/ExamplesOfWork">Examples of Student Work</a>
              </li>
              <li>
                <a href="/Partners">Suppliers and Partners</a>
              </li>
            </ul>
          </div>
          <div className="sidebar_item">
            <input type="checkbox" id="clubs" />
            <img src={arrow} className="arrow" />
            <label htmlFor="clubs">Clubs/Competitions</label>

            <ul>
              <li>
                <Link to="/Clubs">Girls Who Code Club</Link>
              </li>
              <li>
                <Link to="/Clubs">Competitive Java Club</Link>
              </li>
              <li>
                <Link to="/Clubs">State Competitions</Link>
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
          <img src={kurtz} alt="" className="teacher" />
          <h5>Ms. Kurtz</h5>
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
