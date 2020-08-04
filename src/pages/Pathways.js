import React from "react"
import "../css/index.css"

import Layout from "../components/layout"
import Section from "../components/section"
import Video from "../components/video"
import PrereqDeck from "../components/PrereqDeck"
import PathwaysTable from "../tables/PathwaysTable"

import venn from "../img/venn.png"
import comparison from "../img/comparison.jpg"
import difficulty from "../img/difficulty.png"
import pathways from "../img/pathways.png"
import starter from "../img/starter.png"

function Pathways(props) {
  return (
    <div>
      <Layout>
        <Section title="Which Comp Sci Course to Take?">
          <p>
            Students are sometimes confused about which Computer Science course
            to take at Westhill. This page describes the differences between the
            courses offered and provides various roadmaps for computer science
            course sequences <b>(Pathways)</b>. Here is a diagram that shows the
            computer science courses currently offered at Westhill High School.
          </p>
          <div className="image_container">
            <img src={pathways} alt="pathways" width="600" />
          </div>
          <p>
            A pathway consists of a sequence of courses designed to allow a
            student to build a certain set of skills. The Computer Science
            Academy at Westhill (CSAW) offers students an opportunity to get
            recognition on their high school transcripts if they complete their
            Computer Science Pathway. The image, above, shows some possible
            combination of courses students may take to achieve these
            requirements. Although the above diagram implies a large number of
            Pathway possibilities, most students typically follow one of several
            set paths such as those shown on the diagram below:
          </p>
        </Section>
        <Section title="Some Possible Computer Science Pathways">
          <PathwaysTable />
        </Section>
        <Section title="Requirements for CS Pathway at CSAW">
          <p>
            Students who complete 3.5 computer science credits with a B- average
            or better during their 4 years at Westhill will have completed
            CSAW's <b>Computer Science Pathway</b>. This completion shall result
            in a <i>Concentration in Computer Science</i> being acknowledged on
            the student's high school transcript. If three or more courses are
            honors or AP-level courses (and a student maintains a B- average or
            better on the computer science courses taken), the acknowledgement
            shall be upgraded to Concentration in Computer Science with Honors.
            More information about the requirements for transcript recognition
            in computer science may be found in the Stamford Public School's{" "}
            <a href="https://www.stamfordpublicschools.org/district/curriculum-instruction/pages/high-school-program-studies">
              Course of Studies
            </a>{" "}
            catalog.
          </p>
        </Section>
        <Section title="Which Starter Course to Take">
          <p>
            All Honors-level students should start with AP CSP as their first
            computer science class (including Freshman). For all other students,
            the choice will be between Python A and Intro to CS. The Intro to CS
            course is based on block programming and, as such, provides a
            gentler introduction to programming.
          </p>
          <div className="image_container">
            <img src={starter} alt="starter" width="600" />
          </div>
        </Section>

        <Section title="Prerequisites for CSAW Courses">
          <p>
            The boxes below show all the courses in CSAW and what prerequisites
            are required. A chart comparing all the courses to each other can be
            found <a href="./CoursePages">here</a>.
          </p>
          <PrereqDeck />
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
        <Section title="Which AP Course to Take">
          <p>
            If you are thinking about taking an AP Computer Science class at
            Westhill, this section will help you decide between AP Computer
            Science Principles and AP Computer Science A.
          </p>
          <div className="flex_container">
            <div className="image_container">
              <img src={venn} alt="award" width="600" />
              <h4>AP CSP vs. AP CSA</h4>
            </div>
            <div className="video_container">
              <Video
                src="C8e19APClpc"
                width="450"
                caption="Choosing Between AP CSP and AP CSA"
              ></Video>
            </div>
            <div className="image_container">
              <img src={comparison} alt="award" width="600" />
              <h4>Comparing AP CSP with AP CSA</h4>
            </div>
          </div>
        </Section>
        <Section title="How Hard are AP Computer Science Exams">
          <p>
            By their nature, all AP exams are difficult. Students may be
            wondering about the relative difficulty levels between the AP
            Computer Science A exam and the AP Computer Science Principles exam.
            In previous studies, students have consistently voted AP Physics C
            to be the most difficult of all AP exams. AP Computer Science A has
            historically placed second in the difficulty ratings in this poll.
          </p>
          <p>
            Based on feedback from students who took the AP CSP exam in May of
            2017, the multiple choice portion of AP CSP exam is significantly
            less challenging than most other AP exams. Here is Mr. Sarkar's
            opinion on the relative overall difficulty of the various CS courses
            offered at Westhill.
          </p>
          <div className="image_container">
            <img src={difficulty} alt="difficulty" width="700" />
          </div>
        </Section>

        <Section title="Optional Placement Exam">
          <p>
            Still not sure which course to take first at CSAW? Consider taking
            the optional <a href="./Exam">Placement Exam</a> in the fall. The
            results of this exam can help you make a decision about which course
            to take first.
          </p>
        </Section>
      </Layout>
    </div>
  )
}

export default Pathways
