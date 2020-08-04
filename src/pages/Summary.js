import React from "react"
import "../css/global.css"
import Layout from "../components/layout"
import Section from "../components/section"
import onePager from "../img/onePager.png"

function Game(props) {
  return (
    <div>
      <Layout>
        <Section title="CSAW Slide Presentation">
          <iframe
            className="responsive_slides"
            src="https://docs.google.com/presentation/d/e/2PACX-1vSK1KK7baSR008ZJ-NtJyVAq-6KTHzV209lkHthCTf_YruIkEWqdro19R1MHUEALGOYQ9cb6ys1bTvz/embed?start=false&loop=false&delayms=3000"
            frameborder="0"
            allowfullscreen="true"
            mozallowfullscreen="true"
            webkitallowfullscreen="true"
          ></iframe>
        </Section>
        <Section title="CSAW One Page Summary">
          <div className="image_container">
            <img className="responsive_image" src={onePager} alt="onePager" />
          </div>
        </Section>
      </Layout>
    </div>
  )
}

export default Game
