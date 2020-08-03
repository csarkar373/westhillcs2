import React from "react"
import "../css/index.css"

import Layout from "../components/layout"
import Section from "../components/section"

import WinnersTables from "../tables/WinnersTables"
import medal2018 from "../img/medal_award_2018.jpg"
import medal2019 from "../img/medal_award_2019.jpg"
import medal2020a from "../img/rou.jpg"
import medal2020b from "../img/rutvik.jpg"
import medal2017a from "../img/RachelLeseMedal.jpg"
import medal2017b from "../img/BenChanMedal.jpg"
import medal2016 from "../img/DanScalzi.jpg"

function StudentWinners(props) {
  return (
    <div>
      <Layout>
        <h1>Students of the Year</h1>
        <Section title="">
          <WinnersTables />
        </Section>

        <Section title="Senior Medal Winners">
          <div className="flex_container">
            <div className="image_container">
              <img src={medal2020a} alt="award" width="250" />
              <img src={medal2020b} alt="award" width="250" />
              <h4>Roubing Liao and Rutvik Marathe (2020)</h4>
            </div>
            <div className="image_container">
              <img src={medal2019} alt="award" width="250" />
              <h4>Kevin Zyskowski and Ashley Choi (2019)</h4>
            </div>

            <div className="image_container">
              <img src={medal2018} alt="award" width="250" />
              <h4>Reshmi Ranjith and Koshik Mahapatra (2018) </h4>
            </div>
            <div className="image_container">
              <img src={medal2017a} alt="award" width="250" />
              <img src={medal2017b} alt="award" width="250" />
              <h4>Rachel Lese and Ben Chan (2017)</h4>
            </div>
            <div className="image_container">
              <img src={medal2016} alt="award" width="250" />
              <h4>Daniel Scalzi (2016) </h4>
            </div>
          </div>
        </Section>
      </Layout>
    </div>
  )
}

export default StudentWinners
