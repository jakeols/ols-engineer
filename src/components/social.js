import { graphql, useStaticQuery } from "gatsby";
import Img from "gatsby-image";
import React from 'react';


const Social = () => {
    const data = useStaticQuery(graphql`
        query {
        githubImage: file(relativePath: { eq: "github.png" }) {
            childImageSharp {
            fluid(maxWidth: 300) {
                ...GatsbyImageSharpFluid
            }
            }
        },
        twitterImage: file(relativePath: { eq: "twitter.png" }) {
            childImageSharp {
            fluid(maxWidth: 300) {
                ...GatsbyImageSharpFluid
            }
            }
        },
        instagramImage: file(relativePath: { eq: "instagram.png" }) {
            childImageSharp {
            fluid(maxWidth: 300) {
                ...GatsbyImageSharpFluid
            }
            }
        }
        }
`)
    return (
        <div style={{ display: 'inline-flex' }}>
        <p>code — </p>
            <a href="https://github.com/jakeols">
                <Img style={{ width: '30px' }} fluid={data.githubImage.childImageSharp.fluid} />
            </a>
            <p>{','} &nbsp;</p>
            <p>
                running on <a style={{ textDecoration: 'none', color: 'rebeccapurple' }} href="https://www.strava.com/athletes/31979134">strava</a>.
                reading list <a style={{textDecoration: 'none', color: 'rebeccapurple'}} href="/books">here</a>.
            </p>

        </div >
    )
}

export default Social;