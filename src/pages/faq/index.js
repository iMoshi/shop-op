import Head from "next/head";
import { Fragment } from "react";
import FAQItem from "@components/faq";
import Breadcrumb from "@components/ui/breadcrumb";
import { Col, Container, Row } from "react-bootstrap";
import { HeaderThree as Header } from "@components/header";
import { FooterOne as Footer } from "@components/footer";
import { HomePagesNavData as navContent } from "@data/navbar";
import { ContentWrapperOne as Wrapper } from "@components/wrapper";

const PageFaq = () => {
  const logo = "/assets/images/no-placeholder/logo.png";

  return (
    <Fragment>
      <Head>
        <title>FAQ</title>
      </Head>

      <Wrapper>
        <Breadcrumb />

        <div className="container-indent">
          <Container className="container-fluid-custom-mobile-padding">
            <h1 className="tt-title-subpages">Түгээмэл асуулт, хариулт</h1>

            <div className="faq-group-wrap">
              <div className="faq-topic-item">
                <h2 className="tt-base-color small">Үндсэн мэдээлэл</h2>
                <div className="tt-box-faq-listing">
                  <Row>
                    <Col md={6}>
                      <FAQItem title="Системд бүртгүүлэх ямар ач холбогдолтой вэ?">
                        Та Технозон цахим худалдааны системд бүртгүүлснээр бараа
                        бүтээгдэхүүн захиалах, хүслийн жагсаалт үүсгэх, өөрийн
                        захиалгыг хянах, борлуулалтын урамшуулал авах боломжтой
                        болно.
                        {/* <p>
                          Ut enim ad minim veniam, quis nostrud exercitation
                          ullamco laboris nisi ut aliquip ex ea commodo
                          consequat. Duis aute irure dolor in reprehenderit.
                        </p> */}
                      </FAQItem>
                    </Col>

                    <Col md={6}>
                      <FAQItem title="Захиалгыг баталгаажуулах, цуцлах, нөхцөлүүд">
                        Системийн баруун дээд буланд байршиж байгаа нэвтрэх
                        хэсгийг сонгон нэвтрэх болон бүртгүүлэх гэсэн сонголтын
                        аль нэгийг сонгож бүртгүүлнэ. Та өөрийн facebook хаягаар
                        шууд бүртгүүлж нэвтрэх боломжтой. Хэрэв та facebook
                        хаяггүй бол өөрийн цахим шуудангийн хаяг /e-mail/, нууц
                        үгээ шинээр үүсгэн бүртгүүлэх боломжтой юм. Хэрэглэгч
                        Технозон-д бүртгүүлэх үед цахим шуудангийн хаяг болон
                        хэрэглэгчийн үүсгэсэн нууц үг системд хадгалагдана.
                        Хэрэглэгчийн оруулсан нууц үгийг систем шифрлэн кодчилж
                        хадгалах тул хэрэглэгчээс өөр хүн нууц үгийг мэдэх
                        боломжгүй юм.
                      </FAQItem>
                    </Col>

                    <Col md={6}>
                      <FAQItem title="Захиалгын төлбөр төлөх">
                        Нэгэнт цуцлагдсан захиалгыг дахин сэргээх боломжгүй
                        бөгөөд хэрэглэгч хүсвэл захиалгыг дахин шинээр хийх
                        боломжтой. Та 48 цагийн дотор төлбөрийг гүйцэтгэж
                        чадаагүй, захиалга цуцлагдсан тохиолдолд технозон ямар
                        нэгэн хариуцлага хүлээхгүй болно. Та ажлын өдрүүдийн
                        ажлын цагаар утсаар холбогдож мэдээлэл авах, тодруулах
                        бүрэн боломжтой.
                      </FAQItem>
                    </Col>

                    <Col md={6}>
                      <FAQItem title="Ямар төрлөөр хүргэлт хийх вэ?">
                        Lorem ipsum dolor sit amet conse ctetur adipisicing
                        elit, sed do eiusmod tempor incididunt ut labore et
                        dolore magna aliqua. Ut enim ad minim veniam, quis
                        nostrud exercitation ullamco laboris nisi ut aliquip.
                        Lorem ipsum dolor sit amet conse ctetur adipisicing
                        elit, sed do eiusmod tempor incididunt ut labore et
                        dolore magna aliqua. Ut enim ad minim veniam, quis
                        nostrud exercitation ullamco laboris nisi ut aliquip ex
                        ea commodo consequat. Duis aute irure dolor in
                        reprehenderit in voluptate velit esse cillum dolore
                        fugiat pariatur.
                      </FAQItem>
                    </Col>
                  </Row>
                </div>
              </div>

              <div className="faq-topic-item">
                <h2 className="tt-base-color small">Төлбөр төлөх</h2>
                <div className="tt-box-faq-listing">
                  <Row>
                    <Col md={6}>
                      <FAQItem title="Төлбөр төлөх боломжууд?">
                        Lorem ipsum dolor sit amet conse ctetur adipisicing
                        elit, sed do eiusmod tempor incididunt ut labore et
                        dolore magna aliqua. Ut enim ad minim veniam, quis
                        nostrud exercitation ullamco laboris nisi ut aliquip ex
                        ea commodo consequat. Duis aute irure dolor in
                        reprehenderit in voluptate velit esse cillum dolore eu
                        fugiat.
                      </FAQItem>
                    </Col>

                    <Col md={6}>
                      <FAQItem title="Найдвартай худалдан авалтын орчин">
                        Lorem ipsum dolor sit amet conse ctetur adipisicing
                        elit, sed do eiusmod tempor incididunt ut labore et
                        dolore magna aliqua. Ut enim ad minim veniam, quis
                        nostrud exercitation ullamco laboris nisi ut aliquip.
                      </FAQItem>
                    </Col>
                  </Row>
                </div>
              </div>

              <div className="faq-topic-item">
                <h2 className="tt-base-color small">Захиалга болон буцаалт</h2>
                <div className="tt-box-faq-listing">
                  <Row>
                    <Col md={6}>
                      <FAQItem title="Хэрхэн буцаах вэ?">
                        Lorem ipsum dolor sit amet conse ctetur adipisicing
                        elit, sed do eiusmod tempor incididunt ut labore et
                        dolore magna aliqua. Ut enim ad minim veniam, quis
                        nostrud exercitation ullamco laboris nisi ut aliquip ex
                        ea commodo consequat. Duis aute irure dolor in
                        reprehenderit in voluptate velit esse cillum dolore eu
                        fugiat.
                      </FAQItem>
                    </Col>

                    <Col md={6}>
                      <FAQItem title="Захиалгаа цуцлах?">
                        Lorem ipsum dolor sit amet conse ctetur adipisicing
                        elit, sed do eiusmod tempor incididunt ut labore et
                        dolore magna aliqua. Ut enim ad minim veniam, quis
                        nostrud exercitation ullamco laboris nisi ut aliquip.
                      </FAQItem>
                    </Col>

                    <Col md={6}>
                      <FAQItem title="Захиалга өгөхөд бүртгэл хэрэгтэй юу?">
                        Conse ctetur adipisicing elit, sed do eiusmod tempor
                        incididunt ut labore et dolore magna aliqua. Ut enim ad
                        minim veniam, quis nostrud exercitation ullamco laboris
                        nisi ut aliquip ex ea commodo consequat. Lorem ipsum
                        dolor sit amet conse ctetur adipisicing elit, sed do
                        eiusmod tempor incididunt ut labore et dolore magna
                        aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat.
                      </FAQItem>
                    </Col>

                    <Col md={6}>
                      <FAQItem title="Захиалсан бараагаа хянах?">
                        Conse ctetur adipisicing elit, sed do eiusmod tempor
                        incididunt ut labore et dolore magna aliqua. Ut enim ad
                        minim veniam, quis nostrud exercitation ullamco laboris
                        nisi ut aliquip ex ea commodo consequat. Lorem ipsum
                        dolor sit amet conse ctetur adipisicing elit, sed do
                        eiusmod tempor incididunt ut labore et dolore magna
                        aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat.
                      </FAQItem>
                    </Col>
                  </Row>
                </div>
              </div>
            </div>
          </Container>
        </div>
      </Wrapper>
    </Fragment>
  );
};

export default PageFaq;
