import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Footer.css";
export default class Footer extends Component {
  render() {
    return (
      <footer className="footer-section">
      <div className="fluid">
      <div className="footer-cta pt-5 pb-5">
          <div className="row">
              <div className="col-xl-4 col-md-4 mb-30">
                  <div className="single-cta">
                      <i className="fas fa-map-marker-alt"></i>
                      <div className="cta-text">
                          <h4>Find us</h4>
                          <span>Rue du lac lochness,
Les Berges du Lac1</span>
                      </div>
                  </div>
              </div>
              <div className="col-xl-4 col-md-4 mb-30">
                  <div className="single-cta">
                      <i className="fas fa-phone"></i>
                      <div className="cta-text">
                          <h4>Call us</h4>
                          <span>+216 55 632 580</span>
                      </div>
                  </div>
              </div>
              <div className="col-xl-4 col-md-4 mb-30">
                  <div className="single-cta">
                      <i className="far fa-envelope-open"></i>
                      <div className="cta-text">
                          <h4>Mail us</h4>
                          <span>urbainFoods@gmail.com</span>
                      </div>
                  </div>
              </div>
          </div>
      </div>
      <div className="footer-content pt-5 pb-5">
          <div className="row">
              <div className="col-xl-4 col-lg-4 mb-50">
                  <div className="footer-widget">
                      <div className="footer-logo">
                          <a href="index.html"/><img src="https://media-cdn.tripadvisor.com/media/photo-p/19/51/1e/d0/urban-food-tacos-pizza.jpg" className="img-fluid" alt="logo"/>
                      </div>
                      <div className="footer-text">
                          <p>Receive all your favorite dishes from Urban Food on our website by quickly booking at the restaurant you have chosen</p>
                      </div>
                     
                  </div>
              </div>
              <div className="col-xl-4 col-lg-4 col-md-6 mb-30">
                  <div className="footer-widget">
                      <div className="footer-widget-heading">
                          <h3>Useful Links</h3>
                      </div>
                      <ul>
                          <Link to="/">
                          <li><a href="#"/> <i class="fas fa-home-heart"></i> Home</li>
                        </Link>
                          <li><a href="#"/><i class="fas fa-eject"></i> About us</li>
                          <Link to="/galery">
                          <li><a href="#"/><i class="fab fa-envira"></i> Galery</li>
                          </Link>
                          <li><a href="#"/><i class="fas fa-phone-volume"></i>Contact us</li>
                          
                      </ul>
                  </div>
              </div>
              <div className="col-xl-4 col-lg-4 col-md-6 mb-50">
                  <div class="footer-widget">
                      <div className="footer-widget-heading">
                          <h3>Subscribe</h3>
                      </div>
                      <div className="footer-text mb-25">
                          <p>Don’t miss to subscribe to our new feeds, kindly fill the form below.</p>
                      </div>
                      <div className="subscribe-form">
                          <form action="#">
                              <input type="text" placeholder="Email Address"/>
                              <button><i className="fab fa-telegram-plane"></i></button>
                          </form>
                      </div>
                     
                  </div>
                  <div className="footer-social-icon">
                          <span>Follow us</span>
                          <div className="image">
                         <img src="https://cdn.pixabay.com/photo/2015/05/17/10/51/facebook-770688_960_720.png" className="facebook" alt=""/>
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/220px-Instagram_logo_2016.svg.png" className="instagram" alt=""/>
                       
                        <img src="data:image/png;base64,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" className="youtube" alt=""/>
                        </div>
                      </div> 
              </div>
              <div className="copyright-text">
                      <p>Copyright &copy; 2020, All Right Reserved </p>
                  </div>
          </div>
      </div>
  </div>
 
  </footer>
    );
  }
}
