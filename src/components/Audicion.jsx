import React from 'react'
import ProductCart from './ProductCart';

const products = [
    {
      id: 1,
      title: "Tapon Auditivo Reusable",
      price: 50,
      image: "",
    },
    {
      id: 2,
      title: "Tapon Auditivo Herhild",
      price: 50,
      image: "",
    },
    {
      id: 3,
      title: "Orejera Samurai",
      price: 50,
      image: "",
    },
    {
      id: 4,
      title: "Orejera Gladiador",
      price: 50,
      image: "",
    },
    
  ];
const Audicion = () => {
  return (
    <div>
    <section className="inner_page_head" id="product_title">
      <div className="container_fuild">
        <div className="row">
          <div className="col-md-12">
            <div className="full">
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
  )
}

export default Audicion