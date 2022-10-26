import { Col, Container, Row } from "react-bootstrap";
import { PromoOne as Promo } from "@components/promo";
import SectionTitle from "@components/ui/section-title";

const CategoriesSkinFurniture = ({ className }) => {
  return (
    <div className={`container-indent ${className ? className : ""}`}>
      <Container fluid>
        <Row className="flex-sm-row-reverse tt-layout-promo-box">
          <Col md={6}>
            <Row>
              <Col sm={6}>
                <Promo
                  heading="Ухаалаг цаг"
                  link="/product/category/smart-watch"
                  className="tt-one-child hover-type-4"
                  thumb="/assets/images/skins/phones/promo/1.jpeg"
                />
              </Col>

              <Col sm={6}>
                <Promo
                  heading="Чихэвч"
                  link="/product/category/furniture"
                  className="tt-one-child hover-type-4"
                  thumb="/assets/images/skins/phones/promo/2.jpeg"
                />
              </Col>

              <Col>
                <Promo
                  heading="Дагалдах хэрэгсэл"
                  link="/product/category/furniture"
                  className="tt-one-child hover-type-4"
                  thumb="/assets/images/skins/phones/promo/snowboard.jpg"
                />
              </Col>
            </Row>
          </Col>

          <Col md={6}>
            <Promo
              heading="Ухаалаг утас"
              link="/product/category/furniture"
              className="tt-one-child hover-type-4"
              thumb="/assets/images/skins/phones/promo/2.jpeg"
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default CategoriesSkinFurniture;
