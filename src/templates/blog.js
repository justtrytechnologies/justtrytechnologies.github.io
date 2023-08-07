import React from "react"
import { Col, Container, Row } from "react-bootstrap"
import Layout from "../components/layout"
import Seo from "../components/seo"

const BlogPage = () => {
  return (
    <Layout>
      <Container>
        <Row>
          <Col sm={12}>
            <div>hai</div>
          </Col>
        </Row>
      </Container>
    </Layout>
  )
}

export const Head = () => <Seo title="Justtry Team Blogs" />

export default BlogPage
