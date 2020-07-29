import React from "react"
import "../css/index.css"

import Layout from "../components/layout"
import Section from "../components/section"
import Video from "../components/video"
import Content from "../components/content"
import CodingGames from "../tables/codinggames"
import CSPscores from "../tables/cspscores"
import CSAscores from "../tables/csascores"

import crevecoeur from "../img/crevecoeur.jpg"

function Home(props) {
  return (
    <div>
      <Layout>
        <h1>Introducing the Computer Science Academy of Westhill</h1>
        <Video src="xrpJJYB8KSk" />
        <Section title="Click on a Course for More Info">
          <Content>Course info goes here.</Content>
        </Section>
        <Section title="Try a Little Programming">
          <Content>
            <p>
              Not sure if you will like programming? Just click one of the links
              and try it for yourself. If you want to do more, visit
              code.org/learn and try a few more projects.
            </p>
            <CodingGames />
          </Content>
        </Section>
        <Section title="Westhill Girls Go on to Major in Computer Science in College">
          <Content>
            <div className="grid">
              <div>
                <Video width="300" src="vanN1tG49Xg"></Video>
                <h4>Alumni Promote CS</h4>
              </div>
              <div className="img">
                <img src={crevecoeur} alt="award" width="235" />
                <h4>NCWIT Award Winner</h4>
              </div>
            </div>
          </Content>
        </Section>
        <Content>
          <Section title="AP Computer Science Principles Scores (2019-2020)">
            <CSPscores />
          </Section>
          <Section title="2019-2020 AP Computer Science A Scores (2019-2020)">
            <CSAscores />
          </Section>
        </Content>
        <Section title="Look What Our Students are Building">
          <Content>
            <Video src="0VkQ6s1Iuk0"></Video>
          </Content>
        </Section>
      </Layout>
    </div>
  )
}

export default Home
