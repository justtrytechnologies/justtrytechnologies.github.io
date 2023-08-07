import * as React from "react";
import { Col, Container, Form, Modal, Row } from "react-bootstrap";
import { Country } from "country-state-city";
import { useStaticQuery, graphql } from 'gatsby';
import { initializeApp } from 'firebase/app';
import { collection, addDoc, getFirestore } from "@firebase/firestore";
import { utils } from "../const/helper";

function TalkToUs(props) {

    const data = useStaticQuery(graphql`
    query {
      site(siteMetadata: {}) {
        id
        siteMetadata {
          firestore {
            apiKey
            authDomain
            projectId
            storageBucket
            messagingSenderId
            appId
          }
        }
      }
    }
  `);
    // Initialize Firebase
    const app = initializeApp({ ...data.site.siteMetadata.firestore });
    const db = getFirestore(app);

    const { handleClose, show } = props;
    const countries = Country.getAllCountries();
    const init = {
        name: "",
        email: "",
        country: "",
        contact: "",
        message: ""
    };
    const [talkToUsInp, setTalkToUsInp] = React.useState(init);

    // const talkToUs = async (e) => {
    //     e.preventDefault();
    //     const clients = collection(db, 'clients');
    //     // setTalkToUsInp(init);
    //     console.log("talkToUsInp::", talkToUsInp);
    //     await addDoc(clients, talkToUsInp);
    //     utils.showSuccssMsg("We are talk to us soon");
    //     // const values = {...init} 
    //     if(init.name || init.contact || init.email || init.message || init.country !== ""){
    //         console.log("utils called");
    //         utils.showErrMsg("Required the field");
    //         handleClose();
    //         // setTalkToUsInp(init);
    //     }
    // };

    function handleTalkToUsInpChange(event) {
        const { name, value } = event.target;
        console.log("valuesOnchange::", value);
        setTalkToUsInp(prevFormData => ({ ...prevFormData, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const clients = collection(db, 'clients');
        // setTalkToUsInp(init);
        console.log("talkToUsInp::", talkToUsInp);
        await addDoc(clients, talkToUsInp);
        utils.showSuccssMsg("We will contact/talk to you soon");
        handleClose();
        setTalkToUsInp(init);
    };

    return (
        <>
            <Container>
                <Modal backdrop='static' keyboard={false} size="lg" centered show={show} onHide={handleClose}>
                    <Modal.Header>
                        <Modal.Title>
                            <button onClick={handleClose} className="close"><i className="bi bi-x"></i></button>
                            Talk to us
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form onSubmit={handleSubmit}>
                            <Row>
                                <Col sm={12} lg={6}>
                                    <Row>
                                        <Col md={12}>
                                            <Form.Label>Name</Form.Label>
                                        </Col>
                                        <Col md={12}>
                                            <Form.Control
                                                type="text"
                                                name="name"
                                                value={talkToUsInp.name}
                                                onChange={(e) => handleTalkToUsInpChange(e)}
                                                required
                                            />
                                        </Col>
                                    </Row>
                                </Col>
                                <Col sm={12} lg={6}>
                                    <Row>
                                        <Col md={12}>
                                            <Form.Label>Email</Form.Label>
                                        </Col>
                                        <Col md={12}>
                                            <Form.Control
                                                type="email"
                                                required
                                                name="email"
                                                value={talkToUsInp.email}
                                                onChange={(e) => handleTalkToUsInpChange(e)}
                                            />
                                        </Col>
                                    </Row>
                                </Col>
                            </Row>
                            <Row>
                                <Col sm={12} lg={6}>
                                    <Row>
                                        <Col md={12}>
                                            <Form.Label>Country</Form.Label>
                                        </Col>
                                        <Col md={12}>
                                            <Form.Select required name="country"
                                                onChange={(e) => handleTalkToUsInpChange(e)}
                                            >
                                                <option value={""}>Select</option>
                                                {countries.map((ele, ind) => {
                                                    // console.log("ele::",ele);
                                                    return (
                                                        <option key={ind} value={ele.isoCode}>{ele.name}</option>
                                                    )
                                                })}
                                            </Form.Select>
                                        </Col>
                                    </Row>
                                </Col>
                                <Col sm={12} lg={6}>
                                    <Row>
                                        <Col md={12}>
                                            <Form.Label>Skype / whatsapp / mobile</Form.Label>
                                        </Col>
                                        <Col md={12}>
                                            <Form.Control type="tel" required name="contact" value={talkToUsInp.contact}
                                                onChange={(e) => handleTalkToUsInpChange(e)}
                                            />
                                        </Col>
                                    </Row>
                                </Col>
                            </Row>
                            <Row>
                                <Col md={12}>
                                    <Form.Label>Content</Form.Label>
                                </Col>
                                <Col md={12}>
                                    <Form.Control rows={'5'} as={'textarea'} required value={talkToUsInp.message}
                                        onChange={(e) => handleTalkToUsInpChange(e)}
                                        name="message" />
                                </Col>
                            </Row>
                            <button type="submit" className="contact-us-submit-btn">
                                Submit
                            </button>
                        </Form>
                    </Modal.Body>
                </Modal>
            </Container>
        </>
    )
};

export default TalkToUs;