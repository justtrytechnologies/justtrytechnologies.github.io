import * as React from "react";
import { Card, Col, Container, Nav, Row, Tab } from "react-bootstrap";
import partzrider from "../../styles/assets/images/partzrider.png";
import matri from "../../styles/assets/images/matri.jpg";

const portFolio = [
    {
        img: partzrider,
        title: "Partzrider",
        link: "https://partzrider.com",
        description: "The portal, Partzrider.com (Website) and the mobile application 'Partzrider'(App) (collectively Platform) is owned and operated by George Oakes Limited (Company), a public company incorporated under the Companies Act, 1913. George Oakes enables sale and purchase of diverse range of products listed on the Platform from time to time(Services)."
    },
    {
        img: matri,
        title: "Truefriends Matrimony",
        link: "https://dev.truefriendmatrimony.com",
        description: "Jesus Calls matrimony” seeking partners are serviced by True Friend Matrimony who are truly the True Friend in need to choose your “Soul Mate”. Let the search for your True Love also happily finalise here. Enrol now and seamlessly browse through the largest data base of Jesus Calls partners and believer’s profiles"
    },
]

const Portfolio2 = () => {
    return (
        <Container fluid className="text-center bg-grey mt-3">
            <h2 className="mb-0">Our Recent Works</h2>
            <Row>
                <Col md={12}>
                    <Tab.Container defaultActiveKey="first">
                        <Row className="d-flex justify-content-center">
                            <Nav variant="pills">
                                <Nav.Item>
                                    <Nav.Link eventKey="first">All </Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="second">Mean  / mern stack </Nav.Link>
                                </Nav.Item>
                            </Nav>
                            <Tab.Content>
                                <Tab.Pane eventKey="first">
                                    <Row>
                                        {portFolio.map((ele, ind) => (
                                            <Col sm={12} md={6} xl={4} xxl={3} key={ind}>
                                                <Card className="portfolio-card">
                                                    <div className="card-img-hover">
                                                        <Card.Img src={ele.img} alt="portfolio img" />
                                                    </div>
                                                    <Card.Body>
                                                        <h5>
                                                            <a href={ele.link}
                                                                rel="noreferrer"
                                                                style={{ textDecoration: `none` }}
                                                                target="_blank" >
                                                                {ele.title}
                                                            </a>
                                                        </h5>
                                                        <p>{ele.description.slice(0, 100) + "...."}</p>
                                                    </Card.Body>
                                                </Card>
                                            </Col>
                                        ))}
                                    </Row>
                                </Tab.Pane>
                                <Tab.Pane eventKey="second">
                                    <Row>
                                        {portFolio.map((ele, ind) => (
                                            <Col sm={12} md={6} xl={4} xxl={3} key={ind}>
                                                <Card className="portfolio-card">
                                                    <div className="card-img-hover">
                                                        <Card.Img src={ele.img} alt="portfolio img" />
                                                    </div>
                                                    <Card.Body>
                                                        <h5>{ele.title}</h5>
                                                        <p>{ele.description.slice(0, 100) + "...."}</p>
                                                    </Card.Body>
                                                </Card>
                                            </Col>
                                        ))}
                                    </Row>
                                </Tab.Pane>
                                <Tab.Pane eventKey="ux-ui">
                                    <Row>
                                        {portFolio.map((ele, ind) => (
                                            <Col sm={12} md={6} xl={4} xxl={3} key={ind}>
                                                <Card className="portfolio-card">
                                                    <div className="card-img-hover">
                                                        <Card.Img src={ele.img} alt="portfolio img" />
                                                    </div>
                                                    <Card.Body>
                                                        <h5>{ele.title}</h5>
                                                        <p>{ele.description.slice(0, 50) + "...."}</p>
                                                    </Card.Body>
                                                </Card>
                                            </Col>
                                        ))}
                                    </Row>
                                </Tab.Pane>
                            </Tab.Content>
                        </Row>
                    </Tab.Container>
                </Col>
            </Row>
        </Container>
    )
};

export default Portfolio2;