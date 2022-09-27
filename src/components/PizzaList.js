import React, { useState } from "react";
import Pizza from "./Pizza";

function PizzaList({ pizzas }) {
  // console.log(pizzas)
  let pizzaList = pizzas.map((pizza) => {
    return <Pizza pizza={pizza} singlePizza={pizza} key={pizza.id} />;
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
        {pizzaList}
      </tbody>
    </table>
  );
}

export default PizzaList;
