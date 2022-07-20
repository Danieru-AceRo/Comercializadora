import React from 'react'
import ProductCart from './ProductCart';

const products = [
    {
        "id": 1,
        "title": "Guantes de nitrilo",
      },
      {
        "id": 2,
        "title": "Guantes de nitrilo desechable",
      },
      {
        "id": 3,
        "title": "Guantes de latex desechable",
      },
      {
        "id": 4,
        "title": "Guantes Japoneses",
      },
      {
        "id": 5,
        "title": "Guantes soldador rojo",
      },
      {
        "id": 6,
        "title": "Guantes carnaza largo",
      },
      {
        "id": 7,
        "title": " Manga de carnaza mediano",
      },
      {
        "id": 8,
        "title": "Guantes tipo piel electricista",
      },
      {
        "id": 9,
        "title": "Guantes de punto PVC",
      },
      {
        "id": 10,
        "title": "Guante de lona con nitrilo ",
      },
      {
        "id": 11,
        "title": "Guante monstruo ",
      },
      {
        "id": 12,
        "title": "Guante argonero con elastano ",
      },
      {
        "id": 13,
        "title": "Manga Kevlar"
      },
      {
        "id": 14,
        "title": "Guante argonero con cintilla",
      },
      
      
]

const Guantes = () => {
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
                  <ProductCart product={product} key={product.id} model={"guante "} />
                ))}
              </div>
            </div>
          </section>
        </div>
      );
}

export default Guantes