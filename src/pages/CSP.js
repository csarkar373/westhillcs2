import React from "react"
import { Link } from "gatsby"
import "../css/global.css"
import Layout from "../components/layout"
import Section from "../components/section"
import Card from "../components/Card"
import Video from "../components/video"

import csp from "../logo/mobileCSPoriginal.png"
import girlsCS from "../img/girlsCS.png"
import ai from "../logo/ai-bee-logo.png"
import textbookIcon from "../logo/book1.png"
import brochureEnglish from "../img/CSPEnglish.jpg"
import brochureSpanish from "../img/CSPSpanish.jpg"
import summary from "../img/examsummary.png"

function CSP(props) {
  return (
    <div>
      <Layout>
        <h1>Course Description: AP Computer Science Principles</h1>
        <Section title="AP CSP">
          <div className="image_box">
            <Card
              pic={csp}
              link="./CSP"
              title="AP CSP"
              textbook={[
                textbookIcon,
                "https://course.mobilecsp.org/mobilecsp",
                "Course Textbook",
              ]}
              secondBook={[
                ai,
                "http://ai2.appinventor.mit.edu/",
                "App Inventor",
              ]}
            />
          </div>
        </Section>

        <Section title="Course Description">
          <p>
            The 2017-2018 academic year will mark the third year of Westhill's
            Computer Science Principles course. Unlike other AP courses, AP CSP
            can be taught using a variety of curricula. At our school, we have
            chosen the Mobile CSP (cell-phoned-based) platform for teaching this
            important course which is designed to be a student's first
            introduction to computer science. For more information about the
            curriculum for our Mobile CSP course, click on the image on the left
            to view on-line course materials or click the video below to get an
            overview of this course. Mobile CSP shows students how to build apps
            for Android devices while teaching 7 basic tenets of computer
            science: creativity, abstraction, data, algorithms, programming,
            Internet and impact. AP CSP was developed by a collaboration between
            The National Science Foundation (NSF) and The College Board.
          </p>
        </Section>
        <Section title="Teachers and Students Talk about AP CSP">
          <div className="flex_container">
            <div className="video_container">
              <Video
                src="S1vFrz4NETg"
                width="350"
                height="200"
                caption="Introduction to AP CSP"
              ></Video>
            </div>
            <div className="video_container">
              <Video
                src="RYtPchjqmx8"
                width="350"
                height="200"
                caption="Students Talk CSP"
              ></Video>
            </div>
            <div className="video_container">
              <Video
                src="RalOQz9PctI"
                width="350"
                height="200"
                caption="How We Build Mobile Apps in CSP"
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
        <Section title="Charts and Brochures">
          <div className="image_box">
            <div className="image_container">
              <img src={girlsCS} alt="girlsCS" width="450" />
              <h4>More Girls are Taking Computer Science</h4>
            </div>
            <div className="image_container">
              <img src={brochureEnglish} alt="brochures" width="250" />
              <h4>English Brochure</h4>
            </div>
            <div className="image_container">
              <img src={brochureSpanish} alt="brochures" width="250" />
              <h4>Spanish Brochure</h4>
            </div>
          </div>
        </Section>
        <Section title="How the CSP Advanced Placement (AP) Exam is Unlike Other AP Exams">
          <p>
            There are two main differences between the AP CSP exam and other AP
            exams. Like other APs, There is a written exam taken during the
            first week of May. However, this exam constitutes only 60% of the
            students grade. In addition, students taking the exam must submit a
            brief video and write-up to the College Board demonstrating
            proficiency in programming an application of their choice (24% of
            the exam grade). Third, students must submit a 2-page research paper
            (16% of exam grade). The other major difference is that whereas most
            AP Courses have a fixed curriculum, AP Computer Science Principles
            can be taught using a variety of curricula. At Westhill, we have
            chosen to teach CSP using the Mobile CSP (cell-phone-based) option
            with teaching materials provided by Trinity College, the College of
            St. Scholastica and MIT.
          </p>
          <br />
          <p>
            All AP exams are difficult. However, our students consistently
            report that the AP CSP exam is significantly less challenging than
            the AP Computer Science A exam.
          </p>
        </Section>
        <Section title="AP Exam Summary">
          <p>
            The diagram, below, shows a typical AP CSP exam. However, the
            2019-2020 exam was significantly altered due to the Coronavirus. In
            particular, the Multiple Choice portion of the exam was cancelled.
            It is too early to be certain what changes will take place for the
            AP exam for the 2020-2021 school year.
          </p>
          <div className="image_container">
            <img src={summary} height="600" width="400" alt="csp summary" />
          </div>
        </Section>
        <Section title="Course Details Taken from the College Board Website">
          <p>
            Computer Science Principles introduces you to the essential ideas of
            computer science with a focus on how computing can impact the world.
            Along with the fundamentals of computing, you will learn to analyze
            data, information, or knowledge represented for computational use;
            create technology that has a practical impact; and gain a broader
            understanding of how computer science impacts people and society.
          </p>
        </Section>
      </Layout>
    </div>
  )
}

export default CSP
