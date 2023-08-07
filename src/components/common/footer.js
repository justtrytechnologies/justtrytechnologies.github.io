import * as React from "react"
import { Col, Container, Row } from "react-bootstrap"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faEnvelope,
  faMobileScreenButton,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons"
import { Link } from "gatsby"
// import Image from "next/image";
// import skype from '../../styles/assets/images/skype-icon-24.png';
import MiniFooter from "./mini-footer"

const Footer = () => {
  return (
    <React.Fragment>
      <Container fluid id="contact" className="bg-grey">
        <Row>
          <Col sm={12} md={1} lg={1} xl={1}></Col>
          <Col sm={12} md={6} lg={6} xl={4}>
            <div>
              <h3>About us</h3>
              <p>Contact us and we&apos;ll get back to you within 24 hours.</p>
              {/* <p>We are a team of developers and designers who are passionate about the web technologies and we have
                            experience of creating and hosting the MEAN and Static HTML templates for more than 5 years</p> */}
              <p>
                Welcome to our web development team! We are a group of five
                highly skilled and experienced professionals with a passion for
                building beautiful, functional websites. From concept to launch,
                we are dedicated to delivering top-notch solutions for our
                clients.
              </p>
            </div>
          </Col>
          <Col sm={12} md={5} lg={5} xl={4}>
            <h3>Our Services</h3>
            <ul className="footer-link">
              <li>
                <Link to="/website-development">Website Development</Link>
              </li>
              <li>
                <Link to="/mern-development">MERN/MEAN Development</Link>
              </li>
              <li>
                <Link to="#">Blockchain Development</Link>
              </li>
              <li>
                <Link to="/smart-contract">Smart Contract Development</Link>
              </li>
              <li>
                <Link to="/poc-open-source">Poc/Open Source Installation</Link>
              </li>
            </ul>
          </Col>
          {/* <Col sm={12} md={6} lg={6} xl={2}>
                    <div className="">
                        <h3>Blogs</h3>
                        <ul className="footer-link">
                            <li>Website Development</li>
                            <li>Web Hosting</li>
                            <li>Mobile App Development</li>
                            <li>MEAN Stack Development</li>
                            <li>MERN Stack Development</li>
                            <li>BlockChain Development</li>
                        </ul>
                    </div>
                </Col> */}
          <Col sm={12} md={6} lg={6} xl={3}>
            <div className="contact-us">
              <h3>Contact us</h3>
              <ul>
                <li>
                  <FontAwesomeIcon
                    style={{ color: "#5c3fb5" }}
                    className="mx-1"
                    icon={faLocationDot}
                  />
                  {/* <address>
                    3A/1, Patcharisikara Thoppu 1st Street,
                    <br />
                    Old Kuyavar Palayam Road,
                    <br />
                    Madurai - 625 009.
                  </address> */}
                  <address>
                    179/3, Kamarajar Salai,
                    <br />
                    Madurai - 625 009.
                  </address>
                </li>
                <li>
                  <FontAwesomeIcon
                    style={{ color: "#5c3fb5" }}
                    icon={faMobileScreenButton}
                  />
                  <p>
                    <a href="tel:+91 9500139200">+91 9500 139 200</a>
                  </p>
                </li>
                <li>
                  <FontAwesomeIcon
                    style={{ color: "#5c3fb5" }}
                    icon={faEnvelope}
                  />
                  <p>
                    <a href="mailto:justtrytechnologies@gmail.com">
                      {" "}
                      justtrytechnologies@gmail.com
                    </a>
                  </p>
                </li>
              </ul>
            </div>
            {/* <p className="d-flex">
                        <a href="skype:justtrytechnologies@gmail.com?chat" className="mx-2">
                            <span>
                                <Image src={skype} alt="skype" />
                            </span>
                        </a>
                    </p> */}
          </Col>
        </Row>
        <div className="social-link">
          <ul>
            <li>
              <a href="https://wa.me/9380543009">
                <i className="bi bi-whatsapp"></i>
              </a>
            </li>
            <li>
              <a href="skype:live:.cid.74dc6fc29052d565?chat">
                <i className="bi bi-skype"></i>
              </a>
            </li>
            <li>
              <a href="https://twitter.com/flipflop_team">
                <i className="bi bi-twitter"></i>
              </a>
            </li>
            <li>
              <a href="mailto:justtrytechnologies@gmail.com">
                <i className="bi bi-envelope"></i>
              </a>
            </li>
            {/* <li><a href="#"><i className="bi bi-instagram"></i></a></li>
                        <li><a href="#"><i className="bi bi-facebook"></i></a></li> */}
          </ul>
        </div>
      </Container>
      <MiniFooter />
    </React.Fragment>
  )
}

export default Footer
