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
        <p>
          Prerequisites required to take each course is listed in each box,
          below. Also listed are the langauges taught in the course. Click on
          the link to go to the individual course description page.
        </p>
        <Section title="Click on a Course for More Info">
          <PrereqDeck />
        </Section>
        <Section title="Notes on Prerequisites">
          <p>
            <b>
              <u>Note 1</u>:{" "}
            </b>
            Before taking <b>AP CSA</b>, students must complete at least one
            oter CS course listed here or take a{" "}
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
