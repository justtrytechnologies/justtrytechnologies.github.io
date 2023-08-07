import * as React from "react"
// import { Link } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { Card, Col, Container, Nav, Row, Tab } from "react-bootstrap"
// import { StaticImage } from "gatsby-plugin-image"
import expertise from "../styles/assets/images/expertise.jpg"
import timeImg from "../styles/assets/images/time.jpg"
import userExp from "../styles/assets/images/user-exp-2.jpg"
import MoveForward from "../components/common/move-forward"
// import stack1 from "../../styles/assets/images/mango2.png";
// import stack2 from "../../styles/assets/images/exp2.png";
// import stack3 from "../../styles/assets/images/react2.png";
// import stack4 from "../../styles/assets/images/angular2.png";
// import stack5 from "../../styles/assets/images/jslogo.png";
// import stack6 from "../../styles/assets/images/nodelogo.png";

const MeanStackPage = () => {
  const [key, setKey] = React.useState("Expertise-And-Experience")

  return (
    <Layout>
      <div className="busniess-wrap">
        <Container fluid>
          <Row className="busniess-need p-5">
            <Col className="col-md-12 col-lg-12 col-sm-8 col-12">
              <div className="text-dark">
                <h2 className="text-capitalize">
                  Why Your Business Needs a Professional Web Development Team
                </h2>
                <p>
                  In today's digital age, having a strong online presence is
                  crucial for any business. A well-designed and user-friendly
                  website can help to attract and retain customers, and can even
                  be a key driver of revenue. However, building and maintaining
                  a website is no easy task. That's where a professional web
                  development team comes in.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <Container>
        <Row className="text-center">
          <Col className="col-md-12 col-lg-12 col-sm-8 col-12">
            <h6 className="fs-2 text-dark my-5">
              Why should you invest in a professional web development team for
              your business? Here are just a few reasons
            </h6>
          </Col>
        </Row>
      </Container>
      <Container
        fluid
        // className="web-dev"
        className="p-0 "
      >
        <Row>
          <Col className="col-md-12 col-lg-12 col-sm-8 col-12">
            <Tab.Container activeKey={key}>
              <Row className="d-flex align-items-center">
                <Col className="col-md-12 col-lg-6 col-sm-8 col-12 d-none d-lg-block">
                  <Tab.Content>
                    <Tab.Pane eventKey="Expertise-And-Experience">
                      <div>
                        <img
                          className="d-flex m-auto d-flex justify-content-center w-75"
                          src={expertise}
                          alt="expertise"
                        />
                      </div>
                    </Tab.Pane>
                    <Tab.Pane eventKey="Time-Saving">
                      <div>
                        <img
                          className="d-flex m-auto d-flex justify-content-center w-75"
                          src={timeImg}
                          alt="time-manage"
                        />
                      </div>
                    </Tab.Pane>
                    <Tab.Pane eventKey="Improved-User-Experience">
                      <div>
                        <img
                          className="d-flex m-auto d-flex justify-content-center w-75"
                          src={userExp}
                          alt="user-exp"
                        />
                      </div>
                    </Tab.Pane>
                  </Tab.Content>
                </Col>
                <Col className="col-md-12 col-lg-6 col-sm-8 col-12">
                  <Row>
                    <Col md={12}>
                      <div className="webdev-head">
                        <h2 className="text-capitalize fs-1 font-weight-normal">
                          Web Site Development
                        </h2>
                        <h5>
                          Why should you invest in a professional web
                          development team for your business? Here are just a
                          few reasons
                        </h5>
                      </div>
                    </Col>
                  </Row>
                  <Row className="webdev-nav-link">
                    <Col md={12}>
                      <Nav variant="pills" className="flex-column">
                        <Nav.Item
                          onMouseEnter={() =>
                            setKey("Expertise-And-Experience")
                          }
                        >
                          <Nav.Link eventKey="Expertise-And-Experience">
                            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAAFS0lEQVR4nO2ae2iXZRTHP9pFdCOLMudSgm6WZVaO1h3qjy5aw4gK7UYRFFnZbdkoqCwqokSwuylWlEEXzf2R0TQizIjK0hSJAjVzZqbkzGy5/eLI94HDy3v7vb/fNgW/8LB3z3POeW7nObcNKsOBwJnAfcAbwFJgA7AV2A106bsd+Bp4D3gMGAccyl6ARuAV4E+gVLD9CywCbgAO7u0NnAd8FlnQj8DLwM3ABcBw4DDgAKCfvodp89cATwFLtJEgYyNwl264R3EIMAvo1sR/AE8AIyuQaap1o1TOH8oYeggnAms00U6gBaip8hyXAKs1xz9St6pijHsH3wLH0XMYAMzUXHbzk6sl2Ba9WYI/BAbm4JkS86itrxxMlrWzdhUVwlRnhRbSChyUk+/1mI1YX7m4V7wdwLFUgBnu8dXGjA8BFgANkf5l4rtQraQ+jwbxmow0vCn+z2X9ysYZcmadwOiY8aHASucLmoH+usW/1H+EWkl9NaJpdmZ3pWQlYTCwSbRXF9lIq5ifjRmrc9ZlkzPH3wDb9G1ePKBdfdtEEx5yWOBqyUzC/aJbUe6tnKKJOnSiUcyS4B1aQJN8SjCb70ZOzxzgB7rd4H+axLtDfa+mrGeQ2/RF5WxkupheSBivd5bMTgt57eeAo1PkHgM8I1rDHZKxOUO9DI+K9iVywq7uNzFFH7HHFbo10/WxlI/j3W1MyEE/2oUx9s5yOT9jWJ+Ddr5o50T6LwcWa6Ed+h6fYI0+Ij9+Fs/ZeYjvFPHsDLpBOh2zbCe7/idTIt1pjq5BN7pWgWUezJSce/IQzxax6W8Ut+uhL3cP107b30Qwxw/qLVmb6syt5SABS9W3Vd+vZUQAt4p+bp6NfJFiHfzp2k2sAia68SUas4VHMVVjba7vNmftfEtCo8btIDOxVsSnxoyFiRqlWlFs17jdQhT1zjFGcaQOLmsjtYq9OmUsUhEWMzxlIzbp4VXayED5raYcGzG8JZqFZOA/EcZFuVEVaI84vsUpqvVQjGo9kmAU0lAvS2h0F6cR/i2iONWZose+zMVT5rEDxrvHPjXhsV/m6Jerbx3wqVJlK2BkoUV8q9LS4nUiGpEhrEaxU6c8dsC0FPP7uKMLb2JNgah2gPMpdycRfSeC0zKE9XcBoIUdHuOkQtvV2iI3gZxoSZauSHje5Ex3XDy4Jws0gkkZgppdABj3uLMwwqXP5WaPAYvS4q8HNPgiyWiQznfrZFC8NUcWKA5Ws7pFk4cKyQQXMRepmpwk1d4dlzOd5RKeJCxwuUidIuDwmLukLtdHMs3f3VvZpQMb64yLhR9FMF3870QHLC/fosGkUxrissMQwXYriNzo0uNQtwobsKLe2+73Lv2cX0GVcaRk/BI3+HwO9RrqssTNCuuDNQspsi3uXNH84Hib3A29X0ZRI4pRwCeSYz9ji3Hd8hVpxYE6+ZWQKAX8JOHnuNKQ3UQ0LGkpWB4dBcxzN2oG5/Qk4oU5UtCsN+SbLboamOc2sFPvLy3f3xOU7ZKaWEWlHDws++5bNLEqipLajBhNSMTTYlpatKbUAyjliMdiw+YNYvTmdJ/biOE6Mf5agXXZKzbSD/hezFaf2mc3ElLSEOD1Jfo7R1oItYpizbccRd9hmDZi0UNhBL/iiw29jStdqFMYIWy3LK6v8HE5da0knC8hX9I3mOjCEfsLcUV/gispxextTFLOYvPfVKmwwSl1qUpxLXCp/nvCDswyzhPU3+ZMrpVj+96G55Cb1LbIMVd9wmojyP1KCdJ6qXCr/hOitqcm3FfkJmL/RjKw/0aKYq9Xrf8B+isLGAf7PkIAAAAASUVORK5CYII=" />
                            Expertise And Experience
                          </Nav.Link>
                          <p>
                            Web development is a complex field that requires a
                            wide range of skills, from coding to design to user
                            experience. A professional web development team will
                            have the expertise and experience necessary to build
                            a high-quality website that meets your business
                            needs.
                          </p>
                        </Nav.Item>
                        <Nav.Item onMouseEnter={() => setKey("Time-Saving")}>
                          <Nav.Link eventKey="Time-Saving">
                            <i className="bi bi-hourglass-split"></i>{" "}
                            Time-Saving
                          </Nav.Link>
                          <p>
                            Building and maintaining a website can be
                            time-consuming, especially if you don't have the
                            technical skills or knowledge. By outsourcing web
                            development to a professional team, you can save
                            time and focus on running your business.
                          </p>
                        </Nav.Item>
                        <Nav.Item
                          onMouseEnter={() =>
                            setKey("Improved-User-Experience")
                          }
                        >
                          <Nav.Link eventKey="Improved-User-Experience">
                            <i className="bi bi-universal-access"></i> Improved
                            User Experience
                          </Nav.Link>
                          <p>
                            A professional web development team can design and
                            build a website that is user-friendly, easy to
                            navigate, and visually appealing. This can help to
                            improve the user experience and encourage visitors
                            to stay on your site longer, increasing the chances
                            of conversion.
                          </p>
                        </Nav.Item>
                      </Nav>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Tab.Container>
          </Col>
        </Row>
        <Row>
          <Col className="col-md-12 col-lg-12 col-sm-8 col-12">
            <div className="service-blog d-block m-5">
              <h6>Conclusion</h6>
              <p>
                In conclusion, investing in a professional web development team
                can be a smart decision for any business looking to improve
                their online presence. Whether you need a new website or an
                update to an existing one, a professional team can provide the
                expertise and experience necessary to create a high-quality,
                user-friendly site that drives results for your business.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
      <MoveForward />
    </Layout>
  )
}

export const Head = () => <Seo title="MEAN Stack Development" />

export default MeanStackPage
