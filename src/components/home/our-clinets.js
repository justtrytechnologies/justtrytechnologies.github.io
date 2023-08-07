import * as React from "react"
import { Card, Col, Container, Row } from "react-bootstrap"
import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, Scrollbar, A11y, EffectFade, Pagination } from "swiper"
import { StaticImage } from "gatsby-plugin-image"
import Rating from "../common/rating"

const OurClients = () => {
  return (
    <Container>
      <Row>
        <Col md={12}>
          <Row className="d-flex justify-content-center my-4">
            <Col md={5}>
              <div className="our-clients-head text-dark text-center">
                <h2>Love from our clients around the world</h2>
                <p className="w-75 m-auto">
                  The advantage employed to were for there with some or heavy
                  house it that
                </p>
              </div>
            </Col>
          </Row>
          <div className="our-clients">
            <Swiper
              modules={[Navigation, Scrollbar, A11y, EffectFade, Pagination]}
              slidesPerView={1}
              spaceBetween={30}
              // navigation={{
              //     prevEl: prevBtn.current,
              //     nextEl: nextBtn.current,
              // }}
              // loop={true}
              // onBeforeInit={(swiper) => {
              //     swiper.params.navigation.prevEl = prevBtn.current;
              //     swiper.params.navigation.nextEl = nextBtn.current;
              // }}
              pagination={{
                clickable: true,
              }}
              breakpoints={{
                500: {
                  slidesPerView: 1,
                },
                600: {
                  slidesPerView: 1,
                },
                768: {
                  slidesPerView: 2,
                  spaceBetween: 30,
                },
                992: {
                  slidesPerView: 2,
                  spaceBetween: 30,
                },
                1200: {
                  slidesPerView: 2,
                  spaceBetween: 15,
                },
              }}
            >
              <SwiperSlide>
                <div className="our-clinets-wrap">
                  <Card className="shadow d-flex align-items-center">
                    <div className="client-logo">
                      <StaticImage
                        src={"../../styles/assets/images/time.jpg"}
                        loading="eager"
                        width={200}
                        quality={95}
                        formats={["auto", "webp", "avif"]}
                        alt="client-logo"
                        className="clinet-logo"
                      />
                    </div>
                    <Card.Body>
                      <div className="client-body d-block text-center">
                        <h6>Mahubab Hasan</h6>
                        <Rating star={4} />
                        <p>
                          "But I must explain to you how all this mistaken idea
                          of denouncing pleasure and praising pain was born and
                          I will give you a complete account of the system, and
                          expound the actual teachings of the great explorer of
                          the truth, the master-builder of human happiness. No
                          one rejects, dislikes, or avoids pleasure itself,
                        </p>
                      </div>
                    </Card.Body>
                  </Card>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="our-clinets-wrap">
                  <Card className="shadow d-flex align-items-center">
                    <div className="client-logo">
                      <StaticImage
                        src={"../../styles/assets/images/time.jpg"}
                        loading="eager"
                        width={200}
                        quality={95}
                        formats={["auto", "webp", "avif"]}
                        alt="client-logo"
                        className="clinet-logo"
                      />
                    </div>
                    <Card.Body>
                      <div className="client-body d-block text-center">
                        <h6>Mahubab Hasan</h6>
                        <Rating star={3} />
                        <p>
                          "But I must explain to you how all this mistaken idea
                          of denouncing pleasure and praising pain was born and
                          I will give you a complete account of the system, and
                          expound the actual teachings of the great explorer of
                          the truth, the master-builder of human happiness. No
                          one rejects, dislikes, or avoids pleasure itself,
                        </p>
                      </div>
                    </Card.Body>
                  </Card>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="our-clinets-wrap">
                  <Card className="shadow d-flex align-items-center">
                    <div className="client-logo">
                      <StaticImage
                        src={"../../styles/assets/images/time.jpg"}
                        loading="eager"
                        width={200}
                        quality={95}
                        formats={["auto", "webp", "avif"]}
                        className="clinet-logo"
                        alt="client-logo"
                      />
                    </div>
                    <Card.Body>
                      <div className="client-body d-block text-center">
                        <h6>Mahubab Hasan</h6>
                        <Rating star={5} />
                        <p>
                          "But I must explain to you how all this mistaken idea
                          of denouncing pleasure and praising pain was born and
                          I will give you a complete account of the system, and
                          expound the actual teachings of the great explorer of
                          the truth, the master-builder of human happiness. No
                          one rejects, dislikes, or avoids pleasure itself,
                        </p>
                      </div>
                    </Card.Body>
                  </Card>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="our-clinets-wrap">
                  <Card className="shadow d-flex align-items-center">
                    <div className="client-logo">
                      <StaticImage
                        src={"../../styles/assets/images/time.jpg"}
                        loading="eager"
                        width={200}
                        quality={95}
                        formats={["auto", "webp", "avif"]}
                        alt="client-logo"
                        className="clinet-logo"
                      />
                    </div>
                    <Card.Body>
                      <div className="client-body d-block text-center">
                        <h6>Mahubab Hasan</h6>
                        <Rating star={4} />
                        <p>
                          "But I must explain to you how all this mistaken idea
                          of denouncing pleasure and praising pain was born and
                          I will give you a complete account of the system, and
                          expound the actual teachings of the great explorer of
                          the truth, the master-builder of human happiness. No
                          one rejects, dislikes, or avoids pleasure itself,
                        </p>
                      </div>
                    </Card.Body>
                  </Card>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </Col>
      </Row>
    </Container>
  )
}

export default OurClients
