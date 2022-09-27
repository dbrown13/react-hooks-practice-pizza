import React from "react";
import Pizza from "./Pizza";

function PizzaList({ pizzas, onSelectPizza }) {
  
  const pizzaMap = pizzas.map((pizza) => {
    return (
      <Pizza 
        onSelectPizza={onSelectPizza}
        pizza={pizza} 
        key={pizza.id} 
      />
      );
  });

  return (
    <table className="table table-striped">
      <thead>
        <tr>
          <th scope="col">Topping</th>
          <th scope="col">Size</th>
          <th scope="col">Vegetarian?</th>
          <th scope="col">Edit</th>
        </tr>
      </thead>
      <tbody>
        {pizzaMap}
      </tbody>
    </table>
  );
}

export default PizzaList;
