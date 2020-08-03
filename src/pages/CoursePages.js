import React from "react"
import "../css/index.css"

import Layout from "../components/layout"
import Section from "../components/section"
import CourseDeck from "../components/CourseDeck"

import prerequisites from "../img/prerequisites.png"
import languages from "../img/languages.png"

function CoursePages(props) {
  return (
    <div>
      <Layout>
        <h1>Information About CSAW Courses</h1>
        <Section title="Click on a Course for More Info">
          <CourseDeck />
        </Section>
        <Section title="Prerequisites and Languages">
          <div className="image_container">
            <h4>CSAW Course Prerequisites</h4>
            <img src={prerequisites} alt="award" width="800" />
          </div>

          <div className="image_container">
            <h4>Programming Languages for each Course</h4>
            <img src={languages} alt="award" width="800" />
          </div>
        </Section>
      </Layout>
    </div>
  )
}

export default CoursePages
