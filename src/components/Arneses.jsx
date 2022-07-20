import React from "react";
import ProductCart from "./ProductCart";

const products = [
  {
    id: 1,
    title: "Arnés de sujeción",
    price: 50,
    image: "",
  },
  {
    id: 2,
    title: "Arnés Weld Tek",
    price: 50,
    image: "",
  },
  {
    id: 3,
    title: "Arnés Anti-caídas",
    price: 50,
    image: "",
  },
  {
    id: 4,
    title: "Arnés Anti-caídas",
    price: 50,
    image: "",
  },
  {
    id: 4,
    title: "Arnés Industrial sujeción",
    price: 50,
    image: "",
  },
  {
    id: 5,
    title: "Arnés Deportivo",
    price: 50,
    image: "",
  },
  {
    id: 6,
    title: "Arnés De pecho",
    price: 50,
    image: "",
  },
  
];

const Arneses = () => {
  return (
    <div>
      <section className="inner_page_head">
        <div className="container_fuild">
          <div className="row">
            <div className="col-md-12">
              <div className="full">
                <h3>Arneses</h3>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="product_section layout_padding" >
        <div className="container">
          <div className="row">
            {products.map((product) => (
              <ProductCart product={product} key={product.id} model={"ARNES"} size={product.talla}/>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Arneses;
