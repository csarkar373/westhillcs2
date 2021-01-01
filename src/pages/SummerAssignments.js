import React from "react"
import "../css/SummerAssignments.css"
import Layout from "../components/layout"
import Section from "../components/section"

import arrow from "../img/arrow.png"

function SummerAssignments(props) {
  return (
    <Layout>
      <Section>
        <h1>Summer Assignments</h1>
        <nav className="summer">
          <div className="nav">
            <div className="two_level">
              <div className="summer_tab">Click on a Course</div>
              <div className="summer_link_container">
                <p>
                  Only the CSAW Courses listed below, have summer assignments.
                  Other CSAW courses shown on the home page of this site do not
                  currently have summer work.
                </p>
              </div>
              <div className="summer_item">
                <input type="checkbox" id="csa" />
                <img src={arrow} className="arrow" alt="arrow" />
                <label for="csa">Data Structures</label>
                <p>
                  Your summer assignment for Data Structures consists of the
                  following:
                </p>
                <bl>
                  <li>
                    You should go to your Google Classroom and register for the
                    Data Structures course for 2020. The classcode for doing
                    this is: 44dhes3
                  </li>
                  <li>
                    You should go to this link and register for your{" "}
                    <a href="https://csab373.appspot.com/first/course">
                      on-line textbook{" "}
                    </a>
                    .
                  </li>
                  <li>
                    You have to finish the following labs from the end of the AP
                    CSA course that you did not finish last year. (If you feel
                    that you cannot complete all these labs on time, please
                    email Mr. Sarkar to discuss; please do not simply give up).
                  </li>
                  <ol>
                    <li>
                      2D-Array Pattern Generation Lab. The activity guide is{" "}
                      <a href="https://drive.google.com/drive/folders/1BtB3S5P4gkVGPaw63TumYZtqIH1YKkZF?usp=sharing">
                        here
                      </a>{" "}
                      and the starter files are{" "}
                      <a href=" https://drive.google.com/drive/u/1/folders/1_dOEFnD9j5iLkcgDJZn4Iv6TzFug8TXB">
                        here.
                      </a>
                      <p>
                        You can find the activity guide for the 2D lab{" "}
                        <a href="https://drive.google.com/drive/folders/1BtB3S5P4gkVGPaw63TumYZtqIH1YKkZF?usp=sharing">
                          here
                        </a>{" "}
                        and the starter files{" "}
                        <a href=" https://drive.google.com/drive/u/1/folders/1_dOEFnD9j5iLkcgDJZn4Iv6TzFug8TXB">
                          here).
                        </a>
                      </p>
                    </li>
                    <li>Recursion Practice (Coding Bat)</li>
                    <li>Polymorphism: Complex Numbers</li>
                    <li>Constructors: Vehicle Lab </li>
                    <li>ArrayList: Playing Card Lab</li>
                    <li>Static Variables: Louie's Lemons</li>
                  </ol>

                  <li>
                    You must download and setup JetBrain's IntelliJ IDEA on your
                    home computer and become familiar with this fantastic IDE.
                    After installing this package, write a simple hello world
                    program to verify that everything installed properly.
                  </li>
                  <li>
                    Take the two-and-a-half hour{" "}
                    <a href="https://www.youtube.com/watch?v=yefmcX57Eyg">
                      IntelliJ course
                    </a>{" "}
                    on youtube. Please follow along as you watch. Try not to
                    watch for more than 30 minutes at a time. It is much better
                    to break it into small chunks.
                  </li>
                </bl>
              </div>
              <div className="summer_item">
                <input type="checkbox" id="ds" />
                <img src={arrow} className="arrow" alt="arrow" />
                <label for="ds">AP Computer Science A</label>
                <p>
                  Your summer assignment is to create a free account for
                  yourself on code.org and then to complete at least 85% of the
                  "CS Fundamentals: Express Course" on this site. You can you
                  either your school or your personal gmail account to create
                  your code.org account. The estimated time required to finish
                  this assignment is 20 hours. It is best to do a few hours each
                  week instead of marathon sessions near the end of the summer.
                </p>
                <p>
                  If you get stuck on a problem, simply move on as you are not
                  required to complete every single problem. However, if you
                  want help in deciphering a problem, you can email Mr. Sarkar
                  at csarkar@stamfordCT.gov over the summer at any time.
                </p>
              </div>
            </div>
          </div>
        </nav>
      </Section>
    </Layout>
  )
}

export default SummerAssignments
