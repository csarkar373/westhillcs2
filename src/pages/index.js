import React from "react"
import "../css/index.css"

import Layout from "../components/layout"
import Section from "../components/section"
import Video from "../components/video"
import CardDeck from "../components/CourseDeck"

import CodingGames from "../tables/codinggames"
import CSPscores from "../tables/cspscores"
import CSAscores from "../tables/csascores"

import crevecoeur from "../img/crevecoeur.jpg"
import cyber from "../img/cyber.jpg"

function Home(props) {
  return (
    <div>
      <Layout>
        <h1>Introducing the Computer Science Academy of Westhill</h1>

        <div className="flex_container">
          <div className="video_container">
            <Video
              width="300"
              height="200"
              src="tt4JcW16KIE"
              caption="Girls Who Code Club"
            ></Video>
          </div>
          <div className="video_container">
            <Video
              width="350"
              height="200"
              src="xrpJJYB8KSk"
              caption="CSAW Intro Video"
            ></Video>
          </div>

          <div className="video_container">
            <Video
              width="300"
              height="200"
              src="0VkQ6s1Iuk0"
              caption="Examples of Student Work"
            ></Video>
          </div>
        </div>

        <Section title="Click on a Course for More Info">
          <CardDeck />
        </Section>
        <Section title="Try a Little Programming">
          <p>
            Not sure if you will like programming? Just click one of the links
            and try it for yourself. If you want to do more, visit
            code.org/learn and try a few more projects.
          </p>
          <CodingGames />
        </Section>
        <Section title="Westhill Girls Go on to Major in Computer Science in College">
          <div className="flex_container">
            <div className="video_container">
              <Video
                width="200"
                src="vanN1tG49Xg"
                caption="Alumni Promote CS"
              ></Video>
            </div>
            <div className="img_container">
              <img src={cyber} alt="award" width="350" />
              <h4>Cyber Team (State Bronze Medal)</h4>
            </div>

            <div className="img_container">
              <img src={crevecoeur} alt="award" width="235" />
              <h4>NCWIT Award Winner</h4>
            </div>
          </div>
        </Section>

        <Section title="AP Computer Science Principles Scores (2019-2020)">
          <CSPscores />
        </Section>
        <Section title="2019-2020 AP Computer Science A Scores (2019-2020)">
          <CSAscores />
        </Section>
      </Layout>
    </div>
  )
}

export default Home
