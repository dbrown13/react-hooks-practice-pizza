import React, { useEffect, useState } from "react";
import Header from "./Header";
import PizzaForm from "./PizzaForm";
import PizzaList from "./PizzaList";

function App() {
  const [pizzas, setPizzas] = useState(null)


  useEffect(() => {
    fetch("http://localhost:3001/pizzas")
    .then((response) => response.json())
    .then((data) => setPizzas(data))
  }, [])


  return (
    <>
      <Header />
      <PizzaForm />
      {pizzas ? <PizzaList pizzas={pizzas}/> : null}
    </>
  );
}

export default App;


// After firing up your server, render the list of pizzas in to the table.

// Each row in the table should be a pizza component and 
// when you click the "Edit" button, 
// it should send the pizza associated with that component into the Pizza form.

// The pizza form will then render the information about the pizza 
// in the form, which will be editable.

// When the form is submitted, 
// the information should be reflected in your table and PERSIST in the backend.