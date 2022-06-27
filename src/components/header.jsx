import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="header_section">
      <div className="container">
        <nav className="navbar navbar-expand-lg custom_nav-container ">
          <Link className="navbar-brand" to="/">
            <img width={250} src="images/logo.png" alt="#" />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className=""> </span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link" to="/">
                  Inicio <span className="sr-only">(current)</span>
                </Link>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  data-toggle="dropdown"
                  role="button"
                  aria-haspopup="true"
                  aria-expanded="true"
                >
                  {" "}
                  <span className="nav-label">
                    Seguridad Personal <span className="caret" />
                  </span>
                </a>
                <ul className="dropdown-menu">
                  <Link to="/arneses#product_title">
                    <li>Arnes</li>
                  </Link>

                  <Link to="/audicion#product_title">
                    <li>Audición</li>
                  </Link>
                  <Link to="/calzado#product_title">
                    <li>Calzado</li>
                  </Link>
                  <Link to="/">
                    <li>Guantes</li>
                  </Link>

                  <Link to="/senalamientos">
                    <li>Señalaminetos</li>
                  </Link>
                  <Link to="/uniformes">
                    <li>Uniformes</li>
                  </Link>
                  <Link to="/">
                    <li>Visual y cabeza</li>
                  </Link>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  data-toggle="dropdown"
                  role="button"
                  aria-haspopup="true"
                  aria-expanded="true"
                >
                  {" "}
                  <span className="nav-label">
                    Seguridad VS Incendios <span className="caret" />
                  </span>
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <Link to="/">Bomberos</Link>
                  </li>
                  <li>
                    <Link to="/">Extintores</Link>
                  </li>
                  <li>
                    <Link to="/">Herrajes</Link>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/nosotros">
                  Nosotros
                </Link>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#footer">
                  Contacto
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
