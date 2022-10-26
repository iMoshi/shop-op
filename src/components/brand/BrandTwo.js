import Link from "next/link";

const BrandTwo = ({ className, logo, link, thumb }) => {
  return (
    <Link href={link ? link : "/"}>
      <a className={`tt-promo-box tt-one-child ${className ? className : ""}`}>
        <img src={thumb} alt="moni" />
        <div className="tt-description">
          <div className="tt-description-wrapper">
            <div className="tt-background" />
            <img src={logo} alt="moni" />
          </div>
        </div>
      </a>
    </Link>
  );
};

export default BrandTwo;
