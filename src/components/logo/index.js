import Link from "next/link";
import PropTypes from "prop-types";

const Logo = ({ src }) => {
  return (
    <Link href="/">
      <a className="tt-logo tt-logo-alignment">
        <img src={src} alt="moni" />
      </a>
    </Link>
  );
};

Logo.propTypes = {
  src: PropTypes.string.isRequired,
};

export default Logo;
