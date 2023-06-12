import React from "react";
import { Button, Card } from "react-bootstrap";
import { formatCurrency } from "../utility/formatCurrency";
import { useShoppingCart } from "../context/ShoppingCartContext";

interface Props {
  id: number;
  name: string;
  price: number;
  imageUrl: string;
}

const StoreItem = ({ id, name, price, imageUrl }: Props) => {
  const {
    getItemQuantity,
    increaseItemQuantity,
    decreaseItemQuantity,
    removeItem,
  } = useShoppingCart();
  const quantity: number = getItemQuantity(id);

  return (
    <Card className="h-100">
      <Card.Img
        variant="top"
        src={imageUrl}
        height="350px"
        style={{ objectFit: "cover", objectPosition: "center" }}
      ></Card.Img>

      <Card.Body className="d-flex flex-column">
        <Card.Title className="d-flex justify-content-between align-items-baseline">
          <span className="fs-2">{name}</span>
          <span className="ms-2 text-muted">{formatCurrency(price)}</span>
        </Card.Title>
        <div className="mt-auto">
          {quantity === 0 ? (
            <Button className="w-100" onClick={() => increaseItemQuantity(id)}>
              {" "}
              + Add to Cart
            </Button>
          ) : (
            <div className="d-flex align-items-center flex-column">
              <div
                className="d-flex align-items-center justify-content-center"
                style={{ gap: "0.5rem" }}
              >
                <Button onClick={() => decreaseItemQuantity(id)}>-</Button>
                <div className="fs-3">
                  {quantity}
                  <span> in cart</span>
                </div>
                <Button onClick={() => increaseItemQuantity(id)}>+</Button>
                <Button
                  variant="danger"
                  size="sm"
                  onClick={() => removeItem(id)}
                >
                  Remove
                </Button>
              </div>
            </div>
          )}
        </div>
      </Card.Body>
    </Card>
  );
};

export default StoreItem;
