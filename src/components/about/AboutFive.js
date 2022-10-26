import { Col, Container, Row } from "react-bootstrap";

const AboutFive = ({ className }) => {
  return (
    <div
      className={`container-indent tt-section-wrapper-01 ${
        className ? className : ""
      }`}
    >
      <div className="container-inner">
        <Container>
          <Row className="tt-layout-box04">
            <Col md={6}>
              <div className="col-title">
                <h4 className="tt-title">
                  About
                  <br /> comic book <br /> store
                </h4>
              </div>
            </Col>

            <Col md={6}>
              <div className="col-description">
                <p>Text</p>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default AboutFive;
