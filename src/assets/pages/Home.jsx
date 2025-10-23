import CardPizza from "../../components/CardPizza";
import Header from "../../components/Header";
import { useState, useEffect } from "react";
// import { pizzas } from "../utils/pizzas"


export default function Home() {
  const [Pizza, setPizza] = useState([]);
  
  useEffect(()=>{
    buscarPizza()
  }, [])
  
  const buscarPizza = async () => {
    const url = "http://localhost:5000/api/pizzas"
    const response = await fetch(url)
    const data = await response.json()
    setPizza(data)
  }

  return (
    <>
    <Header/>
      <div className="pizzas-grid">
        {Pizza.map((p) => (
          <CardPizza
          key= {p.id}
          id={p.id}
          desc= {p.desc}
          name={p.name}
          price={p.price}
          ingredients={p.ingredients}
          img={p.img}
          />
        ))}
      </div>
    </>
  )
}
