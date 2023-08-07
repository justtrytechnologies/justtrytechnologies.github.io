import * as React from "react"
import Seo from "../components/seo"
import Layout from "../components/layout"
import { Col, Container, Nav, Row, Tab } from "react-bootstrap"
import poc from "../styles/assets/images/poc.jpg"
import business_concept from "../styles/assets/images/business-concept.webp"
import dev_mthod from "../styles/assets/images/dev-method.jpg"
import MoveForward from "../components/common/move-forward"

const POC = () => {
  const [key, setKey] = React.useState("poc")

  return (
    <Layout>
      <div className="busniess-wrap">
        <Container fluid>
          <Row className="busniess-need p-5">
            <Col className="col-md-12 col-lg-12 col-sm-12 col-12">
              <div className="text-dark">
                <h2 className="text-capitalize">
                  POC and Open Source Development Services
                </h2>
                <p>
                  Looking for a reliable and innovative partner to help you
                  navigate the complex world of POC and open source development?
                  Look no further than our expert team at Justtry.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <Container>
        <Row className="text-center d-flex justify-content-center">
          <Col className="col-md-12 col-lg-8 col-sm-8 col-12">
            <h6 className="fs-2 text-dark my-5">
              Unlock the Power of Innovation and Flexibility with Our Expertise
            </h6>
          </Col>
        </Row>
      </Container>
      <Container
        fluid
        // className="web-dev"
        className="p-0"
      >
        <Row>
          <Col className="col-md-12 col-lg-12 col-sm-8 col-12">
            <Tab.Container activeKey={key}>
              <Row className="d-flex align-items-center">
                <Col className="col-md-12 col-lg-6 col-sm-8 col-12 d-none d-lg-block">
                  <Tab.Content>
                    <Tab.Pane eventKey="poc">
                      <div>
                        <img
                          className="d-flex m-auto d-flex justify-content-center w-75"
                          src={poc}
                          alt="poc"
                        />
                      </div>
                    </Tab.Pane>
                    <Tab.Pane eventKey="research-dev">
                      <div>
                        <img
                          className="d-flex m-auto d-flex justify-content-center w-75"
                          src={business_concept}
                          alt="business_concept"
                        />
                      </div>
                    </Tab.Pane>
                    <Tab.Pane eventKey="dev-method">
                      <div>
                        <img
                          className="d-flex m-auto d-flex justify-content-center w-75"
                          src={dev_mthod}
                          alt="dev_mthod"
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
                          POC and Open Source Development Services
                        </h2>
                        <h5>
                          Looking for a reliable and innovative partner to help
                          you navigate the complex world of POC and open source
                          development? Look no further than our expert team at
                          Justtry.
                        </h5>
                      </div>
                    </Col>
                  </Row>
                  <Row className="webdev-nav-link">
                    <Col md={12}>
                      <Nav variant="pills" className="flex-column">
                        <Nav.Item onMouseEnter={() => setKey("poc")}>
                          <Nav.Link eventKey="poc">
                            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAYAAAA6/NlyAAAACXBIWXMAAAsTAAALEwEAmpwYAAAGLUlEQVR4nN1ba2wVRRT+iLW+UHlerNYXRFDEWhUTQVGj8sP4BzUWDPH5W0SNBgwJPhOxghZ8/ZDEFzFRqdFaETVR04YQoYqPgoL8M7VKERGwYm9hzTHfSY7j3b337s7ube+XbNKZ3ZnZ786cb845swWAWgBPAvgZQJDxlQfwEYAcMsSyChB1r+4sSfdw0JnIHhUhHfCqBHTs77IkHQwBwuMBfMu/vwdQl8WgLjakYKudEWPnsprpIIRwZwqEO0L047IsSQcVXNLFdoj11Ua4lqR7IvbpqiJckfcKKihacd5rWIvWkCJcaVQF4VoAswE8CqCdTsZejn8IwB4AWwG8Y96rZjgSvhjAagB/xDCDXwGsAnD+UBOtzgJ9XMi91D73NYAVAG4C0ABgNIAjeY0mMbn3NIBvTLvDAN5lmyEhWh2m7bGclUHe2wdgOYBzYrzfVJLfz74GGb8f7ZtwXJxNt1AdB3nZMeb+BAB3AHgVQBeAPgB/F1gh4xhUKMYCWGl+RBljYqUJzwLwG/sTQWo09y4H0MYfoZQt6yc+28Z+FRcB2ME2uwDMqBThSwEcYF/vARjJ+kkA1jnu4mcA7mfQcBaA4wr097zz40ifJ/HeCQA+MOYyPW3R6nSenQzgd957zWwl843tHaDt2WVaDKcDaDZ991HQQJF7w9RPTlO0OsxzMjvbzCwo2aXm+bUJQ706Z5XcZ0jrTG8BcFQSwqVipbHZkQ7ZPF9uBJJD+lhAByWgSejy/pF1IpCpEr6AL5A3AjXfeE43wz/uNKRvYN10qre8x7lpEv7Y+WUnGZtdiPRwt7FdzX89yzpZ4t5Eq9OZXVVJ3WfXGZtNEyPMWKIbum/rLtHgS7Q6zP3VrBMPSvfZgDNcj/Rxsgk81JyeYfkF30u6lpFNYNzFNpYfgh+I+m8E8GnEM80ccw3L57G8lwrujfA1JhBQdzFP4fA1uy9zjC8jnjmN4+bpesK4tZoJ9UL4EbaRqAf0jaX8IfzgNuOsSPAQhfWOYus2+XBS0bKC1c469XpeYfleJMdUIz5CvBiW8NnnWJ7HcmtS0bKCtd1Rwy6WJZuR1G51ScqSLgUqll84u4ck9L0tac1cqN30sVznyW67QwKKMH9b2uxkeTzLu30SVk9H1BqMZwPjWqZttxZj2U52DdCf1n68Ec6HEB6FbOzW4hi2O+gQ1rIX0Qpb0rmM7NbiTJPsU49Lyr0+RWtriGhdUeTlJPDf5PwwcezWYjbbb2a5kWVJAHpb0m3OtvQSyw8UabfJKGgugd1aLHRWx9y421IUljpR0o0svx/Z6r/nv9sS2K3F504fLSwv8kn4SmfZSBA+QDGrL4N0XLtVnModY8CYSWzXckNEeFhjggddiq0si9tZDDna3MaYdqt4nGNKgl4wjWX55uwI3+Hhi44/3cjTAYlUTkH6EIejnzMs3hVoYgGTAaGIs6Qtwf1me9JDMBG1tLGWY0nm0iYADvEwIBRxCYMiFTDwVpvazbq7kB4WcwxJ357BulWse7tY4yAB4QYTj+qyuo4zL7/0LfCPeab/a81pxCC9q8jZLVe0Cnldy1n3g/GlH2RdnqlVX2naxcaPX2R2iB3lZFuCMkSrkHiJ7/qVsV1NxC/gTGiiTWwsLuqNzQ4yawmOpbG5XE1JCJeDifRlpZ/XDekms33tYw6qnBByAj9r6mcf4sPP4b0a5rICc3/A3A+FD8J6yq9ZRBGz481Lv2nGETv7hMt+JkVnFAlIIHAVgHvoQenR6GH+kHVmGbebE0RJ3j1RKunAE2EVj13sbzu/AFBcwoO2vyJMxb3+5CzOCDku7SdZRUmkA4+E1SHoMqLVYvZp8O/b6VJuZmg5wJj6F6ZlZYu5lTOpGOd8VaCXnEiiHNI9xXzPGBAhe4yDBnROVpRy7lMA05xPHg4yeJlr+i+L9LIylpiPq5uz3kRvbQwzJ7Wc/UaSaTFxd8Dt6C0AU8y7Xx9BWnn9j3SxDzwrffVyKYd9EBOLdFaooTIv4b66hTa8hwLUy5CzlY7FrKioJwbpq1FFiCLdXCxXPVwxJ4T0FNaJn4BqJv0UP3bZybJ8G4ZqJx3wkqOYEyv9YmlCBEr+NUiWsRz2/Uv2HziB2B/aw6XHAAAAAElFTkSuQmCC" />
                            Proof Of Concept
                          </Nav.Link>
                          <p>
                            With years of experience working with a wide range
                            of clients and technologies, we are well-equipped to
                            help you unlock the full potential of your POC and
                            open source projects. Whether you're looking to
                            create a new product or service, or simply need help
                            optimizing an existing one, we are here to help.
                          </p>
                        </Nav.Item>
                        <Nav.Item onMouseEnter={() => setKey("research-dev")}>
                          <Nav.Link eventKey="research-dev">
                            <i className="bi bi-search"></i> Research And
                            Concept Development
                          </Nav.Link>
                          <p>
                            Our POC and open source development services include
                            everything from research and concept development, to
                            prototyping and testing, to full-scale development
                            and deployment. We work closely with you to
                            understand your unique needs and goals, and then use
                            our expertise to help you achieve them.
                          </p>
                        </Nav.Item>
                        <Nav.Item onMouseEnter={() => setKey("dev-method")}>
                          <Nav.Link eventKey="dev-method">
                            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAACXBIWXMAAAsTAAALEwEAmpwYAAAE9ElEQVR4nO2aS4hcRRSGv2mdUZMsjKCJSbevaDSoqDuVRAYRRKLxgS5UzFKYce9KNFHQTgTjPgtFRQwSszAzEeNjF9CNYJRIkGy0fTGOMULEnuiVgv/C4XJvd9Wd6tuv+aHo7upzTlX995x6nFuwghVYTAF7gJ+ApGRpAU3ZqgIN4CDwF3BG3zeXNdZcxsCzxdmqYvC/57S9WJaElgzcaepSo0W/s9hqPKHXeF9tzYuMjcCc6pwnBCPJGVwoAb4yMXBG7dRNXV11f44DAUlBO6XbT1YIYKg84HROCDTMRDgwHnAx8CiwF/gYOGHi9z/gF+A4cAR4CbgfuCRgEnR6G1Q+Ut17AeP2IiBbOsHKbAGWSiyjbeBD4HHggoJ2rgF+NfJtfXd1V3fpY9eOxyJgAvge+BJ4FXgIuE2uugq4EFgP3AA8ArwMfAacM3Z+AJ7JIeJa4Iucvrm6TbEIiGHn/BI2LgVmgK+MvafM//eZMFoAnldZMMvgvcvteFnEnAQn5DVvATXV3QP8Y2J9rZF33w/oPydzdz86nvRwFdhgtr+viaAsXN3rxjtciI0MAe/K9pzxiDzUtEV2su+MCgHXAf8CZ4ErPeSvAv7WhLppFAh4QXbfDNB5WzrPjQIBn8vuAwE6D0rn01Eg4DfZdROhL9LTodttDj0BS7I7GaAzZXaK3gmRreX7yDaPhMjtObs3V9crYr31miX27EXlFWN3XWbJejZH3tWlqEmncgKmRELqCTGSou4w9DNwDLhF7vuJZJ9QSVQ3KZlj0tlSNQGxkQ4+7cCSJqP0d8Oc39OJyp4c80joC1aHbCeFdWbwLgewzwzuW2DWyM6qLiVpn3RSEvLCoRPWq8/RsF2Ji/0BOjW5cqIBOdwKTHfQmZYM0klko9OWN4v96qvrczTsVmfcWT0EN2v5OaccQIjekkpKiC/2qK+7iIh5GX04UG/SxLx98tcDh3Sed290PtBckGLazAkhaz5KvaWHpWj4RkZv9JS/Q8vaURPzE2bwf+SsHu7YeoVkJsyccFS2nE1f70mUY4yGloxe7imfHZyd8A6p7rDe5NSNh7lERoqZHDs+2OixEQvGWRl1+TsfpB1+MuPaRW9zGgVvc+qyEULAKsm6Pkcn4KKKCWgMCgGtiCFwUHXzIqGhvH42BGZLhkB6+vuRAZ0ENxe80l4wXjFwk+CcjLq8fYxlsK6nfVpufyATEjGWQTfJRsOunBPeoG6E9qqvLn0WDdvHfSu8useHoZlBPwyN1XF4ahk3xfJuiMVMiHSCbx8rSYs1MzZjpcQqIaCVc1PMF743xMomRTuh2wC9CUgCdl290A/FecDOcSSgBjwGfFfg4t1+F6JI0Te2ek1A+sRPmrbs927jGFoCajlP/BTwtG6gjHwInMw88Z3yBt92h56ARCU78KJ2Ry4EksAnPPIEJIHt9i0Etnne+szC6dw17ASsUd6/rcuPu3Vj4yZdZ5tUWas699+LugnSlu6aQQoB3wOTS3mlNzmPmCusIaUtXWdj4Ahodun8Gxmb7gnvULZmTmv5ornfu6gL1IdF7I7M5ceBC4FW5sB0mZKQiT7LxHxov/pKQGJk3J3er/X7RInMkS/6FgKdZKoavG1zoAg4bj5dGPQSy3VxbwJaHjfF7IRXxeBtm736v1RKrMonH7sUwuem2KKWul7M9n0nYAWMEf4H2hjf4xws/rQAAAAASUVORK5CYII=" />{" "}
                            Proven development methodologies{" "}
                          </Nav.Link>
                          <p>
                            With our cutting-edge technologies and proven
                            development methodologies, we can help you create
                            truly innovative and flexible products and services
                            that are sure to stand out in the marketplace. And
                            with our commitment to open source development, you
                            can be confident that your projects will be built on
                            the latest and greatest technologies, without the
                            need to spend a fortune on licensing fees.
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
                So why wait? Contact us today to learn more about our POC and
                open source development services, and to see how we can help you
                unleash the full power of innovation and flexibility in your
                next project.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
      <MoveForward />
    </Layout>
  )
}

export const Head = () => <Seo title="POC Open Source" />

export default POC
