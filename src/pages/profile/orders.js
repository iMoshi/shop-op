import Head from "next/head";
import { Fragment } from "react";
import Breadcrumb from "@components/ui/breadcrumb";
import { Col, Container, Row, Table } from "react-bootstrap";
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
        <h1 className="tt-title-subpages">Миний захиалгууд</h1>
      </div>

      <Container className="container-fluid-custom-mobile-padding mt-5">
        <Row>
          <div className="row">
            <Col sm={4}>
              <div className="leftColumn">
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
                  <Row>
                    <Row>
                      <Col>Бүгд</Col>
                      <Col>Төлбөр хүлээгдэж буй</Col>
                      <Col>Баталгаажсан</Col>
                      <Col>Хүргэгдсэн</Col>
                      <Col>Зээлээр</Col>
                      <Col>Цуцлагдсан</Col>
                    </Row>
                    <div>
                      <Table responsive="md">
                        <thead>
                          <tr>
                            <th>Огноо</th>
                            <th>Захиалгын дугаар</th>
                            <th>Төлөв</th>
                            <th>Зураг</th>
                            <th>Дүн</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>2022-07-05</td>
                            <td>10000</td>
                            <td>Цуцлагдсан</td>
                            <td></td>
                            <td>120000</td>
                          </tr>
                        </tbody>
                      </Table>
                      <Table responsive="md">
                        <thead>
                          <tr>
                            <th>Огноо</th>
                            <th>Захиалгын дугаар</th>
                            <th>Төлөв</th>
                            <th>Зураг</th>
                            <th>Дүн</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>2022-06-25</td>
                            <td>10001</td>
                            <td>Хүргэгдсэн</td>
                            <td></td>
                            <td>95000</td>
                          </tr>
                        </tbody>
                      </Table>
                    </div>
                  </Row>
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
