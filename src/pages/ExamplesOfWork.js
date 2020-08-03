import React from "react"
import "../css/index.css"

import Layout from "../components/layout"
import Section from "../components/section"
import Video from "../components/video"

function ExamplesOfWork(props) {
  return (
    <div>
      <Layout>
        <h1>Examples of Student Work</h1>
        <Section title="Click on a Video to See What Our Students are Building">
          <div className="flex_container">
            <div className="video_container">
              <Video
                width="300"
                height="200"
                src="50bkF31UpCo"
                caption="Bill Splitter: Richard Zheng 2016 AP CSP"
              ></Video>
            </div>
            <div className="video_container">
              <Video
                width="300"
                height="200"
                src="0oVo8UUI-mE"
                caption="Worm Maze: Rishabh Jain 2016 AP CSA"
              ></Video>
            </div>
            <div className="video_container">
              <Video
                width="300"
                height="200"
                src="ePRgtcS7m54"
                caption="Simon Says: Ben Chan 2016 AP CSA"
              ></Video>
            </div>
            <div className="video_container">
              <Video
                width="300"
                height="200"
                src="ZS9ny-czKqg"
                caption="Height Calculator: Alan Stellpflug 2017"
              ></Video>
            </div>
            <div className="video_container">
              <Video
                width="350"
                height="200"
                src="l6GgPYNksJE"
                caption="Kidz Aleph Bet: Robin Wilensky 2016"
              ></Video>
            </div>
            <div className="video_container">
              <Video
                width="300"
                height="200"
                src="IIyH2RCstw0"
                caption="Quiz Builder: 2016 Hybrid PD New York City"
              ></Video>
            </div>
          </div>
        </Section>
      </Layout>
    </div>
  )
}

export default ExamplesOfWork
