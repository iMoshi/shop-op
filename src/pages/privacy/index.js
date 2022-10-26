import Head from "next/head";
import { Fragment } from "react";
import Breadcrumb from "@components/ui/breadcrumb";
import { Col, Container, Row } from "react-bootstrap";
import Accordion from "react-bootstrap/Accordion";
import { HeaderThree as Header } from "@components/header";
import { FooterOne as Footer } from "@components/footer";
import { HomePagesNavData as navContent } from "@data/navbar";
import { ContentWrapperOne as ContentWrapper } from "@components/wrapper";

const PagePrivacy = () => {
  const logo = "/assets/images/no-placeholder/logo.png";

  return (
    <Fragment>
      <Head>
        <title>Нууцлалын бодлого</title>
        <meta name="description" content="react" />
      </Head>

      <ContentWrapper>
        <Breadcrumb />
        <div className="content-indent">
          <Container className="container-fluid-custom-mobile-padding">
            {/* <Row>
              <Col md={11} lg={9}> */}
            <div className="tt-about-box-02">
              <h1 className="tt-title-subpages">Нууцлалын бодлого</h1>
            </div>
            {/* </Col>
            </Row> */}
          </Container>

          <Container className="container-fluid-custom-mobile-padding mt-5">
            <div className="tt-about02-col-list">
              <Row>
                <Col md={12}>
                  <h5 className="tt-title">Нууцлалын бодлого</h5>
                  <div className="width-90">
                    <Accordion defaultActiveKey="0">
                      <Accordion.Item eventKey="0">
                        <Accordion.Header>Нэг. Ерөнхий зүйл</Accordion.Header>
                        <Accordion.Body>
                          <ul>
                            <li>
                              Технозон цахим худалдааны сайт нь “ТЕХНО ЗОН”
                              ХХК-ийн албан ёсны вэб сайт бөгөөд, энэхүү
                              үйлчилгээний нөхцөл нь уг онлайн вэб сайтаар
                              үйлчлүүлэх, худалдан авалт хийхтэй холбоотой үүсэх
                              харилцааг зохицуулахад оршино.
                            </li>
                            <li>
                              Технозон цахим худалдааны сайт нь “ТЕХНО ЗОН”
                              ХХК-ийн албан ёсны вэб сайт бөгөөд, энэхүү
                              үйлчилгээний нөхцөл нь уг онлайн вэб сайтаар
                              үйлчлүүлэх, худалдан авалт хийхтэй холбоотой үүсэх
                              харилцааг зохицуулахад оршино.
                            </li>
                            <li>
                              Технозон цахим худалдааны сайт нь “ТЕХНО ЗОН”
                              ХХК-ийн албан ёсны вэб сайт бөгөөд, энэхүү
                              үйлчилгээний нөхцөл нь уг онлайн вэб сайтаар
                              үйлчлүүлэх, худалдан авалт хийхтэй холбоотой үүсэх
                              харилцааг зохицуулахад оршино.
                            </li>
                          </ul>
                        </Accordion.Body>
                      </Accordion.Item>
                      <Accordion.Item eventKey="1">
                        <Accordion.Header>
                          Хоёр. Хэрэглэгчийн анхаарах зүйлс
                        </Accordion.Header>
                        <Accordion.Body>
                          <ul>
                            <li>
                              Хэрэглэгч худалдан авсан бараа бүтээгдэхүүнээ
                              албаны болон гэрийн хаягаар хүргүүлэх боломжтой.
                            </li>
                            <li>
                              Хэрэглэгч худалдан авсан бараа бүтээгдэхүүнээ
                              албаны болон гэрийн хаягаар хүргүүлэх боломжтой.
                            </li>
                            <li>
                              Хэрэглэгч худалдан авсан бараа бүтээгдэхүүнээ
                              албаны болон гэрийн хаягаар хүргүүлэх боломжтой.
                            </li>
                            <li>
                              Хэрэглэгч худалдан авсан бараа бүтээгдэхүүнээ
                              албаны болон гэрийн хаягаар хүргүүлэх боломжтой.
                            </li>
                          </ul>
                        </Accordion.Body>
                      </Accordion.Item>
                    </Accordion>
                  </div>
                </Col>
              </Row>
            </div>
          </Container>
        </div>
      </ContentWrapper>
    </Fragment>
  );
};

export default PagePrivacy;
