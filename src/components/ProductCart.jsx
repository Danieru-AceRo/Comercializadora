import React from 'react'

const ProductCart = ({ product, model }) => {
  return (
    <div className="col-sm-6 col-md-4 col-lg-3">
    <div className="box">
      <div className="option_container">
        <div className="options">
          <a href={"https://wa.me/527225686958?text=Me%20interesa%20el%20modelo%20" + product.title} className="option2" target="_blank" rel="noopener noreferrer" >
            Comprar
          </a>
        </div>
      </div>
      <div className="img-box">
        <img src={"images/" + model + product.id +".png"}  alt="" />
      </div>
      <div className="detail-box">
        <h5>{product.title}</h5>
        <h6><strong>Talla: </strong> {product.talla}</h6>
      </div>
    </div>
  </div>
  )
}

export default ProductCart