import React from 'react';
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"


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
            <a href="https://github.com/jakeols">
                <Img style={{ width: '30px' }} fluid={data.githubImage.childImageSharp.fluid} />
            </a>
            <a href="https://twitter.com/jakeols">
                <Img style={{ width: '30px' }} fluid={data.twitterImage.childImageSharp.fluid} />
            </a>
            <a href="https://instagram.com/jakeols" style={{ paddingRight: '5px' }}>
                <Img style={{ width: '30px' }} fluid={data.instagramImage.childImageSharp.fluid} />
            </a>
            <p>
                running on <a style={{ textDecoration: 'none', color: 'rebeccapurple' }} href="https://www.strava.com/athletes/31979134">strava</a>.
                reading list <a style={{textDecoration: 'none', color: 'rebeccapurple'}} href="/books">here</a>.
            </p>

        </div >
    )
}

export default Social;