import React, { Component } from "react";
import axios from "axios";
import classnames from "classnames";
import { BrowserRouter as Router, Link, Redirect } from "react-router-dom";
import RegisterModal from "./RegisterModal";
class Register extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      email: "",
      password: "",
      role: "",
      errors: {},
      auth: false,
      modal:false
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }
  toggle=()=>{
  if(this.state.role=="owner"){
    this.setState({modal:!this.state.modal})
}
}

  onSubmit(e) {
    e.preventDefault();

    const newUser = {
      name: this.state.name,
      email: this.state.email,
      password: this.state.password,
      role: this.state.role
    };
    if (
      this.state.name === "" ||
      this.state.email === "" ||
      this.state.password === ""
    ) {
      return alert("champ vide");
    } else {
      this.setState({ auth: true });
    }

    axios
      .post("/api/users/register", newUser)
      .then(res => console.log(res.data))
      .catch(err => this.setState({ errors: err.response.data }));
    // localStorage.setItem("token", res.data.auth.access_token);
  }

  render() {
    const { errors } = this.state;

    if (this.state.auth && this.state.role === "customer") {
      return <Redirect to="/reservation" />;
    } else if (this.state.auth && this.state.role === "owner") {
      return <Redirect to="/calendar" />;
    }
    return (
      <div className="register">
        <div className="container">
          <div className="row">
            <div className="col-md-8 m-auto">
              <h1 className="display-4 text-center Create-account"> <i className="fas fa-envelope-open-text lettre"></i> Sign Up</h1>
              <h3 className="lead font-serif italic text-orange-600 font-bold  Times New Roman text-center account" >Create a account</h3>
              <form noValidate onSubmit={this.onSubmit}>
                <div className="form-group">
                  <input
                    type="text"
                    className={classnames("form-controltext-gray-700  form-control-lg", {
                      "is-invalid": errors.name
                    })}
                    placeholder="Name"
                    name="name"
                    value={this.state.name}
                    onChange={this.onChange}
                  />
                  {errors.name && (
                    <div className="invalid-feedback">{errors.name}</div>
                  )}
                </div>
                <div className="form-group">
                  <input
                    type="email"
                    className={classnames("form-control text-gray-700  form-control-lg", {
                      "is-invalid": errors.email
                    })}
                    placeholder="Email Address"
                    name="email"
                    value={this.state.email}
                    onChange={this.onChange}
                  />
                  {errors.email && (
                    <div className="invalid-feedback">{errors.email}</div>
                  )}
                  {/* <small className="form-text text-muted">
                    This site uses Gravatar so if you want a profile image, use
                    a Gravatar email
                  </small> */}
                </div>
                <div className="form-group">
                  <input
                    type="password"
                    className={classnames("block text-gray-700 text-sm font-bold mb-2" , {
                      "is-invalid": errors.password
                    })}
                    placeholder="Password"
                    name="password"
                    value={this.state.password}
                    onChange={this.onChange}
                  />
                  {errors.password && (
                    <div className="invalid-feedback">{errors.password}</div>
                  )}
                </div>
                <div className="form-group">
                  {/* <input
                    type="tse"
                    className={classnames("form-control form-control-lg", {
                      "is-invalid": errors.password
                    })}
                    placeholder="role"
                    name="role"
                    value={this.state.role}
                    onChange={this.onChange}
                  /> */}
                  <select class="text-green-700  bg-white font-serif italic  Times New Roman text font-bold py-2 px-4"
                    name="role"
                    form="carform"
                   
                    value={this.state.role}
                    onChange={this.onChange}

                  >
                    <option  selected>your role</option>
                    <option value="customer" class="text-blue-900  bg-orange-300 font-serif italic  Times New Roman text font-bold py-2 px-4 ">customer</option>
                    <option value="owner" class="text-blue-900  bg-orange-300 font-serif italic  Times New Roman text font-bold py-2 px-4 ">owner</option>
                  </select>

                  {/* {errors.password && (
                    <div className="invalid-feedback">{errors.password}</div>
                  )} */}
                </div>
{/* {this.state.role=="customer"?<Link to="/reservation"> */}
                <button type="submit" class="bg-blue-500 hover:bg-blue-700 text-white font-serif italic  Times New Roman text font-bold py-2 px-4 rounded-full">
                  Submit
                </button>
              {/* </Link>:null} */}
                <button type="submit" class="bg-blue-200 text-white hover:bg-blue-300 ml-8  font-serif italic Times New Roman text font-bold py-2 px-4 rounded-full">
                  <Link to="/login"> Have an Account?</Link>
                </button>
              
              </form>
             
            </div>
          
          </div>
        </div>
        {this.state.role=="owner"?<RegisterModal modal={this.state.modal} toggle={this.toggle}/>:null}
      </div>
    );
  }
}

export default Register;
