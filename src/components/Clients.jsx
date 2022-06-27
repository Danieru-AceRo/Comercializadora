import React, { Component } from 'react'
const clientImage = require('../images/client.jpg')

export class Clients extends Component {
  render() {
    return (
        <section className="client_section layout_padding mb-4">
        <div className="container">
          <div className="heading_container heading_center">
            <h2>Clientes</h2>
          </div>
          <div
            id="carouselExample3Controls"
            className="carousel slide"
            data-ride="carousel"
          >
            <div className="carousel-inner">
              <div className="carousel-item active">
                <div className="box col-lg-10 mx-auto">
                  <div className="img_container">
                    <div className="img-box">
                      <div className="img_box-inner">
                        <img src="images/customers/sabritas.jpg" alt="" />
                      </div>
                    </div>
                  </div>
                  <div className="detail-box">
                    <h5>Sabritas</h5>
                  </div>
                </div>
              </div>
              <div className="carousel-item">
                <div className="box col-lg-10 mx-auto">
                  <div className="img_container">
                    <div className="img-box">
                      <div className="img_box-inner">
                        <img src="images/customers/pepsico.jpg" alt="" />
                      </div>
                    </div>
                  </div>
                  <div className="detail-box">
                    <h5>PepsiCo</h5>
                  </div>
                </div>
              </div>
              <div className="carousel-item">
                <div className="box col-lg-10 mx-auto">
                  <div className="img_container">
                    <div className="img-box">
                      <div className="img_box-inner">
                        <img src="images/customers/gamesa.png" alt="" />
                      </div>
                    </div>
                  </div>
                  <div className="detail-box">
                    <h5>Gamesa</h5>
                  </div>
                </div>
              </div>
              <div className="carousel-item">
                <div className="box col-lg-10 mx-auto">
                  <div className="img_container">
                    <div className="img-box">
                      <div className="img_box-inner">
                        <img src="images/customers/bienestar.jpg" alt="" />
                      </div>
                    </div>
                  </div>
                  <div className="detail-box">
                    <h5>Banco Bienestar</h5>
                  </div>
                </div>
              </div>
              <div className="carousel-item">
                <div className="box col-lg-10 mx-auto">
                  <div className="img_container">
                    <div className="img-box">
                      <div className="img_box-inner">
                        <img src="images/customers/ibero.png" alt="" />
                      </div>
                    </div>
                  </div>
                  <div className="detail-box">
                    <h5>Universidad Iberoamericana</h5>
                  </div>
                </div>
              </div>
            </div>
            <div className="carousel_btn_box">
              <a
                className="carousel-control-prev"
                href="#carouselExample3Controls"
                role="button"
                data-slide="prev"
              >
                <i className="fa fa-long-arrow-left" aria-hidden="true" />
                <span className="sr-only">Previous</span>
              </a>
              <a
                className="carousel-control-next"
                href="#carouselExample3Controls"
                role="button"
                data-slide="next"
              >
                <i className="fa fa-long-arrow-right" aria-hidden="true" />
                <span className="sr-only">Next</span>
              </a>
            </div>
          </div>
        </div>
      </section>
      
    )
  }
}

export default Clients