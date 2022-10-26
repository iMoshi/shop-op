import Head from "next/head";
import Link from "next/link";
import { Fragment, useContext, useEffect, useState } from "react";
import { CategoryTypeWiseOne as Products } from "@components/products";
import { getProductsBySkin } from "@utils/product";
import { Col, Container, Row } from "react-bootstrap";
import Parallax, { Layer } from "react-parallax-scroll";
import { ProductsContext } from "@global/ProductsContext";
import { HomePagesNavData as navContent } from "@data/navbar";
import promoBanners from "@data/promo-banners/skin-phones.json";
import { ContentWrapperOne as ContentWrapper } from "@components/wrapper";
import { SliderOne as HeroBanner } from "@components/slider";
import sliderData from "@data/slider/skin-furniture.json";
import { CategoriesSkinFurniture as Categories } from "@components/categories";
import { PromoBannerFurniture as PromotionBanner } from "@components/promo-banners";

import {
  PromoTwo as PromoBanner,
  PromoThree as Promo,
} from "@components/promo";

const HomeSkinPhones = () => {
  const logo = "/assets/images/skins/phones/logo.png";

  const { products } = useContext(ProductsContext);
  const [dataArr, useData] = useState([]);
  // const productsFurniture = getProductsBySkin(products, "furniture");

  return (
    <Fragment>
      <Head>
        <title>Omni Smart Phone Shop</title>
      </Head>

      <div className="home-skin-phones">
        {/* <Header
          logo={logo}
          dark={false}
          navbar={true}
          navData={navContent}
          showNotificationBar={false}
        /> */}

        <ContentWrapper>
          {/* Hero Banner */}
          <div className="container-indent">
            {/* <HeroBanner
              data={sliderData}
              className="nomargin"
              sliderWrapper="slider-style-6"
            /> */}
            <Categories className="mt-3" />
            {/* <Products
              category="furniture"
              products={productsFurniture}
              productClass="product-nohover"
              className="furniture-products"
            />
            <PromotionBanner /> */}
            <ContentWrapper>
              {/* <Products
                category="furniture"
                products={productsFurniture}
                productClass="product-nohover"
                className="furniture-products"
              /> */}
            </ContentWrapper>

            <Container fluid>
              <Parallax>
                <Layer
                  settings={{ speed: 0.2, type: "backgroundY" }}
                  className="tt-promo-fullwidth tt-promo-parallax bg-position-bottom"
                  style={{
                    backgroundImage:
                      "url(/assets/images/skins/phones/promo/snowboard.jpg)",
                  }}
                >
                  <div className="tt-description tt-point-v-t">
                    <div className="tt-description-wrapper">
                      <div className="tt-title-large">Iphone 13 pro max</div>
                      <div className="tt-title-small">
                        <span className="tt-base-color">
                          Say hello to the future.
                        </span>
                      </div>
                      <Link href="/shop">
                        <a className="btn btn-xl">SHOP NOW!</a>
                      </Link>
                    </div>
                  </div>
                </Layer>
              </Parallax>
            </Container>
          </div>

          {/* Promo Banner */}
          {/* <PromoBanner
            btn={true}
            btnLink="/shop"
            title="Iphone X."
            containerFluid={true}
            className="tt-offset-small"
            subtitle="The new super powerful."
            thumb="/assets/images/skins/phones/promo/index-promo-img-02.jpg"
          /> */}

          <div className="container-indent">
            <Container fluid>
              <Row className="tt-layout-promo-box">
                {promoBanners.map((banner) => (
                  <Col md={6} key={banner.id}>
                    <Promo
                      title={banner.title}
                      thumb={banner.thumb}
                      subtitle={banner.subtitle}
                    />
                  </Col>
                ))}
              </Row>
            </Container>
          </div>
        </ContentWrapper>
      </div>
    </Fragment>
  );
};

export default HomeSkinPhones;
