import React from "react"
import "../css/global.css"
import Layout from "../components/layout"
import Section from "../components/section"
import Card from "../components/Card"
import Video from "../components/video"

import game from "../logo/gameLogo.png"

function Exam(props) {
  return (
    <div>
      <Layout>
        <Section title="Optional Placement Exam">
          <p>
            The Computer Science Academy of Westhill is an open admission
            organization. Thus, all Westhill students are elligible for
            admission. During the first week of school, students have the option
            of taking a placement exam to help determine which computer science
            course to take first. Current Westhill students who choose to take
            AP CSA without previously taking a computer science course at
            Westhill may be asked to take this exam.
          </p>
          <p>
            Westhill also offers approximately 1% of the incoming freshman an
            opportunity to skip AP CSP and be placed directly into AP CSA.
            Incoming freshmen who wish to be placed into AP CSA must also take
            this exam. In a typical year, 4-5 incoming freshman are offered this
            accelerated track. Only students with extensive, prior knowledge of
            computer science should consider this option.
          </p>
          <p>
            This exam requires no previous experience with computer science. No
            previous knowledge of any computer language is assumed or required.
            The exam uses a pseudo-language to assess the ability of the test
            taker. Students are provided a description sheet for this
            pseudo-language prior to the start of the exam. Students can also
            access a copy of the description sheet for this pseudo-language by
            going to the Forms tab located on the left sidebar. The results of
            the test are used for placement purposes only, not as a determinant
            for admission to the academy.
          </p>
        </Section>
      </Layout>
    </div>
  )
}

export default Exam
