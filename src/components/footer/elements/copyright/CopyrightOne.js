import PropTypes from "prop-types";
import Logo from "@components/logo";
import { Container } from "react-bootstrap";
import SocialLink from "@components/social-link";

const CopyrightOne = ({ className, logo, dark }) => {
  return (
    <div
      className={`tt-footer-custom ${className ? className : ""} ${
        dark ? "tt-color-scheme-04" : ""
      }`}
    >
      <Container>
        <div className="tt-row">
          <div className="tt-col-left">
            <div className="tt-col-item tt-logo-col">
              {/* <Logo src={logo} /> */}
            </div>
            <div className="tt-col-item">
              <div className="tt-box-copyright ht-copy">
                &copy; Omni Smart {new Date().getFullYear()}. Made with{" "}
                <i className="text-danger icon-h-37" /> by{" "}
                <a href="/" target="_blank" rel="noopener noreferrer">
                  Manlai
                </a>
                .
              </div>
            </div>
          </div>
          <div className="tt-col-right">
            <div className="tt-col-item">
              <b>Холбоосууд:</b>
              {!dark ? (
                <img
                  style={{ height: "40px" }}
                  src="/assets/images/no-placeholder/fb.png"
                  alt="payment"
                />
              ) : null}
              {/* <SocialLink /> */}
              <img
                style={{ height: "40px" }}
                src="/assets/images/no-placeholder/instagram.png"
                alt="payment"
              />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

CopyrightOne.propTypes = {
  className: PropTypes.string,
  logo: PropTypes.string.isRequired,
};

export default CopyrightOne;
