import React from 'react'
import ProductCart from './ProductCart'

const products = [
    {
        "id": 18,
        "title": "Traje de bombero",
      },
]

const Bombero = () => {
  return (
    <div>
    <section className="inner_page_head" id="product_title">
      <div className="container_fuild">
        <div className="row">
          <div className="col-md-12">
            <div className="full">
              <h3>Bomberos</h3>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className="product_section layout_padding">
      <div className="container">
        <div className="row">
          {products.map((product) => (
            <ProductCart product={product} key={product.id} model={"BOMBEROS"} />
          ))}
        </div>
      </div>
    </section>
  </div>
  )
}

export default Bombero