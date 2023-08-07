import * as React from "react";
import { Col, Row } from "react-bootstrap";
import { StaticImage } from "gatsby-plugin-image";

const htmlIcon = "../../styles/assets/images/html-5.png";
const cssIcon = "../../styles/assets/images/css.png";
const bootstrapIcon = "../../styles/assets/images/boots.png";
const javascriptIcon = "../../styles/assets/images/css.png";
const jqueryIcon = "../../styles/assets/images/jquerylogo.png";
const angularIcon = "../../styles/assets/images/angular.png";
const reactIcon = "../../styles/assets/images/react.png";
const expressIcon = "../../styles/assets/images/expressjs.png";
const mysqIcon = "../../styles/assets/images/mysql.png";
const mongodbIcon = "../../styles/assets/images/mongodb.png";
const solidityIcon = "../../styles/assets/images/solidity.png";

const Technologies = () => {
    return (
        <div id="technology" className="container-fluid text-center bg-grey">
            <h2>TECHNOLOGIES</h2>
            <Row className="slideanim mb-3">
                <Col sm={4}>
                    <div className="logos">
                        <StaticImage
                            src={htmlIcon}
                            loading="eager"
                            quality={95}
                            formats={["auto", "webp", "avif"]}
                            alt="html"
                        />
                        <h4>HTML</h4>
                    </div>
                </Col>
                <Col sm={4}>
                    <div className="logos">
                        <StaticImage
                            src={cssIcon}
                            loading="eager"
                            quality={95}
                            formats={["auto", "webp", "avif"]}
                            alt="css"
                        />
                        <h4>CSS</h4>
                    </div>
                </Col>
                <Col sm={4}>
                    <div className="logos">
                        <StaticImage
                            src={bootstrapIcon}
                            loading="eager"
                            quality={95}
                            formats={["auto", "webp", "avif"]}
                            alt="bootrap"
                        />
                        <h4>Bootstrap</h4>
                    </div>
                </Col>
            </Row>
            <Row className="slideanim mb-3">
                <Col sm={4}>
                    <div className="logos">
                        <StaticImage
                            src={javascriptIcon}
                            loading="eager"
                            quality={95}
                            formats={["auto", "webp", "avif"]}
                            alt="javascript"
                        />
                        <h4>Javascript</h4>
                    </div>
                </Col>
                <Col sm={4}>
                    <div className="logos">
                        <StaticImage
                            src={jqueryIcon}
                            loading="eager"
                            quality={95}
                            formats={["auto", "webp", "avif"]}
                            alt="jquery"
                        />
                        <h4>Jquery</h4>
                    </div>
                </Col>
                <Col sm={4}>
                    <div className="logos">
                        <StaticImage
                            src={angularIcon}
                            loading="eager"
                            quality={95}
                            formats={["auto", "webp", "avif"]}
                            alt="angular"
                        />
                        <h4>Angular</h4>
                    </div>
                </Col>
            </Row>
            <Row className="slideanim mb-3">
                <Col sm={4}>
                    <div className="logos">
                        <StaticImage
                            src={reactIcon}
                            loading="eager"
                            quality={95}
                            formats={["auto", "webp", "avif"]}
                            alt="react"
                        />
                        <h4>React</h4>
                    </div>
                </Col>
                <Col sm={4}>
                    <div className="logos">
                        <StaticImage
                            src={expressIcon}
                            loading="eager"
                            quality={95}
                            formats={["auto", "webp", "avif"]}
                            alt="expressjs"
                        />
                        <h4>ExpressJS</h4>
                    </div>
                </Col>
                <Col sm={4}>
                    <div className="logos">
                        <StaticImage
                            src={mysqIcon}
                            loading="eager"
                            quality={95}
                            formats={["auto", "webp", "avif"]}
                            alt="mysql"
                        />
                        <h4>Mysql</h4>
                    </div>
                </Col>
            </Row>
            <Row className="slideanim mb-3">
                <Col sm={4}>
                    <div className="logos">
                        <StaticImage
                            src={mongodbIcon}
                            loading="eager"
                            quality={95}
                            formats={["auto", "webp", "avif"]}
                            alt="mongodb"
                        />
                        <h4>MongoDB</h4>
                    </div>
                </Col>
                <Col sm={4}>
                    <div className="logos">
                        <StaticImage
                            src={"../../styles/assets/images/solidity.png"}
                            loading="eager"
                            quality={95}
                            formats={["auto", "webp", "avif"]}
                            alt="solidity"
                        />
                        <h4>Solidity</h4>
                    </div>
                </Col>
                <Col sm={4}></Col>
            </Row>
        </div>
    )
};

export default Technologies;