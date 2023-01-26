import React, { useState } from "react";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Home from "./Components/Home"
import Products from "./Components/Products"
import NavBar from "./Components/NavBar"
import ShoppingBasket from "./Components/ShoppingBasket";

const App = () => {

  let productList = [{
    id: 1, name: "Jamon Iberico", weight: 80, price: 12.80, description: "Free range ham from Iberico pigs from Spain "},
    {id: 2,name: "Roquefort", weight: 125, price: 8, description: "One of the worlds finest blue cheeses "},
    {id:3, name: "Ciabata", weight: 400, price: 2.35, description: "Artisan organic white ciabatta loaf "},
    {id:4, name: "Reblochon", weight: 450, price: 12.60, description: "Delicious smelly French cheese "},
    {id:5, name: "Venison Terrine", weight: 500, price: 9.95, description: "Wild Scottish venison terrine"
  }]

  const [productsList, setProductList] =useState(productList)

  const [selectedProduct, setSelectedProduct] = useState(null)
  const [basket, setBasket] = useState([])

  const handleSelectedProduct=(product) => {
    setSelectedProduct(product)
}

const addToBasket = (product) => {
  setBasket((prevBasket) => [...prevBasket, product]);
};

const handleClick = (product) => {
  addToBasket(product)
}


  return (
    <Router>
      <NavBar />
      <Routes>
        <Route>
          <Route path="/" element={ <Home/> }/>
          <Route path="/Products" element={ <Products products={productsList} handleClick={handleClick} /> }/>
          <Route path="/ShoppingBasket" element={<ShoppingBasket basket={basket} handleClick={handleClick}/>} />
          </Route>
      </Routes>
    </Router>
  )

}

export default App;