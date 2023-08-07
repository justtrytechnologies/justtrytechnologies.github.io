import * as React from "react"
import {
  Navbar,
  Container,
  Nav,
  Dropdown,
  Modal,
  Button,
  Form,
  Row,
  Col,
  NavDropdown,
} from "react-bootstrap"
import { Link } from "gatsby"
import { useState } from "react"
import { StaticImage, GatsbyImage } from "gatsby-plugin-image"
import logo from "../../styles/assets/images/logo2.png"
import TalkToUs from "./talk-to-us"

const logo2 = "../../styles/assets/images/logo2.png"

const Header = () => {
  const [showDropdown] = useState(false)
  const [headerScroll, setHeaderScroll] = useState(false)

  const handleScroll = () => {
    if (window.pageYOffset >= 50) {
      setHeaderScroll(true)
    } else {
      setHeaderScroll(false)
    }
  }

  React.useEffect(() => {
    window.addEventListener("scroll", handleScroll)
    return () => window.addEventListener("scroll", handleScroll)
  })

  const [toggleShow, setToggleShow] = useState(false)

  const handleToggleShow = () => setToggleShow(!toggleShow)

  const [megaMenu, setShowMegaMenu] = useState(false)
  const hanldeToggleMegamenu = () => setShowMegaMenu(!megaMenu)

  const [show, setShow] = useState(false)
  const handleShow = () => setShow(true)
  const handleClose = e => setShow(false)

  return (
    <React.Fragment>
      <Navbar className="mini-navbar">
        <Container>
          <Row className="w-100">
            <Col xs={6}>
              <Nav className="contact-sales">
                <Nav.Item as="li">
                  <span className="text-white">
                    CONTACT SALES: +91 9380543009
                  </span>
                </Nav.Item>
              </Nav>
            </Col>
            <Col xs={6}>
              <Nav className="d-flex justify-content-end mini-header-social">
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
      </Navbar>
      <Navbar expand="lg" className={"navbar navbar-default navbar-fixed-top"}>
        <Container>
          <Navbar.Brand className="navbar-brand logo" href="#myPage">
            <Link to="/">
              <StaticImage
                src="../../styles/assets/images/logo2.png"
                loading="eager"
                width={64}
                quality={95}
                formats={["auto", "webp", "avif"]}
                alt=""
                style={{ marginBottom: `var(--space-3)` }}
              />
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle
            onClick={handleToggleShow}
            className={
              toggleShow ? "navbar-toggler x" : "navbar-toggler x collapsed"
            }
          >
            <div className="icon-bar"></div>
            <div className="icon-bar"></div>
            <div className="icon-bar"></div>
          </Navbar.Toggle>
          <Navbar.Collapse>
            <Nav className="nav navbar-nav ms-auto" as="ul">
              {/* <Nav.Item as="li" className="has-megamenu dropdown service">
                                <Dropdown className='service'>
                                    <Dropdown.Toggle as="a" variant="success">
                                        SERVICES
                                    </Dropdown.Toggle>
                                    <Dropdown.Menu show={showDropdown} as="ul" className='mt-2 mega-menu'>
                                        <Dropdown.Divider />
                                        <Dropdown.Item as={'li'}>
                                            <Link to={"services/mern-stack-development"}>MEAN Stack Development</Link>
                                        </Dropdown.Item>
                                        <Dropdown.Item as={'li'}>
                                            <Link to={"services/mean-stack-development"}>MERN Stack Development</Link>
                                        </Dropdown.Item>
                                        <Dropdown.Item as={'li'}>
                                            <Link to={"services/blockchain-development"}>BlockChain Development</Link>
                                        </Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                            </Nav.Item> */}
              <li className="nav-item dropdown has-megamenu">
                <a
                  className="nav-link dropdown-toggle"
                  onClick={hanldeToggleMegamenu}
                >
                  {" "}
                  SERVICES{" "}
                </a>
                <div
                  className={
                    megaMenu
                      ? "dropdown-menu megamenu show"
                      : "dropdown-menu megamenu"
                  }
                >
                  <Container>
                    <Row className="megamenu text-center">
                      <Col lg={3}>
                        <ul>
                          <li>
                            <Link to="/website-development">
                              Website Development
                            </Link>
                          </li>
                          <li>
                            <Link to="/mern-development">
                              MERN / MEAN Development
                            </Link>
                          </li>
                        </ul>
                      </Col>
                      <Col lg={3}>
                        <ul>
                          <li>
                            <Link to="#">Blockchain Development</Link>
                          </li>
                          <li>
                            <Link to="/smart-contract">
                              Smart Contract Development
                            </Link>
                          </li>
                        </ul>
                      </Col>
                      <Col lg={3}>
                        <ul>
                          <li>
                            <Link to="/poc-open-source">
                              Poc/OpenSource Installation
                            </Link>
                          </li>
                        </ul>
                      </Col>
                    </Row>
                  </Container>
                </div>
              </li>
              <Nav.Item as="li">
                <Link to={"#"}>BLOG</Link>
              </Nav.Item>
              <Nav.Item as="li">
                <Button onClick={handleShow} className="mt-2 talkto-us">
                  Talk to us
                </Button>
              </Nav.Item>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <TalkToUs handleClose={handleClose} show={show} />
    </React.Fragment>
  )
}

export default Header

{
  /* <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
        <div class="container-fluid">
            <a class="navbar-brand" href="#">Brand</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#main_nav">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="main_nav">
                <ul class="navbar-nav">
                    <li class="nav-item active"> <a class="nav-link" href="#">Home </a> </li>
                    <li class="nav-item"><a class="nav-link" href="#"> About </a></li>
                    <li class="nav-item"><a class="nav-link" href="#"> Services </a></li>
                    <li class="nav-item dropdown has-megamenu">
                        <a class="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown"> Mega menu </a>
                        <div class="dropdown-menu megamenu" role="menu">
                            This is content of megamenu. <br />
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                            consequat.
                        </div>
                    </li>
                </ul>
                <ul class="navbar-nav ms-auto">
                    <li class="nav-item"><a class="nav-link" href="#"> Menu item </a></li>
                    <li class="nav-item dropdown">
                        <a class="nav-link  dropdown-toggle" href="#" data-bs-toggle="dropdown"> Dropdown right </a>
                        <ul class="dropdown-menu dropdown-menu-end">
                            <li><a class="dropdown-item" href="#"> Submenu item 1</a></li>
                            <li><a class="dropdown-item" href="#"> Submenu item 2 </a></li>
                        </ul>
                    </li>
                </ul>
            </div>
        </div>
</nav> */
}
