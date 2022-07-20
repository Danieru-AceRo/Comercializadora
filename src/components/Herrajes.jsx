import React from 'react'
import ProductCart from './ProductCart';

const products = [
    {
      id: 1,
      title: "Chiflon de 3 pasos",
    },
    {
      id: 2,
      title: "Herraje blindex",
    },
    {
      id: 3,
      title: "Herraje Jacket",
    },
    {
      id: 4,
      title: "Herraje syntec mill hose",
    },
    {
      id: 5,
      title: "Llave universal incendio",
    },
    {
      id: 6,
      title: "Niple Caña",
    },
    {
      id: 7,
      title: "Single Jacket",
    },
    {
      id: 8,
      title: "Soporte de despliegue rápido para manguera",
    },
    {
      id: 9,
      title: "Toma siamesa",
    },
    {
      id: 10,
      title: "Toma siamesa",
    },
    {
      id: 11,
      title: "Valvula globo",
    },
  ];
const Herrajes = () => {
    return (
        <div>
        <section className="inner_page_head" id="product_title">
          <div className="container_fuild">
            <div className="row">
              <div className="col-md-12">
                <div className="full">
                  <h3>Extintores</h3>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="product_section layout_padding">
          <div className="container">
            <div className="row">
              {products.map((product) => (
                <ProductCart product={product} key={product.id} model={"herraje"} />
              ))}
            </div>
          </div>
        </section>
      </div>
      )
}

export default Herrajes