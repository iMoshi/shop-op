import { useProduct } from "@hooks";
import cogoToast from "cogo-toast";
import PropTypes from "prop-types";
import { CURRENCY } from "@utils/constant";
import { Fragment, useContext, useState, useEffect } from "react";
import { CartContext } from "@global/CartContext";
import { toCapitalize } from "@utils/toCapitalize";
import { CartNotification } from "@components/modal";
import { CompareContext } from "@global/CompareContext";
import { WishlistContext } from "@global/WishlistContext";
import ProductSize from "@components/product/elements/ProductSize";
import { Card, Col, Container, Row } from "react-bootstrap";
import Accordion from "react-bootstrap/Accordion";
import ProductColor from "@components/product/elements/ProductColor";
import ProductRatings from "@components/product/elements/ProductRatings";
import ProductMaterial from "@components/product/elements/ProductMaterial";
import ProductDetailsThumbnail from "@components/product-details/Thumbnail";
import ProductSaleCountdown from "@components/product/elements/ProductSaleCountdown";
import {
  getCartProduct,
  getCartProductQuantity,
  getDiscountPrice,
  getProductUniqueSizes,
  getWishCompareProduct,
} from "@utils/product";

const ProductDetails = ({ product }) => {
  const {
    name,
    badge,
    description,
    item_name,
    discount,
    discountDuration,
    excerpt,
    previewImages,
    website_image,
    ratings,
    sku,
    variations,
    item_price,
    item_images,
  } = product;

  const {
    productSize,
    productColor,
    productPrice,
    productStock,
    modalCartAdded,
    productMaterial,
    productQuantity,
    setProductQuantity,
    compareHandler,
    wishlistHandler,
    productSizeHandler,
    productColorHandler,
    modalCartAddedHandler,
    productMaterialHandler,
    productQuantityIncrement,
    productQuantityDecrement,
  } = useProduct(product);

  const sizes = getProductUniqueSizes(product);
  const { wishlist } = useContext(WishlistContext);
  const { compareList } = useContext(CompareContext);
  const { shoppingCart, addToCart } = useContext(CartContext);

  const isInWishlist = getWishCompareProduct(wishlist, product);
  const isInCompareList = getWishCompareProduct(compareList, product);
  const discountedPrice = getDiscountPrice(productPrice, discount);
  const isInCart = getCartProduct(
    shoppingCart,
    product,
    productColor,
    productSize,
    productMaterial
  );
  const cartProductQuantity = getCartProductQuantity(
    shoppingCart,
    product,
    productColor,
    productSize
  );

  const [spec, setSpec] = useState(null);
  const [item_variant, setVariant] = useState(null);
  const [getVar, setVar] = useState({
    item_name: item_name,
    colour: "",
    size: "",
  });
  const [varColor, setVarColor] = useState();
  const [varSize, setVarSize] = useState();
  const [price, setPrice] = useState(item_price);
  const [desc, setDesc] = useState(description);
  const [newImg, setNewImg] = useState("");

  const getVariantBody = (c, b, e) => {
    let a = "";
    a = getVar;
    // a.colour = a;
    if (c.attribute == "Size") {
      a.size = b;
    }
    if (c.attribute == "Colour") {
      a.colour = b;
    }
    fetch(
      "https://meta.omnismart.mn/api/method/moni_store.api.test_variant_get",
      {
        method: "POST",
        body: JSON.stringify(a),
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
      .then((res) => res.json())
      .then((data) => {
        setSpec(data.message?.[1]?.item.specifications);
        setNewImg(data.message?.[1]?.item.item_image);
        setPrice(data.message?.[1]?.item.item_price);
        setVariant(data.message?.[0]?.variant);
        setDesc(data.message?.[1]?.item.description);
      });
  };

  useEffect(() => {
    const item = { item_name: item_name };

    fetch(
      "https://meta.omnismart.mn/api/method/moni_store.api.test_variant_get",
      {
        method: "POST",
        body: JSON.stringify(item),
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.message) {
          setSpec(data.message?.[1]?.item.specifications);
          setNewImg(data.message?.[1]?.item.item_image);
          setPrice(data.message?.[1]?.item.item_price);
          setVariant(data.message?.[0]?.variant);
          setDesc(data.message?.[1]?.item.description);
        }
      });
  }, []);

  const addToCartHandler = () => {
    addToCart({
      ...product,
      price: productPrice,
      color: productColor,
      size: productSize,
      material: productMaterial,
      quantity: productQuantity,
    });
    setProductQuantity(1);
    !isInCart
      ? modalCartAddedHandler()
      : cogoToast.success(`Your Item "${product.name}" already added.`, {
          position: "bottom-right",
          heading: "Added to Cart!",
          hideAfter: 2,
        });
  };

  return (
    <Fragment>
      <div className="container-indent">
        <Container className="container-fluid-mobile">
          <Row>
            <Col lg={6}>
              <ProductDetailsThumbnail
                productName={name}
                // {newImg == [] ? thumbImages={newImg} : [
                //   { type: "Black", image: website_image },
                //   { type: "Black", image: website_image },
                // ]}
                // newImg ? : thumbImages= newImg : [website_image, website_image]
                thumbImages={newImg ? newImg : [website_image, website_image]}
              />
            </Col>

            <Col lg={6}>
              <div className="tt-product-single-info">
                <h1 className="tt-title">{item_name}</h1>
                <div className="tt-price">
                  {!discount ? (
                    <>
                      <p style={{ fontSize: "15px", color: "gray" }}>
                        Онлайн авах үнэ:
                      </p>
                      <span style={{ fontSize: "29px" }}> {price}₮</span>
                    </>
                  ) : (
                    <Fragment>
                      <span className="sale-price mr-3">
                        {CURRENCY + discountedPrice.toFixed(2)}
                      </span>
                      <span className="old-price">
                        {CURRENCY + productPrice.toFixed(2)}
                      </span>
                    </Fragment>
                  )}
                </div>
                <div className="tt-add-info">
                  <ul></ul>
                </div>

                <div className="tt-review">
                  <ProductRatings ratings={ratings} />
                </div>
                <div className="tt-wrapper">{excerpt}</div>
                <div className="tt-wrapper">
                  <div className="tt-countdown_box_02">
                    {discount && discountDuration && (
                      <ProductSaleCountdown date={discountDuration} />
                    )}
                  </div>
                </div>

                <div>
                  {item_variant ? (
                    <div>
                      {item_variant.map((a, i) => {
                        return (
                          <div key={i}>
                            <div key={i} style={{ fontWeight: "bold" }}>
                              {a.attribute}:
                            </div>
                            {a?.values?.map((b, i) => {
                              return (
                                <label
                                  key={i}
                                  style={{
                                    color: `${b}`,
                                    fontWeight: "bold",
                                    marginLeft: "10px",
                                  }}
                                >
                                  {a.attribute === "Size" ? (
                                    <div
                                      className={
                                        a.default == b
                                          ? "size selected-variant"
                                          : "size"
                                      }
                                      key={i}
                                      onClick={(e) => getVariantBody(a, b, e)}
                                      style={{
                                        width: "50px",
                                        height: "50px",
                                        borderRadius: "5px",
                                        opacity: ".5",
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        color: "black",
                                      }}
                                    >
                                      {b}
                                    </div>
                                  ) : null}
                                  {a.attribute == "Colour" ? (
                                    <div
                                      className={
                                        a.default == b
                                          ? "variant selected-variant"
                                          : "variant"
                                      }
                                      key={i}
                                      onClick={(e) => getVariantBody(a, b, e)}
                                      style={{
                                        width: "50px",
                                        height: "50px",
                                        background: `${b}`,

                                        borderRadius: "5px",
                                        opacity: ".5",
                                      }}
                                    ></div>
                                  ) : null}
                                </label>
                              );
                            })}
                          </div>
                        );
                      })}
                    </div>
                  ) : null}
                </div>
              </div>
              <div
                className="tt-product-single-info"
                style={{ marginTop: "15px", marginBottom: "15px" }}
              >
                <p style={{ marginBottom: "15px" }}>
                  <strong>Тайлбар: </strong>
                </p>
                {desc}
              </div>
            </Col>
            <Col>
              <div className="mt-3">
                <div
                  style={{
                    color: "black",
                    fontSize: "15px",
                    marginLeft: "5px",
                    fontWeight: "bold",
                    marginBottom: "5px",
                  }}
                >
                  Үзүүлэлтүүд:
                </div>

                <div>
                  {spec ? (
                    <div style={{ padding: "10px" }} className="card">
                      {spec.map((a, i) => {
                        return (
                          <div className="card-body" key={i}>
                            <label key={i}>
                              <strong>{a.label}:</strong>
                            </label>
                            <span style={{ paddingLeft: "10px" }}>
                              {a.description}
                            </span>
                          </div>
                        );
                      })}
                    </div>
                  ) : null}
                </div>
              </div>
            </Col>
            <Col>
              <div className="mt-3">
                <div
                  style={{
                    color: "black",
                    fontSize: "15px",
                    marginLeft: "5px",
                    fontWeight: "bold",
                    marginBottom: "5px",
                  }}
                >
                  Худалдаалж буй дэлгүүр:
                </div>
                <div className="card">
                  <div className="card-body">
                    <p>
                      {" "}
                      <strong style={{ marginRight: "10px" }}>
                        Хаяг:
                      </strong>{" "}
                      Зөвхөн онлайн дэлгүүрээр худалдана
                    </p>
                    <p>
                      {" "}
                      <strong style={{ marginRight: "10px" }}>
                        Утас:
                      </strong>{" "}
                      99119911
                    </p>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      {modalCartAdded && (
        <CartNotification
          product={isInCart}
          modalShow={modalCartAdded}
          modalOnHide={modalCartAddedHandler}
        />
      )}
    </Fragment>
  );
};

ProductDetails.propTypes = {
  product: PropTypes.object.isRequired,
};

export default ProductDetails;
