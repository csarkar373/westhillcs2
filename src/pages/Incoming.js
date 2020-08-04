import React from "react"
import "../css/index.css"

import Layout from "../components/layout"
import Section from "../components/section"
import CodingGames from "../tables/codinggames"
import choice from "../img/choice.png"
import FirstCourseTable from "../tables/FirstCourseTable"

function Incoming(props) {
  return (
    <div>
      <Layout>
        <h1>Information about CSAW for New Westhill Students</h1>
        <Section title="">
          <p>
            CSAW currently provides open admission to all Westhill students. If
            you are currently districted to go to Westhill and want to know how
            to prepare to join our Computer Science Academy, you have come to
            the right page.
          </p>
        </Section>
        <Section title="Entering Freshmen">
          <p>
            Students who enter Westhill High School as Freshman must wait until
            near the end of their Freshman year to apply for admission to the
            Computer Science Academy of Westhill (CSAW). However, eigth graders
            districted for Westhill who think they may have eventual interest in
            joining CSAW are strongly advised to take a computer science class
            during their Freshman year at the school. The following sections are
            designed to help you decide on which course to take first.
          </p>
        </Section>
        <Section title="Honors-Level Students Entering Westhill">
          <p>
            Almost all honors-level students entering Westhill should start
            their Computer Science Pathway by first taking AP Computer Science
            Principles. Despite the AP moniker, this course is designed for
            students with no previous experience in Computer Science. It
            features no homework and only two large exams, the midterm and
            final. The only honors students who want to take a computer science
            class in their freshman year but should not take AP CSP are those
            who do not want to commit to a full year of computer science during
            their Freshman year may opt to start with Python, which is broken
            into two half-year courses, Python A and Python B.
          </p>
          <p>
            Westhill also offers 1% of the incoming Freshman the opportunity to
            skip AP Computer Science Principles and take AP Computer Science A
            in their first year at Westhill. These students will typically have
            a significant amount of computer science experience either by
            attending summer camps or through independent study. Freshman who
            wish to be considered for this Accelerated Pathway must take a
            placement exam during the first week of school. If you are
            interested, please email the academy at CSAW@stamfordct.gov during
            your final year of middle school.
          </p>
          <div className="image_container">
            <img src={choice} alt="selection" width="700" />
          </div>
        </Section>
        <Section title="Choosing Your First Course">
          <FirstCourseTable />
        </Section>

        <Section title="CP Students Entering Westhill">
          <p>
            CP-level students who wish to take a computer science class during
            their freshman year should opt for either Intro to Computer Science
            or Python A, both of which are half-year courses. Students who opt
            for the Intro course during their first semester can continue by
            taking Python A during their second semester. Students who opt for
            Python A can continue with Python B during their second semester.
            Eigth-graders who are struggling to pass mathematics in middle
            school are encouraged to take Intro to Computer Science as Freshman.
            All other CP-level students are encouraged to take Python A.
            Students unable to decide between the Intro and Python courses are
            encouraged to take the <a href="./Exam">Placement Exam</a> during
            the first week of school. This exam is used for placement only and
            is not used to determine admission into CSAW.
          </p>
        </Section>
        <Section title="Students Transferring to Westhill">
          Students who enter Westhill other than as Freshman can apply to join
          CSAW at any time, once they become enrolled at Westhill. Admission to
          CSAW is open to all Westhill students. To apply for admission, simply
          go to the Forms page and fill out the on-line{" "}
          <a href="./Forms">Application for Admissions Form</a>. These students
          should also consider taking the voluntary{" "}
          <a href="./Exam">Placement Exam</a> during the first week of school to
          help them determine which computer science course to take first.
        </Section>
        <Section title="How Best to Prepare for CSAW">
          <p>
            We encourage you to explore the field of computer science, yourself,
            no matter your age, by trying out some projects at code.org or by
            clicking on one of the projects in the table, below. You can click
            on one of the Hour of Code projects to get a small taste for what
            you will do in our computer science classes. Alternatively, you can
            take a longer course such as code.org's Express Course to help you
            determine if computer science is right for you. (If you do want to
            do one of the longer courses, it is recommended that you establish
            an account at this site using your personal gmail address.) Of
            course, none of these courses are required to join CSAW.
            <CodingGames />
          </p>
        </Section>
      </Layout>
    </div>
  )
}

export default Incoming
