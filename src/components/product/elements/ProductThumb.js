import PropTypes from "prop-types";

const ProductThumb = ({ thumbs, productName, className }) => {
  return thumbs.map((thumb, i) => (
    <div
      key={i}
      className={`tt-img${i === 1 ? "-roll-over" : " "} ${
        className ? className : ""
      }`}
    >
      <img
        style={{ width: "100%", height: "100%" }}
        src={`https://meta.omnismart.mn/${thumb.image}`}
        alt={productName}
      />
    </div>
  ));
};

ProductThumb.propTypes = {
  thumbs: PropTypes.array.isRequired,
  productName: PropTypes.string.isRequired,
  className: PropTypes.string,
};

export default ProductThumb;
