import React from 'react'
import ButtonPrimary from './ButtonPrimary'

const Visual = () => {
    return (
        <div>
        <section className="inner_page_head" id="product_title">
          <div className="container_fuild">
            <div className="row">
              <div className="col-md-12">
                <div className="full">
                  <h3>Visual y Cabeza</h3>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="product_section layout_padding">
          <div className="container">
            {/* <div className="row">
              {products.map((product) => (
                <ProductCart product={product} key={product.id} model={"herraje"} />
              ))}
            </div> */}
          </div>
        </section>
        <section className='my-4'>
          <div className="container text-center">
          <h2>¿No encuentras lo que buscabas? <br /> ¡Descarga nuestro catalogo! Seguro que lo encuentras</h2>
          <ButtonPrimary url="Catalogo audición y visual.pdf" />
          </div>
        </section>
      </div>
      )
}

export default Visual