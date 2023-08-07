import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { Card, Carousel, Col, Container, Nav, Row } from "react-bootstrap"
import mern_1 from "../styles/assets/images/mern-1.jpg"
import mern_2 from "../styles/assets/images/mern-2.jpg"
import mern_3 from "../styles/assets/images/mern-3.jpg"
import mern_4 from "../styles/assets/images/mern-4.jpg"
import MoveForward from "../components/common/move-forward"

const MernAndMeanDev = () => {
  return (
    <Layout>
      <div className="busniess-wrap">
        <Container fluid>
          <Row className="busniess-need p-5">
            <Col xs={12}>
              <div>
                <h2 className="mb-2">MERN/MEAN Stack Development Services</h2>
                {/* <h5>
                                    Building Scalable and High-Performance Web Applications
                                </h5> */}
                <p className="text-dark mt-4">
                  At our company, we specialize in providing top-notch MERN/MEAN
                  stack development services. Our team of experienced developers
                  is well-versed in the latest technologies and tools to build
                  scalable and high-performance web applications that meet your
                  specific business needs.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <Container>
        <Row className="text-center justify-content-center d-flex">
          <Col md={7}>
            <h6 className="fs-2 text-dark my-5">
              Building Scalable and High-Performance Web Applications
            </h6>
          </Col>
        </Row>
        <Row className="my-5 seperate-row mern-carousel">
          <Col md={12}>
            <Carousel>
              <Carousel.Item>
                <Row className="d-flex align-items-center">
                  <Col md={6}>
                    <div className="mern-content">
                      <p>
                        At our company, we specialize in providing top-notch
                        MERN/MEAN stack development services. Our team of
                        experienced developers is well-versed in the latest
                        technologies and tools to build scalable and
                        high-performance web applications that meet your
                        specific business needs.
                      </p>
                    </div>
                  </Col>
                  <Col md={5}>
                    <img
                      className="d-block w-100"
                      src={mern_1}
                      alt="First slide"
                    />
                  </Col>
                  <Col md={1}></Col>
                </Row>
              </Carousel.Item>
              <Carousel.Item>
                <Row className="d-flex align-items-center">
                  <Col md={6}>
                    <div className="mern-content">
                      <p>
                        Our MERN stack development services include the use of
                        MongoDB, Express.js, React, and Node.js, while our MEAN
                        stack development services include the use of MongoDB,
                        Express.js, AngularJS, and Node.js. Both stacks are
                        built using JavaScript, making them highly efficient and
                        easy to maintain.
                      </p>
                    </div>
                  </Col>
                  <Col md={5}>
                    <img
                      className="d-block w-100"
                      src={mern_3}
                      alt="First slide"
                    />
                  </Col>
                  <Col md={1}></Col>
                </Row>
              </Carousel.Item>
              <Carousel.Item>
                <Row className="d-flex align-items-center">
                  <Col md={6}>
                    <div className="mern-content">
                      <p>
                        We understand the importance of building web
                        applications that are responsive, user-friendly, and
                        optimized for search engines. That's why we use popular
                        SEO keywords to ensure that your website ranks well on
                        search engines, driving more traffic and conversions.
                      </p>
                    </div>
                  </Col>
                  <Col md={5}>
                    <img
                      className="d-block w-100"
                      src={mern_2}
                      alt="First slide"
                    />
                  </Col>
                  <Col md={1}></Col>
                </Row>
              </Carousel.Item>
            </Carousel>
          </Col>
          {/* <Col md={1}>
                        <div class="carousel-indicators"><button type="button" data-bs-target="" aria-label="Slide 1" aria-current="true" class="active"></button></div>
                    </Col> */}
        </Row>
      </Container>
      <div className="stats-wrap my-5">
        <Container fluid>
          <Row className="stats mt-5 p-5">
            <Col md={12} lg={12} xl={5}>
              <div className="text-dark">
                <h6 className="fs-4">State-of-the-art</h6>
                <h5 className="fs-2">
                  Technology Stack Our Web Developers Use
                </h5>
                <p>
                  Justtry has a team of passionate and expert developers who are
                  well versed in the latest web technologies and frameworks.
                  Whatever technology or framework you name it our developer
                  will develop a perfect web solution using the desired
                  framework to ensure your business success.
                </p>
              </div>
            </Col>
            <Col md={12} lg={12} xl={7}>
              <Row className="stack-card mt-4">
                <Col sm={12} md={2}>
                  <div className="d-flex justify-content-center">
                    <Card>
                      <Card.Body>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          x="0px"
                          y="0px"
                          width="60"
                          height="60"
                          viewBox="0 0 48 48"
                        >
                          <path
                            fill="#5d4037"
                            d="M42,17.3C42,37.8,24,44,24,44S6,37.8,6,17.3c0-2.5,0.2-4.6,0.4-6.3c0.3-2.5,2-4.5,4.4-5.1 C13.9,5,18.8,4,24,4s10.1,1,13.3,1.9c2.4,0.6,4.1,2.7,4.4,5.1C41.8,12.7,42,14.9,42,17.3z"
                          ></path>
                          <path
                            fill="#4caf50"
                            d="M24,7c4.9,0,9.5,1,12.5,1.8c1.2,0.3,2,1.3,2.2,2.6c0.2,1.9,0.3,3.9,0.3,5.9c0,15.6-11.5,21.9-15,23.4 c-3.5-1.6-15-7.9-15-23.4c0-2,0.1-4,0.3-5.9c0.1-1.3,1-2.3,2.2-2.6C14.5,8,19.1,7,24,7 M24,4c-5.2,0-10.1,1-13.3,1.9 C8.4,6.5,6.6,8.6,6.4,11C6.2,12.7,6,14.9,6,17.3C6,37.8,24,44,24,44s18-6.2,18-26.7c0-2.5-0.2-4.6-0.4-6.3c-0.3-2.5-2-4.5-4.4-5.1 C34.1,5,29.2,4,24,4L24,4z"
                          ></path>
                          <path fill="#dcedc8" d="M23 28H25V36H23z"></path>
                          <path
                            fill="#4caf50"
                            d="M24,10c0,0-6,5-6,13c0,5.2,3.3,8.5,5,10l1-3l1,3c1.7-1.5,5-4.8,5-10C30,15,24,10,24,10z"
                          ></path>
                          <path
                            fill="#81c784"
                            d="M24,10c0,0-6,5-6,13c0,5.2,3.3,8.5,5,10l1-3V10z"
                          ></path>
                        </svg>
                      </Card.Body>
                    </Card>
                  </div>
                </Col>
                <Col sm={12} md={2}>
                  <div className="align d-flex justify-content-center">
                    <Card className="top">
                      <Card.Body>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          x="0px"
                          y="0px"
                          width="60"
                          height="60"
                          viewBox="0 0 48 48"
                        >
                          <path
                            fill="#80deea"
                            d="M24,34C11.1,34,1,29.6,1,24c0-5.6,10.1-10,23-10c12.9,0,23,4.4,23,10C47,29.6,36.9,34,24,34z M24,16	c-12.6,0-21,4.1-21,8c0,3.9,8.4,8,21,8s21-4.1,21-8C45,20.1,36.6,16,24,16z"
                          ></path>
                          <path
                            fill="#80deea"
                            d="M15.1,44.6c-1,0-1.8-0.2-2.6-0.7C7.6,41.1,8.9,30.2,15.3,19l0,0c3-5.2,6.7-9.6,10.3-12.4c3.9-3,7.4-3.9,9.8-2.5	c2.5,1.4,3.4,4.9,2.8,9.8c-0.6,4.6-2.6,10-5.6,15.2c-3,5.2-6.7,9.6-10.3,12.4C19.7,43.5,17.2,44.6,15.1,44.6z M32.9,5.4	c-1.6,0-3.7,0.9-6,2.7c-3.4,2.7-6.9,6.9-9.8,11.9l0,0c-6.3,10.9-6.9,20.3-3.6,22.2c1.7,1,4.5,0.1,7.6-2.3c3.4-2.7,6.9-6.9,9.8-11.9	c2.9-5,4.8-10.1,5.4-14.4c0.5-4-0.1-6.8-1.8-7.8C34,5.6,33.5,5.4,32.9,5.4z"
                          ></path>
                          <path
                            fill="#80deea"
                            d="M33,44.6c-5,0-12.2-6.1-17.6-15.6C8.9,17.8,7.6,6.9,12.5,4.1l0,0C17.4,1.3,26.2,7.8,32.7,19	c3,5.2,5,10.6,5.6,15.2c0.7,4.9-0.3,8.3-2.8,9.8C34.7,44.4,33.9,44.6,33,44.6z M13.5,5.8c-3.3,1.9-2.7,11.3,3.6,22.2	c6.3,10.9,14.1,16.1,17.4,14.2c1.7-1,2.3-3.8,1.8-7.8c-0.6-4.3-2.5-9.4-5.4-14.4C24.6,9.1,16.8,3.9,13.5,5.8L13.5,5.8z"
                          ></path>
                          <circle cx="24" cy="24" r="4" fill="#80deea"></circle>
                        </svg>
                      </Card.Body>
                    </Card>
                  </div>
                </Col>
                <Col sm={12} md={2}>
                  <div className="d-flex justify-content-center">
                    <Card className="top">
                      <Card.Body>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          x="0px"
                          y="0px"
                          width="60"
                          height="60"
                          viewBox="0 0 48 48"
                        >
                          <path
                            fill="#bdbdbd"
                            d="M23.933 2L3 9.285 6.308 36.408 23.955 46 41.693 36.278 45 9.156z"
                          ></path>
                          <path
                            fill="#b71c1c"
                            d="M42.818 10.527L24 4.135 24 43.695 39.832 35.017z"
                          ></path>
                          <path
                            fill="#dd2c00"
                            d="M23.941 4.115L5.181 10.644 8.168 35.143 23.951 43.721 24 43.695 24 4.135z"
                          ></path>
                          <path
                            fill="#bdbdbd"
                            d="M24 5.996L24 15.504 32.578 34 36.987 34z"
                          ></path>
                          <path
                            fill="#eee"
                            d="M11.013 34L15.422 34 24 15.504 24 5.996z"
                          ></path>
                          <path fill="#bdbdbd" d="M24 24H30V28H24z"></path>
                          <path fill="#eee" d="M18 24H24V28H18z"></path>
                        </svg>
                      </Card.Body>
                    </Card>
                  </div>
                </Col>
                <Col md={2}>
                  <div className="align d-flex justify-content-center">
                    <Card className="top">
                      <Card.Body>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          x="0px"
                          y="0px"
                          width="60"
                          height="60"
                          viewBox="0 0 48 48"
                        >
                          <path fill="#ffd600" d="M6,42V6h36v36H6z"></path>
                          <path
                            fill="#000001"
                            d="M29.538 32.947c.692 1.124 1.444 2.201 3.037 2.201 1.338 0 2.04-.665 2.04-1.585 0-1.101-.726-1.492-2.198-2.133l-.807-.344c-2.329-.988-3.878-2.226-3.878-4.841 0-2.41 1.845-4.244 4.728-4.244 2.053 0 3.528.711 4.592 2.573l-2.514 1.607c-.553-.988-1.151-1.377-2.078-1.377-.946 0-1.545.597-1.545 1.377 0 .964.6 1.354 1.985 1.951l.807.344C36.452 29.645 38 30.839 38 33.523 38 36.415 35.716 38 32.65 38c-2.999 0-4.702-1.505-5.65-3.368L29.538 32.947zM17.952 33.029c.506.906 1.275 1.603 2.381 1.603 1.058 0 1.667-.418 1.667-2.043V22h3.333v11.101c0 3.367-1.953 4.899-4.805 4.899-2.577 0-4.437-1.746-5.195-3.368L17.952 33.029z"
                          ></path>
                        </svg>
                      </Card.Body>
                    </Card>
                  </div>
                </Col>
                <Col md={2}>
                  <div className="d-flex justify-content-center">
                    <Card className="top">
                      <Card.Body>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          x="0px"
                          y="0px"
                          width="60"
                          height="60"
                          viewBox="0 0 48 48"
                        >
                          <path
                            fill="#21a366"
                            d="M24.007,45.419c-0.574,0-1.143-0.15-1.646-0.44l-5.24-3.103c-0.783-0.438-0.401-0.593-0.143-0.682	c1.044-0.365,1.255-0.448,2.369-1.081c0.117-0.067,0.27-0.043,0.39,0.028l4.026,2.389c0.145,0.079,0.352,0.079,0.486,0l15.697-9.061	c0.145-0.083,0.24-0.251,0.24-0.424V14.932c0-0.181-0.094-0.342-0.243-0.432L24.253,5.446c-0.145-0.086-0.338-0.086-0.483,0	L8.082,14.499c-0.152,0.086-0.249,0.255-0.249,0.428v18.114c0,0.173,0.094,0.338,0.244,0.42l4.299,2.483	c2.334,1.167,3.76-0.208,3.76-1.591V16.476c0-0.255,0.2-0.452,0.456-0.452h1.988c0.248,0,0.452,0.196,0.452,0.452v17.886	c0,3.112-1.697,4.9-4.648,4.9c-0.908,0-1.623,0-3.619-0.982l-4.118-2.373C5.629,35.317,5,34.216,5,33.042V14.928	c0-1.179,0.629-2.279,1.646-2.861L22.36,3.002c0.994-0.562,2.314-0.562,3.301,0l15.694,9.069C42.367,12.656,43,13.753,43,14.932	v18.114c0,1.175-0.633,2.271-1.646,2.861L25.66,44.971c-0.503,0.291-1.073,0.44-1.654,0.44"
                          ></path>
                          <path
                            fill="#21a366"
                            d="M28.856,32.937c-6.868,0-8.308-3.153-8.308-5.797c0-0.251,0.203-0.452,0.455-0.452h2.028	c0.224,0,0.413,0.163,0.448,0.384c0.306,2.066,1.218,3.108,5.371,3.108c3.308,0,4.715-0.747,4.715-2.502	c0-1.01-0.401-1.76-5.54-2.263c-4.299-0.424-6.955-1.371-6.955-4.809c0-3.167,2.672-5.053,7.147-5.053	c5.026,0,7.517,1.745,7.831,5.493c0.012,0.13-0.035,0.255-0.122,0.35c-0.086,0.09-0.208,0.145-0.334,0.145h-2.039	c-0.212,0-0.397-0.149-0.44-0.354c-0.491-2.173-1.678-2.868-4.904-2.868c-3.611,0-4.031,1.257-4.031,2.2	c0,1.143,0.495,1.477,5.367,2.122c4.825,0.64,7.116,1.544,7.116,4.935c0,3.418-2.853,5.379-7.827,5.379"
                          ></path>
                        </svg>
                      </Card.Body>
                    </Card>
                  </div>
                </Col>
                <Col md={2}>
                  <div className="align d-flex justify-content-center">
                    <Card className="top">
                      <Card.Body>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          x="0px"
                          y="0px"
                          width="60"
                          height="60"
                          viewBox="0 0 48 48"
                        >
                          <linearGradient
                            id="Xfeb2ANkiLrn2PxL5jJHLa_PZQVBAxaueDJ_gr1"
                            x1="3.851"
                            x2="34.471"
                            y1="2.596"
                            y2="33.216"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop offset="0" stop-color="#6d7479"></stop>
                            <stop offset="1" stop-color="#323538"></stop>
                          </linearGradient>
                          <path
                            fill="url(#Xfeb2ANkiLrn2PxL5jJHLa_PZQVBAxaueDJ_gr1)"
                            d="M33.244,25l-9.121-12h1.18c0.84,0,1.631,0.392,2.139,1.061l7.059,9.287l7.059-9.287	C42.067,13.392,42.858,13,43.698,13h1.18l-9.121,12l9.547,12.56h-1.18c-0.84,0-1.631-0.392-2.139-1.061L34.5,26.652l-7.485,9.847	c-0.508,0.668-1.299,1.061-2.139,1.061h-1.18L33.244,25z M4,26v0.783c0,4.199,2.776,8.032,6.868,8.972	c4.439,1.02,8.49-1.247,10.228-4.842C21.366,30.355,21.928,30,22.547,30h1.028c-1.319,4.655-5.616,8.059-10.707,7.999	C6.777,37.927,2,32.694,2,26.142V26v-2l0-0.716c0-5.427,3.812-10.273,9.171-11.136C18.055,11.039,24,16.325,24,23v3H4z M4,24h18v-1	c0-5.648-5.202-10.08-11.076-8.768C6.804,15.153,4,19.002,4,23.71V24z"
                          ></path>
                        </svg>
                      </Card.Body>
                    </Card>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </div>
      <MoveForward />
    </Layout>
  )
}

export const Head = () => <Seo title="MEAN Stack Development" />

export default MernAndMeanDev
