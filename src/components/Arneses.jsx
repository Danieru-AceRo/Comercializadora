import React from "react";
import ProductCart from "./ProductCart";

const products = [
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
    title: "Arnés Future",
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
      <section class="inner_page_head">
        <div class="container_fuild">
          <div class="row">
            <div class="col-md-12">
              <div class="full">
                <h3>Audición</h3>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="product_section layout_padding">
        <div className="container">
          <div className="row">
            {products.map((product) => (
              <ProductCart product={product} key={product.id} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Arneses;