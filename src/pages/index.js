import * as React from "react"

import Layout from "../components/layout";
import Seo from "../components/seo";

import Banner from "../components/home/banner";
import Technologies from "../components/home/technologies";
import OurServices from "../components/home/our-services";
import OurTeam from "../components/home/our-team";
import Portfolio from "../components/home/portfolio";
import MoveForward from "../components/common/move-forward";
import OurClients from "../components/home/our-clinets";

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <Banner />
    <Technologies />
    <OurServices />
    <Portfolio />
    <OurClients />
    <OurTeam />
    <MoveForward />
  </Layout>
)

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="Home" />

export default IndexPage
