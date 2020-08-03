import React from "react"
import { Link } from "gatsby"
import add from "../util/add"
import "../css/global.css"
import Layout from "../components/layout"
import Section from "../components/section"
import CSAdeck from "../components/CSAdeck"
import Video from "../components/video"
import Card from "../components/Card"
import survey from "../img/CSApopularity.png"
import summary from "../img/examsummary.png"
import csa from "../logo/bluejLogo.png"

function CSA(props) {
  return (
    <div>
      <Layout>
        <Section title="Course Description: AP Computer Science A">
          <div className="image_box">
            <Card
              pic={csa}
              link="/CSA"
              title="AP CSA"
              freeflow={add("See Note", "Java")}
            />
          </div>
          <p>
            <b>
              <u>Note</u>:{" "}
            </b>
            Before taking <b>AP CSA</b>, students must complete at least one
            oter CS course listed here or take a{" "}
            <a href="#">
              <i>placement exam</i>
            </a>
            . Sophomores are encouraged to take <b>Cyber Security</b> before{" "}
            <b>AP CSA</b>.
          </p>
        </Section>
        <Section title="Course Description">
          <p>
            This page contains more information about Westhill's AP CSA course.
            No previous programming experience is required to take this course.
            To see Westhill's on-line materials for AP CSA, click on the image
            to the left. The video, below, talks about AP CSA and how it
            compares to AP CSP. More information about the curriculum for this
            course can be found on the{" "}
            <a href="https://apcentral.collegeboard.org/courses/ap-computer-science-a/course">
              College Board Webpage for AP CSA
            </a>
            .
          </p>
        </Section>
        <Section title="AP CSA Course Tools">
          <CSAdeck />
        </Section>

        <Section title="AP CSA Exam Summary">
          <p>
            The diagram, below, shows a typical AP CSA exam. However, the
            2019-2020 exam was significantly altered due to the Coronavirus. In
            particular, the Multiple Choice portion of the exam was cancelled.
            It is too early to be certain what changes will take place for the
            AP exam for the 2020-2021 school year.
          </p>
          <div className="flex_container">
            <div className="image_container">
              <img src={summary} height="600" width="400" alt="csp summary" />
              <h4>CSA Exam Summary</h4>
            </div>
            <div className="video_container">
              <Video
                src="9n3dFQEgbYM"
                width="400"
                height="300"
                caption="CSA Exam Changes Starting in 2020"
              ></Video>
            </div>
          </div>
        </Section>
        <Section title="Past Student Projects">
          <div className="flex_container">
            <div className="video_container">
              <Video
                src="ePRgtcS7m54"
                width="300"
                height="200"
                caption="Simon Says"
              ></Video>
            </div>
            <div className="video_container">
              <Video
                src="0oVo8UUI-mE"
                width="300"
                height="200"
                caption="Worm in Maze"
              ></Video>
            </div>
            <div className="video_container">
              <Video
                src="bSTUvGiA-80"
                width="300"
                height="200"
                caption="Sydney and Tamar Promote CSA"
              ></Video>
            </div>
          </div>
          <p>
            If you would like to see some of the apps made by Westhill students
            taking this course, <Link to="/ExamplesofWork">click here</Link>.
            Not sure if you will like it? Try one or more of{" "}
            <a href="https://code.org/hourofcode/overview">these</a> projects.
          </p>
        </Section>

        <Section title="2016-2017 AP CSA Survey Results">
          <div className="image_box">
            <div className="image_container">
              <img src={survey} alt="survey" width="700" />
              <h4>Student Survey</h4>
            </div>
          </div>
        </Section>
      </Layout>
    </div>
  )
}

export default CSA
