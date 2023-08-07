import * as React from "react";
import { Col, Row } from "react-bootstrap";
import { StaticImage } from "gatsby-plugin-image";
import { Link } from "gatsby";

const OurServices = () => {
    return (
        <div id="services" className="container-fluid text-center">
            <h2>Our Services</h2><br />
            <Row className="text-center slideanim">
                <Col sm={4}>
                    <div className="thumbnail">
                        <Link to="/website-development" className="text-decoration-none">
                            <div className="groupimg image1">
                                <StaticImage
                                    src="../../styles/assets/images/web.png"
                                    loading="eager"
                                    quality={95}
                                    formats={["auto", "webp", "avif"]}
                                    alt=""
                                />
                            </div>
                            <div className="groupimg image2">
                                <StaticImage
                                    src="../../styles/assets/images/web2.png"
                                    loading="eager"
                                    quality={95}
                                    formats={["auto", "webp", "avif"]}
                                    alt=""
                                />
                            </div>
                            <p><strong>Website Development (MEAN / MERN)</strong></p>
                        </Link>
                        <p>Our team specializes in website development using the MERN/MEAN stack. The MERN/MEAN stack is a powerful combination of technologies that allows us to build dynamic and efficient web applications. Our team of experienced developers has a deep understanding of these technologies and can create custom solutions to meet your specific needs.</p>
                    </div>
                </Col>
                <Col sm={4}>
                    <div className="thumbnail">
                        <Link to="#" className="text-decoration-none">
                            <div className="groupimg image1">
                                <StaticImage
                                    src="../../styles/assets/images/network.png"
                                    loading="eager"
                                    quality={95}
                                    formats={["auto", "webp", "avif"]}
                                    alt=""
                                />
                            </div>
                            <div className="groupimg image2">
                                <StaticImage
                                    src="../../styles/assets/images/network2.png"
                                    loading="eager"
                                    quality={95}
                                    formats={["auto", "webp", "avif"]}
                                    alt=""
                                />
                            </div>
                            <p><strong>Smart Contract Development</strong></p>
                        </Link>
                        <p>Smart contract development is the process of creating self-executing contracts with the terms of the agreement between buyer and seller being directly written into lines of code. Smart contracts allow for faster, more secure, and more efficient transactions. Our team has extensive experience in developing and implementing smart contracts for various industries.</p>
                    </div>
                </Col>
                <Col sm={4}>
                    <div className="thumbnail">
                        <Link to="#" className="text-decoration-none">
                            <div className="groupimg image1">
                                <StaticImage
                                    src="../../styles/assets/images/android.png"
                                    loading="eager"
                                    quality={95}
                                    formats={["auto", "webp", "avif"]}
                                    alt=""
                                />
                            </div>
                            <div className="groupimg image2">
                                <StaticImage
                                    src="../../styles/assets/images/android2.png"
                                    loading="eager"
                                    quality={95}
                                    formats={["auto", "webp", "avif"]}
                                    alt=""
                                />
                            </div>
                        </Link>
                        <p><strong>POC & Open Source</strong></p>
                        <p>Our team specializes in developing Proof of Concept (POC) and open source installations for clients in a variety of industries. We have a track record of successfully implementing and customizing solutions to meet the specific needs of our clients. Our team of experts have extensive experience in this field and are committed to delivering top-quality services.</p>
                    </div>
                </Col>
            </Row>
            <br />
        </div >
    )
};

export default OurServices;