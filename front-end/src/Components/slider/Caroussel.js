import React, { Component } from "react";
import { Carousel } from "react-bootstrap";
import "./Caroussel.css";

class Caroussel extends Component {
  render() {
    return (
      <div>
        <Carousel className="caroussel">
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="http://sushiwan.net/skin/frontend/default/theme313k/images/holder_reservation_restaurant_sushiwan_la_marsa_tunis_sushi_Traiteur_Restaurant_livraison.jpg"
              alt="First slide"
            />

          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://www.qthotels.com/sydney-cbd/wp-content/uploads/sites/91/2018/07/QTS-Venue-Gowings-Restaurant-2080x1120.jpg"
              alt="Third slide"
            />

            
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="http://www.thegigglepitt.com/wp-content/uploads/2019/09/csm_restaurant-img-02_d666f4932c.jpg"
              alt="Third slide"
            />
{/* 
            <Carousel.Caption>
              <div className="test">
                <h2>Food Funday</h2>
              </div>
            </Carousel.Caption> */}
          </Carousel.Item>
        </Carousel>
      </div>
    );
  }
}

export default Caroussel;
