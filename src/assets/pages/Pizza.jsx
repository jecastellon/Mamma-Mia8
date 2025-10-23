import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import { useState, useEffect } from "react"
import { useParams } from 'react-router-dom'


export default function Pizza() {
  const { id } = useParams()
  const [Pizza, setPizza] = useState(null)
  
  useEffect(()=>{
    if (id) buscarPizza(id)
  }, [id])

  const formatNumber = (num) => num.toLocaleString()
  
  const buscarPizza = async (pizzaId) => {
    const url = `http://localhost:5000/api/pizzas/${pizzaId}`
    const response = await fetch(url)
    const data = await response.json()
    setPizza(data)
  }


  return (
    <>
      <div className="pizza-sola">
        {Pizza && (
          <Card style={{ width: '30rem' }}>
      <Card.Body>
        <Card.Title><b>Pizza {Pizza.name}</b><br />
                <b>Precio: ${formatNumber(Pizza.price)}</b><br />
        </Card.Title>
        <Card.Text>
          <small><b>🍕 Ingredientes:</b></small>
            <ul style={{ listStyle: "none", padding: 0, textAlign: "center" }}>
              {Pizza.ingredients.map((ing, i) => (
                  <li key={i}><i>{ing}</i></li>
                ))}
            </ul>
                <Card.Img variant="top" src={Pizza.img} />
                <p>{Pizza.desc}</p>
        </Card.Text>
        <div className="card-buttons">
        <Button variant="light">Ver más👀</Button>
        <Button variant="dark">Añadir🛒</Button>
        </div>
      </Card.Body>
    </Card>
        )}
      </div>
    </>
  )
}
