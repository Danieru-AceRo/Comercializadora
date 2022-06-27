import React from "react";
import ProductCart from "./ProductCart";

const products = [
  {
    id: 1,
    title: "Proteccíon Civil",
    price: 50,
    image: "",
  },
  {
    id: 2,
    title: "Combate contra incendios",
    price: 50,
    image: "",
  },
  {
    id: 3,
    title: "Acciones especificas",
    price: 50,
    image: "",
  },
  {
    id: 4,
    title: "Advertencia de peligro",
    price: 50,
    image: "",
  },
  {
    id: 5,
    title: "Protección personal",
    price: 50,
    image: "",
  },
];
const Senalamientos = () => {
  return (
    <div>
      <section className="inner_page_head" id="product_title">
        <div className="container_fuild">
          <div className="row">
            <div className="col-md-12">
              <div className="full">
                <h3>Señalamientos</h3>
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

export default Senalamientos;
