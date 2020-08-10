import React from "react"
import "../css/global.css"
import Layout from "../components/layout"
import Section from "../components/section"
import Card from "../components/Card"

import robo1 from "../img/robo1.jpeg"
import robo2 from "../img/robo2.jpeg"
import robo3 from "../img/robo3.jpeg"
import robo4 from "../img/robo4.jpeg"
import robo5 from "../img/robo5.jpeg"
import robotics from "../logo/robotics4.png"
import add from "../util/add"

function Robotics(props) {
  return (
    <div>
      <Layout>
        <h1>Course Description: Robotics</h1>
        <Section title="Robotics">
          <div className="image_box">
            <Card
              pic={robotics}
              link="#"
              title="Robotics"
              freeflow={add("-", "Java")}
            />
          </div>
        </Section>
        <Section title="Course Description">
          <p>
            Westhill's robotics class and its associated club further promote
            STEM education at Westhill High School. In this class and club
            students build robots. A robot contains mechanical parts including
            gears, motors, sensors etc. It also has electrical components and a
            computer to control it. Students can program a robot in computer
            languages like Java or C. A robot is capable of performing a variety
            of tasks according to instructions created using a computer
            programming language. In this class/club students actively engage in
            designing, building, programming, and problem solving using higher
            order critical thinking skills.
          </p>
          <p>
            This is a full year course during which students spend lots of time
            brainstorming and developing robots according to First Tech
            Challenge (FTC) specifications. Class and club members then use the
            robots they create to participate in a FTC robotics competition.
            Students use a 3D-printer to print the robot's components. Students
            can use C or OnBot Java to program their robots.
          </p>
          <p>
            Overall, students spend a minimum of 70% of class time conducting
            activities relating to building a robot. Most of these activities
            are inquiry-based, in which students are provided an opne-ended
            question along with a set of materials that can be used to
            investigate and solve a problem. In this way, students participate
            in activities that guide them to acquire higher-level thinking
            skills such as hypothesis development, critical thinking, design
            data analysis error analysis, how to reach and justify conclusions,
            and how to redesign an experiment based on their results.
          </p>
          <p>
            Students are required to record all their observations, data, data
            analysis and conclusions in a journal.
          </p>
        </Section>
        <Section title="2020 FTC Qualifiers">
          <div className="image_box">
            <div className="image_container">
              <img src={robo1} alt="robo1" width="350" />
            </div>
            <div className="image_container rotate90">
              <img src={robo2} alt="robo2" width="300" />
            </div>
            <div className="image_container rotate90">
              <img src={robo3} alt="robo3" width="300" />
            </div>
            <div className="image_container rotate90">
              <img src={robo4} alt="robo4" width="300" />
            </div>
            <div className="image_container rotate90">
              <img src={robo5} alt="robo5" width="300" />
            </div>
          </div>
        </Section>
      </Layout>
    </div>
  )
}

export default Robotics
