import React from "react"
import "../css/global.css"
import Layout from "../components/layout"
import Section from "../components/section"
import Card from "../components/Card"
import Video from "../components/video"

import python from "../logo/pythonLogo.png"
import add from "../util/add"

function Python(props) {
  return (
    <div>
      <Layout>
        <h1>Course Description: Python A/B</h1>
        <Section title="Python">
          <div className="image_box">
            <Card
              pic={python}
              link="#"
              title="Python A/B"
              freeflow={add("-", "Python")}
            />
          </div>
        </Section>

        <Section title="Course Description">
          <p>
            Westhill's Python A and B courses are each one-semester courses that
            come directly to us from Carnegie Mellon's (CMU) CS Academy. CMU has
            generously offered these courses to us as a complete package with
            student materials, and Integrated Development Environment (IDE)
            complete with automatic grading. Students must complete Python A to
            be elligible to take Python B. To get a better idea of what CMU's CS
            Academy is providing to Westhill, please watch the video, below:
          </p>
        </Section>
        <Section title="CMU's CS Academy Comes to Westhill">
          <Video src="e7ls4SmS0Wc" />
        </Section>
        <Section title="More on CMU's Python Course">
          <p>
            To see a demonstration of how CMU's on-line textbook words, please
            see the following video:
          </p>
          <Video src="hztO5vaBTRs" />
        </Section>
      </Layout>
    </div>
  )
}

export default Python
