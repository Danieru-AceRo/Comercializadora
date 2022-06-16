import React from "react";
import ProductCart from "./ProductCart";

const products = [
  {
    id: 1,
    title: "Overall de algodón",
    price: 50,
    image: "",
  },
  {
    id: 2,
    title: "Overall Desechable",
    price: 50,
    image: "",
  },
  {
    id: 3,
    title: "Conjunto de camisola y pantalón de algodón",
    price: 50,
    image: "",
  },
  {
    id: 4,
    title: "Faja Pesista",
    price: 50,
    image: "",
  },
  {
    id: 5,
    title: "Faja Elástica con tirantes",
    price: 50,
    image: "",
  },
];
const Uniformes = () => {
  return (
    <div>
      <section class="inner_page_head">
        <div class="container_fuild">
          <div class="row">
            <div class="col-md-12">
              <div class="full">
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

export default Uniformes;
