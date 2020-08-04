import React from "react"
import "../css/index.css"

import Layout from "../components/layout"
import Section from "../components/section"
import PrereqDeck from "../components/PrereqDeck"

import prerequisites from "../img/prerequisites.png"
import languages from "../img/languages.png"

function CoursePages(props) {
  return (
    <div>
      <Layout>
        <h1>Information About CSAW Courses</h1>
        <Section title="Course Notes">
          <bl>
            <li>
              Honors freshmen wanting to take an AP Computer Science course in
              their first year at Westhill are encouraged to take AP CSP before
              taking AP Comp Sci A.
            </li>
            <li>
              Incoming 9th graders with extensive, previous experience with
              programming may, however, take the optional placement exam to be
              placed directly into AP CSA.
            </li>
            <li>
              Seniors are encouraged to take AP CSP or AP Computer Science A in
              place of Intro to Comp Sci.
            </li>
            <li>
              Students must successfully complete AP Computer Science A to be
              eligible to take the Data Structures course.
            </li>
            <li>
              No previous programming experience is necessary for the Intro,
              CSP, and Comp Sci A courses.
            </li>
          </bl>
        </Section>

        <Section title="Click on a Course for More Info">
          <p>
            Prerequisites required to take each course is listed in each box,
            below. Also listed are the langauges taught in the course. Click on
            the link to go to the individual course description page.
          </p>
          <PrereqDeck />
        </Section>

        <Section title="Notes on Prerequisites">
          <p>
            <b>
              <u>Note 1</u>:{" "}
            </b>
            Before taking <b>AP CSA</b>, students must complete at least one
            other CS course listed here or take a{" "}
            <a href="#">
              <i>placement exam</i>
            </a>
            . Sophomores are encouraged to take <b>Cyber Security</b> before{" "}
            <b>AP CSA</b>.
          </p>
          <p>
            <b>
              <u>Note 2</u>:{" "}
            </b>
            There is no prerequisite for <b>CP Cyber Security</b>. Before taking{" "}
            <b>Honors Cyber Security,</b> students must complete either{" "}
            <b>AP CSP</b> or <b>Python A</b> and <b>Python B</b> and have taken
            (or concurrently be taking) Honors Algebra 2
          </p>
        </Section>
      </Layout>
    </div>
  )
}

export default CoursePages
