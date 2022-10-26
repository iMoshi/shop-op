import Link from "next/link";
import { useState } from "react";
import PropTypes from "prop-types";
import { Col, Row } from "react-bootstrap";

// Icons Import
import Shoe from "@assets/images/svg/shoe.svg";
import MenIcon from "@assets/images/svg/men.svg";
import BuyTemplate from "@assets/images/svg/buy.svg";
import WomenIcon from "@assets/images/svg/women.svg";
import GiftCard from "@assets/images/svg/gift-card.svg";
import Clearance from "@assets/images/svg/clearance.svg";
import Accessories from "@assets/images/svg/accessories.svg";
import NewArrivals from "@assets/images/svg/new-arrivals.svg";
import SpecialOffers from "@assets/images/svg/special-offers.svg";

const CategoriesMenu = ({ className, initialVisibility }) => {
  const [dropdownToggle, setDropdownToggle] = useState(initialVisibility);

  const onToggleHandler = () => {
    setDropdownToggle((prevState) => !prevState);
  };

  return (
    <div className={`tt-menu-categories ${className ? className : ""}`}>
      <button
        className={`tt-dropdown-toggle ${dropdownToggle ? "active" : ""}`}
        onClick={onToggleHandler}
        // onMouseOver={onToggleHandler}
      >
        Бүх ангилал
      </button>
      <div className={`tt-dropdown-menu ${dropdownToggle ? "active" : ""}`}>
        <nav>
          <ul>
            <li className="tt-submenu">
              <Link href="/products">
                <a>
                  <WomenIcon />
                  <span>Ухаалаг утас</span>
                </a>
              </Link>
              <div className="dropdown-menu size-lg">
                <div className="dropdown-menu-wrapper">
                  <Row>
                    <Col xs={12}>
                      <Row className="tt-col-list">
                        <Col sm={3}>
                          <Link href="/products">
                            <a
                              onClick={onToggleHandler}
                              className="tt-title-submenu"
                            >
                              Apple
                            </a>
                          </Link>
                          <ul className="tt-megamenu-submenu"></ul>
                        </Col>

                        <Col sm={3}>
                          <Link href="/products">
                            <a
                              onClick={onToggleHandler}
                              className="tt-title-submenu"
                            >
                              Samsung
                            </a>
                          </Link>
                        </Col>

                        {/* <Col sm={3}>
                          <Link href="/shop">
                            <a className="tt-title-submenu">Huawei</a>
                          </Link> */}
                        {/* <ul className="tt-megamenu-submenu">
                            <li>
                              <Link href="/shop">
                                <a>Jewellery</a>
                              </Link>
                            </li>
                            <li>
                              <Link href="/shop">
                                <a>Hats</a>
                              </Link>
                            </li>
                            <li>
                              <Link href="/shop">
                                <a>Scarves & Snoods</a>
                              </Link>
                            </li>
                            <li>
                              <Link href="/shop">
                                <a>Belts</a>
                              </Link>
                            </li>
                            <li>
                              <Link href="/shop">
                                <a>Bags</a>
                              </Link>
                            </li>
                            <li>
                              <Link href="/shop">
                                <a>Tights</a>
                              </Link>
                            </li>
                            <li>
                              <Link href="/shop">
                                <a>Shoes Sale 15%</a>
                              </Link>
                            </li>
                            <li>
                              <Link href="/shop">
                                <a>Sunglasses</a>
                              </Link>
                            </li>
                          </ul> */}
                        {/* </Col> */}
                        {/* <Col sm={3}>
                          <Link href="/shop">
                            <a className="tt-title-submenu">Xiaomi</a>
                          </Link>
                        </Col> */}
                      </Row>
                    </Col>
                  </Row>

                  <Row>
                    <Col>
                      <Link href="/products">
                        <a className="tt-promo-02">
                          <img
                            src="/assets/images/no-placeholder/header-promo-01.jpg"
                            alt="Header Promo"
                          />

                          <div className="tt-description tt-point-h-l">
                            <div className="tt-description-wrapper">
                              <div className="tt-title-small">
                                iPhone 13 Pro max
                                <span className="tt-base-color"> 2022 </span>
                              </div>
                              <div className="tt-title-large">Шинээр ирлээ</div>
                            </div>
                          </div>
                        </a>
                      </Link>
                    </Col>
                  </Row>
                </div>
              </div>
            </li>
            <li className="tt-submenu ">
              <Link href="/products">
                <a>
                  <MenIcon />
                  <span>Ухаалаг цаг</span>
                </a>
              </Link>
              <div className="dropdown-menu size-lg">
                <div className="dropdown-menu-wrapper">
                  <Row>
                    <Col xs={12}>
                      <Row className="tt-col-list">
                        <Col sm={3}>
                          <Link href="/products">
                            <a className="tt-title-submenu">Apple</a>
                          </Link>
                          <ul className="tt-megamenu-submenu">
                            {/* <li>
                              <Link href="/shop">
                                <a>Apple</a>
                              </Link>
                            </li>
                            <li>
                              <Link href="/shop">
                                <a>Samsung</a>
                              </Link>
                            </li>
                            <li>
                              <Link href="/shop">
                                <a>Huawei</a>
                              </Link>
                            </li>
                            <li>
                              <Link href="/shop">
                                <a>Xaiomi</a>
                              </Link>
                            </li> */}
                            {/* <li>
                              <Link href="/shop">
                                <a>Sweaters</a>
                              </Link>
                            </li>
                            <li>
                              <Link href="/shop">
                                <a>Jackets</a>
                              </Link>
                            </li>
                            <li>
                              <Link href="/shop">
                                <a>Outerwear</a>
                              </Link>
                            </li> */}
                          </ul>
                        </Col>

                        <Col sm={3}>
                          <Link href="/products">
                            <a className="tt-title-submenu">Samsung</a>
                          </Link>
                          {/* <ul className="tt-megamenu-submenu">
                            <li>
                              <Link href="/shop">
                                <a>Trousers Featured</a>
                              </Link>
                            </li>
                            <li>
                              <Link href="/shop">
                                <a>Jeans</a>
                              </Link>
                            </li>
                            <li>
                              <Link href="/shop">
                                <a>Leggings</a>
                              </Link>
                            </li>
                            <li>
                              <Link href="/shop">
                                <a>Jumpsuit & Shorts</a>
                              </Link>
                            </li>
                            <li>
                              <Link href="/shop">
                                <a>Skirts</a>
                              </Link>
                            </li>
                            <li>
                              <Link href="/shop">
                                <a>Tights</a>
                              </Link>
                            </li>
                          </ul> */}
                        </Col>

                        {/* <Col sm={3}>
                          <Link href="/shop">
                            <a className="tt-title-submenu">Huawei</a>
                          </Link> */}
                        {/* <ul className="tt-megamenu-submenu">
                            <li>
                              <Link href="/shop">
                                <a>Jewellery</a>
                              </Link>
                            </li>
                            <li>
                              <Link href="/shop">
                                <a>Hats</a>
                              </Link>
                            </li>
                            <li>
                              <Link href="/shop">
                                <a>Scarves & Snoods</a>
                              </Link>
                            </li>
                            <li>
                              <Link href="/shop">
                                <a>Belts</a>
                              </Link>
                            </li>
                            <li>
                              <Link href="/shop">
                                <a>Bags</a>
                              </Link>
                            </li>
                            <li>
                              <Link href="/shop">
                                <a>Tights</a>
                              </Link>
                            </li>
                            <li>
                              <Link href="/shop">
                                <a>Shoes Sale 15%</a>
                              </Link>
                            </li>
                            <li>
                              <Link href="/shop">
                                <a>Sunglasses</a>
                              </Link>
                            </li>
                          </ul> */}
                        {/* </Col>
                        <Col sm={3}>
                          <Link href="/shop">
                            <a className="tt-title-submenu">Xiaomi</a>
                          </Link>
                        </Col> */}
                      </Row>
                    </Col>
                  </Row>
                </div>
              </div>
            </li>
            {/* <li>
              <Link href="/product/category/accessories">
                <a>
                  
                  <span>Чихэвч</span>
                </a>
              </Link>
            </li> */}
            <li className="tt-submenu ">
              <Link href="/products">
                <a>
                  <Accessories />
                  <span>Чихэвч</span>
                </a>
              </Link>
              <div className="dropdown-menu size-lg">
                <div className="dropdown-menu-wrapper">
                  <Row>
                    <Col xs={12}>
                      <Row className="tt-col-list">
                        <Col sm={3}>
                          <Link href="/shop">
                            <a className="tt-title-submenu">Apple</a>
                          </Link>
                          <ul className="tt-megamenu-submenu">
                            {/* <li>
                              <Link href="/shop">
                                <a>Apple</a>
                              </Link>
                            </li>
                            <li>
                              <Link href="/shop">
                                <a>Samsung</a>
                              </Link>
                            </li>
                            <li>
                              <Link href="/shop">
                                <a>Huawei</a>
                              </Link>
                            </li>
                            <li>
                              <Link href="/shop">
                                <a>Xaiomi</a>
                              </Link>
                            </li> */}
                            {/* <li>
                              <Link href="/shop">
                                <a>Sweaters</a>
                              </Link>
                            </li>
                            <li>
                              <Link href="/shop">
                                <a>Jackets</a>
                              </Link>
                            </li>
                            <li>
                              <Link href="/shop">
                                <a>Outerwear</a>
                              </Link>
                            </li> */}
                          </ul>
                        </Col>

                        <Col sm={3}>
                          <Link href="/shop">
                            <a className="tt-title-submenu">Samsung</a>
                          </Link>
                          {/* <ul className="tt-megamenu-submenu">
                            <li>
                              <Link href="/shop">
                                <a>Trousers Featured</a>
                              </Link>
                            </li>
                            <li>
                              <Link href="/shop">
                                <a>Jeans</a>
                              </Link>
                            </li>
                            <li>
                              <Link href="/shop">
                                <a>Leggings</a>
                              </Link>
                            </li>
                            <li>
                              <Link href="/shop">
                                <a>Jumpsuit & Shorts</a>
                              </Link>
                            </li>
                            <li>
                              <Link href="/shop">
                                <a>Skirts</a>
                              </Link>
                            </li>
                            <li>
                              <Link href="/shop">
                                <a>Tights</a>
                              </Link>
                            </li>
                          </ul> */}
                        </Col>

                        {/* <Col sm={3}>
                          <Link href="/shop">
                            <a className="tt-title-submenu">Huawei</a>
                          </Link> */}
                        {/* <ul className="tt-megamenu-submenu">
                            <li>
                              <Link href="/shop">
                                <a>Jewellery</a>
                              </Link>
                            </li>
                            <li>
                              <Link href="/shop">
                                <a>Hats</a>
                              </Link>
                            </li>
                            <li>
                              <Link href="/shop">
                                <a>Scarves & Snoods</a>
                              </Link>
                            </li>
                            <li>
                              <Link href="/shop">
                                <a>Belts</a>
                              </Link>
                            </li>
                            <li>
                              <Link href="/shop">
                                <a>Bags</a>
                              </Link>
                            </li>
                            <li>
                              <Link href="/shop">
                                <a>Tights</a>
                              </Link>
                            </li>
                            <li>
                              <Link href="/shop">
                                <a>Shoes Sale 15%</a>
                              </Link>
                            </li>
                            <li>
                              <Link href="/shop">
                                <a>Sunglasses</a>
                              </Link>
                            </li>
                          </ul> */}
                        {/* </Col>
                        <Col sm={3}>
                          <Link href="/shop">
                            <a className="tt-title-submenu">Xiaomi</a>
                          </Link>
                        </Col> */}
                      </Row>
                    </Col>
                  </Row>
                </div>
              </div>
            </li>
            <li className="tt-submenu ">
              <Link href="/product/category/shoe">
                <a>
                  <Shoe />
                  <span>Дагалдах хэрэгсэл</span>
                </a>
              </Link>
              <div className="dropdown-menu size-lg">
                <div className="dropdown-menu-wrapper">
                  <Row>
                    <Col xs={12}>
                      <Row className="tt-col-list">
                        <Col sm={3}>
                          <Link href="/shop">
                            <a className="tt-title-submenu">Apple</a>
                          </Link>
                          <ul className="tt-megamenu-submenu">
                            {/* <li>
                              <Link href="/shop">
                                <a>Apple</a>
                              </Link>
                            </li>
                            <li>
                              <Link href="/shop">
                                <a>Samsung</a>
                              </Link>
                            </li>
                            <li>
                              <Link href="/shop">
                                <a>Huawei</a>
                              </Link>
                            </li>
                            <li>
                              <Link href="/shop">
                                <a>Xaiomi</a>
                              </Link>
                            </li> */}
                            {/* <li>
                              <Link href="/shop">
                                <a>Sweaters</a>
                              </Link>
                            </li>
                            <li>
                              <Link href="/shop">
                                <a>Jackets</a>
                              </Link>
                            </li>
                            <li>
                              <Link href="/shop">
                                <a>Outerwear</a>
                              </Link>
                            </li> */}
                          </ul>
                        </Col>

                        <Col sm={3}>
                          <Link href="/shop">
                            <a className="tt-title-submenu">Samsung</a>
                          </Link>
                          {/* <ul className="tt-megamenu-submenu">
                            <li>
                              <Link href="/shop">
                                <a>Trousers Featured</a>
                              </Link>
                            </li>
                            <li>
                              <Link href="/shop">
                                <a>Jeans</a>
                              </Link>
                            </li>
                            <li>
                              <Link href="/shop">
                                <a>Leggings</a>
                              </Link>
                            </li>
                            <li>
                              <Link href="/shop">
                                <a>Jumpsuit & Shorts</a>
                              </Link>
                            </li>
                            <li>
                              <Link href="/shop">
                                <a>Skirts</a>
                              </Link>
                            </li>
                            <li>
                              <Link href="/shop">
                                <a>Tights</a>
                              </Link>
                            </li>
                          </ul> */}
                        </Col>

                        {/* <Col sm={3}>
                          <Link href="/shop">
                            <a className="tt-title-submenu">Huawei</a>
                          </Link> */}
                        {/* <ul className="tt-megamenu-submenu">
                            <li>
                              <Link href="/shop">
                                <a>Jewellery</a>
                              </Link>
                            </li>
                            <li>
                              <Link href="/shop">
                                <a>Hats</a>
                              </Link>
                            </li>
                            <li>
                              <Link href="/shop">
                                <a>Scarves & Snoods</a>
                              </Link>
                            </li>
                            <li>
                              <Link href="/shop">
                                <a>Belts</a>
                              </Link>
                            </li>
                            <li>
                              <Link href="/shop">
                                <a>Bags</a>
                              </Link>
                            </li>
                            <li>
                              <Link href="/shop">
                                <a>Tights</a>
                              </Link>
                            </li>
                            <li>
                              <Link href="/shop">
                                <a>Shoes Sale 15%</a>
                              </Link>
                            </li>
                            <li>
                              <Link href="/shop">
                                <a>Sunglasses</a>
                              </Link>
                            </li>
                          </ul> */}
                        {/* </Col> */}
                        {/* <Col sm={3}>
                          <Link href="/shop">
                            <a className="tt-title-submenu">Xiaomi</a>
                          </Link>
                        </Col> */}
                      </Row>
                    </Col>
                  </Row>
                </div>
              </div>
            </li>
            {/* <li>
              <Link href="/product/category/shoe">
                <a>
                  <Shoe />
                  <span>Дагалдах хэрэгсэл</span>
                </a>
              </Link>
            </li> */}
            {/* <li>
              <Link href="/shop">
                <a>
                  <NewArrivals />
                  <span>NEW ARRIVALS</span>
                </a>
              </Link>
            </li>
            <li>
              <Link href="/shop">
                <a>
                  <Clearance />
                  <span>CLEARANCE</span>
                </a>
              </Link>
            </li>
            <li>
              <Link href="/shop">
                <a>
                  <SpecialOffers />
                  <span>SPECIAL OFFERS</span>
                </a>
              </Link>
            </li>
            <li>
              <Link href="/shop">
                <a>
                  <GiftCard />
                  <span>GIFT CARD</span>
                </a>
              </Link>
            </li>
            <li>
              <Link href="https://1.envato.market/VLXVj">
                <a target="_blank" rel="noopener noreferrer">
                  <BuyTemplate />
                  <span>BUY TEMPLATE!</span>
                </a>
              </Link>
            </li> */}
          </ul>
        </nav>
      </div>
    </div>
  );
};

CategoriesMenu.defaultProps = {
  initialVisibility: false,
};

CategoriesMenu.propTypes = {
  initialVisibility: PropTypes.bool,
};

export default CategoriesMenu;
