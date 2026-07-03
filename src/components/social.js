import React from "react"
import { StaticImage } from "gatsby-plugin-image"

const Social = () => (
  <div
    style={{
      display: "inline-flex",
      alignItems: "center",
      marginBottom: "1.45rem",
    }}
  >
    <span>code — </span>
    <a
      href="https://github.com/jakeols"
      style={{ display: "inline-flex", alignItems: "center", marginLeft: "4px" }}
    >
      <StaticImage
        src="../images/github.png"
        width={30}
        alt="GitHub"
        style={{ display: "block" }}
      />
    </a>
    <span>{","}&nbsp;</span>
    <span>
      running on{" "}
      <a
        style={{ textDecoration: "underline", color: "inherit" }}
        href="https://www.strava.com/athletes/31979134"
      >
        strava
      </a>
      . reading list{" "}
      <a
        style={{ textDecoration: "underline", color: "inherit" }}
        href="/books"
      >
        here
      </a>
      .
    </span>
  </div>
)

export default Social
