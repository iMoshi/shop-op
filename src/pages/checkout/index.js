import Head from "next/head";
import { Fragment } from "react";
import Breadcrumb from "@components/ui/breadcrumb";
import CheckoutPageContent from "@components/checkout";
import { HeaderOne as Header } from "@components/header";
import { FooterOne as Footer } from "@components/footer";
import { HomePagesNavData as navContent } from "@data/navbar";
import { ContentWrapperOne as ContentWrapper } from "@components/wrapper";

const CheckoutPage = () => {
  const logo = "/assets/images/no-placeholder/logo.png";

  return (
    <Fragment>
      <Head>
        <title>Checkout</title>
      </Head>

      <ContentWrapper>
        <Breadcrumb />

        <div className="checkout-page-content content-indent">
          <CheckoutPageContent />
        </div>
      </ContentWrapper>
    </Fragment>
  );
};

export default CheckoutPage;
