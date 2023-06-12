import { Button, Stack } from "react-bootstrap";
import { useShoppingCart } from "../context/ShoppingCartContext";
import storeItems from "../data/items.json";
import { formatCurrency } from "../utility/formatCurrency";

interface CartItemProps {
  id: number;
  quantity: number;
}

const CartItem = ({ id, quantity }: CartItemProps) => {
  const { removeItem } = useShoppingCart();
  const item = storeItems.find((i) => i.id === id);
  console.log("quantity", quantity);
  if (item === null) return null;
  return (
    <Stack direction="horizontal" gap={2} className="d-flex align-items-center">
      <img
        src={item?.imageUrl}
        style={{ width: "160px", height: "120px", objectFit: "cover" }}
      />
      <div className="me-auto">
        <div>
          {item?.name}{" "}
          {quantity > 1 && (
            <span className="text-muted" style={{ fontSize: "0.65rem" }}>
              x{quantity}
            </span>
          )}
        </div>
        <div>
          <div className="text-muted" style={{ fontSize: "0.75rem" }}>
            {formatCurrency(item?.price)}
          </div>
        </div>
      </div>
      <div> {formatCurrency(item?.price * quantity)}</div>
      <Button variant="outline-danger" size="sm" onClick={() => removeItem(id)}>
        x
      </Button>
    </Stack>
  );
};

export default CartItem;
