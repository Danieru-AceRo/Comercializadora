import React from "react";

const Footer = () => {
    return(
        <footer class="footer_section" id="footer">
        <div class="container">
           <div class="row">
              <div class="col-md-4 footer-col">
                 <div class="footer_contact">
                    <h4>
                       Reach at..
                    </h4>
                    <div class="contact_link_box">
                       <a href="">
                       <i class="fa fa-map-marker" aria-hidden="true"></i>
                       <span>
                       Location
                       </span>
                       </a>
                       <a href="">
                       <i class="fa fa-phone" aria-hidden="true"></i>
                       <span>
                       Call +01 1234567890
                       </span>
                       </a>
                       <a href="">
                       <i class="fa fa-envelope" aria-hidden="true"></i>
                       <span>
                       demo@gmail.com
                       </span>
                       </a>
                    </div>
                 </div>
              </div>
              <div class="col-md-4 footer-col">
                 <div class="footer_detail">
                    <h4>
                       Síguenos
                    </h4>
                    <div class="footer_social">
                       <a href="">
                       <i class="fa fa-facebook" aria-hidden="true"></i>
                       </a>
                       <a href="">
                       <i class="fa fa-twitter" aria-hidden="true"></i>
                       </a>
                       <a href="">
                       <i class="fa fa-linkedin" aria-hidden="true"></i>
                       </a>
                       <a href="">
                       <i class="fa fa-instagram" aria-hidden="true"></i>
                       </a>
                       <a href="">
                       <i class="fa fa-pinterest" aria-hidden="true"></i>
                       </a>
                    </div>
                 </div>
              </div>
              <div class="col-md-4 footer-col">
                 <div class="map_container">
                    <div class="map">
                       <div id="googleMap"></div>
                    </div>
                 </div>
              </div>
           </div>
           <div class="footer-info">
              <div class="col-lg-7 mx-auto px-0">
                 <p>
                    &copy; <span id="displayYear"></span> All Rights Reserved By
                 </p>
              </div>
           </div>
        </div>
     </footer>
    );
}

export default Footer