import React from "react"
import "../css/global.css"
import "../css/Partners.css"
import Layout from "../components/layout"
import Section from "../components/section"
import PartnerDeck from "../components/PartnerDeck"

function Partners(props) {
  return (
    <div>
      <Layout>
        <h1>Suppliers and Partners</h1>
        <Section title="">
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
        <Section title="Supplier and Partner Information">
          <PartnerDeck />
        </Section>
      </Layout>
    </div>
  )
}

export default Partners
