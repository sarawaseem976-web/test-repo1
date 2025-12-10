import About from "./assets/pages/About";
import Blogs from "./assets/pages/Blogs";
import Home from "./assets/pages/Home";
import Notfound from "./assets/pages/Notfound";
import Layout from "./assets/components/Layout";
import { BrowserRouter, Route, Routes } from "react-router";
import ProductsDetails from "./assets/components/ProductsDetails";
import { createContext, useEffect, useState } from "react";
import Cart from "./assets/pages/Cart";

export const ContextCart = createContext();

function App() {
  let [cart, setCart] = useState(() => {
    let data = localStorage.getItem("cart");
    return JSON.parse(data) || [];
  });

  useEffect(() => {
    if (cart.length > 0) {
      localStorage.setItem("cart", JSON.stringify(cart));
    } else {
      localStorage.removeItem("cart");
    }
  }, [cart]);

  
  return (
    <>
      <ContextCart.Provider value={{ cart, setCart }}>
        <BrowserRouter>
          <Routes>
            <Route element={<Layout />}>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/blogs" element={<Blogs />} />
              <Route path="/products/:id" element={<ProductsDetails />} />
              <Route path="/cart" element={<Cart />} />
            </Route>

            <Route path="*" element={<Notfound />} />
          </Routes>
        </BrowserRouter>
      </ContextCart.Provider>
    </>
  );
}
export default App;
