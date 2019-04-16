import React from "react"
import Header from "../components/header"
import Layout from "../components/layout"

export default () => (
  <div style={{ color: "teal" }}>
    <Layout>
      <Header headerText="About Me" />
      <Header headerText="It's pretty cool." />
      <p>Such wow. Very React.</p>
    </Layout>
  </div>
)
