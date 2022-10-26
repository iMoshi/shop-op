import Head from "next/head";
import { useRouter } from "next/router";
import { Fragment, useContext } from "react";
import Breadcrumb from "@components/ui/breadcrumb";
import ShopGrid from "@components/shop/ShopGrid";
import { HeaderOne as Header } from "@components/header";
import { FooterOne as Footer } from "@components/footer";
import { ProductsContext } from "@global/ProductsContext";
import { HomePagesNavData as navContent } from "@data/navbar";
import { ContentWrapperOne as ContentWrapper } from "@components/wrapper";

const PageSearch = () => {
  const { products } = useContext(ProductsContext);
  const logo = "/assets/images/no-placeholder/logo.png";
  const router = useRouter();
  const { q } = router.query;
  const filteredProducts = products.filter((val) => {
    if (q === "") {
      return val;
    } else if (val.name.toLowerCase().includes(q?.toLowerCase())) {
      return val;
    }
  });

  return (
    <Fragment>
      <Head>
        <title>{`Search: ${filteredProducts?.length} results found for "${q}" - Omni Smart :: E commerce`}</title>
        <meta name="description" content="Omni Smart" />
      </Head>

      <ContentWrapper>
        <Breadcrumb />

        <ShopGrid
          sidebar={false}
          containerFluid={false}
          products={filteredProducts}
        />
      </ContentWrapper>
    </Fragment>
  );
};

export default PageSearch;
