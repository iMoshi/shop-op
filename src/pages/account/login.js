import Head from "next/head";
import Link from "next/link";
import { Fragment, useState } from "react";
import Breadcrumb from "@components/ui/breadcrumb";
import { Col, Container, Row } from "react-bootstrap";
import { HeaderOne as Header } from "@components/header";
import { FooterOne as Footer } from "@components/footer";
import { HomePagesNavData as navContent } from "@data/navbar";
import { ContentWrapperOne as ContentWrapper } from "@components/wrapper";
import axios from "axios";

const LoginPage = () => {
  const logo = "/assets/images/no-placeholder/logo.png";
  const [userName, setUserName] = useState("");
  const [password, setPwd] = useState("");
  const login = (e) => {
    e.preventDefault();
    fetch(
      `https://meta.omnismart.mn/api/method/login?usr=${userName}&pwd=${password}`,
      {
        method: "POST",
      }
    )
      .then((res) => res.json())
      .then((res) => sessionStorage.setItem("token", res.message));
  };

  const checker = () => {
    fetch(`https://meta.omnismart.mn/api/method/frappe.auth.get_logged_user`, {
      method: "GET",
      credentials: "include",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    }).then((res) => res.json());
  };
  return (
    <Fragment>
      <Head>
        <title>Login</title>
      </Head>

      <ContentWrapper>
        <Breadcrumb />

        <div className="container-indent">
          <Container>
            <h1 className="tt-title-subpages noborder">Бүртгэлтэй юу?</h1>
            <div className="tt-login-form">
              <Row>
                <Col md={6}>
                  <div className="tt-item">
                    <h2 className="tt-title">Шинэ хэрэглэгч</h2>
                    <p>
                      Манай дэлгүүрт данс үүсгэснээр та төлбөр тооцооны үйл
                      явцыг илүү хурдан хийх, олон хүргэлтийн хаяг хадгалах,
                      дансандаа захиалгаа харах, хянах зэрэг боломжтой болно.
                    </p>
                    <div className="form-group">
                      <Link href="/account/register">
                        <a className="btn btn-top btn-border">Бүртгүүлэх</a>
                      </Link>
                    </div>
                  </div>
                </Col>

                <Col md={6}>
                  <div className="tt-item">
                    <h2 className="tt-title">Нэвтрэх</h2>
                    <p>Бүртгэлтэй хэрэглэгч бол нэвтэрнэ үү</p>
                    <div className="form-default form-top">
                      <form
                        id="customer_login"
                        method="post"
                        noValidate="novalidate"
                        onSubmit={login}
                      >
                        <div className="form-group">
                          <label htmlFor="loginUserName">И-мэйл *</label>
                          <div className="tt-required">
                            * Заавал бөглөх хэсэг
                          </div>
                          <input
                            type="text"
                            name="username"
                            id="loginUserName"
                            className="form-control"
                            placeholder="Нэвтрэх нэр эсвэл и-мэйл хаяг"
                            required
                            onChange={(e) => {
                              setUserName(e.target.value);
                            }}
                          />
                        </div>
                        <div className="form-group">
                          <label htmlFor="loginPassword">Нууц үг *</label>
                          <input
                            type="password"
                            name="password"
                            id="loginPassword"
                            className="form-control"
                            placeholder="Нууц үгээ оруулна уу"
                            required
                            onChange={(e) => {
                              setPwd(e.target.value);
                            }}
                          />
                        </div>
                        <Row>
                          <Col xs="auto" className="mr-auto">
                            <div className="form-group">
                              <button
                                className="btn btn-border"
                                type="submit"
                                // onClick={() => login(e)}
                              >
                                Нэвтрэх
                              </button>
                            </div>
                          </Col>
                          <Col xs="auto" className="align-self-center">
                            <div className="form-group">
                              <ul className="additional-links">
                                <li>
                                  <Link href="/account/register">
                                    Нууц үгээ мартсан уу?
                                  </Link>
                                </li>
                              </ul>
                            </div>
                            <div
                              className="btn btn-border"
                              // type="submit"
                              onClick={checker}
                            >
                              Check
                            </div>
                          </Col>
                        </Row>
                      </form>
                    </div>
                  </div>
                </Col>
              </Row>
            </div>
          </Container>
        </div>
      </ContentWrapper>
    </Fragment>
  );
};

export default LoginPage;
