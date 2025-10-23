import { useCart } from "../context/CartContext";

export default function Suma({ id }) {
  const { updateCount } = useCart();
  return <button onClick={() => updateCount(id, 1)}>+</button>;
}
