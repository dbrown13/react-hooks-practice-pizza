import React from "react";

function Pizza( {pizza, onSelectPizza} ) {
  const {topping, size, vegetarian} = pizza;

  function handleClick() {
    onSelectPizza(pizza);
  }

  return (
    <tr>
      <td>{topping}</td>
      <td>{size}</td>
      <td>{vegetarian ? "Yes" : "No"}</td>
      <td>
        <button onClick={handleClick}type="button" className="btn btn-primary">
          Edit Pizza
        </button>
      </td>
    </tr>
  );
}

export default Pizza;
