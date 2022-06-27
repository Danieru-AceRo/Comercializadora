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
      <section className="inner_page_head" id="product_title">
        <div className="container_fuild">
          <div className="row">
            <div className="col-md-12">
              <div className="full">
                <h3>Uniformes</h3>
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
