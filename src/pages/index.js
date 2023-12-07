import React from "react"

import Image from "../components/image"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Social from "../components/social"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>hey,</h1>
    <p>i'm jake &mdash; a software engineer in san francisco, ca. you can find me online &darr; </p>
    <Social />
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
  </Layout>
)

export default IndexPage
