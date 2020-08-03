import React from "react"
import "../css/global.css"
import Layout from "../components/layout"
import Section from "../components/section"
import Card from "../components/Card"
import Video from "../components/video"
import add from "../util/add"

import web from "../logo/web.png"

function Web(props) {
  return (
    <div>
      <Layout>
        <h1>Course Description: Web Design</h1>
        <Section title="Web Design">
          <div className="image_box">
            <Card
              pic={web}
              link="#"
              title="Web Design"
              freeflow={add("-", "Javascript")}
            />
          </div>
        </Section>

        <Section title="Course Description">
          <p>
            This course will help the student plan and develop well-designed web
            sites that combine effective use of graphics and color. The student
            will learn techniques that let users easily and quickly access
            information. Web sites will be built from scratch and redesigned
            using methods that will make using HTML and Dreamweaver web content
            more interesting, accessible, and visually attractive.
          </p>
        </Section>
        <Section title="Importance of Web Design">
          <Video src="FXqTHsPaY0A" />
        </Section>
        <Section title="TextBooks">
          <bl>
            <li>HTML Comprehensive Concepts and Techniques</li>
            <li>Adobe Dreamweaver</li>
            <li>Adobe Flash</li>
            <li>Adobe Photoshop</li>
            <li>Web Page Design</li>
          </bl>
        </Section>
        <Section title="Evaluation">
          <bl>
            <li>Daily Assignments</li>
            <li>Tests and Quizzes</li>
            <li>Mid-Term Exam</li>
            <li>Final Exam</li>
          </bl>
        </Section>
        <Section title="Content of Course">
          <bl>
            <li>HTML</li>
            <ol>
              <li>Introduction to HTML</li>
              <li>Creating and editing a web page</li>
              <li>Creating web pages with links, images, and formatted text</li>
              <li>Creating tables in a web site</li>
              <li>Creating an image map</li>
            </ol>
            <li>Adobe Photoshop</li>
            <ol>
              <li>Editing a Photoshop image</li>
              <li>Using selection tools</li>
              <li>Using layers</li>
              <li>Drawing and painting with color</li>
              <li>Enhancing and repairing photos</li>
            </ol>
            <li>Adobe Dreamweaver 8</li>
            <br />
            <p>
              Introduction to web development and Dreamweaver Creating a
              Dreamweaver web page and local site Adding web pages, links, and
              images Tables and page layout Page layout and frames
            </p>
            <br />
            <li>Adobe Flash</li>
            <ol>
              <li>Introduction to Flash</li>
              <li>The Flash environment</li>
              <li>Drawing tools</li>
              <li>Animation</li>
              <li>Layers</li>
            </ol>
            <li>Web Page Design</li>
            <ol>
              <li>Getting started and planning your web design</li>
              <li>Creating web pages</li>
              <li>Working with graphics</li>
              <li>Adding hyperlinks, tables, and multimedia</li>
              <li>Using color</li>
              <li>Getting your web site on the internet</li>
            </ol>
          </bl>
        </Section>
        <Section title="Class Logistics">
          <bl>
            <li>Grading Procedure</li>
            <ol>
              <li>Daily assignments</li>
              <li>Tests and quizzes</li>
              <li>Participation</li>
            </ol>
            <li>Behavior</li>
            <ol>
              <li>
                Demonstrate respect for fellow students, teachers, and staff
              </li>
              <li>Use appropriate language at all times</li>
              <li>Speak at appropriate times on relevant topics</li>
              <li>Display responsible and businesslike behavior</li>
              <li>No food, drinks, or gum allowed in computer room</li>
              <li>Keep workstation organized and clean</li>
              <li>Do not tamper with settings on computer</li>
            </ol>
            <li>Participation</li>
            <ol>
              <li>Arrive in classroom on time</li>
              <li>Begin assigned work promptly</li>
              <li>
                Bring a note from parents when absent from school or class
              </li>
              <li>Use time wisely</li>
            </ol>
          </bl>
        </Section>
      </Layout>
    </div>
  )
}

export default Web
