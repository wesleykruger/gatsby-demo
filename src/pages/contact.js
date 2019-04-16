import React from "react"
import Header from "../components/header"
import Layout from "../components/layout"

export default () => (
  <div style={{ color: "teal" }}>
    <Layout>
      <Header headerText="Contact" />
      <p>Send us a message!</p>
      <p>
        <a href="mailto:me@example.com">me@example.com</a>
      </p>
    </Layout>
  </div>
)
