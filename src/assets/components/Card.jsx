import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router";
import { ContextCart } from "../../App";

function Card() {
  const { cart, setCart } = useContext(ContextCart);
  let [prods, setProds] = useState([]);

  console.log(prods);

  const findproducts = async () => {
    const res = await fetch("http://localhost:5000/all");
    const data = await res.json();
    setProds(data);
  };

  useEffect(() => {
    findproducts();
  }, []);

  const handleClick = (p) => {
    const find = cart.find((i) => i._id == p._id);
    
    if (!find) {
      setCart([...cart, p]);
    }
  };

  return (
    <>
      <div className="row">
        {prods.map((item) => (
          <div className="col-md-3" key={item._id}>
            <div className="card m-2">
              <img
                className="card-img-top img-fluid p-3"
                src={item.image}
                alt="Card image cap"
                style={{ height: "250px" }}
              />
              <div className="card-body">
                <Link to={`/products/${item._id}`}>
                  <h6 className="card-title">{item.title}</h6>
                </Link>
                <p className="card-text">{item.price}</p>
                <button
                  className="btn btn-danger"
                  onClick={() => handleClick(item)}
                  disabled={cart.find((i) => i._id == item._id) ? true : false}
                >
                  {cart.find((i) => i._id == item._id)
                    ? "Added"
                    : "Add to cart"}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Card;
