import { Col, Container, Form, Row } from "react-bootstrap";
import Link from "next/link";
import Button from "react-bootstrap/Button";
import PropTypes from "prop-types";

const DesktopPro = ({ className, active }) => {
  return (
    <nav className={className}>
      <div className={`content-indent ${active ? "active" : ""}`}>
        <Container className="container-fluid-custom-mobile-padding mt-8">
          <div className="tt-about-box-02">
            <h1 className="tt-title-subpages">Хувийн мэдээлэл</h1>
          </div>
          <Row>
            <div className="row">
              <Col sm={4} className="leftColumn">
                <Row className="tt-col-img">
                  <Col md={5}>
                    <img src="/assets/images/profile/user1.png" alt="moni" />
                  </Col>
                </Row>
                <Row>
                  <div className="tt-collapse">
                    <Link href="/profile">
                      <a>Хувийн мэдээлэл</a>
                    </Link>
                  </div>
                  <div className="tt-collapse">
                    <Link href="/profile/orders">
                      <a>Миний захиалгууд</a>
                    </Link>
                  </div>
                  <div className="tt-collapse">
                    <Link href="/profile/wishlist">
                      <a>Авах хүсэл </a>
                    </Link>
                  </div>
                  <div className="tt-collapse">
                    <Link href="/profile/sale">
                      <a>Хямдарсан үед мэдэгдэх</a>
                    </Link>
                  </div>
                </Row>
              </Col>
              <Col sm={8}>
                <div className="col">
                  <Row className="container-fluid-custom-mobile-padding mt-8">
                    <Col>
                      <div className="tt-collapse">
                        <Link href="/profile">
                          <a>Хувийн мэдээлэл</a>
                        </Link>
                      </div>
                    </Col>
                    <Col>
                      <div className="tt-collapse">
                        <Link href="/profile/phone">
                          <a>Гар утас</a>
                        </Link>
                      </div>
                    </Col>
                    <Col>
                      <div className="tt-collapse">
                        <Link href="/profile/email">
                          <a>Цахим шуудан</a>
                        </Link>
                      </div>
                    </Col>
                    <Col>
                      <div className="tt-colapse">
                        <Link href="/profile/password">
                          <a>Нууц үг</a>
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
                </div>
              </Col>
            </div>
          </Row>
        </Container>
      </div>
    </nav>
  );
};

DesktopPro.propTypes = {
  className: PropTypes.string,
};

export default DesktopPro;
