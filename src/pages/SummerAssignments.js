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
                    <li>2D-Array Pattern Generation Lab </li>
                    <li>Recursion Practice (Coding Bat)</li>
                    <li>Polymorphism: Complex Numbers</li>
                    <li>Constructors: Vehicle Lab </li>
                    <li>ArrayList: Playing Card Lab</li>
                    <li>Static: Louie's Lemons</li>
                  </ol>
                  <li>
                    You must download and setup JetBrain's IntelliJ IDEA on your
                    home computer and become familiar with this fantastic IDE.
                    After installing this package, write a simple hello world
                    program to verify that everything installed properly.
                  </li>
                  <li>
                    Take the two-and-a-half hour IntelliJ course on youtube.
                    Please follow along as you watch. Try not to watch for more
                    than 30 minutes at a time. It is much better to break it
                    into small chunks.
                  </li>
                </bl>
              </div>
              <div className="summer_item">
                <input type="checkbox" id="ds" />
                <img src={arrow} className="arrow" alt="arrow" />
                <label for="ds">AP Computer Science A</label>
                <p>
                  Your summer assignment can be found by registering for Mr.
                  Sarkar's AP Computer Science A class on the Internet. Here are
                  your instructions for doing this:
                </p>
                <p>
                  You must first log into your school Google account, the one
                  that begins with your Westhill ID and ends with
                  stamfordpublicschools.org. (If you do not have access to your
                  school Google account, you may use your personal account.
                  However, at the beginning of the school year, you may have to
                  transfer your work to your school account.) Next, go to
                  Westhill's AP CSA on-line course. Register for this course by
                  pressing the REGISTRATION button. Enter your name where
                  indicated.{" "}
                </p>
                <p>
                  Once registered, you should have access to the on-line
                  materials. Your summer assignments consist of you completing
                  Units 1,2, 3 and 4 of this on-line course. The approximate
                  completion time for Unit 1 is 1 hour, for Unit 2 is 2 hours
                  and for Unit 3 is 10-15 hours. For Unit 4 it is 1 hour.
                </p>
                <p>
                  Unit 1 will show you how to install Java and BlueJ on your
                  home PC as well as how to sign up for some free on-line tools
                  we will be using throughout the course.
                </p>
                <p>
                  Unit 2 will give you some lessons on how to convert between
                  decimal, binary and hexadecimal numbers. Everyone must
                  complete Unit 1. If you have taken AP CSP previously, you have
                  already completed Unit 2. Unit 3 will introduce you to
                  computer programming using simple blocks. This Unit requires
                  you to create a login on code.org and complete the
                  "Accelerated Course" on their website. Please use your
                  personal gmail address when creating your login on code.org.
                </p>

                <p>
                  Unit 4 will teach you a little bit about computer hardware.
                  After school begins, we will have an exam on the material
                  presented in Unit 2, to verify that you have completed your
                  summer assignment on binary and hexadecimal number systems.
                  Thus, there is nothing for you to submit from the summer work.
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
