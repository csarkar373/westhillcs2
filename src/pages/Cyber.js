import React from "react"
import "../css/global.css"
import Layout from "../components/layout"
import Section from "../components/section"
import Card from "../components/Card"
import Video from "../components/video"

import cyber from "../logo/cyberLogo.png"
import textbookIcon from "../logo/book1.png"

function Cyber(props) {
  return (
    <div>
      <Layout>
        <h1>Course Description: Game Design</h1>
        <Section title="CP and Honors Cyber Security">
          <div className="image_box">
            <Card
              pic={cyber}
              link="./Cyber"
              title="Cyber Security"
              textbook={[
                textbookIcon,
                "https://csab373.appspot.com/cyber/course",
                "Course Textbook",
              ]}
            />
          </div>
        </Section>

        <Section title="Course Description">
          <p>
            This page contains more information about Westhill's Cyber Security
            Courses. To see Westhill's on-line materials for Cyber Security,
            click on the image to the left. In addition to teaching basic Cyber
            Security principles, there is also significant programming content
            using the Python programming language. No prior programming
            experience is assumed or expected.
          </p>
        </Section>
        <Section title="Cyber Security Promotion">
          <Video src="s4Qay5QeEUI" />
        </Section>
        <Section title="Comparing CP and Honors Cyber Security Courses">
          <p>
            The difference in difficulty between the CP and Honors versions of
            the course is considerable. For the CP course, the only prerequisite
            is Algebra 1. For the Honors version, the student must have
            completed Honors Algebra 2 with a grade of B or better.
          </p>
          <p>
            The video, below, talks about Cyber Security careers in today's
            world. Cyber Security represents the fastest growing part of the US
            job market.
          </p>
        </Section>
        <Section title="Cyber Security Careers">
          <Video src="-AkuKKJ8dN0" />
        </Section>
        <Section title="Topics in Cyber Security">
          <p>
            The CP version of the course focuses primarily on teaching students
            the basics of Cyber Security. The Honors version of the course adds
            material related to prime number theory. The main topics are
            discussed below.
          </p>
          <ol>
            <li>Ethics and Society</li>
            <li>Physical Security</li>
            <li>Cybersecurity Principles</li>
            <li>Classic Cryptography</li>
            <li>Cryptography for World War II</li>
            <li>Modulo Arithmetic and One - Way Functions</li>
            <li>Modern Cryptography</li>
            <li>Prime Number Theory</li>
            <li>RSA Algorithm</li>
            <li>Malicious Software</li>
            <li>Web Security</li>
          </ol>
        </Section>
      </Layout>
    </div>
  )
}

export default Cyber
