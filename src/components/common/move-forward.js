import { Button, Col, Container, Row } from "react-bootstrap"
import * as React from "react"
import TalkToUs from "../common/talk-to-us"
import { useState } from "react"

const MoveForward = () => {
  const [show, setShow] = useState(false)
  const handleShow = () => setShow(true)
  const handleClose = e => setShow(false)

  return (
    <Container className="overflow-hidden">
      <Row className="text-center text-white d-flex justify-content-center move-forward py-5 rounded">
        <Col className="col-md-12 col-lg-6 col-sm-8 col-12">
          <div className="d-block">
            <h2 className="text-white">
              Ready To Move Forward With <br /> Justtry Team?
            </h2>
            <p>
              Increase efficency, productivity, and business performance with
              Justtry various products that have been used by tens of thousands
              of businesses in the word.
            </p>
            <Button onClick={handleShow}>Get Started</Button>
          </div>
        </Col>
      </Row>
      <TalkToUs handleClose={handleClose} show={show} />
    </Container>
  )
}

export default MoveForward
