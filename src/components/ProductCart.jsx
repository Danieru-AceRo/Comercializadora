import React from 'react'

const ProductCart = ({ product }) => {
  return (
    <div className="col-sm-6 col-md-4 col-lg-3">
    <div className="box">
      <div className="option_container">
        <div className="options">
          <a href="" className="option2">
            Comprar
          </a>
        </div>
      </div>
      <div className="img-box">
        <img src="images/p7.png" alt="" />
      </div>
      <div className="detail-box">
        <h5>{product.title}</h5>
        <h6>${product.price}</h6>
      </div>
    </div>
  </div>
  )
}

export default ProductCart