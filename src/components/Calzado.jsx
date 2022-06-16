import React from 'react'
import ProductCart from './ProductCart';

const products = [
    {
      id: 1,
      title: "Zapato Vanvien con Casquillo",
      price: 50,
      image: "",
    },
    {
      id: 2,
      title: "Zapato Vanvien",
      price: 50,
      image: "",
    },
    
  ];

const Calzado = () => {
  return (
    <div>
    <section class="inner_page_head">
      <div class="container_fuild">
        <div class="row">
          <div class="col-md-12">
            <div class="full">
              <h3>Calzado</h3>
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

export default Calzado