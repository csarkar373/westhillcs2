import React from "react"
import "../css/global.css"
import "../css/ContactUs.css"
import Layout from "../components/layout"
import Section from "../components/section"
import TeacherDeck from "../components/TeacherDeck"

function ContactUs(props) {
  return (
    <div>
      <Layout>
        <h1>Contact Info</h1>
        <Section title="Westhill Mailing Address and Email">
          <div className="contact_box">
            <bl>
              <li>
                <b>Computer Science Academy of Westhill</b>
              </li>
              <li>Westhill High School </li>
              <li>c/o Chandan Sarkar</li>
              <li>125 Roxbury Rd Stamford,</li>
              <li>CT 06902</li>
            </bl>
          </div>
          <div className="contact_box">
            <bl>
              <li>
                <b> email:</b>
              </li>
              <li> CSAW@StamfordCT.gov</li>
            </bl>
          </div>
        </Section>
        <Section title="Teacher Information">
          <TeacherDeck />
        </Section>
      </Layout>
    </div>
  )
}

export default ContactUs
