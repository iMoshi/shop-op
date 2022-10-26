import Head from "next/head";
import { Fragment } from "react";
import Breadcrumb from "@components/ui/breadcrumb";
import { Col, Container, Row } from "react-bootstrap";
import { ContentWrapperOne as ContentWrapper } from "@components/wrapper";

const PageAbout = () => {
  const logo = "/assets/images/no-placeholder/logo.png";

  return (
    <Fragment>
      <Head>
        <title>Бидний тухай</title>
        <meta name="description" content="react" />
      </Head>

      <ContentWrapper>
        <Breadcrumb />
        <div className="content-indent">
          <Container className="container-fluid-custom-mobile-padding">
            {/* <Row>
              <Col md={11} lg={9}> */}
            <div className="tt-about-box-02">
              <h1 className="tt-title-subpages">Бидний тухай</h1>
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
              <Row>
                <Col md={12}>
                  <h5 className="tt-title">Бидний эрхэм зорилго</h5>
                  <div className="width-90">
                    <p className="mt-0">
                      Технозон ХХК нь 2014 онд Samsung брэндийн албан ёсны
                      дистрибьютер компаниар байгуулагдаж Samsung-ийн албан ёсны
                      сүлжээ дэлгүүрүүдийг байгуулсан билээ. 2014 оноос хойш
                      тасралтгүй үйл ажиллагаагаа явуулж гар утасны худалдан
                      авалт, гар утасны хэрэглээг цоо шинэ түвшинд авчирч гар
                      утас хэрэглэгчдийн зан төлөвийг өөрчилж чадсан юм. 2014
                      онд Samsung брэндийн 1 албан ёсны дэлгүүр байсан бол 2019
                      онд буюу 5 жилийн дотор Улаанбаатар хотод 7 салбар, хөдөө
                      орон нутагт 3-н салбартайгаар үйл ажиллагаагаа явуулж,
                      бүтээгдэхүүнийхээ нэр төрөлийг телевизор, гар утасны
                      дагалдах хэрэгсэл нэмж өргөжүүлсэн. 2018 онд гар утасны
                      дагалдах хэрэгслээрээ зах зээлд тэргүүлэгч Romoss
                      Technology компанитай гэрээ байгуулж Romoss брэндийн гар
                      утасны дагалдах хэрэгслийг албан ёсны эрхтэйгээр Технозон
                      ХХК-ийн вэб сайт болон Монголын томоохон онлайн худалдааны
                      сайтуудаар худалдаалж эхэлсэн. Мөн 2019 онд сүүлийн үед
                      дэлхийн зах зээлд гар утасны бизнесээрээ хүчтэй орж ирсэн
                      Huawei брэндийн дистрибьютер болж албаг ёсны дэлгүүрүүдийг
                      зах зээлд амжиллтай байршуулж Скай тэди, И-март-1,
                      И-март-2 зэрэг 3 салбарын үйл ажиллагааг эхлүүлсэн. Бид
                      цаашид дэлхийн шилдэг, тэргүүлэгч технологийн брэндүүдийг
                      Монголдоо албан ёсны эрхтэйгээр нэвтрүүлж, хэрэглэгчдийн
                      эрх ашиг, сэтгэл ханамж болон хэрэглээний соёлыг улам
                      дээшлүүлж хамгийн чанартай, хурдан шууртай бүтээгдэхүүн
                      үйлчилгээг нийгмийн бүх давхаргын хэрэглэгчдэд хүрч
                      үзүүлнэ.
                    </p>
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

export default PageAbout;
