import Head from "next/head";
import { Fragment, useContext } from "react";
import ShopGrid from "@components/shop/ShopGrid";
import Breadcrumb from "@components/ui/breadcrumb";
import { HeaderThree as Header } from "@components/header";
import { FooterOne as Footer } from "@components/footer";
import { ProductsContext } from "@global/ProductsContext";
import { HomePagesNavData as navContent } from "@data/navbar";
import { ContentWrapperOne as ContentWrapper } from "@components/wrapper";
import { getServerSideProps } from "@global/serverProp";

const PageShop = (newProductItem) => {
  const { products } = newProductItem;

  return (
    <Fragment>
      <Head>
        <title>Бүх бараа</title>
        <meta name="description" content="Бүх бараа" />
      </Head>
      <ContentWrapper>
        <Breadcrumb />

        <ShopGrid
          sidebar={true}
          products={newProductItem}
          sidebarPosition="left"
          containerFluid={false}
        />
      </ContentWrapper>
    </Fragment>
  );
};

export default PageShop;

export async function getStaticProps() {
  const res = await fetch(
    `https://meta.omnismart.mn/api/method/moni_store.api.website_item_list`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  const dummy = await res.json();
  const data = dummy.message;

  return {
    props: { newProductItem: data },
  };
}
