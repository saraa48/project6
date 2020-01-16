import "./CardStyle.css";
import { Link } from "react-router-dom";
import Update from "./Update";
import {NavLink} from "react-router-dom"
import {  Button } from 'antd';
import React, { Component } from "react";

class CardRestaurant extends Component {
  render() {
    const { restaurant, deleteRestaurant, getRestaurant} = this.props;
    return (
      <div>
        <figure className="snip1256">
          <img src={restaurant.img} alt="sample42" />
          <figcaption>
            <h3 className="nameRest">{restaurant.name}</h3>
            <p className="Specialité"><i className="fas fa-sparkles sticker"></i>{restaurant.specialite}</p>
            <p className="Specialité"><i class="fas fa-map-marker-alt"></i>{restaurant.address}</p>


            <div className="btn-card">
            
              {/* <button
                className=" btn btn-danger"
                onClick={() => deleteRestaurant(restaurant._id)}
              >
                Supprimer
              </button> */}
              <Link to={`/menu/${restaurant._id}`}>
              <button type="button" class="btn btn-warning">Voir Menu</button>
              </Link>
             
            
            
{/*         
                 
        <Link to="/register">
        <button type="button" class="btn btn-outline-warning">Make A Reservation</button>
              </Link> */}
        
           
              {/* {/* <Update getRestaurant={getRestaurant} restaurant={restaurant} /> */}
            </div> 
          </figcaption>
        </figure>
      </div>
    );
  }
}
export default CardRestaurant;
