import React from "react"
import { StaticImage } from "gatsby-plugin-image"

const Social = () => (
  <div style={{ display: "inline-flex", alignItems: "center" }}>
    <p>code — </p>
    <a href="https://github.com/jakeols">
      <StaticImage
        src="../images/github.png"
        width={30}
        alt="GitHub"
        style={{ display: "block" }}
      />
    </a>
    <p>{","}&nbsp;</p>
    <p>
      running on{" "}
      <a
        style={{ textDecoration: "none", color: "rebeccapurple" }}
        href="https://www.strava.com/athletes/31979134"
      >
        strava
      </a>
      . reading list{" "}
      <a
        style={{ textDecoration: "none", color: "rebeccapurple" }}
        href="/books"
      >
        here
      </a>
      .
    </p>
  </div>
)

export default Social
