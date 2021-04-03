import React, { Component } from "react";
import "./App.css";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Button from "@material-ui/core/Button";
import axios from "axios";
import GoogleLogin, { GoogleLogout } from "react-google-login";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Avatar from "@material-ui/core/Avatar";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import swal from "sweetalert";
import Nav from "react-bootstrap/Nav";
const PAGE_HOME = "Dashboard";

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      customer: props.customer,
      setcustomer: props.setcustomer,
      setPage: props.setPage,
    };
  }
  signin = (event) => {
    event.preventDefault();
    axios.post("http://localhost:8080/login", this.state).then(
      (posRes) => {
        if (posRes.data.login == "success") {
         window.location.href=`./Dashboard`
   
          
        } else {
          swal({
            title: "Login Fail",
            icon: "warning",
          });
        }
      },
      (errRes) => {}
    );
  };
  getData = (event) => {
    event.preventDefault();

    this.setState({
      [event.target.name]: event.target.value,
    });
   
  };
  googleResponse = (response) => {
    this.props.history.push("/app");
  };
  render() {
    return (
      <div>
         {/* Nav Bar Starts*/}
        <img src={require("./img/logo1.png")} className="img" />
        <Nav.Link
          href="/Home"
          style={{ display: "inline", color: "black", fontSize: 20 }}
        >
          HOME
        </Nav.Link>
      {/* Nav Bar End*/}

       {/* Background image*/}
        <div id="background_image">
          <div class="login-div">
            <div class="logo">
              <img src={require("./img/signin.png")} id="signin_img" />
            </div>
            
       {/* Neumorphic Login form*/}
            <div class="title">Welcome Back</div>
            <div class="sub-title">
              Enter Your login details to access your account
            </div>
            <div class="fields">
              {/* User Name Field*/}
              <div class="username">
                <svg class="svg-icon" viewBox="0 0 20 20">
                  <path d="M17.388,4.751H2.613c-0.213,0-0.389,0.175-0.389,0.389v9.72c0,0.216,0.175,0.389,0.389,0.389h14.775c0.214,0,0.389-0.173,0.389-0.389v-9.72C17.776,4.926,17.602,4.751,17.388,4.751 M16.448,5.53L10,11.984L3.552,5.53H16.448zM3.002,6.081l3.921,3.925l-3.921,3.925V6.081z M3.56,14.471l3.914-3.916l2.253,2.253c0.153,0.153,0.395,0.153,0.548,0l2.253-2.253l3.913,3.916H3.56z M16.999,13.931l-3.921-3.925l3.921-3.925V13.931z"></path>
                </svg>
                <input
                  type="username"
                  name="email"
                  placeholder="Enter your email"
                  onChange={this.getData}
                  autoComplete="off"
                />
              </div>

              {/* Password Field*/}
              <div class="password">
                <svg class="svg-icon" viewBox="0 0 20 20">
                  <path d="M10,6.978c-1.666,0-3.022,1.356-3.022,3.022S8.334,13.022,10,13.022s3.022-1.356,3.022-3.022S11.666,6.978,10,6.978M10,12.267c-1.25,0-2.267-1.017-2.267-2.267c0-1.25,1.016-2.267,2.267-2.267c1.251,0,2.267,1.016,2.267,2.267C12.267,11.25,11.251,12.267,10,12.267 M18.391,9.733l-1.624-1.639C14.966,6.279,12.563,5.278,10,5.278S5.034,6.279,3.234,8.094L1.609,9.733c-0.146,0.147-0.146,0.386,0,0.533l1.625,1.639c1.8,1.815,4.203,2.816,6.766,2.816s4.966-1.001,6.767-2.816l1.624-1.639C18.536,10.119,18.536,9.881,18.391,9.733 M16.229,11.373c-1.656,1.672-3.868,2.594-6.229,2.594s-4.573-0.922-6.23-2.594L2.41,10l1.36-1.374C5.427,6.955,7.639,6.033,10,6.033s4.573,0.922,6.229,2.593L17.59,10L16.229,11.373z"></path>
                </svg>
                <input
                  type="password"
                  name="password"
                  placeholder="Enter your password"
                  onChange={this.getData}
                  autoComplete="off"
                />
              </div>
            </div>

            {/* Login Button*/}
            <button class="signin-button" onClick={this.signin}>
              Login
            </button>
            <div class="link">
              <p>---- Signin With ----</p>
              {/* Login Button*/}
              <div style={{ marginTop: -20, marginLeft: -20 }}>
                <img src={require("./img/twitter.jpg")} id="img" />
                <img src={require("./img/facebook.png")} id="img" />
                <img src={require("./img/google.png")} id="img" />
              </div>

              <p style={{ marginLeft: -280 }}>
                <img
                  src={require("./img/lock.png")}
                  style={{ marginLeft: 50 }}
                  id="img"
                />
                <div
                  style={{
                    marginTop: -35,
                    marginLeft: 135,
                    fontWeight: "bold",
                    fontSize: 15,
                  }}
                >
                  Login
                </div>
                <img
                  src={require("./img/line.png")}
                  style={{
                    marginLeft: 320,
                    marginTop: -60,
                    width: 10,
                    height: 40,
                  }}
                />
                <img
                  src={require("./img/user.png")}
                  style={{
                    height: 40,
                    width: 40,
                    marginTop: -50,
                    marginLeft: 20,
                  }}
                />
                <div
                  style={{
                    marginTop: -45,
                    marginLeft: 470,
                    fontWeight: "bold",
                    fontSize: 15,
                  }}
                >
                  Register
                </div>
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Login;
