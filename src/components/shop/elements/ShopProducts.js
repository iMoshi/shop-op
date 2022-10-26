import { Col, Row } from "react-bootstrap";
import { EmptyProducts } from "@components/products";
import { ProductOne as Product } from "@components/product";
import { useState, useEffect } from "react";

const ShopProducts = ({ products, layout, productPerPage }) => {
  const [newProduct, useNewProduct] = useState([]);

  return (
    <Row className={`tt-product-listing ${layout}`}>
      {products?.length > 0 ? (
        products.slice(0, productPerPage).map((product, i) => (
          <Col key={i} className="tt-col-item">
            <Product
              page={"shop"}
              product={product}
              showVariant={false}
              className="product-nohover"
            />
          </Col>
        ))
      ) : (
        <EmptyProducts />
      )}
    </Row>
  );
};

export default ShopProducts;
