import * as React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { StaticImage } from "gatsby-plugin-image";

const teamMemebers = [
    {
        img: "../../styles/assets/images/memicon.png",
        name: "Pravin",
        designation: "Full Stack Developer",
        description: "As a fullstack developer, He has 8 years of experience in building and maintaining web applications. His skills in languages such as HTML, CSS, JavaScript, and Php, as well as frameworks such as React, Angular, NextJs, ExpressJs and NestJS, created efficient and user-friendly applications from start to finish."
    },
    {
        img: "../../styles/assets/images/memicon.png",
        name: "Vijay",
        designation: "Front End Developer",
        description: "As a front-end developer, His passion for building beautiful and intuitive user experiences. With a strong foundation in HTML, CSS, and JavaScript, He delivers high-quality web projects on time and on budget. He always looking for new challenges and opportunities to improve skills and contribute to the success of his team and clients."
    },
    {
        img: "../../styles/assets/images/memicon.png",
        name: "Prasanna",
        designation: "Back End Developer",
        description: "As a backend developer, He specialized in building and maintaining efficient and scalable server-side systems. With experience in languages such as JavaScript and Php, as well as databases like MySql and MongoDb. He skilled at integrating with various APIs and databases to create seamless and user-friendly web applications."
    }
]

const OurTeam = () => {

    return (
        <Container fluid id="our-team" className="text-center">
            <h2>OUR TEAM</h2>
            <br />
            <Row className="ourTeam">
                {teamMemebers.map((Examples, i) => (
                    <Col sm={12} md={6} xl={4} xxl={3} key={i}>
                        <div className="member" >
                            <div className="our-team">
                                <StaticImage
                                    src="../../styles/assets/images/memicon.png"
                                    loading="eager"
                                    width={200}
                                    quality={95}
                                    formats={["auto", "webp", "avif"]}
                                    alt=""
                                    style={{ marginBottom: `var(--space-3)` }}
                                />
                            </div>
                            <div className="our-team-desc">
                                <h4>{Examples.name}</h4>
                                <h6>{Examples.designation}</h6>
                                <p>{Examples.description}</p>
                            </div>
                        </div>
                    </Col>
                ))}
            </Row>
        </Container>
    )
};

export default OurTeam;