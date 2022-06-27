import React from "react";

const Footer = () => {
  return (
    <footer class="footer_section" id="footer">
      <div class="container">
        <div class="row">
          <div class="col-md-6 footer-col">
            <div class="footer_contact">
              <h4>Contáctanos en:</h4>
              <div class="contact_link_box">
                <a href="">
                  <i class="fa fa-map-marker" aria-hidden="true"></i>
                  <span>Ubicación</span>
                </a>
                <a href="tel:5588709749">
                  <i class="fa fa-phone" aria-hidden="true"></i>
                  <span>55-88-70-97-49</span>
                </a>
                <a href="tel:5567320648">
                  <i class="fa fa-phone" aria-hidden="true"></i>
                  <span>55-67-32-06-48</span>
                </a>
                <a href="tel:5537537557">
                  <i class="fa fa-phone" aria-hidden="true"></i>
                  <span>55-3753-7557</span>
                </a>
                <a href="mailto:sistequip2@hotmail.com">
                  <i class="fa fa-envelope" aria-hidden="true"></i>
                  <span>sistequip2@hotmail.com</span>
                </a>
                <a href="mailto:manuel981130@yahoo.com.mx">
                  <i class="fa fa-envelope" aria-hidden="true"></i>
                  <span>manuel981130@yahoo.com.mx</span>
                </a>
              </div>
            </div>
          </div>
          <div class="col-md-2 footer-col">
            <div class="footer_detail">
              <h4>Síguenos</h4>
              <div class="footer_social">
                <a href="">
                  <i class="fa fa-facebook" aria-hidden="true"></i>
                </a>
                <a href="">
                  <i class="fa fa-instagram" aria-hidden="true"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div class="footer-info">
          <div class="col-lg-7 mx-auto px-0">
            <p>
              &copy; <span id="displayYear"></span> All Rights Reserved By PRODUCTOS INDUSTRIALES Y EPP LEUNAM
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
