import React, { useState } from "react";
import products from "./Products";
import { useParams } from "react-router";

function ProductsDetails() {
  let [prods, setProds] = useState(products);
  const { id } = useParams();

  let found = prods.find((items) => items.id == id);

  return (
    <>
      <h2>{found.title}</h2>
    </>
  );
}

export default ProductsDetails;
