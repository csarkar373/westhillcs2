import React from "react"
import "../css/global.css"
import Layout from "../components/layout"
import Section from "../components/section"
import Card from "../components/Card"
import Video from "../components/video"

import game from "../logo/gameLogo.png"

function Internships(props) {
  return (
    <div>
      <Layout>
        <Section title="Senior Internshps">
          Due to the on-going threat from the coronavirus, the placement of
          Seniors in Summer Internships has been temporarily suspended. More
          details to follow ...
        </Section>
      </Layout>
    </div>
  )
}

export default Internships
