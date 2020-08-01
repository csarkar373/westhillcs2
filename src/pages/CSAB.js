import React from "react"
import "../css/global.css"
import Layout from "../components/layout"
import Section from "../components/section"
import Card from "../components/Card"
import Video from "../components/video"

import csab from "../logo/tree2.png"
import textbookIcon from "../logo/book1.png"
import CSABtopics from "../tables/csabtopics"

function CSAB(props) {
  return (
    <div>
      <Layout>
        <h1>Course Description: Data Structures (Formerly CS AB)</h1>
        <Section title="Data Structures">
          <div className="image_box">
            <Card
              pic={csab}
              link="./CSAB"
              title="Data Structures"
              textbook={[
                textbookIcon,
                "https://csab373.appspot.com/first/course",
                "Course Textbook",
              ]}
            />
          </div>
        </Section>

        <Section title="Course Description">
          <p>
            This page contains more information about Westhill's Advanced CS AB
            course. A grade of 4 or 5 on the AP CSA exam is required to take
            this course. To see Westhill's on-line materials for Advanced CS AB,
            click on the image to the left. The video, below, talks about AP CSA
            and how it compares to AP CSP. Starting in 2009, there is no longer
            an AP exam associated with this course. Westhill's version of the
            Advanced CS AB course contains some topics (such as regular
            expressions and other miscellaneous topics that were not part of the
            College Board's original curriculum. The following video describes
            the curriculum for this 2nd year college-level course.
          </p>
        </Section>
        <Section title="Data Structures Overview">
          <Video src="OCF95K-zC7I" />
        </Section>
        <Section title="Topics Covered in Data Structures">
          <CSABtopics />
        </Section>
      </Layout>
    </div>
  )
}

export default CSAB
