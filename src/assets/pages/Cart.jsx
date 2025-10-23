import { useCart } from "../../components/CartContext"
import { useUser } from '../../components/UserContext'

export function formatNumber(num) {
  return num.toLocaleString('es-CL')
}

export default function Cart() {
  const { cart, updateCount, total } = useCart()
  const { token, logout } = useUser()

  return (
    <div className="cart">
      <h2>Detalles del pedido</h2><br/>
      {cart.map((p) => (
        <div key={p.id} className="pizza-cart">
          <img src={p.img} alt={p.name}/> {p.name}
          <div>${formatNumber(p.price)}</div>
          <div>
            <p>
              <button onClick={() => updateCount(p.id, -1)}>-</button>
              <span style={{ margin: "0 10px" }}>{p.count}</span>
              <button onClick={() => updateCount(p.id, 1)}>+</button>
            </p>
          </div>
        </div>
      ))}
      <h1>Total: ${formatNumber(total)}</h1>
      <button disabled={!token}>Pagar</button>
    </div>
  );
}
