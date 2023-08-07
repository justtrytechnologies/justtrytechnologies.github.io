import { Col, Container, Nav, Navbar, Row } from "react-bootstrap"
import { Link } from "gatsby"
import React from "react"

const MiniFooter = () => {
  return (
    <div className="mini-footer">
      <Container fluid className="p-0">
        <Row className="w-100">
          <Col xs={12} lg={6}>
            <Nav className="contact-sales">
              <Nav.Item as="li" className="mt-2">
                <h6 className="text-white"> &copy; Copyright justtryteam</h6>
              </Nav.Item>
            </Nav>
          </Col>
          <Col xs={12} lg={6}>
            <Nav className="mini-footer-social">
              <Nav.Item as="li">
                <a href="https://wa.me/9380543009">
                  <i className="bi bi-whatsapp"></i>
                </a>
              </Nav.Item>
              <Nav.Item as="li">
                <a href="skype:live:.cid.74dc6fc29052d565?chat">
                  <i className="bi bi-skype"></i>
                </a>
              </Nav.Item>
              <Nav.Item as="li">
                <a href="https://twitter.com/flipflop_team">
                  <i className="bi bi-twitter"></i>
                </a>
              </Nav.Item>
              <Nav.Item as="li">
                <a href="mailto:justtrytechnologies@gmail.com">
                  <i className="bi bi-envelope"></i>
                </a>
              </Nav.Item>
              {/* <Nav.Item as="li">
                                <Link to={"#"}><i className="bi bi-facebook"></i></Link>
                            </Nav.Item>
                            <Nav.Item as="li">
                                <Link to={"#"}><i className="bi bi-instagram"></i></Link>
                            </Nav.Item> */}
            </Nav>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default MiniFooter
