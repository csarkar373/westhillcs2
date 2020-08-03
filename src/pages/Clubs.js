import React from "react"
import "../css/global.css"
import Layout from "../components/layout"
import Section from "../components/section"
import Card from "../components/Card"
import Video from "../components/video"

import game from "../logo/gameLogo.png"

function Clubs(props) {
  return (
    <div>
      <Layout>
        <h1>Clubs and Competitions</h1>
        <Section title="Girls Who Code">
          <Video src="tt4JcW16KIE" />
          <p>
            To join the Westhill Girl's Who Code club, please contact Ms.
            Tennent (ktennent@StamfordCT.gov).
          </p>
        </Section>
        <Section title="Competitive Java Club">
          <p>
            In previous year, our Competitive Java Club (which is open to all
            students) met twice a month on Tuesday afternoons after school in
            lab 414. Due to the on-going precautions for coronavirus, the status
            of this club remains in limbo for the 2020-2021 school year.
          </p>
        </Section>

        <Section title="State Competitions">
          <p>
            Westhill has regularly competed at the Lockheed Martin and
            Quinnipeac programming competitions. The status of both of these
            competitions for the 2020-2021 school year remains uncertain.
          </p>
          <br />
          <p>
            Lockheed Martin will attempt to hold its annual competition
            virtually this year, either in late January or early February. More
            details to follow ...
          </p>
          <br />
          <p>
            Practice problems from previous competitions can be found by
            clicking{" "}
            <a href="https://drive.google.com/drive/folders/1EwJBFKUhpRVhtMW2aJ7n8wGcqS5YVF6C">
              here
            </a>
            .
          </p>
        </Section>
      </Layout>
    </div>
  )
}

export default Clubs
