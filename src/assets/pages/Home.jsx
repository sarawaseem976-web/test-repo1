import React, { useState } from "react";
import Card from "../components/Card";
import Form from "../components/Form";

function Home() {
  const [show, setShow] = useState(true);
  return (
    <>
      <div className="container">
        {show ? (
          <h2 className="container" id="x">
            Home pages
          </h2>
        ) : null}

        <button onClick={() => setShow(show ? false : true)}>click</button>
        <Card />
        <Form />
      </div>
    </>
  );
}

export default Home;
