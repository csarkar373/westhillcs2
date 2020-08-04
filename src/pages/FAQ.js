import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Section from "../components/section"

function FAQ(props) {
  return (
    <div>
      <Layout>
        <Section title="Frequently Asked Questions">
          <ol>
            <li>
              <b>
                What is the launch date of the Computer Science Academy at
                Westhill (CSAW)?
              </b>
            </li>
            <p>
              January 1, 2020 is the launch date for CSAW. Students may apply
              for admission to CSAW starting on this date.
            </p>
            <li>
              <b>Who can join CSAW?</b>
            </li>
            <p>
              Any currently enrolled Westhill student can apply to join CSAW as
              early as the end of their Freshman year. CSAW does not currently
              offer seats for out-of-district students.
            </p>
            <li>
              <b>What are the criteria for admission to CSAW?</b>
            </li>
            <p>CSAW has open admission.</p>
            <li>
              <b>What are the student benefits of joining CSAW?</b>
            </li>
            <p>
              Students who complete a Computer Science Pathway will be
              recognized as such on their Westhill transcript.
            </p>
            <li>
              <b>What is a Computer Science Pathway?</b>
            </li>
            <p>
              A computer science pathway is a sequence of 4 courses totaling at
              least 3.5 credits. More information on pathways can be found here.
            </p>
            <li>
              <b>Where can I get the forms to register for the Academy?</b>
            </li>
            <p>
              You can find all the forms for CSAW by clicking on the{" "}
              <Link href="/Forms">Forms</Link> tab on the left sidebar, under
              the Academy Info tab.
            </p>
            <li>
              <b>
                Do I need to take a Placement Exam? How do I register for the
                exam?
              </b>
            </li>
            <p>
              The Placement Exam is administerd during the first week of school.
              It is used for placement purposes only. Students unsure of which
              course to take first should consider taking the exam. Students who
              wish to take AP CSA and bypass AP CSP may also be required to take
              this exam. More information about the exam can be found here. To
              register for this test, please send email to CSAW@stamfordct.gov.
            </p>
          </ol>
        </Section>
      </Layout>
    </div>
  )
}

export default FAQ
