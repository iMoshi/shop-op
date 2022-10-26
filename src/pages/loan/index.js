import Head from "next/head";
import { Fragment } from "react";
import Breadcrumb from "@components/ui/breadcrumb";
import { Col, Container, Row } from "react-bootstrap";
import { HeaderThree as Header } from "@components/header";
import { FooterOne as Footer } from "@components/footer";
import { HomePagesNavData as navContent } from "@data/navbar";
import { ContentWrapperOne as ContentWrapper } from "@components/wrapper";

const PageLoan = () => {
  const logo = "/assets/images/no-placeholder/logo.png";

  return (
    <Fragment>
      <Head>
        <title>Зээлийн нөхцөл</title>
        <meta name="description" content="react" />
      </Head>

      <ContentWrapper>
        <Breadcrumb />
        <div className="content-indent">
          <Container className="container-fluid-custom-mobile-padding">
            {/* <Row>
              <Col md={11} lg={9}> */}
            <div className="tt-about-box-02">
              <h1 className="tt-title-subpages">Зээлийн нөхцөл</h1>
            </div>
            {/* </Col>
            </Row> */}
          </Container>

          <div className="container-fluid-custom mt-5">
            <div className="tt-col-img">
              <Row>
                <Col md={3}></Col>
                <Col md={6}>
                  <img
                    src="/assets/images/custom/about2-img-01.jpg"
                    alt="moni"
                  />
                </Col>

                <Col md={3}></Col>
              </Row>
            </div>
          </div>

          <Container className="container-fluid-custom-mobile-padding mt-5">
            <div className="tt-about02-col-list">
              <Row></Row>
            </div>
          </Container>
        </div>
      </ContentWrapper>
    </Fragment>
  );
};

export default PageLoan;
