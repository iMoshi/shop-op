import { Fragment } from "react";
import Head from "next/head";
import { HomePagesNavData as navContent } from "@data/navbar";
import CartContextProvider from "@global/CartContext";
import CompareContextProvider from "@global/CompareContext";
import ProductsContextProvider from "@global/ProductsContext";
import WishlistContextProvider from "@global/WishlistContext";
import { HeaderThree as Header } from "@components/header";
import { FooterOne as Footer } from "@components/footer";
import "react-tippy/dist/tippy.css";
import "@assets/scss/style.scss";
const logo = "/assets/images/no-placeholder/logo.png";

const Omni = ({ Component, pageProps }) => {
  return (
    <Fragment>
      <Head>
        <title>Omni Smart</title>
      </Head>

      <CartContextProvider>
        <CompareContextProvider>
          <WishlistContextProvider>
            <ProductsContextProvider>
              <Header
                logo={logo}
                dark={false}
                navbar={true}
                navData={navContent}
                showNotificationBar={false}
              />
              <Component {...pageProps} />
              <Footer logo={logo} newsletter={true} />
            </ProductsContextProvider>
          </WishlistContextProvider>
        </CompareContextProvider>
      </CartContextProvider>
    </Fragment>
  );
};

export default Omni;
