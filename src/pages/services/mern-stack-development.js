import * as React from "react"
import { Link } from "gatsby"

import Layout from "../../components/layout"
import Seo from "../../components/seo"

const MernStackPage = () => (
  <Layout>
    <h1>MERN Stack Development</h1>
    <p>Hi Here we are discussing about MERN Stack Development</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export const Head = () => <Seo title="MERN Stack Development" />

export default MernStackPage
