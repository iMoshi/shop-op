import Head from "next/head";
import { Fragment, useContext } from "react";
import Breadcrumb from "@components/ui/breadcrumb";
import { CartContext } from "@global/CartContext";
import EmptyCart from "@components/cart/EmptyCart";
import { Container, Col, Row } from "react-bootstrap";
import { HeaderOne as Header } from "@components/header";
import { FooterOne as Footer } from "@components/footer";
import CartProducts from "@components/cart/CartProducts";

import CalculateShipping from "@components/cart/CalculateShipping";
import { ContentWrapperOne as ContentWrapper } from "@components/wrapper";

const CartPage = () => {
  const logo = "/assets/images/no-placeholder/logo.png";
  const { shoppingCart } = useContext(CartContext);

  return (
    <Fragment>
      <Head>
        <title>Shopping Cart</title>
      </Head>

      <ContentWrapper>
        <Breadcrumb />

        <div className="shopping-cart-wrapper content-indent">
          {shoppingCart.length > 0 && (
            <Container>
              <h1 className="tt-title-subpages noborder">SHOPPING CART</h1>

              <Row>
                <Col xl={8}>
                  <CartProducts />
                </Col>

                <Col xl={4}>
                  <CalculateShipping />
                </Col>
              </Row>
            </Container>
          )}
        </div>

        {shoppingCart.length <= 0 && (
          <div className="empty-cart-wrapper">
            <EmptyCart />
          </div>
        )}
      </ContentWrapper>
    </Fragment>
  );
};

export default CartPage;
