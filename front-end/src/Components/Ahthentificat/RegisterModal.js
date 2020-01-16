import React, { Component } from "react";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Input,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";

import "./Style.css";
import axios from "axios";

class RegisterModal extends Component {
  constructor() {
    super();
    this.state = {
      img: "",
      name: "",
      specialite: "",
      address: "",
      mail:"",
      password:"",
      ourRestau:[]
    
    };
  }
  componentDidMount = () => {
    this.getRestaurant();
  };

  getRestaurant = () => {
    axios.get("/ProjectRest/restaurant/").then(res =>
      this.setState({
        ourRestau: res.data
      })
    );
  };

  newRestau = nRestaurant => {
    axios
      .post("/ProjectRest/restaurant/", {
        img: nRestaurant.img,
        name:nRestaurant.name,
        specialite:nRestaurant.specialite,
        address:nRestaurant.address,
        mail:nRestaurant.mail,
        password:nRestaurant.password
      })
      .then(this.getRestaurant);
    }
  OnChangeName = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };
 

  render() {
   const {modal,toggle}=this.props
    return (
      <div>
        {/* <button className="addButton" onClick={toggle}> */}
        <button type="button" className=" addButton" onClick={toggle}> 
         Remplir your information about your restaurant
        </button>
        <Modal
          isOpen={modal}
          modalTransition={{ timeout: 700 }}
          backdropTransition={{ timeout: 1300 }}
          toggle={toggle}
        >
          <ModalHeader toggle={toggle}>Menu à ajouter</ModalHeader>
          <ModalBody>
            <span className="register">Image de Restaurant <i class="fas fa-images icon"></i></span>
            <Input
            
              placeholder="enter image menu"
              type="text"
              id="img"
              onChange={this.OnChangeName}
            />
            <span className="register">your mail <i class="fas fa-envelope-open icon"></i></span>
            <Input
              placeholder="enter image menu"
              type="text"
              id="mail"
              onChange={this.OnChangeName}
            />
            <span className="register">Password <i class="fas fa-unlock-alt icon"></i></span>
            <Input
              placeholder="enter image menu"
              type="text"
              id="password"
              onChange={this.OnChangeName}
            />
            <span className="register">Name Restaurant <i class="fal fa-file-signature"></i></span>
            <Input
              placeholder="entrer le plat"
              type="text"
              id="name"
              onChange={this.OnChangeName}
            />
            <span className="register"> Specialité <i class="fad fa-splotch icon"></i></span>
            <Input
              placeholder="enter your speciality"
              type="text"
              id="specialite"
              onChange={this.OnChangeName}
            />
            <span className="register"> Address <i class="fas fa-map-marker-alt icon"></i></span>
            <Input
              placeholder="enter your Address"
              type="text"
              id="address"
              onChange={this.OnChangeName}
            />
           
           
          </ModalBody>
          <ModalFooter>
            <Button
              color="primary"
              onClick={() => {
                this.newRestau(this.state);
                toggle();
              }}
            >
              Save change
            </Button>
            <Button color="secondary" onClick={toggle}>
              Cancel
            </Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default RegisterModal;
