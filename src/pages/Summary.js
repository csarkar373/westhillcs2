import React from "react"
import "../css/global.css"
import Layout from "../components/layout"
import Section from "../components/section"
import onePager from "../img/onePager.png"

function Game(props) {
  return (
    <div>
      <Layout>
        <Section title="CSAW Overview">
          <div className="image_container">
            <img src={onePager} alt="onePager" width="900" />
          </div>
        </Section>
      </Layout>
    </div>
  )
}

export default Game
