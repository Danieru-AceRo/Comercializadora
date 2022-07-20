import React from 'react'
import ProductCart from './ProductCart';

const products = [
    {
      id: 1,
      title: "Extintor clase",
    },
    {
      id: 2,
      title: "Extintor hfc 236",
    },
    {
      id: 3,
      title: "Extintor afff espuma",
    },
    {
      id: 4,
      title: "Extintor automotriz",
    },
    {
      id: 5,
      title: "Extintor CO2 tipo c con ul",
    },
    {
      id: 6,
      title: "Extintor CO2 tipo c con ul",
    },
    {
      id: 7,
      title: "Extintor CO2 tipo halotron con ul",
    },
    {
      id: 8,
      title: "Extintor tipo k con ul",
    },
    {
      id: 9,
      title: "Extintor línea industrial",
    },
    {
      id: 10,
      title: "Extintor Movil",
    },
    {
      id: 11,
      title: "Extintor pqs tipo abc con ui",
    },
  ];
const Extinrores = () => {
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
                <ProductCart product={product} key={product.id} model={"extintor"} />
              ))}
            </div>
          </div>
        </section>
      </div>
      )
}

export default Extinrores