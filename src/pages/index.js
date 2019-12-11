import React from "react"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Social from "../components/social"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>welcome</h1>
    <p>you can find me here &darr;</p>
    <Social />
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
  </Layout>
)

export default IndexPage
