import Head from "next/head";
import { Fragment } from "react";
import { Container } from "react-bootstrap";
import Breadcrumb from "@components/ui/breadcrumb";
import { ContentWrapperOne as ContentWrapper } from "@components/wrapper";
import { Profi } from "@components/profi";

const PageProfile = () => {
  const logo = "/assets/images/no-placeholder/logo.png";
  return (
    <Fragment>
      <Head>
        <title>Хувийн мэдээлэл</title>
        <meta
          name="description"
          content="React Next JS Multipurpose eCommerce Template"
        />
      </Head>
      <ContentWrapper>
        <Breadcrumb />
        <div className="content-indent">
          <Container>
            <Profi title="Хувийн мэдээлэл" fluid={false} />
          </Container>
        </div>
      </ContentWrapper>
    </Fragment>
  );
};

export default PageProfile;
