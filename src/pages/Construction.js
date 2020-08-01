import React from "react"
import Content from "../components/content"
import Layout from "../components/layout"
import Section from "../components/section"

import construction from "../img/uc.png"

function Construction(props) {
  return (
    <div>
      <h1>FAQ</h1>
      <Layout title="Under Construction">
        <Section title="This Page is Under Construction">
          <Content>
            <img
              className="center"
              src={construction}
              alt="Under Construction"
              height="400"
              width="700"
            />
          </Content>
        </Section>
      </Layout>
    </div>
  )
}

export default Construction
