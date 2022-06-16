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
  )
}

export default Audicion