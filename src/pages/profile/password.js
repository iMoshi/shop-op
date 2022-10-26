import { Col, Container, Row, Form } from "react-bootstrap";
import Link from "next/link";
import Button from "react-bootstrap/Button";

const Profile = () => {
  const logo = "/assets/images/no-placeholder/logo.png";
  const profileImage = "/assets/images/profile/user-avatar.png";

  return (
    <div className="content-indent">
      <div className="tt-about-box-02">
        <h1 className="tt-title-subpages">Нууц үг солих</h1>
      </div>

      <Container className="container-fluid-custom-mobile-padding mt-5">
        <Row>
          <div className="row">
            <Col sm={4}>
              <div className="leftColumn aside column-close col-lg-10 col-md-10">
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

                <div className="tt-collapse">
                  <Link href="/profile/password">
                    <a>Нууц үг солих</a>
                  </Link>
                </div>
              </div>
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
                  <Row>
                    <Form.Group
                      as={Col}
                      controlId="formBasicPassword"
                      className="mb-3"
                    >
                      <Form.Label>Шинэ нууц үгээ оруулна уу</Form.Label>
                      <Form.Control type="password" className="w-50" />
                    </Form.Group>
                  </Row>
                  <Row>
                    <Form.Group as={Col} controlId="formBasicPassword">
                      <Form.Label>Шинэ нууц үгээ дахин оруулна уу</Form.Label>
                      <Form.Control type="password" className="w-50" />
                    </Form.Group>
                  </Row>
                  <div className="text-center">
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
  );
};

export default Profile;
