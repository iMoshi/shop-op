import Head from "next/head";
import { Fragment } from "react";
import Breadcrumb from "@components/ui/breadcrumb";
import { Col, Container, Row } from "react-bootstrap";
import Accordion from "react-bootstrap/Accordion";
import { HeaderThree as Header } from "@components/header";
import { FooterOne as Footer } from "@components/footer";
import { HomePagesNavData as navContent } from "@data/navbar";
import { ContentWrapperOne as ContentWrapper } from "@components/wrapper";

const PageBranch = () => {
  const logo = "/assets/images/no-placeholder/logo.png";

  return (
    <Fragment>
      <Head>
        <title>Салбарын байршил</title>
        <meta name="description" content="react" />
      </Head>

      <ContentWrapper>
        <Breadcrumb />
        <div className="content-indent">
          <Container className="container-fluid-custom-mobile-padding">
            {/* <Row>
              <Col md={11} lg={9}> */}
            <div className="tt-about-box-02">
              <h1 className="tt-title-subpages">Салбарын байршил</h1>
            </div>
            {/* </Col>
            </Row> */}
          </Container>

          <div className="container-fluid-custom mt-5">
            <div className="tt-col-img">
              <Row>
                <Col md={3}></Col>
                <Col md={3}>
                  <div>
                    <img
                      src="/assets/images/custom/about2-img-02.jpg"
                      alt="moni"
                    />
                    <div></div>
                  </div>
                </Col>
                <Col md={3}>
                  <div
                    style={{
                      textAlign: "right",
                    }}
                  >
                    <p>Чингэлтэй</p>
                    <p>
                      Тэнгис кино театрын замын урд СКАЙ ТЕДИ төвийн 1 давхарт
                    </p>
                    <p>7701-1818</p>
                    <p></p>
                    <p></p>
                    <h4>Holboo barih</h4>
                    <p>Gar utas</p>
                    <p>Dagaldah heregsel</p>
                    <p>Даваа - Баасан : 9:00 - 20:00 </p>
                    <p>Бямба - Ням : 10:00 - 18:00 </p>
                  </div>
                </Col>

                <Col md={3}></Col>
              </Row>
            </div>
          </div>

          <Container className="container-fluid-custom-mobile-padding mt-5">
            <div className="tt-about02-col-list">
              <Row>
                <Col md={12}>
                  <div className="width-90"></div>
                </Col>
              </Row>
            </div>
          </Container>
        </div>
      </ContentWrapper>
    </Fragment>
  );
};

export default PageBranch;
