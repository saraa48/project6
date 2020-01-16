import React, { Component } from "react";
import "../Css/Style.css";
// import AddMenu from "../AddMenu";
// import Navebar from "../navbar/Navebar";
// import Update from "../Restaurants/Update";
import UpdateMenu from "./UpdateMenu";
class CardMenu extends Component {
  state = {
    modal: false
  };

  //  toggle=()=>this.setState({modal:!this.state.modal});
  render() {
    const { menu, deleteMenu, modifyMenu } = this.props;
    return (
      
        <div className=" our-Menu">
          <img src={menu.img} className="nos-plats" alt="..." />
          <h1 className="plat"><i class="fad fa-utensils-alt" ></i> {menu.plat}</h1>
          <p className="description">{menu.description}</p>
          <h2 className="price">  <i class="far fa-money-bill-wave-alt"></i> Price: {menu.price}</h2>
          <h2>Type:{menu.type}</h2>
          {/* <button
            type="button"
            class="btn btn-outline-danger"
            onClick={() => deleteMenu(menu._id)}
          >
            Delete
          </button>

          <UpdateMenu menu={menu} modifyMenu={modifyMenu} /> */}

       
        </div>
     
    );
  }
}

export default CardMenu;
