import { useState } from "react"
import { useCart } from "../../components/CartContext"
import { useUser } from '../../components/UserContext'

export function formatNumber(num) {
  return num.toLocaleString('es-CL')
}

export default function Cart() {
  const { cart, updateCount, total } = useCart()
  const { token, logout } = useUser()
  const [message, setMessage] = useState("")

  const handleCheckout = async () => {
    if (!token) {
      alert("Debes iniciar sesión para pagar")
      return
    }
    try {
      const res = await fetch("http://localhost:5000/api/checkouts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ cart }),
      })

      const data = await res.json()

      if (!res.ok) throw new Error(data.message || "Error al procesar la compra")

      setMessage("Compra realizada con éxito")
    } catch (error) {
      console.error(error)
      setMessage(`Error: ${error.message}`)
    }
  }

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
      <button disabled={!token} onClick={handleCheckout}>Pagar</button>
      {message && <p>{message}</p>}
    </div>
  );
}
