import React from "react"
import Content from "../components/content"
import Layout from "../components/layout"
import Section from "../components/section"

function FAQ(props) {
  return (
    <div>
      <h1>FAQ</h1>
      <Layout title="About the Academy">
        <Section title="Frequently Asked Questions">
          <Content>FAQ content goes here.</Content>
        </Section>
      </Layout>
    </div>
  )
}

export default FAQ
