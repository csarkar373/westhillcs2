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
        <Section title="Senior Internships">
          Due to the on-going threat from the coronavirus, CSAW's placement of
          Seniors into Summer Internships has been temporarily suspended. More
          details to follow ...
        </Section>
      </Layout>
    </div>
  )
}

export default Internships
