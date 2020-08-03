import React from "react"
import "../css/index.css"

import Layout from "../components/layout"
import Section from "../components/section"
import GradeCalcTables from "../tables/GradeCalcTables"

function GradeCalc(props) {
  return (
    <div>
      <Layout>
        <h1>Grade Calculations</h1>
        <Section title="">
          <GradeCalcTables />
          <p>
            You can see your current grade by logging into your PowerSchool
            account.
          </p>
        </Section>
      </Layout>
    </div>
  )
}

export default GradeCalc
