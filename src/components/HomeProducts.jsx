import React from 'react'
import ButtonPrimary from './ButtonPrimary'

const HomeProducts = () => {
  return (
    <section className="why_section layout_padding mb-4">
    <div className="container">
      <div className="heading_container heading_center">
        <h2>Nuestros catálogos</h2>
      </div>
      <div className="row justify-content-center">
        <div className="col-12 col-md-6 col-lg-4 my-3 text-center home-button">
          <h4>Catálogo audición y visual</h4>
          <ButtonPrimary url="Catalogo audición y visual.pdf"/>
        </div>
        <div className="col-12 col-md-6 col-lg-4 my-3 text-center home-button">
          <h4>Guantes</h4>
          <ButtonPrimary url="Catalogo guantes leunam BETA .pdf" />
        </div>
        <div className="col-12 col-md-6 col-lg-4 my-3 text-center home-button">
          <h4>Herrajes</h4>
          <ButtonPrimary url="Herrajes  leunam beta .pdf"/>
        </div>
        <div className="col-12 col-md-6 col-lg-4 my-3 text-center home-button">
          <h4>Ropa industrial y accesorios</h4>
          <ButtonPrimary url="ropa industrial y accesorios leunam   beta.pdf" />
        </div>
        <div className="col-12 col-md-6 col-lg-4 my-3 text-center home-button">
          <h4>Seguridad vial</h4>
          <ButtonPrimary url="seguridad vial leunam.pdf" />
        </div>
        
      </div>
    </div>
  </section>
  )
}

export default HomeProducts