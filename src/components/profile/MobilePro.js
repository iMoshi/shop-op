import { Col, Container, Form, Row } from "react-bootstrap";
import Link from "next/link";
import Button from "react-bootstrap/Button";
import PropTypes from "prop-types";

const MobilePro = ({ className, active }) => {
  return (
    <nav className={className}>
      <div className={`content-indent ${active ? "active" : ""}`}>
        <Container className="container-fluid-custom-mobile-padding mt-8">
          <div className="tt-about-box-02">
            <h1 className="tt-title-subpages">Хувийн мэдээлэл</h1>
          </div>
          <Row className="row">
            <Row className="tt-col-img">
              <Col md={5}>
                <img src="/assets/images/profile/user1.png" alt="moni" />
              </Col>
            </Row>
            <Col>
              <Row className="row">
                <Col>
                  <Link href="/profile">
                    <i className="icon-f-94"></i>
                  </Link>
                </Col>
                <Col>
                  <Link href="/profile/orders">
                    <i className="icon-f-47"></i>
                  </Link>
                </Col>
                <Col>
                  <div>
                    <Link href="/profile/wishlist">
                      <i className="icon-f-89"></i>
                    </Link>
                  </div>
                </Col>
                <Col>
                  <div>
                    <Link href="/profile/sale">
                      <i className="icon-f-50"></i>
                    </Link>
                  </div>
                </Col>
              </Row>
              <Form>
                <Row className="mb-3">
                  <Form.Group as={Col} controlId="formGridEmail">
                    <Form.Label>Нэр*</Form.Label>
                    <Form.Control type="name" />
                  </Form.Group>
                  <Form.Group as={Col} controlId="formGridPassword">
                    <Form.Label>Овог*</Form.Label>
                    <Form.Control type="name" />
                  </Form.Group>
                </Row>
                <Row className="mb-3">
                  <Form.Group as={Col} controlId="formGridEmail">
                    <Form.Label>Хүйс*</Form.Label>
                    <Form.Control type="gender" />
                  </Form.Group>
                  <Form.Group as={Col} controlId="formGridDOB">
                    <Form.Label>Төрсөн өдөр*</Form.Label>
                    <Form.Control type="name" />
                  </Form.Group>
                </Row>
                <div className="text-right">
                  <Button
                    class="btn btn-primary"
                    variant="primary"
                    type="submit"
                  >
                    Мэдээллээ хадгалах
                  </Button>
                </div>
              </Form>
              <Row className="row">
                <div className="col-xl-4 col-lg-2 col-md-6">
                  <div className="verify-section">
                    <Link href="/profile">
                      <a className="tt-collapse-title">Хувийн мэдээлэл</a>
                    </Link>
                  </div>
                </div>
                <div className="verify-section">
                  <Link href="/profile/phone">
                    <a className="tt-collapse-title">Гар утас</a>
                  </Link>
                </div>
                <div className="verify-section">
                  <Link href="/profile/email">
                    <a className="tt-collapse-title">Цахим шуудан</a>
                  </Link>
                </div>
                <div className="verify-section">
                  <Link href="/profile/password">
                    <a className="tt-collapse-title">Нууц үг</a>
                  </Link>
                </div>
              </Row>
            </Col>
          </Row>
        </Container>
      </div>
    </nav>
  );
};

MobilePro.propTypes = {
  className: PropTypes.string,
};

export default MobilePro;
