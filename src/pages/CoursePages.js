import React from "react"
import "../css/index.css"

import Layout from "../components/layout"
import Section from "../components/section"
import PrereqDeck from "../components/PrereqDeck"
import ComparisonTable from "../tables/ComparisonTable"

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
        <Section title="A Comparsion of CSAW Courses">
          <ComparisonTable />
        </Section>
        <Section title="A Comparsion of CSAW Courses">
          <h4>Which Courses for Which College Majors?</h4>
          <p>
            Most CSAW courses will benefit all college-bound students,
            irrespective of your future major. However, AP Computer Science A
            and our Cyber Security courses are more tailored to STEM majors. Our
            Data Structures course is the only CSAW course specifically built
            for Computer Science majors (and minors).
          </p>
          <h4>Course Length</h4>
          <p>
            All courses shown are full-year courses with the exception of Intro
            to CS and Game Design, which are half-year (one semester) courses.
            Our Python A/B courses are each one semester long. Taking Python A
            does not commit a student to take Python B.
          </p>
          <h4>Tests and Quizzes</h4>
          <p>
            Only Data Structures and AP CSA have regular exams throughout the
            year. All other courses listed only have two large exams, the
            Midterm and the Final Exam. Most CSAW courses have quizzes. The
            following courses do not have quizzes: Robotics, Game Design, Web
            Design, and CP Cyber Security.
          </p>
          <h4>Freshman Friendly</h4>
          <p>
            All our courses are open to freshman except Data Structures. It is
            rare for freshman to take AP CSA. Honors students entering Westhill
            are strongly encouraged to take AP CSP. This course does not require
            any previous computing experience.
          </p>
        </Section>
      </Layout>
    </div>
  )
}

export default CoursePages
