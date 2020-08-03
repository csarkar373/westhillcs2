import React from "react"
import "../css/global.css"
import Layout from "../components/layout"
import Section from "../components/section"
import Card from "../components/Card"
import Video from "../components/video"
import IntroTools from "../tables/introtools"

import intro from "../logo/scratchLogo.png"
import textbookIcon from "../logo/book1.png"

function Intro(props) {
  return (
    <div>
      <Layout>
        <h1>Course Description: Introduction to Computer Science</h1>
        <Section title="">
          <div className="image_box">
            <Card
              pic={intro}
              link="./Intro"
              title="Intro CS"
              textbook={[
                textbookIcon,
                "https://csab373.appspot.com/introCS/",
                "Course Textbook",
              ]}
            />
          </div>
        </Section>

        <Section title="Course Description">
          <p>
            This page contains more information about Westhill's Intro to
            Computer Science course. No previous programming experience is
            required to take this course. Students must receive a passing grade
            in Algebra 1 before taking this course. To see Westhill's on-line
            materials for Intro to Computer Science, click on the image to the
            left. The following video describes the programming languages taught
            in this course.
          </p>
        </Section>
        <Section title="Data Structures Overview">
          <Video src="p1NRaichQa8" />
        </Section>
        <Section title="Tools Used in Intro to Computer Science">
          <IntroTools />
        </Section>
      </Layout>
    </div>
  )
}

export default Intro
