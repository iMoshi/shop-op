import { Col, Container, Form, Row, Button } from "react-bootstrap";
import Link from "next/link";

const Email = () => {
  const logo = "/assets/images/no-placeholder/logo.png";
  const profileImage = "/assets/images/profile/user-avatar.png";

  return (
    <div className="content-indent">
      <div className="tt-about-box-02">
        <h1 className="tt-title-subpages">Цахим шуудан</h1>
      </div>

      <Container className="container-fluid-custom-mobile-padding mt-5">
        <Row>
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
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>И-мэйл хаяг баталгаажуулна уу</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter email"
                  className="w-50"
                />
                <Form.Text className="text-muted">
                  Таны мэдээллийг бид чандлан нуух болно
                </Form.Text>
              </Form.Group>
              <div className="text-left">
                <Button class="btn btn-primary" variant="primary" type="submit">
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
  );
};

export default Email;
