import React from "react"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import SEO from "../components/seo"

const linkStyle = { textDecoration: "underline", color: "inherit" }

const ExtLink = ({ href, children }) => (
  <a
    href={href}
    style={linkStyle}
    target="_blank"
    rel="noopener noreferrer"
  >
    {children}
  </a>
)

const WorkPage = () => (
  <Layout>
    <p>
      <a href="/" style={linkStyle}>
        ←
      </a>
    </p>
    <h1>work</h1>
    <p>selected product &amp; engineering work from the last few years.</p>

    <h2>Panasonic, Global Applied AI (2025–2026)</h2>
    <p>KanpAI, an enterprise agentic AI platform. no public assets I can share.</p>

    <h2>Panasonic Well (2024–2025)</h2>

    <h3>Umi</h3>
    <p>
      AI-powered family wellness coach — voice and chat, goals, routines,
      shared family tasks. announced in the CES 2025 opening keynote. led
      information architecture design implementation (the core
      &ldquo;feel&rdquo; of the app, routing/navigation,etc.).{" "}
      <ExtLink href="https://techcrunch.com/2025/01/07/panasonic-unveils-an-ai-powered-wellness-coach-powered-by-anthropics-claude-at-ces-2025">
        TechCrunch
      </ExtLink>{" "}
      /{" "}
      <ExtLink href="https://news.panasonic.com/global/press/en250108-14">
        press release
      </ExtLink>
      . unfortunately restructuring happened during launch and my team moved to
      Panasonic while Panasonic Well was dissolved.
    </p>

    <h3>Yohana</h3>
    <p>
      subscription family concierge — human assistants backed by AI. owned
      onboarding, A/B testing, and analytics (web).{" "}
      <ExtLink href="https://www.geekwire.com/2022/after-seattle-launch-personal-assistant-service-yohana-goes-nationwide-to-help-more-busy-families/">
        GeekWire
      </ExtLink>{" "}
      article. product was sunsetted before the launch of Umi,
      so not public anymore, but a former UX designer has a case study up with
      some designs{" "}
      <ExtLink href="https://lesliemontes.com/yohana-member-app">here</ExtLink>
      .
    </p>

    <h2>Extend (2021–2023)</h2>

    <h3>conversational flow designer</h3>
    <p>
      claims adjudication logic was engineer-only (pre-dated reliable enterprise
      LLM use). built the editor that let ops staff author the branching flows
      themselves — typed graph, tree validation, and built-in failure states.{" "}
      <ExtLink href="https://customers.extend.com">runtime</ExtLink> is
      quasi-public here but has likely seen significant upgrades due to LLM
      enhancements over the last few years.
    </p>

    <h3>offer theming</h3>
    <p>
      merchants can restyle Extend&apos;s offer surfaces to match their
      storefront. draft/publish, published theme immutable. WYSIWYG previews
      across offer surfaces and breakpoints, matching what the real SDK paints
      inside a checkout page.{" "}
      <ExtLink href="https://docs.extend.com/docs/enhanced-offer-styling">
        docs
      </ExtLink>{" "}
      show that it hasn&apos;t seen much updating since i built it.
    </p>

    <h3>offers SDK + API</h3>
    <p>
      client SDK embedded in third-party checkouts, and the offers service
      behind it. owned parts of the infra + pricing on the offers side, and the modal
      surface of the SDK. docs:{" "}
      <ExtLink href="https://helloextend.github.io/extend-sdk-client/api-reference/product-protection">
        SDK
      </ExtLink>{" "}
      ·{" "}
      <ExtLink href="https://docs.extend.com/docs/integrating-with-extends-offers-api">
        API
      </ExtLink>
    </p>

    <h3>contextual offers</h3>
    <p>
      generic protection offers convert badly. CMS-driven content matched to
      product metadata, cached at the edge for latency. example for
      product-specific content:
    </p>
    <div style={{ maxWidth: "720px", marginBottom: "1.45rem" }}>
      <StaticImage
        src="../images/contextual-offers.png"
        alt="Extend contextual offer modal with product-matched lifestyle imagery"
        style={{ display: "block" }}
      />
    </div>

    <h2>Kurt Noble (2019–2021)</h2>
    <p>
      marketing sites for{" "}
      <ExtLink href="https://www.bolt.com">Bolt</ExtLink>,{" "}
      <ExtLink href="https://www.rippling.com">Rippling</ExtLink>, and the{" "}
      <ExtLink href="https://chanzuckerberg.com">
        Chan Zuckerberg Initiative
      </ExtLink>
      . frontend craft, before i moved to product.
    </p>
  </Layout>
)

export const Head = () => <SEO title="Work" />

export default WorkPage
