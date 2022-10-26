import Head from "next/head";
import { Fragment } from "react";
import Breadcrumb from "@components/ui/breadcrumb";
import { Col, Container, Row, Form, Button } from "react-bootstrap";
import { HeaderThree as Header } from "@components/header";
import { FooterOne as Footer } from "@components/footer";
import { HomePagesNavData as navContent } from "@data/navbar";
import { ContentWrapperOne as ContentWrapper } from "@components/wrapper";
import Link from "next/link";

const Profile = () => {
  const logo = "/assets/images/no-placeholder/logo.png";
  const profileImage = "/assets/images/profile/user-avatar.png";

  return (
    <div className="content-indent">
      <div className="tt-about-box-02">
        <h1 className="tt-title-subpages">Гар утас</h1>
      </div>

      <Container className="container-fluid-custom-mobile-padding mt-5">
        <Row>
          <div className="row">
            <Col sm={4}>
              <div className="leftColumn aside column-close col-lg-10 col-md-10">
                {/* <img src= {profileImage } /> */}
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
                    <Form.Group className="mb-3" controlId="formBasicPhone">
                      <Form.Label>Гар утас баталгаажуулах</Form.Label>
                      <Form.Control
                        className="w-50"
                        type="phone"
                        placeholder="Гар утасны дугаараа оруулна уу"
                        value="99991111"
                      />
                      <Form.Text className="text-muted">
                        Хэрэв та энэ дугаарыг ашиглахаа больсон бол дугаар солих
                        товч дээр дарна уу
                      </Form.Text>
                    </Form.Group>
                    <div className="text-left">
                      <Button
                        variant="primary"
                        type="submit"
                        class="btn btn-primary"
                      >
                        Дугаар солих
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
