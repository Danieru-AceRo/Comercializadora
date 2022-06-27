import React from "react";

const Slider = () => {
    return(
        <section className="slider_section ">
        <div className="slider_bg_box"></div>
        <div id="customCarousel1" className="carousel slide" data-ride="carousel">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <div className="container ">
                <div className="row">
                  <div className="col ">
                    <div className="detail-box">
                      <h1>
                        <span>Comercializadora</span>
                        <br />
                        LEUNAM
                      </h1>
                      <p>
                        Somos una comercializadora que cuenta con el mejor equipo de proteccion personal y protección contra incendios 
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="carousel-item ">
              <div className="container ">
                <div className="row">
                  <div className="col-md-7 col-lg-6 ">
                    <div className="detail-box">
                      <h1>
                        <span>Equipo de</span>
                        <br />
                        Proteccion Personal
                      </h1>
                      <p>
                        Nuestro equipo de protección personal garantiza la seguridad al realizar tareas de alto riesgo. <br />
                        Contamos con diferentes accesorios como: arneses, calzado, guantes, etc.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <div className="container ">
                <div className="row">
                  <div className="col-md-7 col-lg-6 ">
                    <div className="detail-box">
                      <h1>
                        <span>Seguridad VS</span>
                        <br />
                        Incendios
                      </h1>
                      <p>
                        Nuestros sofosticado equipo contra incendios proporciona el soporte necesesario para convatir un siniestro que qu se pueda precentar. <br />
                        Contamos con: Equipo de bomberos, extintores y herrajes
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="container">
            <ol className="carousel-indicators">
              <li
                data-target="#customCarousel1"
                data-slide-to={0}
                className="active"
              />
              <li data-target="#customCarousel1" data-slide-to={1} />
              <li data-target="#customCarousel1" data-slide-to={2} />
            </ol>
          </div>
        </div>
      </section>
    );
}

export default Slider