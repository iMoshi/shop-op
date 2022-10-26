import Head from "next/head";
import { Fragment } from "react";
import { getBlogPosts } from "@utils/blog";
import Breadcrumb from "@components/ui/breadcrumb";
import { BlogMasonry } from "@components/blog-page";
import { HeaderOne as Header } from "@components/header";
import { FooterOne as Footer } from "@components/footer";
import { HomePagesNavData as navContent } from "@data/navbar";
import { ContentWrapperOne as ContentWrapper } from "@components/wrapper";

const PageBlog = ({ blogs }) => {
  const logo = "/assets/images/no-placeholder/logo.png";

  return (
    <Fragment>
      <Head>
        <title>Мэдээ</title>
        <meta
          name="description"
          content="React Next JS Multipurpose eCommerce Template"
        />
      </Head>

      <ContentWrapper>
        <Breadcrumb />
        <BlogMasonry title="Мэдээ мэдээлэл" blogs={blogs} fluid={false} />
      </ContentWrapper>
    </Fragment>
  );
};

export async function getStaticProps() {
  const blogs = getBlogPosts(
    ["title", "excerpt", "date", "author", "thumb", "slug", "categories"],
    -1
  );

  return {
    props: {
      blogs: blogs,
    },
  };
}

export default PageBlog;
