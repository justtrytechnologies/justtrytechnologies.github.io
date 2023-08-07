import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

const BlockchainPage = () => (
  <Layout>
    <h1>BlockChain Development</h1>
    <p>Hi Here we are discussing about BlockChain Development</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export const Head = () => <Seo title="BlockChain Development" />

export default BlockchainPage
