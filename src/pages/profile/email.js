import { Col, Container, Form, Row, Button } from "react-bootstrap";
import Link from "next/link";

const Profile = () => {
  const logo = "/assets/images/no-placeholder/logo.png";
  const profileImage = "/assets/images/profile/user-avatar.png";

  return (
    <div className="content-indent">
      <div className="tt-about-box-02">
        <h1 className="tt-title-subpages">Цахим шуудан</h1>
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
              </div>
            </Col>
            <Col sm={8}>
              <div className="col">
                <Row>
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
                <Row>
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
                      <Button
                        class="btn btn-primary"
                        variant="primary"
                        type="submit"
                      >
                        Мэдээллээ хадгалах
                      </Button>
                    </div>
                  </Form>
                </Row>
              </div>
            </Col>
          </div>
        </Row>
      </Container>
    </div>
  );
};

export default Profile;
