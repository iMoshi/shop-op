import { Col, Container, Row } from "react-bootstrap";
import Link from "next/link";

const Profile = () => {
  const logo = "/assets/images/no-placeholder/logo.png";
  const profileImage = "/assets/images/profile/user-avatar.png";

  return (
    <div className="content-indent">
      <div className="tt-about-box-02">
        <h1 className="tt-title-subpages">Хямдарсан үед мэдэгдэх</h1>
      </div>
      <Container className="container-fluid-custom-mobile-padding mt-5">
        <Row>
          <div className="row">
            <Col sm={4}>
              <div className="leftColumn">
                <div className="tt-collapse">
                  <Link href="/profile">
                    <a>Хувийн мэдээлэл</a>
                  </Link>
                </div>
                <div className="tt-collapse">
                  <Link href="/profile/orders">
                    <a>Миний захиалгууд</a>
                  </Link>
                </div>
                <div className="tt-collapse">
                  <Link href="/profile/wishlist">
                    <a>Авах хүсэл </a>
                  </Link>
                </div>
                <div className="tt-collapse">
                  <Link href="/profile/sale">
                    <a>Хямдарсан үед мэдэгдэх</a>
                  </Link>
                </div>
              </div>
            </Col>
            <Col sm={8}>
              <div className="col">
                <Row></Row>
              </div>
            </Col>
          </div>
        </Row>
      </Container>
    </div>
  );
};

export default Profile;
