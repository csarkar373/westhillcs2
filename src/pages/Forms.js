import React from "react"
import "../css/global.css"
import Layout from "../components/layout"
import Section from "../components/section"
import FormsTable from "../tables/FormsTable"

function Forms(props) {
  return (
    <div>
      <Layout>
        <Section title="Forms">
          <p>
            The Computer Science Academy of Westhill is attempting to be a
            paper-free organization. Thus, most of the forms, below, need to be
            submitted electronically.
          </p>
          <FormsTable />
        </Section>
      </Layout>
    </div>
  )
}

export default Forms
