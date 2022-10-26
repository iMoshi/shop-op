import Head from "next/head";
import { Fragment } from "react";
import products from "@data/products";
import Breadcrumb from "@components/ui/breadcrumb";
import SocialShare from "@components/social-share";
import { RelatedProducts } from "@components/products";
import { FooterOne as Footer } from "@components/footer";
import { HeaderThree as Header } from "@components/header";
import ProductDetails from "@components/product-details";
import { HomePagesNavData as navContent } from "@data/navbar";
import { ContentWrapperOne as ContentWrapper } from "@components/wrapper";

const PageProductDetails = ({ product }) => {
  const { categories, excerpt, tags, name, item_name } = product;
  const slug = `/o/${item_name.toLowerCase().split(" ").join("-")}`;

  const logo = "/assets/images/no-placeholder/logo.png";

  return (
    <Fragment>
      <Head>
        <title>{name}</title>
        <meta name="description" content={excerpt} />
      </Head>

      <ContentWrapper>
        <Breadcrumb />

        <ProductDetails product={product} />

        <SocialShare url={slug} content={name} />

        {/* <RelatedProducts categories={categories} tags={tags} /> */}
      </ContentWrapper>
    </Fragment>
  );
};

export const getStaticProps = async ({ params }) => {
  const res = await fetch(
    `https://meta.omnismart.mn/api/method/moni_store.api.website_item_list`
  );
  const data = await res.json();
  const product = data.message.find(
    (product) =>
      product.item_name.toLowerCase().split(" ").join("-") === params.slug
  );
  return {
    props: {
      product,
    },
  };
};

export const getStaticPaths = async () => {
  const res = await fetch(
    `https://meta.omnismart.mn/api/method/moni_store.api.website_item_list`
  );
  const data = await res.json();

  return {
    paths: data.message.map((product) => {
      return {
        params: {
          slug: product.item_name.toLowerCase().split(" ").join("-"),
        },
      };
    }),
    fallback: false,
  };
};

export default PageProductDetails;
