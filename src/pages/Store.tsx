import React from "react";
import { Row, Col } from "react-bootstrap";
import storeItems from "../data/items.json";
import StoreItem from "../components/storeItem";
interface Props {}

const Store = (props: Props) => {
  return (
    <div>
      <h1>Store</h1>
      <Row md={2} xs={1} lg={3} className="g-3">
        {storeItems.map((item, key) => (
          <Col>
            <StoreItem {...item} key={key} />
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Store;
