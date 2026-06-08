import React from "react"
import { StaticImage } from "gatsby-plugin-image"

const Image = () => (
  <StaticImage
    src="../images/me-pic.jpg"
    width={300}
    alt="Profile"
  />
)

export default Image
